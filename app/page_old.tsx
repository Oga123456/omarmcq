import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { mcqData } from "@/lib/mcq-data";
import { slugify } from "@/lib/utils";
import Link from "next/link";
import { BookOpen, ChevronsRight } from "lucide-react";

export default function Home() {
  const sections = Object.entries(mcqData);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4 sm:p-8 bg-background">
      <div className="w-full max-w-4xl">
        <header className="text-center mb-10">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-primary tracking-tight">
            MCQ Mastery
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Select a chapter to begin your quiz.
          </p>
        </header>

        <Card className="w-full shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl">Surgical Fundamentals Chapters</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              {sections.map(([sectionName, chapters], index) => (
                <AccordionItem value={`item-${index}`} key={sectionName}>
                  <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                    {sectionName}
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-2 pt-2">
                      {Object.keys(chapters).map((chapterName) => (
                        <li key={chapterName}>
                          <Link href={`/quiz/${slugify(sectionName)}/${slugify(chapterName)}`}
                             className="flex items-center justify-between p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors duration-200 group">
                              <div className="flex items-center">
                                <BookOpen className="h-5 w-5 mr-3 text-primary/70" />
                                <span className="font-medium text-primary">{chapterName}</span>
                              </div>
                              <ChevronsRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-transform duration-200 group-hover:translate-x-1" />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
