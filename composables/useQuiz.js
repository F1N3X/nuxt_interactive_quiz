export default function (quizData) {
    const quiz = reactive({
        step: 1,
        questionNumber: quizData.questions.length,
        score: 0.0,
        startTime: Date.now(),
        quizData,
    })

    const answer = (value) => {
        const elapsedTime = (Date.now() - quiz.startTime) / 1000

        let points = 5

        if (elapsedTime > 1) {
            points = Math.max(5 - (elapsedTime - 1), 1); // Réduction après la première seconde
        }

        if (value === true) {
            quiz.score += points; // Ajoute les points calculés
            quiz.score = parseFloat(quiz.score.toFixed(3)); // Garde 3 chiffres après la virgule
        }

        quiz.step++
        quiz.startTime = Date.now();
    }

    const reset = () => {
        quiz.step = 1
        quiz.score = 0
    }

    return {
        quiz,
        answer,
        reset,
    }
}