<template>
    <NuxtLayout name="header">
        <div class="font-montserrat flex flex-col items-center justify-center bg-white text-center pt-10">
            <h2 class="text-2xl font-semibold text-gray-700 mb-4">🤔 What did you mean?</h2>
            <p class="text-lg text-gray-600 mb-6">
                I'm sorry, but all I can give you is this :
            </p>
            <h1 class="text-9xl font-bold text-red-500 mb-6">404</h1>
            <p class="text-lg text-gray-600 mb-8">
                Come on, you can do it, try again 😉
            </p>
            <NuxtLink 
                to="/" 
                class="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition-all"
            >
                Back to Home
            </NuxtLink>
        </div>
    </NuxtLayout>
</template>
