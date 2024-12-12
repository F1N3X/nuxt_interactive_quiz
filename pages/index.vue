<script setup>
    const quizAll = await queryContent(`quizs`).find()
    provide('quizAll', quizAll)
</script>

<template>
    <Quiz />
</template>