import { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons'
import { useAuth } from '../contexts/authContext'
import FigmaLogo from '../assets/images/figma.png'
import Alert from '../components/ui-components/Alert'
import { Link } from 'react-router-dom'
import Divider from '../components/ui-components/Divider'

function Login() {
  const { login } = useAuth()
  const [error, setError] = useState('')

  const { values, touched, errors, isSubmitting, handleSubmit, handleBlur, handleChange } = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().required('Email address is required').email("Email address is invalid"),
      password: Yup.string().required('Password is required'),
    }),
    onSubmit: async (values, { setSubmitting }) => {
      const { email, password } = values
      const error = await login(email, password)
      if (error) setError(error)
      setSubmitting(false)
    }
  })

  useEffect(() => {
    let timeout;
    if (error) {
      timeout = setTimeout(() => setError(''), 3000)
    }

    return () => {
      clearTimeout(timeout)
    }
  }, [error])

  return (
    <section className='pt-16 pb-8'>
      <img src={FigmaLogo} alt="Logo" className='w-14 mx-auto mb-8' />

      {error && (
        <div className='w-96 mx-auto mb-4'>
          <Alert>{error}</Alert>
        </div>
      )}

      <div className='w-96 mx-auto border border-gray-600 rounded-lg p-6 bg-gray-800'>
        <h1 className='text-xl text-white font-semibold'>Sign in</h1>
        <Divider />
        <form onSubmit={handleSubmit}>
          <div className='mt-2'>
            <label htmlFor="email" className='block mb-1 text-gray-200 text-sm'>Email address</label>
            <input type="email"
              id='email'
              name='email'
              className='w-full border border-gray-700/60 bg-gray-800 text-white px-3 py-2 rounded focus:outline-none focus:border-blue-400 placeholder:text-gray-600 placeholder:text-sm'
              placeholder='Email address'
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.email && errors.email && <p className='text-xs text-red-500 mt-0.5'>{errors.email}</p>}
          </div>
          <div className='mt-2'>
            <label htmlFor="password" className='block mb-1 text-gray-200 text-sm'>Password</label>
            <input type="password"
              id='password'
              name='password'
              className='w-full border border-gray-700/60 bg-gray-800 text-white px-3 py-2 rounded focus:outline-none focus:border-blue-400 placeholder:text-gray-600 placeholder:text-sm'
              placeholder='********'
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.password && errors.password && <p className='text-xs text-red-500 mt-0.5'>{errors.password}</p>}
          </div>
          <button type='submit'
            className='w-full bg-blue-800 py-2 mt-4 rounded text-blue-100 outline-none hover:bg-blue-900 focus:bg-blue-900 text-center disabled:bg-blue-500'
            disabled={isSubmitting}>
            {isSubmitting && <FontAwesomeIcon icon={faCircleNotch} spin className='mr-2' />} Signin
          </button>
        </form>
      </div>
      <p className='w-96 mx-auto mt-3 text-gray-400 text-center'>
        Not a user? <Link to="/register" className='text-blue-600 hover:underline'>Signup here</Link>.
      </p>
    </section>
  )
}

export default Login