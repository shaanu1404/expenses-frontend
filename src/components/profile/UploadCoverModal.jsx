import React from 'react'
import Dropzone from 'react-dropzone'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileImage, faTimes } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

const UploadCoverModal = () => {
    const [file, setFile] = useState(null)

    const handleDrop = fileArr => {
        if (fileArr.length === 0) return;
        console.log(fileArr[0])
        setFile(fileArr[0])
    }

    return (
        <div>
            {file
                ? (
                    <div className='flex items-start space-x-4'>
                        <div className='w-24 h-24 rounded-md bg-gray-50 overflow-hidden'>
                            <img src={URL.createObjectURL(file)} className='h-full w-full object-cover' alt="" />
                        </div>
                        <div className='flex-1'>
                            <h5 className='text-gray-900 mb-1'>{file.name}</h5>
                            <p className='text-xs text-gray-500'>File size: {Number((file.size / 1024).toFixed(1))} KB</p>
                        </div>
                        <div>
                            <button className="w-8 h-8 rounded-full text-gray-700 bg-transparent text-center leading-8 hover:bg-gray-500/20 transition-colors"
                                onClick={() => setFile(null)}
                            >
                                <FontAwesomeIcon icon={faTimes} />
                            </button>
                        </div>
                    </div>
                )
                : (
                    <Dropzone onDrop={handleDrop} accept={{ "image/jpg": ['.jpg', '.jpeg'], "image/png": ['.png'] }}>
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
                )}
            <div className='mt-4 text-right'>
                <button className="bg-blue-800 py-2 px-4 rounded text-sm text-blue-100 outline-none hover:bg-blue-900 focus:bg-blue-900 text-center disabled:bg-blue-500 disabled:cursor-not-allowed"
                    disabled={!file}
                >
                    Save cover image
                </button>
            </div>
        </div>
    )
}

export default UploadCoverModal