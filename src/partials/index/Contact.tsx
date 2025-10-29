"use client";

import { Button } from "@/components/form/Button/Button";
import sendEmail, {
  SendEmailActionState,
} from "@/app/[locale]/actions/sendEmail";
import { useActionState } from "react";
import { Input } from "@/components/form/Input";
import { Form } from "@/components/form/Form";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const initialState: SendEmailActionState = {
  error: false,
};

export const Contact: React.FC = () => {
  const t = useTranslations("main.contact");
  const [formState, action, isPending] = useActionState(
    sendEmail,
    initialState,
  );
  const formSuccess = !formState.error && !!formState.message;
  const formError = formState.error && formState.message;
  const buttonDisabled = isPending || formSuccess;

  return (
    <section
      id="contato"
      className="mb-6 mt-24 rounded-lg bg-gradient-to-tl from-blue-950 to-blue-900 p-5 print:hidden sm:px-10 sm:py-8"
    >
      <h2 className="mb-6 text-3xl font-bold md:text-4xl">{t("title")}</h2>

      <Form
        action={action}
        className="grid grid-cols-1 grid-rows-3 gap-y-4 md:grid-cols-2 md:gap-x-4"
      >
        <Input
          name="fullName"
          placeholder={t("name.placeholder")}
          label={t("name.label")}
          pattern="^[a-zA-ZÀ-ÿ\s]+$"
          required
          minLength={3}
          maxLength={50}
          className="col-start-1 col-end-2"
        />
        <Input
          name="email"
          placeholder={t("email.placeholder")}
          label={t("email.label")}
          type="email"
          required
          minLength={3}
          maxLength={32}
          className="col-start-1 col-end-2"
        />
        <Input
          name="subject"
          placeholder={t("subject.placeholder")}
          label={t("subject.label")}
          required
          minLength={5}
          maxLength={50}
          className="col-start-1 col-end-2"
        />
        <Input
          as={<textarea className="h-full" />}
          name="content"
          placeholder={t("message.placeholder")}
          label={t("message.label")}
          required
          minLength={10}
          maxLength={500}
          className="row-start-4 md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-4"
        />
        <div className="col-span-2 flex flex-col justify-between gap-2 md:flex-row md:items-center">
          {formError && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-md bg-red-400 px-2 py-1 text-sm text-red-950"
              role="alert"
            >
              {formState.message}
            </motion.p>
          )}
          {formSuccess && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-md bg-green-400 px-2 py-1 text-sm text-green-950"
              role="alert"
            >
              {t("success")}
            </motion.p>
          )}
          <Button
            type="submit"
            disabled={buttonDisabled}
            className="sm:ml-auto"
          >
            {t("submit")}
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.18194 4.18185C6.35767 4.00611 6.6426 4.00611 6.81833 4.18185L9.81833 7.18185C9.90272 7.26624 9.95013 7.3807 9.95013 7.50005C9.95013 7.6194 9.90272 7.73386 9.81833 7.81825L6.81833 10.8182C6.6426 10.994 6.35767 10.994 6.18194 10.8182C6.0062 10.6425 6.0062 10.3576 6.18194 10.1819L8.86374 7.50005L6.18194 4.81825C6.0062 4.64251 6.0062 4.35759 6.18194 4.18185Z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
              ></path>
            </svg>
          </Button>
        </div>
      </Form>
    </section>
  );
};
