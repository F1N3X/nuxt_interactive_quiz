<script setup>
    const { params } = useRoute()
    const quiz = await queryContent(`quizs/${params.quiz}`).findOne()

    const quizDatas = useQuiz(quiz)
    provide('quizDatas', quizDatas)


</script>

<template>
    <div>
        <Questions />
    </div>
</template>