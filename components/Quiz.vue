<script setup>
    const quizs = await queryContent("quizs").find()
</script>

<template>
    <div>
        <div class="grid grid-cols-2 gap-4 p-4 justify-items-center">
            <div 
                v-for="(quiz, index) in quizs" 
                :key="index" 
                class="border p-4 rounded-lg bg-gray-100 shadow-md flex flex-col justify-center items-center text-center w-3/4"
            >
                <h2 class="font-bold text-lg mb-2">{{ quiz.title }}</h2>

                <NuxtLink :to="`/${quiz.slug}`">
                    <button class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">
                        Challenge yourself
                    </button>
                </NuxtLink>

                <p class="text-gray-600 mt-2">
                    {{ quizs[index]["questions"].length }} questions
                </p>
            </div>
        </div>
    </div>
</template>
