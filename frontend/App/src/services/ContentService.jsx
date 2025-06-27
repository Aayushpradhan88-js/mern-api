import { Toast } from '../components/toast/Toast';

export const FetchContentDetails = async (contentId) => {
  try {
    const token = localStorage.getItem("token");

    const response = await fetch(`http://localhost:4000/upload/single-upload/${contentId}`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
    });
    
    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || `Failed to fetch content details. HTTP Error status: ${response.status}`);
    }

    return result.success && result.data ? result.data : null;
  } catch (error) {
    console.error("Failed to fetch content details:", error.message);
    // Toast.error(error.message);
    return null;
  }
};
