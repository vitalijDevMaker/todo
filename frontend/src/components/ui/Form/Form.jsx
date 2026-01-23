import { FormProvider, useForm } from "react-hook-form";

export const Form = ({ children, onSubmit, customUseForm }) => {
  const methods = customUseForm || useForm();
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
};
