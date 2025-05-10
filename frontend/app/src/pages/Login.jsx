<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login form</title>
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
</head>

<body>
    <section class="bg-gray-50 min-h-screen flex items-center justify-center">
        <!--Login container-->
        <div class="bg-[#7ad3f62a] flex rounded-2xl shadow-lg max-w-3xl p-4">
            <!--Form-->
            <div class="sm:w-1/2 px-1">
                <h2 class="font-bold text-2xl text-[#4527a5] text-center">Login</h2>
                <p class="text-sm mt-7 text-[#6c57b1] text-opacity-70 text-center">If you already a member, easily log
                    in</p>

                <!--Data entry group-->
                <form class="flex flex-col gap-4" action="">
                    <input class="p-2 mt-8 rounded-xl border" type="text" name="email" placeholder="Your email">
                    <div class="relative">
                        <input class="p-2 mt-8 rounded-xl border w-full" type="password" name="password"
                            placeholder="Your password">
                        <p class="mt-5 text-xs border-b border-gray-400 py-4">
                            <a href="">Forgot Your password?</a>
                        </p>
                    </div>

                    <button class="Login-button rounded-xl text-white py-2">Login</button>
                </form>

                <div class="mt-10 grid grid-cols-3 items-center text-gray-400">
                    <hr class="border-gray-400">
                    <p class="text-center text-sm">OR</p>
                    <hr class="border-gray-400">
                </div>

                <button class="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center text-sm">
                    <img class="w-6 mr-3 mt-1"
                        src="https://media.wired.com/photos/5926ffe47034dc5f91bed4e8/master/pass/google-logo.jpg"
                        alt="">
                    Login width Google
                </button>


                <div class="mt-3 text-xs flex justify-between items-cente">
                    <p>
                        <a href="#">If you dont't have an account?</a>
                    </p>
                    <button class="py-2 px-5 bg-white border rounded-xl">Register</button>
                </div>
            </div>
        </div>
    </section>
</body>

</html>