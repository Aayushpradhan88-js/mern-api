/* eslint-disable no-unused-vars */
import React from "react";

export const UploadContext = React.createContext(
    {   
        uploads: [
            {
                id: 1,
                upload: "upload msg",
                completed: false
            }
        ],

        addUpload: (upload) => {},
        updateUpload: (id, upload) => {},
        deleteUpload: (id) => {},
    }
)

export const useUpload = () => {
    return React.useContext(UploadContext)
}

export const UploadProvider = UploadContext.Provider
