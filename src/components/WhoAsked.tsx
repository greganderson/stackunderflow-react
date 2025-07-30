import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type FormData = {
  title: string;
  question: string;
  topic: string;
  user: string;
};

const WhoAsked: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    title: "",
    question: "",
    topic: "",
    user: "",
  });

  const [open, setOpen] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    fetch("http://localhost:8000/questions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
      mode: "cors",
    });

    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button className="fixed z-10 right-[5%] bottom-[5%] border-1 rounded-full hover:cursor-pointer w-10 h-10 active:bg-purple-900">+</button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>New Question</DialogTitle>
            <DialogDescription>You can ask a question here, should you feel so inclined.</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="user">Username</Label>
              <Input id="user" name="user" value={formData.user} onChange={handleChange} />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="title">Title</Label>
              <Input id="title" name="title" value={formData.title} onChange={handleChange} />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="topic">Topic</Label>
              <Input id="topic" name="topic" value={formData.topic} onChange={handleChange} />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="question">Question</Label>
              <Textarea id="question" name="question" placeholder="Type your message here." value={formData.question} onChange={handleChange} />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Post</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default WhoAsked;
