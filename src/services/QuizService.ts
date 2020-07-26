import { QuizType, QuestionType } from "../types/QuizTypes"

const shuffleArray = (array: any[]) =>
    [...array].sort(() => Math.random() - 0.5)

export const getQuiz = async (question: number, level: string): Promise<QuizType[]> => {
    const res = await fetch(`https://opentdb.com/api.php?amount=${question}&difficulty=${level}&type=multiple`)
    const { results } = await res.json()

    const quiz: QuizType[] = results.map(( questionObj: QuestionType ) =>{
        const { correct_answer, incorrect_answers } = questionObj
        return{
            question: questionObj.question,
            answer: questionObj.correct_answer,
            correct_answer: questionObj.correct_answer,
            option: shuffleArray(incorrect_answers.concat(correct_answer))
        }
    })
    return quiz
}
