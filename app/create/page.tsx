"use client";

import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Form } from "../components";
import { IFormData, ISessionUser } from "../interfaces";

const Page = () => {
  const { data: session } = useSession();
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const createPrompt = (data: IFormData): void => {
    console.log(data);
    const user = session?.user as ISessionUser;

    if (user?.id) {
      setLoading(true);

      // todo: CreateRequest
      axios
        .post("/api/prompt", { ...data, userId: user.id })
        .then(() => {
          toast.success("Prompt and tag are saved!)");
          router.push("/");
        })
        .catch((err) => {
          console.log(err);
          toast.error("Something went wrong!(");
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      toast.error(`Can't create post - ${user?.id} userId!(`);
    }
  };

  return <Form type="Create" loading={loading} handleSubmit={createPrompt} />;
};

export default Page;
