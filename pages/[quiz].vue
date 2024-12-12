<script setup>
    const { params } = useRoute()
    const quiz = await queryContent(`quizs/${params.quiz}`).findOne()
    provide('quiz', quiz)

    const quizDatas = useQuiz()
    quizDatas.quiz.questionNumber = quiz["questions"].length
    provide('quizDatas', quizDatas)


</script>

<template>
    <div>
        <Questions />
    </div>
</template>