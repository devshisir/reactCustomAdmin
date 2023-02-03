import { 
    React,
    useForm,
    useDispatch,
    useNavigate,
    useSelector,
    useEffect,
    useState,
} from '../../utils/GlobalExport';

import {LoginAction} from '../../store/slice/auth/AuthSlice';

function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const checkToken = useSelector((state) => state.auth.isAuthenticate)
    const ErrorMessage = useSelector((state) => state.auth.errorMessage)
    const ActionLoading = useSelector((state) => state.auth.loading)
    // user login functions
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: { 
            email: "", 
            password: ""
        },
    });
    // login submit
    const LoginSubmit = (data) => {
        dispatch(LoginAction(data))
        .unwrap()
        .then((res) =>{
            if(res.status_code === 401){
                console.log('credential not match');
            }else{
                console.log(res)
                navigate('/dashboard');
            }
            
        })
        .catch((error) =>{
            console.log(error)
        })
    }

    useEffect(() => {
        if(checkToken){
            navigate('/dashboard');
        }else{
            navigate('/login');
        }
    }, [checkToken,navigate])
    
    // password toggle function
    const [passwordShow,setPasswordShow] = useState(false);
    const togglePassword = () =>{
        setPasswordShow(passwordShow ? false : true);
    }

    return (
        <>
            <div className="auth-bg" style={{ minHeight: '100vh' }}>
                <div className="d-flex flex-column flex-root" style={{ minHeight: '100vh' }}>
                    <div className="d-flex flex-column flex-lg-row flex-column-fluid">
                        <div className="d-flex flex-column flex-lg-row-fluid py-10">
                            <div className="d-flex flex-center flex-column flex-column-fluid">
                                <div className="w-lg-500px p-10 p-lg-15 mx-auto">
                                    
                                    <form onSubmit={handleSubmit(LoginSubmit)} className="form w-100">
                                        <div className="text-center mb-10">
                                            <h1 className="text-dark mb-3">
                                                Sign In to Craft </h1>
                                            <div className="text-gray-400 fw-semibold fs-4">
                                                New Here?

                                                <a href="/" className="link-primary fw-bold">
                                                    Create an Account
                                                </a>
                                            </div>
                                        </div>
                                        {ErrorMessage && 
                                            <>
                                                <p className='text-danger mb-4 text-center' style={{ fontWeight: '700', fontSize: '12px' }}>{ErrorMessage.message}</p>
                                            </>
                                        }
                                        <div className="fv-row mb-10">
                                            <label className="form-label fs-6 fw-bold text-dark">Email</label>
                                            <input
                                            {...register("email", {
                                                required: {
                                                    value : 'required',
                                                    message: 'Please enter your email!'
                                                },
                                                pattern: {
                                                    value : /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
                                                    message: 'Enter valid email'
                                                },
                                            })}
                                            className={`form-control form-control-lg form-control-solid ${errors.email ? 'is-invalid' : ''} ${errors.email ? 'is-valid' : ''}`} type="text" name="email"
                                                autoComplete="off" placeholder='Enter your email' />
                                            <div className="error-message">
                                                {errors?.email && (
                                                    <h6 className="invalid-feedback d-block mt-5">
                                                        {errors.email.message}
                                                    </h6>
                                                )}
                                            </div>
                                        </div>

                                        <div className="mb-10 fv-row fv-plugins-icon-container" data-kt-password-meter="true">
                                            <div className="mb-1">
                                                <label className="form-label fw-semibold fs-6 mb-2">
                                                    Password
                                                </label>
                                                <div className="position-relative mb-3">
                                                    <input className="form-control form-control-lg form-control-solid" type={passwordShow ? "text" : "password"}  placeholder="Enter your password" name="new_password" autoComplete="off"
                                                    {...register("password", { 
                                                        required: {
                                                            value : 'required',
                                                            message: 'Please enter your password!'
                                                        },
                                                        minLength:{
                                                            value: 8,
                                                            message: 'Password must be 8 chracter ',
                                                        }
                                                    })}
                                                    />

                                                    <span className="btn btn-sm btn-icon position-absolute translate-middle top-50 end-0 me-n2" data-kt-password-meter-control="visibility" onClick={togglePassword}>
                                                        {!passwordShow && <i className="bi bi-eye-slash fs-2"></i>}
                                                        {passwordShow && <i className="bi bi-eye fs-2"></i>}
                                                    </span>
                                                </div>
                                                <div className="error-message">
                                                {errors?.password && (
                                                    <h6 className="invalid-feedback d-block mt-5">
                                                        {errors.password.message}
                                                    </h6>
                                                )}
                                            </div>
                                            </div>
                                        </div>

                                        <div className="text-center">
                                            <button type="submit" id="kt_sign_in_submit" className={`btn btn-lg btn-primary w-100 mb-5 ${ActionLoading ? 'disabled' : ''}`}>
                                                {!ActionLoading &&
                                                <span className="indicator-label">
                                                    Login
                                                </span>
                                                }
                                                {ActionLoading && 
                                                <span className="indicator-progress" style={{ display: 'block' }}>
                                                    Please wait... <span
                                                        className="spinner-border spinner-border-sm align-middle ms-2"></span>
                                                </span>
                                                }
                                                

                                                
                                            </button>
                                            <div className="text-center text-muted text-uppercase fw-bold mb-5">or</div>
                                            <a href="/" className="btn btn-flex flex-center btn-light btn-lg w-100 mb-5">
                                                <img alt="Logo" src="../../assets/media/svg/brand-logos/google-icon.svg"
                                                    className="h-20px me-3" />
                                                Continue with Google
                                            </a>
                                            <a href="/" className="btn btn-flex flex-center btn-light btn-lg w-100 mb-5">
                                                <img alt="Logo" src="../../assets/media/svg/brand-logos/facebook-4.svg"
                                                    className="h-20px me-3" />
                                                Continue with Facebook
                                            </a>
                                            <a href="/" className="btn btn-flex flex-center btn-light btn-lg w-100">
                                                <img alt="Logo" src="../../assets/media/svg/brand-logos/apple-black.svg"
                                                    className="theme-light-show h-20px me-3" />
                                                <img alt="Logo" src="../../assets/media/svg/brand-logos/apple-black-dark.svg"
                                                    className="theme-dark-show h-20px me-3" />
                                                Continue with Apple
                                            </a>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login