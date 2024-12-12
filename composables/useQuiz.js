export default function () {
    const quiz = reactive({
        step: 1,
        questionNumber: 0,
        score: 0,
    })

    const answer = (value) => {
        console.log(value)
        if (value === true) {
            quiz.score++
        }
        quiz.step++
    }

    return {
        quiz,
        answer,
    }
}