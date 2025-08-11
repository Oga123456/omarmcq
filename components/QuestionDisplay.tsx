'use client';

import type { Question } from '@/lib/mcq-data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { CheckCircle2, XCircle } from 'lucide-react';

interface QuestionDisplayProps {
  question: Question;
  questionIndex: number;
  userAnswer: string | undefined;
  onAnswerSelect: (questionIndex: number, choice: string) => void;
}

export default function QuestionDisplay({ question, questionIndex, userAnswer, onAnswerSelect }: QuestionDisplayProps) {
  const isAnswered = userAnswer !== undefined;
  
  const getChoiceVariant = (choice: string) => {
    if (!isAnswered) return "outline";
    const choiceLetter = choice.charAt(0);
    if (choiceLetter === question.answer) return "correct";
    if (choiceLetter === userAnswer) return "incorrect";
    return "outline";
  };
  
  const getIcon = (choice: string) => {
    if (!isAnswered) return null;
    const choiceLetter = choice.charAt(0);
    if (choiceLetter === question.answer) return <CheckCircle2 className="h-5 w-5 text-green-600" />;
    if (choiceLetter === userAnswer) return <XCircle className="h-5 w-5 text-destructive" />;
    return null;
  }

  return (
    <Card className="w-full shadow-md animate-in fade-in duration-500">
      <CardHeader>
        <CardTitle className="text-xl leading-relaxed">
          {question.question_number}. {question.question}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3">
          {question.choices.map((choice, index) => {
            const variant = getChoiceVariant(choice);
            return (
              <li key={index}>
                <button
                  onClick={() => onAnswerSelect(questionIndex, choice)}
                  disabled={isAnswered}
                  className={cn(
                    "w-full text-left p-4 border rounded-lg transition-all duration-200 flex justify-between items-center",
                    "disabled:cursor-not-allowed disabled:opacity-100",
                    variant === 'outline' && "bg-background hover:bg-secondary/80",
                    variant === 'correct' && "bg-green-100 border-green-400 text-green-900 dark:bg-green-900/30 dark:border-green-700 dark:text-green-200",
                    variant === 'incorrect' && "bg-destructive/10 border-destructive text-destructive"
                  )}
                >
                  <span className="flex-1 pr-4">{choice}</span>
                  {getIcon(choice)}
                </button>
              </li>
            );
          })}
        </ul>
      </CardContent>
    </Card>
  );
}
