"use client";

import Link from "next/link";
import { IFormData } from "../interfaces";
import { FC, FormEvent, useState } from "react";

interface IForm {
  handleSubmit: (data: IFormData) => void;
  loading: boolean;
  type: "Create" | "Edit";
}

const Form: FC<IForm> = ({ type, loading, handleSubmit }) => {
  const [data, setData] = useState<IFormData>({ prompt: "", tag: "" });

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSubmit(data);
    setData({ prompt: "", tag: "" });
  };

  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{type} Post</span>
      </h1>
      <p className="desc text-left max-w-md">
        {type} and share amazing prompts with the world, and let your imagination run wild with any AI-powered platform
      </p>

      <form onSubmit={submitHandler} className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism">
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">Your AI Prompt</span>

          <textarea
            value={data.prompt}
            onChange={(e) => setData({ ...data, prompt: e.target.value })}
            placeholder="Write your post here"
            required
            className="form_textarea "
          />
        </label>

        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Field of Prompt <span className="font-normal">(#product, #webdevelopment, #idea, etc.)</span>
          </span>
          <input
            value={data.tag}
            onChange={(e) => setData({ ...data, tag: e.target.value })}
            type="text"
            placeholder="#Tag"
            required
            className="form_input"
          />
        </label>

        <div className="flex-end mx-3 mb-5 gap-4">
          <Link href="/" className="text-gray-500 text-sm">
            Cancel
          </Link>

          <button
            type="submit"
            disabled={loading}
            className="px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white"
          >
            {loading ? `${type}ing...` : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
