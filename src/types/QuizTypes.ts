export type QuestionType ={
    category: string
    correct_answer: string
    difficulty: string
    incorrect_answers: string[]
    question: string
    type: string
}

export type QuizType ={
    question: string
    answer: string
    option: string[]
}

export type QuestionPropsType = {
    questions: string
    options: string[]
}