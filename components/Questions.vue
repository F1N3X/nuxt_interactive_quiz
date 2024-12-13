<script setup>
    const quizDatas = inject('quizDatas')
    const quiz = inject('quiz')

    function answerQuestion(value) {
        quizDatas.answer(value)
    }

    function reset(){
        quizDatas.reset()
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

            <div>
                <input 
                    type="submit" 
                    value="Reset" 
                    @click="reset()"
                />

                <NuxtLink 
                :to="`/`" 
                >
                <input type="submit" value="Other quiz" />
            </NuxtLink>
            </div>
        </div>
    </div>

    <div v-else>
        <h1>Quiz is over</h1>
        <h2>Your score is {{ quizDatas.quiz.score }} / {{ quizDatas.quiz.questionNumber * 5 }}</h2>
        <NuxtLink 
            :to="`/`" 
        >
            <input type="submit" value="Back to home" />
        </NuxtLink>
    </div>
</div>
</template>