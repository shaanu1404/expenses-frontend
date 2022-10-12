import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

function LinkCard({ title }) {
    return (
        <div className='border border-gray-200/20 bg-gray-700/10 rounded-lg p-6 group hover:border-gray-200 transition-colors'>
            <h6 className='text-xl text-gray-200/40 font-regular group-hover:text-gray-200 transition-colors'>
                {title}
            </h6>
            <div className='mt-3 text-right'>
                <FontAwesomeIcon icon={faArrowRight} className="text-gray-200/20 group-hover:text-gray-200 transition-colors" />
            </div>
        </div>
    )
}

export default LinkCard