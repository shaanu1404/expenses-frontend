import { useState, useEffect } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import FigmaLogo from '../assets/images/figma.png'
import Alert from '../components/ui-components/Alert'
import { useAuth } from '../contexts/authContext'
import Divider from '../components/ui-components/Divider'

function Register() {
  const [message, setMessage] = useState({ message: '', type: '' })
  const { register } = useAuth()

  const { values, touched, errors, isSubmitting, handleSubmit, handleBlur, handleChange } = useFormik({
    initialValues: {
      name: '',
      username: '',
      email: '',
      password: ''
    },
    validationSchema: Yup.object().shape({
      name: Yup.string().required('Fullname is required'),
      username: Yup.string().required('Username is required'),
      email: Yup.string().required('Email address is required')
        .email("Email address is invalid"),
      password: Yup.string().required('Password is required'),
    }),
    onSubmit: async (values, { setSubmitting }) => {
      const [message, error] = await register(values)
      if (error) {
        setMessage({ message: error, type: 'danger' })
      } else {
        setMessage({ message: message, type: 'success' })
      }
      setSubmitting(false)
    }
  })

  useEffect(() => {
    let timeout;
    if (message.message) {
      timeout = setTimeout(() => setMessage({ message: '', type: '' }), 3000)
    }

    return () => {
      clearTimeout(timeout)
    }
  }, [message.message])

  return (
    <section className='pt-16 pb-8'>
      <img src={FigmaLogo} alt="Logo" className='w-14 mx-auto mb-8' />

      {message.message && (
        <div className='w-96 mx-auto mb-4'>
          <Alert type={message.type}>{message.message}</Alert>
        </div>
      )}

      <div className='w-96 mx-auto border border-gray-600 rounded-lg p-6 bg-gray-800'>
        <h1 className='text-xl text-white font-semibold'>Sign up</h1>
        <Divider />
        <form onSubmit={handleSubmit}>
          <div className='mt-2'>
            <label htmlFor="name" className='block mb-1 text-gray-200 text-sm'>Fullname</label>
            <input type="text"
              id='name'
              name='name'
              className='w-full border border-gray-700/60 bg-gray-800 text-white px-3 py-2 rounded focus:outline-none focus:border-blue-400 placeholder:text-gray-600 placeholder:text-sm'
              placeholder='Your name'
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.name && errors.name && <p className='text-xs text-red-500 mt-0.5'>{errors.name}</p>}
          </div>
          <div className='mt-2'>
            <label htmlFor="username" className='block mb-1 text-gray-200 text-sm'>Username</label>
            <input type="text"
              id='username'
              name='username'
              className='w-full border border-gray-700/60 bg-gray-800 text-white px-3 py-2 rounded focus:outline-none focus:border-blue-400 placeholder:text-gray-600 placeholder:text-sm'
              placeholder='Username'
              value={values.username}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.username && errors.username && <p className='text-xs text-red-500 mt-0.5'>{errors.username}</p>}
          </div>
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
            {isSubmitting && <FontAwesomeIcon icon={faCircleNotch} spin className='mr-2' />} Signup
          </button>
        </form>
      </div>
      <p className='w-96 mx-auto mt-3 text-gray-400 text-center'>
        Already a user? <Link to="/login" className='text-blue-600 hover:underline'>Signin here</Link>.
      </p>
    </section>
  )
}

export default Register