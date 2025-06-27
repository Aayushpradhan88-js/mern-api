import { Toast } from "../components/toast/Toast";

export const ToogleFollowChannel = async (channelId, token) => {
    try {
        const response = await fetch(`http://localhost:4000/user/follow/${channelId}`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${(token)}`
            }
        });

        const result = await response.json();

        if (response.ok) {
            Toast.success(result.message || "New follower added");
            return result;
        } else {
            Toast.error(result.message || "Failed to follow channel");
            throw new Error(result.message || "Failed to follow channel");
        }
    }
    catch (error) {
        Toast.error(error.message);
    }
};