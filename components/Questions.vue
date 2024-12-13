<script setup>
    const quizDatas = inject('quizDatas')

    function answerQuestion(value) {
        quizDatas.answer(value)
    }

    function reset() {
        quizDatas.reset()
    }
</script>

<template>
    <div class="pt-10 px-5">
        <div v-if="quizDatas.quiz.step-1 < quizDatas.quiz.questionNumber">
            <h1 class="text-xl font-bold mb-4 pb-14">Question: {{ quizDatas.quiz.quizData.questions[quizDatas.quiz.step-1].text }}</h1>

            <div>
                <!-- Grille des réponses -->
                <div 
                    class="grid grid-cols-2 gap-4 w-full justify-items-center"
                >
                    <div 
                        v-for="(answer, index) in quizDatas.quiz.quizData.questions[quizDatas.quiz.step-1].answers" 
                        :key="index" 
                        class="flex justify-center w-full"
                    >
                        <button 
                            @click="answerQuestion(answer.isCorrect)" 
                            class="bg-blue-500 hover:bg-blue-400 text-white px-4 py-2 rounded-lg w-3/4"
                        >
                            {{ answer.text }}
                        </button>
                    </div>
                </div>

                <div class="mt-4 text-center pt-20">
                    Question {{ quizDatas.quiz.step }} / {{ quizDatas.quiz.questionNumber }}
                </div>

                <div class="mt-4 flex justify-between">
                    <button 
                        @click="reset()" 
                        class="bg-red-500 text-white px-4 py-2 rounded-lg cursor-pointer"
                    >
                        Reset
                    </button>

                    <NuxtLink :to="`/`">
                        <button class="bg-green-500 text-white px-4 py-2 rounded-lg cursor-pointer">
                            Other quiz
                        </button>
                    </NuxtLink>
                </div>
            </div>
        </div>

        <div v-else class="w-full flex flex-col items-center justify-center">
            <h1 class="text-2xl font-bold mb-4">Quiz is over</h1>
            <h2 class="text-xl mb-4">Your score is {{ quizDatas.quiz.score }} / {{ quizDatas.quiz.questionNumber * 5 }}</h2>
            <NuxtLink :to="`/`">
                <button class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg cursor-pointer">
                    Back to home
                </button>
            </NuxtLink>
        </div>
    </div>
</template>
