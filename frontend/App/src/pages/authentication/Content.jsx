import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { ImageUploader } from "../../components/ImageUploader";

export const Content = () => {
    const [images, setImages] = useState([]);
    const [showUploader, setShowUploader] = useState(false);

    const handleImageUploadSuccess = (newImage) => {
        setImages((prevImages) => [newImage, ...prevImages]);
    };

    return (
        <div className="bg-black text-white font-sans">
            <div className="flex flex-col md:flex-row min-h-screen">

                {/* Sidebar */}
                <aside className="w-full md:w-1/5 bg-black border-r border-gray-800 p-4">
                    <div className="text-xl font-bold mb-8">LOGO</div>
                    <nav className="space-y-4">
                        <a href="#" className="block">videos</a>
                        <a href="#" className="block">tweets</a>
                        <a href="#" className="block">likes</a>
                        <a href="" className="block">Image</a>
                        <a href="#" className="block">files</a>
                        <a href="#" className="block">Logout</a>
                    </nav>
                </aside>

                {/* Main content */}
                <main className="flex-1 p-4">
                    {/* Top bar with search and upload */}
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                        <div className="flex items-center w-full md:w-3/4 bg-gray-800 rounded px-3 py-1">
                            <input type="text" placeholder="Search" className="bg-transparent focus:outline-none w-full" />
                            <button className="mx-1">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1010.5 18.5a7.5 7.5 0 006.15-3.85z" />
                                </svg>
                            </button>
                        </div>

                        {/* IMAGE SECTION */}
                        <div className="flex gap-2">
                                <button
                                    onClick={() => setShowUploader(!showUploader)}
                                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
                                >
                                   {showUploader ? "Close" : "Upload"}
                                </button>
                        </div>

                        {
                            showUploader && (
                                <div className="w-full md:w-auto">
                                    <ImageUploader onUploadSuccess={handleImageUploadSuccess} />
                                </div>

                            )
                        }
                        <Outlet />
                    </div>

                    {/* Image gallery */}
                    <div>
                        <h2 className="text-xl font-semibold mb-4">Your Images</h2>
                        {images.length === 0 ? (
                            <p className="text-gray-500">No images uploaded</p>
                        ) : (
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                {images.map((image) => (
                                    <div key={image.public_id} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300">
                                        <img src={image.url} alt={image.public_id || 'uploaded image'} className="w-full h-48 object-cover" />
                                        <div className="p-2">
                                            <p className="text-xs text-gray-400">Format: {image.format}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* IMAGE SECTION */}

                    {/* CHAT SECTION */}
                    <div className="fixed bottom-6 right-6 flex flex-col items-end gap-2">
                        <button className="bg-green-600 text-white px-4 py-2 rounded flex items-center gap-2">
                            <h1 className="cursor-pointer">Assistance</h1>
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v7a2 2 0 01-2 2h-6l-4 4v-4H7a2 2 0 01-2-2v-1" />
                            </svg>
                            
                        </button>
                    </div>
                    {/* CHAT SECTION */}
                </main>
            </div>
        </div>
    );
};
