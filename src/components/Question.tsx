import type { AnswerResponse, QuestionResponse } from "../types";
import Answer from "./Answer";
import LikesButton from "./LikesButton";

const Question: React.FC<QuestionResponse> = ({ title, question, topic = "General", likes, user, answers }) => {
  return (
    <div className="flex flex-col items-end justify-center mt-2 w-[75vw] drop-shadow-sm drop-shadow-gray-700">
      <div className="bg-gray-800 p-4 rounded w-[100%]">
        <p className="text-purple-400">{user}</p>
        <div className="flex justify-between border-b border-purple-400">
          <h2 className="text-2xl font-bold">{title}</h2>
          <h3 className="text-sm text-gray-400 italic">{topic}</h3>
        </div>
        <div className="flex flex-col gap-2">
          <p className="pt-2">{question}</p>
          <LikesButton likes={likes} />
        </div>
      </div>
      {answers.map((answer: AnswerResponse, i: number) => (
        <Answer key={i} {...answer} />
      ))}
    </div>
  );
};

export default Question;
