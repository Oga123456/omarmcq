
import React from 'react';
import mcqData from '@/lib/mcq-data';

export default function AllQuestionsPage() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>All MCQs</h1>
      {Object.entries(mcqData).map(([chapter, questions]) => (
        <div key={chapter} style={{ marginBottom: '40px' }}>
          <h2>{chapter}</h2>
          <ul>
            {questions.map((q, idx) => (
              <li key={idx} style={{ marginBottom: '10px' }}>
                <strong>{q.question}</strong>
                <ul>
                  {q.options.map((opt, i) => (
                    <li key={i}>{opt}</li>
                  ))}
                </ul>
                <p><em>Answer: {q.answer}</em></p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
