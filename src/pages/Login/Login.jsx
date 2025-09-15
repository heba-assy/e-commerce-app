import {
  faClock,
  faEyeSlash,
  faLock,
  faShieldHalved,
  faTruck,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import loginImage from "../../assets/images/login-img.png";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Link, useLocation, useNavigate } from "react-router";
import { faEnvelope, faEye, faStar } from "@fortawesome/free-regular-svg-icons";
import { useFormik } from "formik";
import * as yup from "yup";
import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { sendDataToLogin } from "../../services/auth-service";
import { AuthContext } from "../../components/Context/Auth.context";

export default function Login() {
  const location = useLocation();
  const from = location.state?.from || "/";

  const { setToken } = useContext(AuthContext);

  const navigate = useNavigate();
  const [incredentialsMsg, setIncredentialsMsg] = useState(null);
  const [isShownPassword, setIsShownPassword] = useState(false);

  function togglePasswordVisibility() {
    setIsShownPassword(!isShownPassword);
  }

  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&_.])[A-Za-z\d@$!%*?&_.]{8,}$/;

  const validationSchema = yup.object({
    email: yup.string().required("Email is required").email("Email is invalid"),
    password: yup
      .string()
      .required("Password is required")
      .matches(
        passwordRegex,
        "Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character."
      ),
  });

  async function handleLogin(values) {
    try {
      const response = await sendDataToLogin(values);

      if (response.success) {
        toast.success("Welcome Back");
        setToken(response.data.token);
        {
          /* Save the token in localStorage so the user stays logged in even after page refresh */
        }
        if (values.rememberMe) {
          localStorage.setItem("token", response.data.token);
        } else {
          sessionStorage.setItem("token", response.data.token);
        }

        setTimeout(() => {
          navigate(from);
        }, 1000);
      }
    } catch (error) {
      setIncredentialsMsg(error.message);
    }
  }

  function handleChange(e) {
    setIncredentialsMsg("");
    formik.handleChange(e);
  }

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
    validationSchema,
    onSubmit: handleLogin,
  });

  return (
    <>
      <main className="py-16">
        <div className="container grid lg:grid-cols-2 lg:gap-12 lg:max-w-6xl items-center">
          {/* Left side */}
          <div className="text-center space-y-4 md:mb-10">
            <img
              src={loginImage}
              alt="login image"
              className="w-full h-96 object-cover shadow-lg rounded-2xl mx-auto"
            />

            <h2 className="font-bold text-3xl">Fresh Groceries Delivered</h2>

            <p className="text-lg">
              Join thousands of happy customers who trust FreshCart for their
              daily grocery needs
            </p>

            <div className="flex items-center justify-center gap-8 *:flex *:items-center *:gap-2">
              <div>
                <FontAwesomeIcon icon={faTruck} className="text-[#16a34a]" />
                <span>Free Delivery</span>
              </div>

              <div>
                <FontAwesomeIcon
                  icon={faShieldHalved}
                  className="text-[#16a34a]"
                />
                <span>Secure Payment</span>
              </div>

              <div>
                <FontAwesomeIcon icon={faClock} className="text-[#16a34a]" />
                <span>24/7 Support</span>
              </div>
            </div>
          </div>
          {/* Right Side  => Form */}
          <div className="bg-white shadow-xl p-10 space-y-8">
            <h1 className="text-4xl font-bold text-center mb-5">
              <span className="text-[#16a34a]">Fresh</span>Cart
            </h1>

            <div className="text-center">
              <h2 className="text-3xl font-semibold">Welcome Back</h2>
              <p className="mt-2">
                Sign in continue your fresh shopping experience
              </p>
            </div>
            {/* Social Login */}
            <div className="space-y-3 *:py-3 *:bg-transparent *:hover:bg-[#f0fdf4] *:transition-colors *:duration-200 *:border-1 *:border-gray-300 *:hover:border-[#16a34a]">
              <button className="btn w-full flex items-center gap-3 justify-center ">
                <FontAwesomeIcon
                  icon={faGoogle}
                  className="text-red-500 text-lg"
                />
                <span className="font-medium ">Continue with Google</span>
              </button>

              <button className="btn w-full flex items-center gap-3 justify-center ">
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="text-blue-600 text-lg"
                />
                <span className="font-medium ">Continue with Facebook</span>
              </button>
            </div>

            <div className="relative w-full h-0.5 bg-gray-300/40 text-sm">
              <span className="absolute top-1/2 left-1/2 -translate-1/2 px-4 bg-white text-gray-500">
                OR CONTINUE WITH EMAIL
              </span>
            </div>

            <form className="space-y-8" onSubmit={formik.handleSubmit}>
              <div className=" flex flex-col gap-2">
                <label
                  htmlFor="email"
                  className="text-sm font-semibold text-gray-700"
                >
                  Email Address
                </label>
                <div className="relative ">
                  <input
                    className="form-control pl-8 w-full"
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="absolute top-1/2 left-4 -translate-1/2 text-gray-500/60"
                  />
                </div>

                {formik.touched.email && formik.errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    *{formik.errors.email}
                  </p>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="text-sm font-semibold text-gray-700"
                  >
                    Password
                  </label>
                  <Link
                    to={"/forget-password"}
                    className="text-[#16a34a] text-sm"
                  >
                    Forgot Password?
                  </Link>
                </div>
                <div className="relative">
                  <input
                    className="form-control w-full pl-8"
                    type={isShownPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                    value={formik.values.password}
                    onChange={handleChange}
                    onBlur={formik.handleBlur}
                  />

                  <FontAwesomeIcon
                    icon={faLock}
                    className="absolute top-1/2 left-4 -translate-1/2 text-gray-500/60"
                  />

                  {isShownPassword ? (
                    <FontAwesomeIcon
                      icon={faEyeSlash}
                      className="absolute top-1/2 right-2 -translate-1/2 text-gray-400 hover:text-gray-600 cursor-pointer"
                      onClick={togglePasswordVisibility}
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon={faEye}
                      className="absolute top-1/2 right-2 -translate-1/2 text-gray-400 hover:text-gray-600 cursor-pointer"
                      onClick={togglePasswordVisibility}
                    />
                  )}
                </div>

                {formik.touched.password && formik.errors.password && (
                  <p className="text-red-500 text-sm">
                    *{formik.errors.password}
                  </p>
                )}

                {incredentialsMsg && (
                  <p className="text-red-500 text-sm ">*{incredentialsMsg}</p>
                )}
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="terms"
                  name="rememberMe"
                  className="accent-[#16a34a] size-4"
                  value={formik.values.rememberMe}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <label htmlFor="terms">Keep me signed in</label>
              </div>

              <button
                type="submit"
                className="btn bg-[#16a34a] hover:bg-[#15803d] text-white w-full"
              >
                Sign in
              </button>
            </form>

            <p className="text-center pt-8 border-t border-t-gray-300/50 mb-6">
              New to FreshCart?{" "}
              <Link to={"/sign-up"} className="text-[#16a34a] ms-1">
                Create an account
              </Link>
            </p>

            <div className="flex justify-center space-x-6 *:flex *:items-center  *:gap-1 text-gray-500 text-xs ">
              <div>
                <FontAwesomeIcon icon={faLock} />
                <span>SSL Secured</span>
              </div>

              <div>
                <FontAwesomeIcon icon={faUsers} />
                <span>50K+ Users</span>
              </div>

              <div>
                <FontAwesomeIcon icon={faStar} />
                <span>4.9 Rating</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
