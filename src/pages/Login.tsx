import Joi from "joi";
import { joiSchemas } from "@/utilities/schema";
import { joiResolver } from "@hookform/resolvers/joi";
import { useForm } from "react-hook-form";
import { appToast } from "@/utilities/appToast";
import Icon from '@/assets/image/logo.png';
import Input from "@/common/form/Input";
import { Button } from "@mui/material";
import GoogleIcon from "@/common/icons/GoogleIcon";
import CheckBox from "@/common/form/CheckBox";
import { Link } from 'react-router-dom'; 
import routes from '@/navigation/routes';


interface SignupReq {
  email: string;
  password: string;
  rememberMe: boolean;
}

const schema = Joi.object<SignupReq>({
  email: joiSchemas.email,
  password: joiSchemas.password,
  rememberMe: Joi.boolean(),
});

const Login = (): JSX.Element => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<SignupReq>({ resolver: joiResolver(schema) });

  const onSubmit = handleSubmit(async (data) => {
    console.log({ data });
    appToast.Success("SIGN UP Done");
  });

  return (
    <div className="h-screen bg-successActiveColorLight">
      <div className="p-6 mb-4 md:my-auto">
        <img src={Icon} alt="Delivery Logo" className="w-auto h-6 sm:h-4 lg:h-12" />
      </div>

        <div className="flex flex-col items-center justify-center h-[80%] mx-2 lg:mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md lg:max-w-lg">
                <div className="mb-6">
                <h1 className="text-2xl font-bold">Welcome Favourite Human!</h1>
                <p className="text-gray-600">Please enter your details</p>
                </div>

                <form onSubmit={onSubmit}>               
                    <Input
                        placeholder="Email"
                        name="email"
                        register={register}
                        error={errors.email}
                        type="email"
                    />
                    <Input
                        placeholder="Password"
                        name="password"
                        register={register}
                        error={errors.password}
                        type="password" 
                    />

                    <div className="flex justify-between items-center my-4">
                        <CheckBox id="rememberMe" label="Remember me" register={register} />
                        <p className="text-sm font-bold text-gray-600"> <Link to={routes.FORGOT_PASSWORD_PAGE}>Forget Password</Link></p>
                    </div>

                    <Button fullWidth type="submit">Sign In</Button>

                    <p className="text-center my-4 text-base md:text-lg">Don't have an account? <span className="font-bold"> <Link to={routes.REGISTER_PAGE}>Sign Up</Link></span> </p>
                    
                    <p className="font-bold text-sm md:text-lg text-center mb-2">Or</p>

                    <Button
                        fullWidth
                        variant="outlined"
                        startIcon={<GoogleIcon />}
                        className="my-2"
                        size="small"
                        sx={{
                            borderColor :'#d0d5dd',
                            color:'#344054',
                            }}
                        >
                        Continue with Google
                    </Button>                   
                </form>
            </div>
        </div>
      
    </div>
  );
};

export default Login;
