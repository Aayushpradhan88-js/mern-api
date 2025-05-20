import React from 'react'

export const UI = () => {
  return (
    <div className="bg-gray-900 text-white flex items-center justify-center">
      {/* <div className="bg-gray-900 text-white flex items-center justify-center min-h-screen"> */}
        <div className="w-full max-w-md bg-blue-900 rounded-lg shadow-lg">
          <div className="p-4 border-b border-gray-700 flex items-center">
            <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M8 10h.01M12 10h.01M16 10h.01M9 16h6"></path>
            </svg>
            <h2 className="text-xl font-bold">Personal Assistant</h2>
          </div>
          <div className="p-4 space-y-4 max-h-96 overflow-y-auto bg-blue-900">
            <div className="flex items-start">
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M8 10h.01M12 10h.01M16 10h.01M9 16h6"></path>
              </svg>
              <p className="text-gray-300">How can I assist you?</p>
            </div>
            <div className="flex justify-end">
              <button className="bg-gray-600 text-white px-4 py-2 rounded">Hey, I'm having trouble with my account.</button>
            </div>
            <div className="flex items-start">
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M8 10h.01M12 10h.01M16 10h.01M9 16h6"></path>
              </svg>
              <p className="text-gray-300">Hey, I'm having trouble with my account</p>
            </div>
            <div className="flex justify-end">
              <button className="bg-gray-600 text-white px-4 py-2 rounded">I can't log in</button>
            </div>
          </div>
          <div className="p-4 border-t border-700">
            <div className="flex items-center bg-gray-900 p-2 rounded-lg">
              <input type="text" placeholder="Ask anything..." className="flex-1 bg-transparent text-white focus:outline-none" />
              <button className="ml-2 text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>

      {/* </div> */}
    </div>
  )
}