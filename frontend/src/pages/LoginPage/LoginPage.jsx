import { Form } from "../../components/ui/Form/Form";
import { FormInput } from "../../components/ui/FormInput/FormInput";
import tailcssStyled from "../../shared/tailcssStyled";

const LoginPage = () => {
  const {buttons} = tailcssStyled;
  const handlerForm = (data) => {
    console.log(data)
  }
  return (
    <div className="container mx-auto">
      <div className="text-xl mb-4">Вход</div>
      <Form onSumbit={handlerForm}>
        <FormInput 
          name="login" 
          classes="mb-4" 
        />
        <FormInput 
          name="password"
          classes="mb-4" 
        />
        
        <button className={`${buttons.base} ${buttons.sizes.md} ${buttons.variants.primary}`}>Отправить</button>
      </Form>
    </div>
  );
};

export default LoginPage;
