import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { DeleteMyContent, UpdateMyContent, FetchMyContent } from '../services/UserMyProfile';
import { Toast } from '../components/toast/Toast';

export const DemoMyProfilePage = () => {
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
        <div className="bg-black text-white font-sans p-4 md:p-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-3xl font-bold">My Content</h1>
                    <button
                        onClick={() => navigate('/upload')}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
                    >
                        + Upload New Content
                    </button>
                </div>

                {isLoading ? (
                    <p className="text-xl font-semibold my-6 text-center">Loading Your Content...</p>
                ) : myContentItems.length === 0 ? (
                    <div className="text-center py-16 bg-gray-800 rounded-lg">
                        <p className="text-2xl text-gray-400">You haven't uploaded any content yet.</p>
                        <p className="text-gray-500 mt-2">Click the "Upload" button to get started!</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {myContentItems.map((item) => (
                            <div key={item._id} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg group">
                                <Link to={item.contentType === 'video' ? `/watch?id=${item._id}` : `/${item.contentType}?id=${item._id}`}>
                                    {item.contentType === 'image' && <img src={item.thumbnail || item.url} alt={item.title} className="w-full h-48 object-cover" />}
                                    {item.contentType === 'video' && <img src={item.thumbnail} alt={item.title} className="w-full h-48 object-cover" />}
                                    {item.contentType === 'file' && <div className="w-full h-48 flex items-center justify-center bg-gray-700 p-3"><span className="text-gray-400 text-sm text-center">📄 {item.title || 'File'}</span></div>}
                                </Link>
                                <div className="p-4">
                                    <h3 className="text-md font-semibold truncate text-gray-100" title={item.title}>{item.title}</h3>
                                    <div className="flex justify-end gap-2 mt-3">
                                        <button
                                            // onClick={() => navigate(`/edit-content/${item._id}`)} // TODO: Create an edit page
                                            className="text-xs bg-gray-600 hover:bg-gray-500 text-white px-3 py-1 rounded"
                                        >
                                            Edit
                                        </button>
                                        <button
                                            onClick={() => handleDelete(item._id)}
                                            className="text-xs bg-red-600 hover:bg-red-500 text-white px-3 py-1 rounded"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}