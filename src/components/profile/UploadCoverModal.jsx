import React from 'react'
import Dropzone from 'react-dropzone'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileImage } from '@fortawesome/free-solid-svg-icons'

const UploadCoverModal = () => {
    const handleDrop = e => {
        console.log(e)
    }
    return (
        <div>
            <Dropzone onDrop={handleDrop}
                accept={{ "image/jpg": ['.jpg', '.jpeg'], "image/png": ['.png'] }}
            >
                {({ getRootProps, getInputProps, isDragActive, isFocused }) => {
                    let className = "px-6 py-12 rounded-lg border-2 border-dashed cursor-pointer outline-none"
                    let textColor = "text-blue-700/40"
                    if (isFocused && isDragActive) {
                        className += " bg-green-50 border-green-700/60"
                        textColor = "text-green-700/40"
                    } else if (isFocused) {
                        className += " bg-blue-100 border-blue-900/60"
                        textColor = "text-blue-900/80"
                    } else {
                        className += " bg-blue-50 border-blue-700/60"
                        textColor = "text-blue-700/40"
                    }
                    return (
                        <div {...getRootProps({ className: className })}>
                            <input {...getInputProps()} />
                            <div className={`text-center text-sm ${textColor}`}>
                                <FontAwesomeIcon icon={faFileImage} className="text-3xl" />
                                <p className='mt-3'>Drag and Drop here</p>
                            </div>
                        </div>
                    )
                }}
            </Dropzone>
            <div className='mt-4 text-right'>
                <button className="bg-blue-800 py-2 px-4 rounded text-sm text-blue-100 outline-none hover:bg-blue-900 focus:bg-blue-900 text-center disabled:bg-blue-500">
                    Save cover image
                </button>
            </div>
        </div>
    )
}

export default UploadCoverModal