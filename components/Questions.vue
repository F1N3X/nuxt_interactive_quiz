<script setup>
    const quizDatas = inject('quizDatas')
    const quiz = inject('quiz')

    function answerQuestion(value) {
        quizDatas.answer(value)
    }

</script>



<template>
    <div>
    <div>{{ quizDatas }}</div>

    <div v-if="quizDatas.quiz.step-1 < quizDatas.quiz.questionNumber">

        <h1>Question : {{ quiz["questions"][quizDatas["quiz"]["step"]-1]["text"] }} </h1>

        <div>
            <div v-for="(answer, index) in quiz.questions[quizDatas.quiz.step-1].answers" :key="index">
                <input 
                    type="submit" 
                    :value="answer.text" 
                    @click="answerQuestion(answer.isCorrect)"
                />
            </div>

            <div>
                    Question {{ quizDatas.quiz.step }} / {{ quizDatas.quiz.questionNumber }}
            </div>
        </div>
    </div>

    <div v-else>
        <h1>Quiz is over</h1>
        <h2>Your score is {{ quizDatas.quiz.score }} / {{ quizDatas.quiz.questionNumber }}</h2>
        <NuxtLink 
            :to="`/`" 
        >
            <input type="submit" value="Back to home" />
        </NuxtLink>
    </div>
</div>
</template>