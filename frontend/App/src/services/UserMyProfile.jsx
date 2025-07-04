import React from 'react';
import { Toast } from '../components/toast/Toast';

const API_BASE_URL = "http://localhost:4000";

const getAuthHeaders = () => {
  const token = localStorage.getItem("token");
  if (!token) {
    Toast.error("Token not found. Log In");
    return null;
  }

  return {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${token}`
  };
};


export const FetchMyContent = async () => {
  const headers = getAuthHeaders();
  if (!headers) return null;

  try {
    const response = await fetch(`${API_BASE_URL}/upload/my-content`,
      {
        method: 'GET',
        headers
      }
    );

    const result = await response.json();
    if (!response.ok) throw new Error(result.message || "Failed to FETCH your content.");
    return result.data || [];
  }

  catch (error) {
    Toast.error(error.message);
    return [];
  };

}

export const DeleteMyContent = async (contentId) => {
  const headers = getAuthHeaders();
  if (!headers) return false;

  try {
    const response = await fetch(`${API_BASE_URL}/upload/delete-content/${contentId}`,
      {
        "Content-Type": "DELETE",
        headers
      }
    );

    const result = await response.json();
    if (!response.ok) throw new Error("Failed to DELETE content");

    Toast.success("content deleted successfully");
    return result.data || [];
  }

  catch (error) {
    Toast.error(error.message);
    return [];
  }
}

export const UpdateMyContent = async () => {
  const headers = getAuthHeaders();
  if(!headers) return null;

   try {
    const response = await fetch(`${API_BASE_URL}/upload/update-content/:id`,
      {
        "Content-Type": "PATCH",
        headers
      }
    );

    const result = await response.json();
    if (!response.ok) throw new Error("Failed to UPDATE content");

    Toast.success("content updated successfully");
    return result.data || [];
  }

  catch (error) {
    Toast.error(error.message);
    return [];
  }
}