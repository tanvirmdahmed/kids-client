import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash, FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from '../../Providers/AuthProvider';
import useTitle from '../../Hooks/useTitle';
import register from '../../../public/register.json';
import Lottie from 'lottie-react';


const Register = () => {
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);
    useTitle('Register');

    const { createUser, profileUpdate, googleSignIn, githubSignIn, loading } = useContext(AuthContext);
    const navigate = useNavigate();

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const toggleShowConfirm = () => {
        setShowConfirm(!showConfirm);
    };

    const handleRegister = event => {
        setSuccess('');
        setError('');
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const url = form.url.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;

        setError('');
        if (password !== confirm) {
            setError('Your password did not match')
            return
        }
        else if (password.length < 6) {
            setError('password must be 6 characters or longer')
            return
        }


        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                profileUpdate(createdUser, name, url)
                console.log(createdUser);
                setSuccess('You have successfully registered')
                form.reset();
                navigate('/');
            })
            .catch(error => {
                console.log(error);
                setError(error.message)
            })
    }

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const loggedUser = result.user;
                navigate('/')
            })
            .catch(error => {
            })
    };

    const handleGithubSignIn = () => {
        githubSignIn()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate('/')
            })
            .catch(error => {
            })
    }


    return (
        <div className='px-3 md:lg:px-0'>
            <div className="hero bg-image rounded-lg my-12">
                <div className="hero-content flex flex-col md:flex-row lg:flex-row w-full my-10">
                    <div>
                        <Lottie animationData={register} className='w-full'></Lottie>
                    </div>
                    <div>
                        <div className="text-center">
                            <h1 className="text-3xl md:lg:text-5xl font-bold">Please Register!!!</h1>
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <div className='px-8 mt-8'>
                                <button onClick={handleGoogleSignIn} className="btn btn-outline btn-secondary w-full mb-4 gap-2"><FaGoogle></FaGoogle>Register with Google</button>
                                <button onClick={handleGithubSignIn} className="btn btn-outline w-full mb-8 gap-2"><FaGithub></FaGithub> Register with GitHub</button>
                            </div>
                        </div>
                        <div className="flex flex-col w-full border-opacity-50">
                            <div className="divider">OR</div>
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <form onSubmit={handleRegister} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name*</span>
                                    </label>
                                    <input type="text" name='name' placeholder="Your Name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo URL*</span>
                                    </label>
                                    <input type="url" name='url' placeholder="Photo URL" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email*</span>
                                    </label>
                                    <input type="email" name='email' placeholder="Email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password*</span>
                                    </label>
                                    <div className='w-full h-12 relative' >
                                        <input type={showPassword ? 'text' : 'password'} name='password' placeholder="Password" className="input input-bordered border-[#d2d4d7] w-full h-full bg-transparent" required />
                                        {showPassword ? <FaEyeSlash className='text-sky-400 absolute right-5 top-1/2 -translate-y-1/2 cursor-pointer' onClick={toggleShowPassword} /> : <FaEye className='text-sky-600 absolute right-5 top-1/2 -translate-y-1/2 cursor-pointer' onClick={toggleShowPassword} />}
                                    </div>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Confirm Password*</span>
                                    </label>
                                    <div className='w-full h-12 relative' >
                                        <input type={showConfirm ? 'text' : 'password'} name='confirm' placeholder="Confirm Password" className="input input-bordered border-[#d2d4d7] w-full h-full bg-transparent" required />
                                        {showConfirm ? <FaEyeSlash className='text-sky-400 absolute right-5 top-1/2 -translate-y-1/2 cursor-pointer' onClick={toggleShowConfirm} /> : <FaEye className='text-sky-600 absolute right-5 top-1/2 -translate-y-1/2 cursor-pointer' onClick={toggleShowConfirm} />}
                                    </div>
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-outline btn-primary">Register</button>
                                </div>
                                <p className='text-green-500 text-center'>{success}</p>
                                <p className='text-red-500 text-center'>{error}</p>
                                <label className="label">
                                    <p>Already have an Account? <Link to="/login" className='text-blue-600 underline'>Login</Link></p>
                                </label>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;