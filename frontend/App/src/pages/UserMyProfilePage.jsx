import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { DeleteMyContent, UpdateMyContent, FetchMyContent } from '../services/UserMyProfile';
import { Toast } from '../components/toast/Toast';

export const UserMyProfilePage = () => {
    const [myContentItems, setMyContentItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const loadMyContent = async () => {
            setIsLoading(true);
            const content = await FetchMyContent();
            setMyContentItems(content);
            setIsLoading(false);
        };
        loadMyContent();
    }, []);

    const handleDelete = async (contentId) => {
        if (window.confirm("Are you sure want to delete the content")) {
            setIsLoading(true)
            const success = await DeleteMyContent(contentId);

            if (success) {
                Toast.success("content deleted successfully");
                setMyContentItems(prevItems => {
                    prevItems.filter((item) => {
                        item._id !== contentId
                    });
                });
                setIsLoading(false)
            };
        };
    };

    return (
        // <div className="bg-black text-white font-sans p-4 md:p-8">
        //     <div className="max-w-7xl mx-auto">
        //         <div className="flex justify-between items-center mb-6">
        //             <h1 className="text-3xl font-bold">My Content</h1>
        //             <button
        //                 onClick={() => navigate('/upload')}
        //                 className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
        //             >
        //                 + Upload New Content
        //             </button>
        //         </div>

        //         {isLoading ? (
        //             <p className="text-xl font-semibold my-6 text-center">Loading Your Content...</p>
        //         ) : myContentItems.length === 0 ? (
        //             <div className="text-center py-16 bg-gray-800 rounded-lg">
        //                 <p className="text-2xl text-gray-400">You haven't uploaded any content yet.</p>
        //                 <p className="text-gray-500 mt-2">Click the "Upload" button to get started!</p>
        //             </div>
        //         ) : (
        //             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        //                 {myContentItems.map((item) => (
        //                     <div key={item._id} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg group">
        //                         <Link to={item.contentType === 'video' ? `/watch?id=${item._id}` : `/${item.contentType}?id=${item._id}`}>
        //                             {item.contentType === 'image' && <img src={item.thumbnail || item.url} alt={item.title} className="w-full h-48 object-cover" />}
        //                             {item.contentType === 'video' && <img src={item.thumbnail} alt={item.title} className="w-full h-48 object-cover" />}
        //                             {item.contentType === 'file' && <div className="w-full h-48 flex items-center justify-center bg-gray-700 p-3"><span className="text-gray-400 text-sm text-center">📄 {item.title || 'File'}</span></div>}
        //                         </Link>
        //                         <div className="p-4">
        //                             <h3 className="text-md font-semibold truncate text-gray-100" title={item.title}>{item.title}</h3>
        //                             <div className="flex justify-end gap-2 mt-3">
        //                                 <button
        //                                     // onClick={() => navigate(`/edit-content/${item._id}`)} // TODO: Create an edit page
        //                                     className="text-xs bg-gray-600 hover:bg-gray-500 text-white px-3 py-1 rounded"
        //                                 >
        //                                     Edit
        //                                 </button>
        //                                 <button
        //                                     onClick={() => handleDelete(item._id)}
        //                                     className="text-xs bg-red-600 hover:bg-red-500 text-white px-3 py-1 rounded"
        //                                 >
        //                                     Delete
        //                                 </button>
        //                             </div>
        //                         </div>
        //                     </div>
        //                 ))}
        //             </div>
        //         )}
        //     </div>
        // </div>


        <div className="min-h-screen bg-gray-900 text-gray-100 font-sans flex">
            {/* Sidebar */}
            <aside className="w-16 bg-gray-800 flex flex-col items-center py-4 space-y-6 rounded-r-xl">
                <div className="text-xl font-bold">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                </div>
                <div className="flex flex-col items-center space-y-6 mt-8">
                    <div className='p-2 rounded-lg hover:bg-gray-700 transition-colors'>
                        Back to Content
                    </div>
                   
                </div>
            </aside>

            {/* Main content area */}
            <main className="flex-1 p-6 flex flex-col">
                {/* Header */}


                {/* User Profile Section */}
                <section className="flex-1 bg-gray-800 rounded-xl p-6 overflow-auto">
                    <div className="flex items-center justify-between mb-6">
                        <h1 className="text-3xl font-semibold">User Profile</h1>
                        <span className="text-lg text-gray-400">33%</span>
                    </div>

                    {/* Large rectangle */}
                    <div className="w-full h-48 bg-gray-700 rounded-xl mb-8"></div>

                    {/* User Info and Buttons */}
                    <div className="flex items-center space-x-6 mb-8">
                        <div className="w-20 h-20 rounded-full bg-green-500 flex items-center justify-center text-3xl font-bold">FN</div> {/* Placeholder for profile picture */}
                        <div>
                            <p className="text-xl font-semibold">Aayush <span className="text-gray-400">@async_aayush</span></p>
                            <p className="text-gray-400">4 Following • 15.9M Followers</p>
                        </div>
                    </div>
                    <div className="flex space-x-3 ml-auto">
                        <button className="px-6 py-2 rounded-full bg-blue-600 hover:bg-blue-700 transition-colors">Contents</button>
                        <button className="px-6 py-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors">Comments</button>
                        <button className="px-6 py-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors">Likes</button>
                    </div>

                    {/* Content Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 p-6">
                        {[1, 2, 3].map((item) => (
                            <div key={item} className="bg-gray-700 rounded-xl p-4 flex flex-col">
                                <div className="flex items-center mb-3">
                                    <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-sm font-bold mr-2">FN</div>
                                    <span className="text-sm font-semibold">Aayush <span className="text-gray-400">@async_aayush</span></span>
                                    <span className="text-xs text-gray-400 ml-auto">5h ago</span>
                                </div>
                                <p className="text-base mb-4">Building end to end MERN stack application</p>
                                <div className="w-full h-32 bg-red-600 rounded-lg mb-4"></div> {/* Placeholder for image/content */}
                                <div className="flex items-center justify-between text-gray-400 text-sm">
                                    <div className="flex items-center space-x-2">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                                        <span>123</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
                                        <span>45</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                                        <span>67</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    )
}