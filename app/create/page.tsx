"use client";

import { useState } from "react";
import { Form } from "../components";
import { IFormData } from "../interfaces";

const Page = () => {
  const [loading, setLoading] = useState(false);

  const createPrompt = (data: IFormData): void => {
    console.log(data);
    setLoading(true);

    // todo: CreateRequest
  };

  return <Form type="Create" loading={loading} handleSubmit={createPrompt} />;
};

export default Page;
