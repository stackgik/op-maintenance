"use client";
import { useState } from "react";
import { Mail, CheckCircle } from "lucide-react";
import Link from "next/link";
import FormHeader from "../FormHeader";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterSchema, RegisterSchemaType } from "@/lib/zod/authSchema";
import FormError from "../FormError";
import { resetPassword } from "@/actions/auth";
import toast from "react-hot-toast";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<RegisterSchemaType>({
    mode: "all",
    resolver: zodResolver(RegisterSchema),
  });

  const onHandleSubmit = async (data: RegisterSchemaType) => {
    try {
      setEmail(data.email);
      await resetPassword(data.email);
    } catch (err) {
      toast.error("Something went wrong, retry");
    } finally {
      reset();
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <FormHeader />

        {/* Forgot Password Form */}
        <div className="bg-white rounded-2xl p-8 border border-gray-100">
          {!isSubmitSuccessful ? (
            <>
              <h1 className="text-2xl text-gray-900 mb-2">Forgot Password?</h1>
              <p className="text-gray-600 mb-6">
                Enter your email address and we'll send you a link to reset your
                password.
              </p>

              <form
                onSubmit={handleSubmit(onHandleSubmit)}
                className="space-y-4"
              >
                {/* Email Input */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm text-gray-700 mb-2"
                  >
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      id="email"
                      type="email"
                      {...register("email")}
                      placeholder="you@lagride.ng"
                      className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4096FF] focus:border-transparent transition-all"
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    * Only @lagride.ng email addresses are allowed
                  </p>

                  {errors.email && <FormError msg={errors.email.message} />}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-[#4096FF] text-white rounded-lg hover:bg-[#2575e8] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending Reset Link..." : "Send Reset Link"}
                </button>
              </form>
            </>
          ) : (
            <div className="text-center py-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h2 className="text-2xl text-gray-900 mb-2">Check Your Email</h2>
              <p className="text-gray-600 mb-6">
                We've sent a password reset link to <strong>{email}</strong>
              </p>
              <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg text-left mb-6">
                <p className="text-sm text-blue-800">
                  📧 Didn't receive the email? Check your spam folder or try
                  again in a few minutes.
                </p>
              </div>
              <Link
                href="/"
                className="inline-block w-full py-3 bg-[#4096FF] text-white rounded-lg hover:bg-[#2575e8] transition-all text-center"
              >
                Back to Login
              </Link>
            </div>
          )}

          {/* Links */}
          {!isSubmitSuccessful && (
            <div className="mt-6 pt-6 border-t border-gray-200 text-center">
              <p className="text-gray-600">
                Remember your password?{" "}
                <Link
                  href="/"
                  className="text-[#4096FF] hover:text-[#2575e8] transition-colors"
                >
                  Sign in here
                </Link>
              </p>
            </div>
          )}
        </div>

        {/* Back to Home */}
        <div className="text-center mt-6">
          <Link
            href="/"
            className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
