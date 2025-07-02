type LikesButtonProps = {
  likes: number;
};

const LikesButton: React.FC<LikesButtonProps> = ({ likes }) => {
  return <button className="self-end border border-purple-100 rounded hover:cursor-pointer pr-2 pl-2 hover:bg-purple-950">❤️ {likes}</button>;
};

export default LikesButton;
