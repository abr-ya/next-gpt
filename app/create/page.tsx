"use client";

import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Form } from "../components";
import { IFormData } from "../interfaces";

const Page = () => {
  const [loading, setLoading] = useState(false);

  const createPrompt = (data: IFormData): void => {
    console.log(data);
    setLoading(true);

    // todo: CreateRequest
    axios
      .post("/api/prompt", data)
      .then(() => {
        toast.success("Prompt and tag are saved!)");
        // router.push("/trips");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Something went wrong!(");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return <Form type="Create" loading={loading} handleSubmit={createPrompt} />;
};

export default Page;
