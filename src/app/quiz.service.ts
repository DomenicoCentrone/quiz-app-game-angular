// src/app/quiz.service.ts

import { Injectable } from '@angular/core';
import { Question } from './quiz.model';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  questions: Question[] = [
    {
      questionText: 'What is 2 + 2?',
      answers: [
        {answerText: '3', isCorrect: false},
        {answerText: '4', isCorrect: true},
        {answerText: '5', isCorrect: false},
        {answerText: '6', isCorrect: false}
      ]
    },
    // ... Aggiungi altre domande qui
  ];

  constructor() { }

  getQuestions() {
    return this.questions;
  }
}
