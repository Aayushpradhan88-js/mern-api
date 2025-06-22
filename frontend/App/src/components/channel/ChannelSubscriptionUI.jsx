import React from 'react'

export const ChannelSubscriptionUI = () => {
    return (

        <div className="container mx-auto">
           

            <div className="flex flex-col lg:flex-row gap-6">
                {/* <!-- Main Video Section --> */}
                <div className="flex-1 lg:w-2/3">
                    {/* <!-- Video Player (Placeholder) --> */}
                    <div className="w-full aspect-video bg-black rounded-lg overflow-hidden mb-4">
                        <img src="https://placehold.co/1280x720/000000/FFFFFF?text=Video+Player" alt="Video Placeholder" className="w-full h-full object-cover" />
                    </div>

                    {/* <!-- Video Title and Actions --> */}
                    <h1 className="text-2xl font-bold mb-3">How to ensure your APIs stay up during Peak Loads</h1>
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6">
                        <div className="flex items-center mb-4 md:mb-0">
                            <img src="https://placehold.co/48x48/4A90E2/FFFFFF?text=HC" alt="Channel Avatar" className="w-12 h-12 rounded-full mr-3" />
                            <div>
                                <p className="font-semibold text-lg">Hitesh Choudhary</p>
                                <p className="text-gray-400 text-sm">1M subscribers</p>
                            </div>
                            <button className="ml-6 px-4 py-2 bg-white text-black font-semibold rounded-full hover:bg-gray-300 transition-colors">Subscribe</button>
                        </div>
                        <div className="flex space-x-4 text-gray-300">
                            <button className="flex items-center space-x-2 bg-gray-700 px-4 py-2 rounded-full hover:bg-gray-600 transition-colors">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.85 2.158l-1.515 7.14a3 3 0 01-2.923 2.692H7A3 3 0 014.084 19.3L2.551 12.86A2 2 0 014.399 10H9.5M14 10V5.072c0-.503.203-.984.567-1.348l2.909-2.909c.36-.36.85-.563 1.348-.563C21.437.252 23 1.815 23 3.636V10h-9z"></path></svg>
                                <span>437</span>
                            </button>
                            <button className="flex items-center space-x-2 bg-gray-700 px-4 py-2 rounded-full hover:bg-gray-600 transition-colors">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"></path></svg>
                                <span>Share</span>
                            </button>
                            <button className="flex items-center space-x-2 bg-gray-700 px-4 py-2 rounded-full hover:bg-gray-600 transition-colors">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                                <span>Download</span>
                            </button>
                            <button className="flex items-center space-x-2 bg-gray-700 px-4 py-2 rounded-full hover:bg-gray-600 transition-colors">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"></path></svg>
                                <span>Clip</span>
                            </button>
                            <button className="p-2 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
                            </button>
                        </div>
                    </div>

                    {/* <!-- Video Description --> */}
                    <div className="bg-gray-700 p-4 rounded-lg mb-6 text-sm leading-relaxed">
                        <p className="font-semibold mb-2">24,154 views <span className="ml-2 text-gray-400">18 hours ago</span></p>
                        <p>Enjoy the 1st six month of ManageEngine Site24x7 for free: <a href="#" className="text-blue-400 hover:underline">https://site24x7.manageengine.com</a></p>
                        <button className="text-blue-400 hover:underline mt-2">...more</button>
                    </div>

                    {/* <!-- Comments Section --> */}
                    <div className="mb-8">
                        <h2 className="text-xl font-semibold mb-4">23 Comments</h2>
                        <div className="flex items-center mb-6">
                            <img src="https://placehold.co/40x40/5CB30C/FFFFFF?text=A" alt="User Avatar" className="w-10 h-10 rounded-full mr-3" />
                            <input type="text" placeholder="Add a comment..." className="flex-grow p-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>

                        {/* <!-- Example Comment --> */}
                        <div className="flex mb-6">
                            <img src="https://placehold.co/40x40/E8912D/FFFFFF?text=J" alt="Commenter Avatar" className="w-10 h-10 rounded-full mr-3" />
                            <div>
                                <p className="text-sm font-semibold">@jamyagyaab_b <span className="text-gray-400 font-normal ml-2">18 hours ago</span></p>
                                <p className="mt-1">Hit that subscribe button</p>
                                <div className="flex items-center space-x-4 mt-2 text-gray-400 text-sm">
                                    <button className="flex items-center space-x-1 hover:text-white">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.85 2.158l-1.515 7.14a3 3 0 01-2.923 2.692H7A3 3 0 014.084 19.3L2.551 12.86A2 2 0 014.399 10H9.5M14 10V5.072c0-.503.203-.984.567-1.348l2.909-2.909c.36-.36.85-.563 1.348-.563C21.437.252 23 1.815 23 3.636V10h-9z"></path></svg>
                                        <span>1</span>
                                    </button>
                                    <button className="flex items-center space-x-1 hover:text-white">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14H5.236a2 2 0 01-1.85-2.158l1.515-7.14A3 3 0 017.915 2H17.48c.091 0 .174.025.246.068.455.272.716.71.933 1.25l2.039 4.72C21.5 12.676 21.5 13.437 21.5 14v4a2 2 0 01-2 2H15V6.167L18.9 2.1a2 2 0 011.666 1.954V5M10 14V9.333L6.1 13.9a2 2 0 00-1.666-1.954V12"></path></svg>
                                        <span></span>
                                    </button>
                                    <button className="hover:text-white">Reply</button>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Another Example Comment --> */}
                        <div className="flex mb-6">
                            <img src="https://placehold.co/40x40/007bff/FFFFFF?text=T" alt="Commenter Avatar" className="w-10 h-10 rounded-full mr-3" />
                            <div>
                                <p className="text-sm font-semibold">Teachbox <span className="text-gray-400 font-normal ml-2">5 hours ago</span></p>
                                <p className="mt-1">So GOAT! bro even students are desparate for 1 Million Subs 🙂</p>
                                <div className="flex items-center space-x-4 mt-2 text-gray-400 text-sm">
                                    <button className="flex items-center space-x-1 hover:text-white">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.85 2.158l-1.515 7.14a3 3 0 01-2.923 2.692H7A3 3 0 014.084 19.3L2.551 12.86A2 2 0 014.399 10H9.5M14 10V5.072c0-.503.203-.984.567-1.348l2.909-2.909c.36-.36.85-.563 1.348-.563C21.437.252 23 1.815 23 3.636V10h-9z"></path></svg>
                                        <span></span>
                                    </button>
                                    <button className="flex items-center space-x-1 hover:text-white">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14H5.236a2 2 0 01-1.85-2.158l1.515-7.14A3 3 0 017.915 2H17.48c.091 0 .174.025.246.068.455.272.716.71.933 1.25l2.039 4.72C21.5 12.676 21.5 13.437 21.5 14v4a2 2 0 01-2 2H15V6.167L18.9 2.1a2 2 0 011.666 1.954V5M10 14V9.333L6.1 13.9a2 2 0 00-1.666-1.954V12"></path></svg>
                                        <span></span>
                                    </button>
                                    <button className="hover:text-white">Reply</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}
