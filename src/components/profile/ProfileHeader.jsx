import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { useAuth } from '../../contexts/authContext'
import { useModal } from '../../contexts/modalContext'
import UploadCoverModal from './UploadCoverModal'

const ProfileHeader = () => {
    const { userDetail: { name } } = useAuth()
    const { showModal } = useModal()

    const handleCoverEdit = () => {
        showModal({
            title: 'Edit cover',
            size: "md",
            body: <UploadCoverModal />,
            closeWithBackdrop: false
        })
    }

    return (
        <div className='w-full bg-gray-600 h-48 mb-24 rounded-xl relative'>
            <img className='w-full h-full object-cover rounded-xl'
                src="https://timelinecovers.pro/facebook-cover/download/stunning-little-flowers-facebook-cover.jpg" alt="" />
            <div className='w-32 h-32 rounded-full absolute -bottom-20 left-4 border-4 border-white overflow-hidden'>
                <img className='w-full h-full object-cover'
                    src="https://cdn.dribbble.com/users/1577045/screenshots/4914645/media/028d394ffb00cb7a4b2ef9915a384fd9.png?compress=1&resize=400x300&vertical=top" alt="" />
            </div>
            <div className='pl-40 pt-2'>
                <h4 className='text-xl font-semibold'>{name}</h4>
                <p className='text-sm text-gray-400 mt-1'>Software Developer, Algoscale Pvt. Ltd.</p>
            </div>
            <button onClick={handleCoverEdit}
                className='absolute bottom-3 right-3 w-8 h-8 rounded-full bg-transparent text-center leading-8 hover:bg-gray-500/40 transition-colors'>
                <FontAwesomeIcon icon={faEdit} className="text-sm" />
            </button>
        </div>
    )
}

export default ProfileHeader