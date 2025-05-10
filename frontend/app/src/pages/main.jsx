<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Main work</title>
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
</head>

<body>
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Dashboard UI</title>
        <script src="https://cdn.tailwindcss.com"></script>
    </head>

    <body class="bg-black text-white font-sans">
        <div class="flex flex-col md:flex-row min-h-screen">
            <!-- Sidebar -->
            <aside class="w-full md:w-1/5 bg-black border-r border-gray-800 p-4">
                <div class="text-xl font-bold mb-8">LOGO</div>
                <nav class="space-y-4">
                    <a href="#" class="block">videos📹</a>
                    <a href="#" class="block">tweets📝</a>
                    <a href="#" class="block">likes💖</a>
                    <a href="#" class="block">images🖼</a>
                    <a href="#" class="block">files📁</a>
                    <a href="#" class="block">Logout</a>
                </nav>
            </aside>

            <!-- Main content -->
            <main class="flex-1 p-4">
                <!-- Top bar -->
                <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                    <div class="flex items-center w-full md:w-3/4 bg-gray-800 rounded px-3 py-1">
                        <input type="text" placeholder="Search" class="bg-transparent focus:outline-none w-full" />
                        <button class="mx-1">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor" class="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1010.5 18.5a7.5 7.5 0 006.15-3.85z" />
                            </svg>
                        </button>
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor" class="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M12 18.5c1.657 0 3-1.843 3-4.115V9.615C15 7.343 13.657 5.5 12 5.5s-3 1.843-3 4.115v4.77c0 2.272 1.343 4.115 3 4.115zM19 10v4m-14-4v4" />
                            </svg>
                        </button>
                    </div>
                    <div class="flex items-center gap-2">
                        <button class="bg-white text-black px-3 py-1 rounded">+ upload</button>
                        <div class="w-8 h-8 rounded-full bg-blue-700"></div>
                    </div>
                </div>

                <!-- Cards Section -->
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div class="bg-gray-800 p-4 rounded">
                        <div class="h-32 bg-gray-700 rounded mb-2"></div>
                        <p>detail gif video</p>
                        <div class="text-xs text-red-400">bad</div>
                    </div>
                    <div class="bg-gray-800 p-4 rounded">
                        <div class="h-32 bg-gray-700 rounded mb-2"></div>
                        <p>Copied backend developer resume</p>
                        <div class="text-xs text-green-400">good</div>
                    </div>
                    <div class="bg-gray-800 p-4 rounded">
                        <div class="h-32 bg-gray-700 rounded mb-2"></div>
                        <p>Copied backend developer resume</p>
                        <div class="text-xs text-green-400">good</div>
                    </div>
                    <div class="bg-gray-800 p-4 rounded">
                        <div class="h-32 bg-gray-700 rounded mb-2"></div>
                        <p>Piece with quote</p>
                        <div class="text-xs text-green-400">good</div>
                    </div>
                </div>

                <!-- Pop up section -->
                <div class="bg-gray-900 p-4 mt-6 rounded">
                    <div class="flex items-center gap-2 mb-2">
                        <div class="w-6 h-6 bg-white"></div>
                        <div class="w-6 h-6 bg-white"></div>
                        <div class="w-6 h-6 bg-white"></div>
                    </div>
                    <p>Copied backend developer header & footer</p>
                    <div class="text-xs text-gray-400 mt-2">software developer</div>
                    <div class="text-xs text-gray-400">company | news</div>
                </div>

                <!-- Chat icon -->
                <div class="fixed bottom-6 right-6 flex flex-col items-end gap-2">
                    <button class="bg-green-600 text-white px-4 py-2 rounded flex items-center gap-2">
                        chat
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M17 8h2a2 2 0 012 2v7a2 2 0 01-2 2h-6l-4 4v-4H7a2 2 0 01-2-2v-1" />
                        </svg>
                    </button>
                    <div class="bg-gray-900 p-2 rounded text-sm">
                        <div class="text-red-500">bad</div>
                        <div class="text-green-500">good</div>
                        <div class="text-blue-500">okay-ish</div>
                    </div>
                </div>
            </main>
        </div>
    </body>

    </html>

</body>

</html>