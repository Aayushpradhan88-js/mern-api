import { Toast } from "../components/toast/Toast";

export const ToogleFollowChannel = async (channelId, token) => {
    try {
        const response = await fetch(`http://localhost:4000/user/follow/${channelId}`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem(token)}`
            }
        });

        if (response.ok) {
            const errorResult = await response.json();
            if (errorResult.ok) {
                Toast.success(errorResult.json());
            }

            else {
                Toast.error(errorResult.json())
            }
        }

        const data = await response.json;
        return data;
    }

    catch (error) {
        Toast.error(error.message);
    }
};