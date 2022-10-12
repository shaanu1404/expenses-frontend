import { Outlet } from 'react-router-dom'
import Sidebar from '../sidebar'

const AppLayout = props => {
    return (
        <div>
            <Sidebar />
            <main className='ml-64 px-8 py-4'>
                <Outlet />
            </main>
        </div>
    )
}

export default AppLayout