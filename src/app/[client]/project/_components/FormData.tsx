"use client";
import { Fragment, useState } from "react";

export const FormData = () => {
  const [review, setReview] = useState("");
  const [input, setInput] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      setReview(input);
    }
  };

  const onSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setReview(input);
  };

  return (
    <div className="flex flex-col items-center my-4">
      {!review && (
        <Fragment>
          <h1 className="font-bold text-xl mb-2">Feedback Form</h1>
          <textarea
            className="w-full h-64 p-3 border rounded-md max-w-3xl"
            value={input}
            onChange={handleChange}
            onKeyDown={onKeyDown}
            placeholder="Type your feedback here..."
          />
          <button
            onClick={onSubmit}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-4 rounded"
          >
            Submit
          </button>
        </Fragment>
      )}
      {review && (
        <Fragment>
          <h2 className="font-bold text-xl mt-4 mb-2">Feedback Preview</h2>
          <div className="w-full h-64 p-3 bg-slate-200 rounded-md max-w-3xl">
            {review}
          </div>
        </Fragment>
      )}
    </div>
  );
};
