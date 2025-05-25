import { useState } from "react";

const Upload = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [uploadType, setUploadType] = useState("");

    const openModal = () => {
        setIsOpen(true);
        setUploadType("");
    };

    const handleOptionClick = (type) => {
        setUploadType(type);
    };

    const getHeading = () => {
        if (!uploadType) return "Select Upload Type";
        return `Upload ${uploadType.charAt(0).toUpperCase() + uploadType.slice(1)}`;
    };

    return (
        <div className="flex items-center justify-center h-screen">
            <button
                onClick={openModal}
                className="border px-4 py-2 rounded-md text-white bg-gray-800"
            >
                + upload
            </button>

            {isOpen && (
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-60 flex items-center justify-center z-50">
                    <div className="bg-[#111] p-6 rounded-lg w-full max-w-md text-white shadow-lg">
                        <h2 className="text-xl font-bold mb-4 text-center">{getHeading()}</h2>

                        {!uploadType ? (
                            <div className="space-y-2">
                                {["image", "video", "file"].map((type) => (
                                    <button
                                        key={type}
                                        onClick={() => handleOptionClick(type)}
                                        className="w-full border py-2 rounded-md hover:bg-gray-700 transition"
                                    >
                                        {type}
                                    </button>
                                ))}
                            </div>
                        ) : (
                            <div className="flex flex-col items-center justify-center">
                                <div className="text-center p-6 border-dashed border-2 border-gray-400 rounded-md w-full">
                                    <p>Drag and drop your {uploadType} files to upload</p>
                                    <button className="mt-4 px-4 py-2 bg-gray-700 rounded-md">
                                        Select files
                                    </button>
                                </div>
                                <button
                                    onClick={() => setUploadType("")}
                                    className="mt-4 text-sm text-gray-400 hover:underline"
                                >
                                    ← Back
                                </button>
                            </div>
                        )}

                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-2 right-2 text-gray-400 hover:text-white"
                        >
                            ✕
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export {Upload}