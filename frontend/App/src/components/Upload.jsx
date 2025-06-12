import React from 'react'
import { useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify'
import { ContentUploader } from './ContentUploader'

export const Upload = () => {
    const navigate = useNavigate();

    const handleContentUploadSuccess = (newItem) => {
        toast.success(`${newItem.contentType.chatAt(0).toUpperCase()+ newItem.contentType.slice(1)} uploaded successfully`)
        navigate(`/content/${newItem._id}`)
        // Navigate back to the content page to see the new upload
        navigate('/content'); 
    };

    return (
        <div className='container mx-auto p-4 py-8 bg-gray-900 text-white min-h-screen flex flex-col items-center'>
            <div className='w-full max-w-2xl'>
                <button
                onClick = {()=> navigate('/content')}
                className='mb-6 bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded cursor-pointer self-start'>
                    Back 
                </button>

                <div>
                    <ContentUploader onUploadSuccess={handleContentUploadSuccess}/>
                </div>

            </div>


        </div>
    )
}