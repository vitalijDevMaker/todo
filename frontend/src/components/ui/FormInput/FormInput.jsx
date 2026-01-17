import { useFormContext } from "react-hook-form"
import tailcssStyled from "../../../shared/tailcssStyled";

export const FormInput = ({name, classes}) => {
    const {register} = useFormContext();
    return (<input className={tailcssStyled.formControls.base + " " + classes} {...register(name)}></input>)
}