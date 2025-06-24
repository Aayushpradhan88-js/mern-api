import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { Toast } from '../toast/Toast';
import { ChannelSubscriptionUI } from './ChannelSubscriptionUI';
import { IncrementViews } from '../../services/ViewsService';
import { FetchContentDetails } from '../../services/ContentService';

export const GetContentDetails = (contentId) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [video, setVideo] = useState(null);
  const [contentItem, setContentItem] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const contentType = location.pathname.substring(1);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const id = queryParams.get('id');

    if (!id) {
      setError("CONTENT ID IS MISSING FROM THE URL");
      setIsLoading(false);
      return;
    };

    const fetchContentDetails = async () => {
      setIsLoading(true);

      try {
        const result = await FetchContentDetails(id); //-----video object data-----//
        if (result) {
          setVideo(result);
          setContentItem(result);
          await IncrementViews(id) //-----Increment views-----//
        }
         else {
          setError("Failed to load content details.");
        }
      }

      catch (error) {
        console.error("Failed to fetch data", error.message);
        Toast.error(error.message);
      }

      finally {
        setIsLoading(false);
      };
    };

    //-----Function TO INCREMENT VIEWS----------//
    const IncrementContentViews = async(contentIdToIncrement) => {
      const viewResponse = await IncrementViews(contentIdToIncrement);

      
    }

    fetchContentDetails();
  }, [location.search]);

  if (isLoading) {
    return (
      <div className='bg-black text-white min-h-screen flex items-center justify-center'>
        <p>Loading video.....</p>
      </div>
    )
  };

  if (error) {
    return (
      <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center p-4">
        <p className="text-red-500 text-lg mb-4">Error: {error}</p>
        <button onClick={() => navigate('/content')} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
          Back to Content
        </button>
      </div>
    );
  };

  if (!contentItem) return null;

  if (!video) return null;

  return (
    <>

      {contentType === 'watch' && (
        <div>
          <ChannelSubscriptionUI videoUrl={video.url} videoTitle={video.title} />
        </div>
      )}

      {contentType === 'image' && (
        <img src={contentItem.url} alt={contentItem.title} className="max-w-4xl w-full h-auto rounded-lg shadow-lg" />
      )}

      {contentType === 'file' && (
        <div className="w-full max-w-md bg-gray-800 p-6 rounded-lg text-center">
          <p className="text-gray-400 text-sm mb-4">📄 File: {contentItem.title}</p>
          <a
            href={contentItem.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg inline-flex items-center"
          >
            Download File
          </a>
        </div>
      )}

    </>
  )
}