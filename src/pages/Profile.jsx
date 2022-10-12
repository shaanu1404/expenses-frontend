import React from 'react'
import ProfileHeader from '../components/profile/ProfileHeader'
import Input from '../components/ui-components/Input'
import Row from '../components/ui-components/Row'
import Column from '../components/ui-components/Column'

function Profile() {
  return (
    <React.Fragment>
      <ProfileHeader />
      <div className='mt-4 flex items-start'>
        <div className='flex-1 pr-4 border-r border-gray-200/10'>
          <h4 className='text-lg text-blue-400 mb-5'>About</h4>
          <ProfileForm />
        </div>
        <div className='w-56 pl-4'>
          <h4 className='text-lg text-blue-400 mb-5'>Links</h4>
        </div>
      </div>
    </React.Fragment>
  )
}

function ProfileForm(props) {
  return (
    <form>
      <Row className="mb-3">
        <Column size={4}>
          <label htmlFor="">Username</label>
        </Column>
        <Column size={8}>
          <Input name="username" placeholder="Username" disabled />
        </Column>
      </Row>
      <Row className='mb-4'>
        <Column size={4}>
          <label htmlFor="">Profile</label>
        </Column>
        <Column size={8}>
          <Input type="file" name="profile" placeholder="Username" />
        </Column>
      </Row>
      <Row className='mb-4'>
        <Column size={4}>
          <label htmlFor="">Date of birth</label>
        </Column>
        <Column size={8}>
          <Input type="date" name="dob" placeholder="Date of Birth" />
        </Column>
      </Row>
    </form>
  )
}

export default Profile