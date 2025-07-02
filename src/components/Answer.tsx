import type { AnswerResponse } from "../types";
import LikesButton from "./LikesButton";

const Answer: React.FC<AnswerResponse> = ({ response, likes, answered, user }) => {
  return (
    <div className="bg-gray-800 w-[80%] mt-2 p-5">
      <p className="text-purple-400">{user}</p>
      <h1>{response}</h1>
      <div className="flex justify-end">
        <LikesButton likes={likes} />
      </div>
    </div>
  );
};

export default Answer;
