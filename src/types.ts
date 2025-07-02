export type AnswerResponse = {
  response: string;
  likes: number;
  answered: boolean;
  user: string;
};

export type QuestionResponse = {
  title: string;
  question: string;
  topic?: string;
  likes: number;
  user: string;
  answers: AnswerResponse[];
};
