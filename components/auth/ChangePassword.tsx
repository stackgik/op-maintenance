"use client";

import { useState } from "react";
import { Lock, Eye, EyeOff, CheckCircle, X } from "lucide-react";
import FormHeader from "../FormHeader";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import {
  ChangePasswordSchema,
  ChangePasswordSchemaType,
} from "@/lib/zod/authSchema";
import { updateUser } from "@/actions/auth";
import { useRouter } from "next/navigation";

const ChangePassword = () => {
  const [showNewPassword, setShowNewPassword] = useState(false);
  const router = useRouter();

  //prettier-ignore
  const { register, handleSubmit, formState: { errors, isSubmitting }, watch, reset } = useForm<ChangePasswordSchemaType>({
      mode: "onSubmit",
      resolver: zodResolver(ChangePasswordSchema),
    });

  const onHandleSubmit = async (data: ChangePasswordSchemaType) => {
    try {
      await updateUser(data.password);
      toast.success("Password updated. Redirecting...");
      router.push("/dashboard");
    } catch (err) {
      toast.error("Something went wrong, retry.");
    } finally {
      reset();
    }
  };

  // Password strength validation
  const passwordRequirements = [
    { label: "At least 8 characters", test: (pwd: string) => pwd.length >= 8 },
    {
      label: "Contains uppercase letter",
      test: (pwd: string) => /[A-Z]/.test(pwd),
    },
    {
      label: "Contains lowercase letter",
      test: (pwd: string) => /[a-z]/.test(pwd),
    },
    { label: "Contains number", test: (pwd: string) => /\d/.test(pwd) },
    {
      label: "Contains special character",
      test: (pwd: string) => /[!@#$%^&*(),.?":{}|<>]/.test(pwd),
    },
  ];

  const passwordValue = watch("password", "");

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <FormHeader />

        {/* Change Password Form */}
        <div className="bg-white rounded-2xl p-8 border border-gray-100">
          <h1 className="text-2xl text-gray-900 mb-2">Change Password</h1>
          <p className="text-gray-600 mb-6">
            Please set a new password for your account
          </p>

          {/* Info Notice */}
          <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-sm text-blue-800">
              🔒 For security purposes, you must change your default password
              before accessing the platform.
            </p>
          </div>

          <form onSubmit={handleSubmit(onHandleSubmit)} className="space-y-4">
            {/* New Password Input */}
            <div>
              <label
                htmlFor="newPassword"
                className="block text-sm text-gray-700 mb-2"
              >
                New Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  id="newPassword"
                  type={showNewPassword ? "text" : "password"}
                  placeholder="Enter new password"
                  className="w-full pl-11 pr-12 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4096FF] focus:border-transparent transition-all"
                  {...register("password")}
                />
                <button
                  type="button"
                  onClick={() => setShowNewPassword(!showNewPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showNewPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Password Requirements */}
            {(passwordValue || errors.password) && (
              <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
                <p className="text-sm text-gray-700 mb-3">
                  Password must contain:
                </p>
                <ul className="space-y-2">
                  {passwordRequirements.map((req, index) => {
                    const isValid = req.test(passwordValue);
                    const isFailed = errors.password && !isValid;
                    return (
                      <li
                        key={index}
                        className="flex items-center gap-2 text-sm"
                      >
                        {isValid ? (
                          <CheckCircle className="w-4 h-4 text-green-600 shrink-0" />
                        ) : (
                          <X
                            className={`w-4 h-4 shrink-0 ${isFailed ? "text-red-500" : "text-gray-400"}`}
                          />
                        )}
                        <span
                          className={
                            isValid
                              ? "text-green-700"
                              : isFailed
                                ? "text-red-600"
                                : "text-gray-600"
                          }
                        >
                          {req.label}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 bg-[#4096FF] text-white rounded-lg hover:bg-[#2575e8] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Updating Password..." : "Update Password"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
