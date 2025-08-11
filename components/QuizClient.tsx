"use client";

import { useState, useMemo } from 'react';
import type { ChapterData, Question } from '@/lib/mcq-data';
import { Progress } from "@/components/ui/progress";
import QuestionDisplay from './QuestionDisplay';
import QuizResult from './QuizResult';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface QuizClientProps {
  chapterData: ChapterData;
}

export type Answers = { [key: number]: string };

export default function QuizClient({ chapterData }: QuizClientProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [quizFinished, setQuizFinished] = useState(false);

  const questions = chapterData.questions;
  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswerSelect = (questionIndex: number, choice: string) => {
    setAnswers(prev => ({ ...prev, [questionIndex]: choice.charAt(0) }));
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  const handleFinish = () => {
    setQuizFinished(true);
  };
  
  const score = useMemo(() => {
    return questions.reduce((acc, question, index) => {
      return answers[index] === question.answer ? acc + 1 : acc;
    }, 0);
  }, [answers, questions]);

  if (quizFinished) {
    return <QuizResult questions={questions} answers={answers} score={score} chapterName={chapterData.name} />;
  }

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8 flex flex-col items-center">
      <div className="w-full max-w-4xl">
        <div className="mb-6">
            <p className="text-center text-sm font-medium text-muted-foreground mb-2">
              Question {currentQuestionIndex + 1} of {questions.length}
            </p>
            <Progress value={(currentQuestionIndex + 1) / questions.length * 100} className="w-full h-2" />
        </div>

        <QuestionDisplay
          question={currentQuestion}
          questionIndex={currentQuestionIndex}
          userAnswer={answers[currentQuestionIndex]}
          onAnswerSelect={handleAnswerSelect}
        />

        <div className="mt-8 flex justify-between items-center">
          <Button variant="outline" onClick={handlePrevious} disabled={currentQuestionIndex === 0}>
            <ChevronLeft className="h-4 w-4 mr-2" />
            Previous
          </Button>

          {currentQuestionIndex === questions.length - 1 ? (
            <Button onClick={handleFinish} className="bg-accent hover:bg-accent/90">
              Finish Quiz
            </Button>
          ) : (
            <Button onClick={handleNext}>
              Next
              <ChevronRight className="h-4 w-4 ml-2" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
