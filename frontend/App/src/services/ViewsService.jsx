import React from 'react'

export const IncrementViews = async (mediaId) => {
  try {
    const response = await fetch(`${VITE_SEVER_COUNTING}/upload/single-upload/${mediaId}/view`,
      {
        method: 'PATCH',
        headers: {
          "Content-Type": "application/json"
        },
      }
    );

    if (!response.ok) {
      //-----Handles HTTP errors 400 / 500----- 
      const errorResult = await response.json();
      throw new Error(errorResult.message || ` HTTP Error status: {response.status}`);
    }


    const data = await response.json();
    return data;  // Should contain { views: newViewCount, mediaId: ... } from your ApiResponse
  } catch (error) {
    console.error("Failed to fetch data", error.message);
    Toast.error(error.message);

  }
}