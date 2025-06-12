import React, { useState } from 'react'

import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

export const ImageUploader = ({onUploadSuccess}) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!selectedFile) {
      toast.error("Please select an image to upload.");
      return;
    }
    setIsLoading(true);

    const formData = new FormData();
    formData.append("photo", selectedFile);

    try {
      const uploadUrl = `http://localhost:4000/upload/upload-image`;

      console.log(`Attempting to upload file "${selectedFile.name}" to "${uploadUrl}"`);

      const response = await fetch(uploadUrl, {
        method: "POST",
        body: formData
      });

      const result = await response.json();  //Parse the JSON response from the backend

      if (!response.ok) { // If the response status is not OK (e.g., 400, 500)
        console.error("Image upload failed:", result);

        toast.error(result.message || `Image upload failed ${response.statusText}. Please try again.`);

        return;
      }

      //If the response status is OK (e.g., 200)
      console.log("Image uploaded successfully:", result);
      toast.success(result.message || "Image uploaded successfully");

      if(onUploadSuccess && result.mongoData){
        onUploadSuccess(result.mongoData)
      }

      setSelectedFile(null);
      event.target.form.reset();

    } catch (error) {
      console.error("Error uploading image:", error);
    }
    finally {
      setIsLoading(false);
  } 
  }
  return (
    <>
      <div className="my-4 p-4 border border-gray-300 rounded-lg">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="imageUpload" className="block text-sm font-medium text-gray-700">Upload Image</label>
            <input type="file" id="imageUpload" accept="image/*" onChange={handleFileChange} className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" />
          </div>
          <button type="submit" disabled={isLoading || !selectedFile} className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-gray-400">
            {isLoading ? 'Uploading...' : 'Upload Image'}
          </button>
        </form>
      </div>
      </>
    )
}