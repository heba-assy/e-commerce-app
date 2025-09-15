import {
  faShieldHalved,
  faStar,
  faTruckFast,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import reviewAutherImg from "../../assets/images/review-author.png";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { data, Link, useNavigate } from "react-router";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import { toast } from "react-toastify";
import { useState } from "react";
import { sendDataToSignUp } from "../../services/auth-service";
import { checkPasswordStrength } from "../../utils/password-strength";

export default function SignUp() {
  const [isExistError, setExistError] = useState(null);

  {
    /*.........Regex.......... */
  }
  const nameRegex = /^[A-Za-z\u0600-\u06FF]{3,}$/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&_.])[A-Za-z\d@$!%*?&_.]{8,}$/;
  const phoneRegex = /^(010|011|012|015)[0-9]{8}$/;

  {
    /*.........Validation.......... */
  }
  const validationSchema = yup.object({
    name: yup
      .string()
      .required("Name is required")
      .matches(
        nameRegex,
        "Name must be at least 3 characters long and contain only letters."
      ),
    email: yup.string().required("Email is required").email("Email is invalid"),
    password: yup
      .string()
      .required("Password is required")
      .matches(
        passwordRegex,
        "Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character."
      ),
    rePassword: yup
      .string()
      .required("Confirm password is required")
      .oneOf([yup.ref("password")], "Passwords should be the same"),
    phone: yup
      .string()
      .required("Phone number is required")
      .matches(phoneRegex, "Please enter a valid phone number"),
    terms: yup
      .boolean()
      .oneOf([true], "You must agree to our terms and conditions"),
  });

  {
    /*......... Navigation => To Login Page .......... */
  }
  const navigate = useNavigate();

  async function handleSignUp(values) {
    try {
      const response = await sendDataToSignUp(values);
      if (response.success) {
        toast.success("Your Account has been created");
        setTimeout(() => {
          navigate("/login");
        }, 3000);
      }
    } catch (error) {
      setExistError(error.message);
    }
  }

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "",
      terms: false,
    },
    validationSchema,
    onSubmit: handleSignUp,
  });

  const passwordFeedback = checkPasswordStrength(formik.values.password);

  return (
    <>
      <main className="py-12">
        <div className="container grid lg:grid-cols-2 lg:gap-12">
          {/* Left Side */}
          <div className="space-y-8 py-10">
            <div className="welcome-msg">
              <h2 className="text-4xl font-bold">
                Welcome to <span className="text-[#16a34a]">FreshCart</span>
              </h2>
              <p className="text-lg mt-2">
                Join thousands of happ customers who enjoy fresh groceries
                delivered <br />
                right to their doorstep.
              </p>
            </div>

            <div>
              <ul className="*:flex *:items-center *:gap-3 space-y-5">
                <li>
                  <div className="icon bg-[#bbf7d0] rounded-full text-xl size-12 flex justify-center items-center text-[#16a34a]">
                    <FontAwesomeIcon icon={faStar} className="" />
                  </div>
                  <div className="content">
                    <h3 className="font-semibold">Premium Quality</h3>
                    <p className="text-gray-600">
                      Premium quality products sourced from trusted suppliers
                    </p>
                  </div>
                </li>

                <li>
                  <div className="icon bg-[#bbf7d0] rounded-full text-xl size-12 flex justify-center items-center text-[#16a34a]">
                    <FontAwesomeIcon icon={faTruckFast} />
                  </div>
                  <div className="content">
                    <h3 className="font-semibold">Fast Delivery</h3>
                    <p className="text-gray-600">
                      Premium quality products sourced from trusted suppliers
                    </p>
                  </div>
                </li>

                <li>
                  <div className="icon bg-[#bbf7d0] rounded-full text-xl size-12 flex justify-center items-center text-[#16a34a]">
                    <FontAwesomeIcon icon={faShieldHalved} />
                  </div>
                  <div className="content">
                    <h3 className="font-semibold">Secure Shopping</h3>
                    <p className="text-gray-600">
                      Your Data and payments are completly secure
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="review bg-white shadow-md p-6 rounded-xl">
              <div className="flex items-center gap-3">
                <img
                  src={reviewAutherImg}
                  className="size-12 rounded-full"
                  alt="sarah johnson profile img"
                />
                <div>
                  <h3>Sarah Johnson</h3>
                  <div className="rating *:text-yellow-400">
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                  </div>
                </div>
              </div>
              <blockquote className="text-gray-700 italic mt-4">
                <p>
                  "FreshCart has transformed my shopping experience. The quality
                  of the products is always in time. Highly recommend!"
                </p>
              </blockquote>
            </div>
          </div>
          {/* Right Side  => Form */}
          <div className="bg-white shadow-xl p-10 space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-semibold">Create Your Account</h2>
              <p className="mt-1">Start your fresh journey with us today</p>
            </div>

            <div className="flex *:flex *:items-center *:justify-center *:gap-2 *:w-full gap-2 *:hover:bg-gray-100 *:transition-colors *:duration-200">
              <button className="btn bg-transparent border border-gray-400/40">
                <FontAwesomeIcon icon={faGoogle} className="text-red-500" />
                <span>Google</span>
              </button>

              <button className="btn bg-transparent border border-gray-400/40">
                <FontAwesomeIcon icon={faFacebook} className="teext-blue-600" />
                <span>Facebook</span>
              </button>
            </div>

            <div className="relative w-full h-0.5 bg-gray-300/40">
              <span className="absolute left-1/2 top-1/2 -translate-1/2 bg-white px-4">
                or
              </span>
            </div>

            <form className="space-y-7" onSubmit={formik.handleSubmit}>
              <div className="name flex flex-col gap-1">
                <label htmlFor="name">Name*</label>
                <input
                  className="form-control"
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Ali"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />

                {formik.touched.name && formik.errors.name && (
                  <p className="text-red-500">*{formik.errors.name}</p>
                )}
              </div>

              <div className="email flex flex-col gap-1">
                <label htmlFor="email">Email*</label>
                <input
                  className="form-control"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="ali@example.com"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />

                {formik.touched.email && formik.errors.email && (
                  <p className="text-red-500">*{formik.errors.email}</p>
                )}

                {isExistError && (
                  <p className="text-red-500">*{isExistError}</p>
                )}
              </div>

              <div className="phone flex flex-col gap-1">
                <label htmlFor="phone">Phone*</label>
                <input
                  className="form-control"
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="+2 012 3456 7891"
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />

                {formik.touched.phone && formik.errors.phone && (
                  <p className="text-red-500">*{formik.errors.phone}</p>
                )}
              </div>

              <div className="password flex flex-col gap-1">
                <label htmlFor="password">Password*</label>
                <input
                  className="form-control"
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Create a strong password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />

                {formik.values.password && (
                  <div className="password-strength flex items-center gap-2">
                    <div className="bar w-full h-1 bg-gray-200 rounded-lg overflow-hidden">
                      <div
                        className={`progress-bar ${passwordFeedback.width} ${passwordFeedback.background} h-full`}
                      ></div>
                    </div>
                    <span className="text-nowrap w-28 text-center">{passwordFeedback.text}</span>
                  </div>
                )}

                {formik.touched.password && formik.errors.password ? (
                  <p>*{formik.errors.password}</p>
                ) : (
                  <p className="text-sm mt-2">
                    Must be at leat 8 characters with numbers and symbols
                  </p>
                )}
              </div>

              <div className="rePassword flex flex-col gap-1">
                <label htmlFor="rePassword">Confirm Password*</label>
                <input
                  className="form-control"
                  type="password"
                  id="rePassword"
                  name="rePassword"
                  placeholder="Confirm your password"
                  value={formik.values.rePassword}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />

                {formik.touched.rePassword && formik.errors.rePassword && (
                  <p className="text-red-500">*{formik.errors.rePassword}</p>
                )}
              </div>

              <div className="terms flex flex-col">
                <div className="flex items-center gap-2">
                  <input
                    className="accent-[#16a34a] size-4"
                    type="checkbox"
                    id="terms"
                    value={formik.values.terms}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />

                  <label htmlFor="terms">
                    I agree to the{" "}
                    <Link to={`/terms`} className="text-[#16a34a] underline">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link
                      to={`/privacy-policy`}
                      className="text-[#16a34a] underline"
                    >
                      Privacy Policy
                    </Link>
                    *
                  </label>
                </div>

                {formik.touched.terms && formik.errors.terms && (
                  <p className="text-red-500 mt-2">*{formik.errors.terms}</p>
                )}
              </div>

              <button
                type="submit"
                className="btn bg-[#16a34a] hover:bg-[#15803d] text-white flex items-center gap-2 w-full justify-center"
              >
                <FontAwesomeIcon icon={faUserPlus} />
                <span>Create My Account</span>
              </button>
            </form>

            <p className="text-center pt-8 border-t border-t-gray-300/50">
              Already have an account?{" "}
              <Link to={`/login`} className="text-[#16a34a] underline">
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
