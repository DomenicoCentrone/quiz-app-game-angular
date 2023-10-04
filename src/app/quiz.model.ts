// src/app/quiz.model.ts

export interface Question {
    questionText: string;
    answers: Answer[];
}

export interface Answer {
    answerText: string;
    isCorrect: boolean;
}
