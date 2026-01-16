import { FormProvider, useForm } from "react-hook-form"

export const Form = ({children, onSumbit, customUseForm}) => {
    const methods = customUseForm ? customUseForm : useForm();
    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSumbit)}>
                {children}
            </form>
        </FormProvider>

    )
}