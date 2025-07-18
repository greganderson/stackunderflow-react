import { useEffect, useState } from "react";
import Question from "./components/Question";
import type { QuestionResponse } from "./types";

const App: React.FC = () => {
  const [questions, setQuestions] = useState<QuestionResponse[]>([]);

  useEffect(() => {
    const url: string = "http://localhost:8000/questions";
    const fetchQuestions = async () => {
      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`Failed to fetch questions, got status code ${response.status}`);
        }

        const data: QuestionResponse[] = await response.json();
        setQuestions(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchQuestions();
  }, []);

  return (
    <div className="flex flex-col items-center w-screen">
      <button className="fixed z-10 right-[5%] bottom-[5%] border-1 rounded-full hover:cursor-pointer w-10 h-10 active:bg-purple-900">+</button>
      {questions.map((question, i) => (
        <Question key={i} {...question} />
      ))}
    </div>
  );
};

export default App;
