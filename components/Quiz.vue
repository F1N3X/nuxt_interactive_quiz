<script setup>
    const quizs = await queryContent("quizs").find()

    const quizDatas = inject('quizDatas')
</script>

<template>
    <div>
        <div v-for="(quiz, index) in quizs" :key="index">
            {{ quiz.title }}

            <NuxtLink 
                :to="`/${quiz.slug}`" 
            >
                <input type="submit" value="Challenge yourself" />
            </NuxtLink>

            {{ quizs[index]["questions"].length }} questions
        </div>

    </div>
</template>