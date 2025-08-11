'use client';

import { useEffect, useState } from 'react';
import type { Question } from '@/lib/mcq-data';
import type { Answers } from './QuizClient';
import { getPersonalizedFeedback } from '@/ai/flows/personalized-feedback-tool';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Skeleton } from '@/components/ui/skeleton';

interface QuizResultProps {
  questions: Question[];
  answers: Answers;
  score: number;
  chapterName: string;
}

export default function QuizResult({ questions, answers, score, chapterName }: QuizResultProps) {
  const [feedback, setFeedback] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFeedback = async () => {
      try {
        const incorrectQuestions = questions.filter((q, index) => answers[index] !== q.answer);
        const areasForImprovement = incorrectQuestions.map(q => q.question).join('\n');
        const scorePercentage = (score / questions.length) * 100;
        
        const result = await getPersonalizedFeedback({
          chapterName: chapterName,
          score: scorePercentage,
          areasForImprovement: areasForImprovement || "No specific areas for improvement identified."
        });
        
        setFeedback(result.feedback);
      } catch (e) {
        console.error("Failed to get feedback:", e);
        setError("Could not load personalized feedback at this time.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchFeedback();
  }, [questions, answers, score, chapterName]);

  const scorePercentage = (score / questions.length) * 100;
  let scoreColor = 'text-green-600';
  if (scorePercentage < 75) scoreColor = 'text-yellow-600';
  if (scorePercentage < 50) scoreColor = 'text-destructive';

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8 flex flex-col items-center">
      <div className="w-full max-w-4xl space-y-8">
        <Card className="text-center shadow-xl animate-in fade-in-0 zoom-in-95 duration-500">
          <CardHeader>
            <CardTitle className="text-3xl font-bold">Quiz Complete!</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg text-muted-foreground mb-4">You have completed the chapter: <span className="font-semibold text-primary">{chapterName}</span></p>
            <p className="text-2xl font-semibold text-primary">Your Score:</p>
            <p className={`text-6xl font-extrabold my-4 ${scoreColor}`}>
              {score} / {questions.length}
            </p>
            <p className="text-xl text-muted-foreground">({scorePercentage.toFixed(1)}%)</p>
          </CardContent>
        </Card>

        <Card className="shadow-lg animate-in fade-in-0 zoom-in-95 duration-500 delay-200">
          <CardHeader>
            <CardTitle>Personalized Feedback</CardTitle>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <div className="space-y-3">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
              </div>
            ) : error ? (
              <p className="text-destructive">{error}</p>
            ) : (
              <p className="whitespace-pre-wrap font-body text-base leading-relaxed">{feedback}</p>
            )}
          </CardContent>
        </Card>

        <div className="text-center">
            <Button asChild size="lg">
                <Link href="/">Back to Chapters</Link>
            </Button>
        </div>
      </div>
    </div>
  );
}
