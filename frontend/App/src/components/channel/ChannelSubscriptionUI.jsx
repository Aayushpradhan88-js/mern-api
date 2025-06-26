import React from 'react'

export const ChannelSubscriptionUI = ({ videoUrl, videoTitle, views, creatorId, creatorUsername, followerCount, isFollowing, onToggleFollow }) => {
    return (

        <div className="max-w-6xl mx-auto px-4">
            {/* Video player */}
            <div className="aspect-video bg-black rounded-lg overflow-hidden mb-4">
                <video
                    src={videoUrl}
                    controls
                    autoPlay
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Video Title */}
            <h1 className="text-2xl font-bold text-white mb-2">{videoTitle}</h1>

            {/* Channel Info + Buttons */}
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div className="flex items-center space-x-4">
                    <img src={`https://placehold.co/48x48/4A90E2/FFFFFF?text= ${creatorUsername ? creatorUsername.chatAt(0).toUpperCase() : 'A'}`} alt="Creator Avatar" className="rounded-full" />
                    <div>
                        <p className="font-semibold">{creatorUsername}</p>
                        <p className="text-gray-400 text-sm">{followerCount} followers</p>
                    </div>
                    <button
                        onClick={onToggleFollow}
                        className={`ml-4 bg-white text-black px-4 py-2 rounded-full font-semibold${isFollowing ? 'bg-gray-600 text-white' : 'bg-white text-black'}`}
                    >
                        {isFollowing ? 'Following' : 'Follow'}
                    </button>
                </div>

                <div className="flex mt-4 md:mt-0 space-x-3">
                    <div className="flex mt-4 md:mt-0 space-x-3">
                        {/* Share Button with Count */}
                        <button className="flex items-center space-x-2 bg-gray-700 px-4 py-2 rounded-full hover:bg-gray-600 transition-colors">
                            <span>Share</span>
                            <p className="text-sm text-gray-300">290</p>
                            {/* <span className="text-sm text-gray-300">·  {shareCount}
100
                            </span> */}
                        </button>

                        {/* Download Button with Count */}
                        <button className="flex items-center space-x-2 bg-gray-700 px-4 py-2 rounded-full hover:bg-gray-600 transition-colors">
                            <span>Download</span>
                            <p lassName="text-sm text-gray-300">968</p>
                            {/* <span className="text-sm text-gray-300">· {downloadCount}968</span> */}
                        </button>
                    </div>
                    <button className="bg-gray-700 px-4 py-2 rounded-full">Clip</button>
                </div>
            </div>

            {/* Description */}
            <div className="bg-gray-800 text-sm text-white p-4 rounded mb-6">
                <p><strong>{views} views</strong> <span className="text-gray-400 ml-2">18 hours ago</span></p>
                <p>Enjoy the 1st six month of ManageEngine Site24x7 for free:
                    <a href="#" className="text-blue-400 hover:underline ml-1">https://site24x7.manageengine.com</a>
                </p>
                <button className="text-blue-400 hover:underline mt-2">...more</button>
            </div>

            {/* Comments Section */}
            <div>
                <h2 className="text-xl font-semibold text-white mb-4">23 Comments</h2>
                <div className="flex items-center mb-6">
                    <img src="https://placehold.co/40x40/5CB30C/FFFFFF?text=A" className="rounded-full mr-3" />
                    <input type="text" placeholder="Add a comment..." className="flex-grow p-2 rounded bg-gray-700 text-white border border-gray-600" />
                </div>
                {/* Add comments loop here */}
            </div>
        </div>


    )
}
