import { Toast } from '../components/toast/Toast';

export const FetchContentDetails = async (contentId) => {
  try {
    const response = await fetch(`${import.meta.env.VITE_SERVER_CONTENT}/upload/single-upload/${contentId}`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json"
      },
    });

    if (!response.ok) {
      const errorResult = await response.json();
      throw new Error(errorResult.message || `Failed to fetch content details. HTTP Error status: ${response.status}`);
    }

    const result = await response.json();
    return result.success && result.data ? result.data : null;
  } catch (error) {
    console.error("Failed to fetch content details:", error.message);
    Toast.error(error.message);
    return null;
  }
};
