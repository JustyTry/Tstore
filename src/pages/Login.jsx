import { useForm } from 'react-hook-form';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const auth = getAuth();
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => CheckValid(data.Email, data.Password);
    const navigate = useNavigate()
    const CheckValid = async (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                navigate('/panel')
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
    };
    return (
        <div className="w-full h-screen flex justify-center items-center">
            <div className="w-4/12 h-3/6 border-2 border-slate-400 rounded-lg">
                <div className="font-semibold text-3xl text-center w-full pt-12">
                    <label>Sign in</label>
                </div>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="h-full w-full flex justify-center items-center flex-col ">
                    <label>Email</label>
                    <input
                        className="border rounded-lg p-1 w-6/12 mb-4"
                        {...register('Email', { required: true })}
                    />
                    <label>Password</label>
                    <input
                        className="border rounded-lg p-1 w-6/12 mb-8"
                        type="password"
                        {...register('Password', { required: true })}
                    />
                    <input
                        className="mt-14 bg-blue-500 rounded-lg p-2 w-2/4 text-white cursor-pointer"
                        type="submit"
                    />
                </form>
            </div>
        </div>
    );
};

export default Login;
