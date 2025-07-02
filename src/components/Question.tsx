import type { QuestionResponse } from "../types";

const Question: React.FC<QuestionResponse> = ({ title, question, topic = "General", likes, user }) => {
  return (
    <div className="flex justify-center mt-2">
      <div className="bg-gray-800 p-4 rounded w-[75vw]">
        <p className="text-purple-400">{user}</p>
        <div className="flex justify-between border-b border-purple-400">
          <h2 className="text-2xl font-bold">{title}</h2>
          <h3 className="text-sm text-gray-400 italic">{topic}</h3>
        </div>
        <div className="flex flex-col gap-2">
          <p className="pt-2">{question}</p>
          <button className="self-end border border-purple-100 rounded hover:cursor-pointer pr-2 pl-2 hover:bg-purple-950">❤️ {likes}</button>
        </div>
      </div>
    </div>
  );
};

export default Question;
