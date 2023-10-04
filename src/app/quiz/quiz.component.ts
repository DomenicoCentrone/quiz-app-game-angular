// src/app/quiz/quiz.component.ts

import { Component, OnInit } from '@angular/core';
import { Question } from '../quiz.model';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  currentQuestion!: Question;
  currentIndex: number = 0;
  isFinished: boolean = false;
  score: number = 0;

  constructor(private quizService: QuizService) {
    this.currentQuestion = this.quizService.getQuestions()[0];
  }
 

  ngOnInit(): void {
    this.currentQuestion = this.quizService.getQuestions()[this.currentIndex];
  }

  selectAnswer(answer: any) {
    if (answer.isCorrect) {
      this.score++;
    }

    this.currentIndex++;

    if (this.currentIndex < this.quizService.getQuestions().length) {
      this.currentQuestion = this.quizService.getQuestions()[this.currentIndex];
    } else {
      this.isFinished = true;
    }
  }
}
