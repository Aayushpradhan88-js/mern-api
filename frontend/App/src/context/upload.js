import React from "react";

export const UploadContext = React.createContext(
    {
        upload: [
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

export const Upload = () => {
    return React.useContext(UploadContext)
}

export const UploadProvider = UploadContext.Provider
