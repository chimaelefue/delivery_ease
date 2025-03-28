import Joi from "joi";
import { joiSchemas } from "@/utilities/schema";
import { joiResolver } from "@hookform/resolvers/joi";
import { useForm } from "react-hook-form";
import { appToast } from "@/utilities/appToast";
import Icon from '@/assets/image/logo.png';
import Input from "@/common/form/Input";
import { Button, CircularProgress } from "@mui/material";  // Import CircularProgress for loading spinner
import GoogleIcon from "@/common/icons/GoogleIcon";
import CheckBox from "@/common/form/CheckBox";
import { Link } from 'react-router-dom'; 
import routes from '@/navigation/routes';
import { useRegisterUserMutation } from "@/api/apiSlice";
import userStore from '@/utilities/stores'; 
import { useGoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";


interface GoogleUser {
  email: string;
  name: string;
}

interface ApiError {
  data?: {
    message?: string;
  };
  status?: number;
}

// interface ApiSuccess {
//   data?: {
//     message?: string;
//   };
//   status?: number;
// }

interface SignupReq {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  rememberMe: boolean;
}

const schema = Joi.object<SignupReq>({
  firstName: joiSchemas.firstName,
  lastName: joiSchemas.lastName,
  email: joiSchemas.email,
  password: joiSchemas.password,
  rememberMe: Joi.boolean(),
});

const SignUp = (): JSX.Element => {
  const navigate = useNavigate()
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<SignupReq>({ resolver: joiResolver(schema) });


  const [registerUser, { isLoading }] = useRegisterUserMutation();

  const onSubmit = handleSubmit(async (data) => {
    try {
      const response = await registerUser({
        first_name: data.firstName,
        last_name: data.lastName,
        email: data.email,
        password: data.password,
      }).unwrap();
      const token = response.data?.token;
      const user = { name: response.data.user?.first_name, email: response.data.user?.email };
      const userType = 'user';
      userStore.loginUser(token, user, userType);
      appToast.Success("Sign Up Successful");
      navigate(routes.VERIFY_EMAIL);
    } catch (error) {
      const typedError = error as ApiError;   
      const errorMessage = typedError?.data?.message || "Sign Up Failed. Please try again.";     
      appToast.Error(errorMessage)
    }
  });

  const onGoogleSuccess = async (response: any) => {
    try {
      const { credential } = response;
      const googleUser: GoogleUser = jwtDecode<GoogleUser>(credential);

      // Call the registration API with Google details
      const apiResponse = await registerUser({
        first_name: googleUser.name.split(" ")[0],
        last_name: googleUser.name.split(" ")[1] || "",
        email: googleUser.email,
        password: "", // May need modification if backend requires password
      }).unwrap();

      const token = apiResponse.data?.token;
      const user = { email: apiResponse.data.user?.email };
      userStore.loginUser(token, user, 'user');
      appToast.Success("Google Sign-Up Successful");
      navigate(routes.usersRoutes.DASHBOARD);
    } catch (error) {
      const errorMessage = (error as ApiError)?.data?.message || "Google Sign-Up failed. Please try again.";
      appToast.Error(errorMessage);
    }
  };

  const onGoogleFailure = () => {
    appToast.Error("Google Sign-Up failed. Please try again.");
  };

  const googleSignup = useGoogleLogin({
    onSuccess: onGoogleSuccess,
    onError: onGoogleFailure,
  });

  return (
    <div className="h-screen bg-successActiveColorLight">
      {/* Image at the top */}
      <div className="p-6 mb-4 md:my-auto">
        <img src={Icon} alt="Delivery Logo" className="w-auto h-6 sm:h-4 lg:h-12" />
      </div>

      <div className="flex flex-col items-center justify-center h-[80%] mx-2 lg:mx-auto">
        <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md lg:max-w-lg">
          <div className="mb-6">
            <h1 className="text-2xl font-bold">Create an account</h1>
            <p className="text-gray-600">Please enter your details</p>
          </div>

          <form onSubmit={onSubmit}>
            <div className="flex flex-col lg:flex-row lg:gap-x-6">
              <Input
                placeholder="First Name"
                name="firstName"
                register={register}
                error={errors.firstName}
              />
              <Input
                placeholder="Last Name"
                name="lastName"
                register={register}
                error={errors.lastName}
              />
            </div>

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
            
            <div className="my-4">
              <CheckBox id="rememberMe" label="Remember me" register={register} />
            </div>

            {/* Button with loading spinner */}
            <Button 
              fullWidth 
              type="submit" 
              variant="contained"
              disabled={isLoading}  // Disable the button while loading
            >
              {isLoading ? (
                <>
                  <CircularProgress size={24} color="inherit" />  {/* Show spinner */}
                  &nbsp;Creating Account...  {/* Optional text update */}
                </>
              ) : (
                'Create Account'
              )}
            </Button>

            <p className="text-center my-4 text-base md:text-lg">Already have an account? <Link to={routes.LOGIN}> <span className="font-bold">Login</span> </Link></p>
            
            <p className="font-bold text-sm md:text-lg text-center mb-2">Or</p>

            <Button
              fullWidth
              variant="outlined"
              startIcon={<GoogleIcon />}
              className="my-2"
              size="small"
              sx={{
                borderColor: '#d0d5dd',
                color: '#344054',
              }}
              onClick={() => googleSignup()}
            >
              Continue with Google
            </Button>
            
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
