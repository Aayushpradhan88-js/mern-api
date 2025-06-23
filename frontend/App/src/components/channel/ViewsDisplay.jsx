import React, { useState, useEffect } from 'react';

import { FetchContentDetails } from '../../services/ContentService';
import { IncrementViews } from '../../services/ViewsService';

export const ViewsDisplay = ({ contentId }) => {
  const [mediaItem, setMediaItem] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!contentId) {
      setIsLoading(false);
      setError("NO CONTENT ID IS PROVIDED");
      return;
    }

    let isMounted = true;

    const fetchAndIncrement = async () => {
      setIsLoading(true);
      setError(null);
      try {

        const responseData = await FetchContentDetails(contentId);
        if (isMounted) {
          setMediaItem(responseData);
        };

        const viewsResponse = await IncrementViews(contentId)
        if (isMounted && viewsResponse && viewsResponse.data && typeof viewsResponse.data.views !== 'undefined') {
          setMediaItem(prevItem => ({
            ...prevItem,
            views: viewsResponse.data.views
          }));
        };
      }

      catch (error) {
        setIsLoading(false);
       setError(`Failed to show views data: ${error.message}`)
      }

      finally {
        if (isMounted) setIsLoading(false);
      };
    };

    fetchAndIncrement();

    return () => {
      isMounted = false
    }
  }, [contentId]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!mediaItem) return <p>Media not found.</p>;

  return (
    <div>
      <h3>{mediaItem.title || 'Media Content'}</h3>
      {mediaItem.contentType?.startsWith('image/') && (
        <img
          src={mediaItem.url}
          alt={mediaItem.title || 'Media'}
          style={{ maxWidth: '500px', display: 'block' }}
        />
      )}

      {mediaItem.contentType?.startsWith('video/') && (
        <video controls
          src={mediaItem.url}
          style={{ maxWidth: '500px', display: 'block' }}
        >
          Your browser does not support the video tag.
        </video>
      )}
      <p>Description: {mediaItem.description || 'N/A'}</p>
      <p>Views: {mediaItem.views}</p>
    </div>
  )
}