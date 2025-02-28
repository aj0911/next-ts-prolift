"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AuthLayout } from "@/components/auth-layout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <AuthLayout>
      <div className="space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-bold">Create your account</h1>
          <p className="text-gray-600">Join us to get started</p>
        </div>

        <form className="space-y-4">
          <Input
            label="Email address"
            type="email"
            placeholder="Enter your email"
            required
          />

          <Input
            label="Password"
            type={showPassword ? "text" : "password"}
            placeholder="Create a password"
            required
            showPasswordToggle
            isPasswordVisible={showPassword}
            onPasswordToggle={() => setShowPassword(!showPassword)}
          />

          <Input
            label="Confirm password"
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Re-enter password"
            required
            showPasswordToggle
            isPasswordVisible={showConfirmPassword}
            onPasswordToggle={() =>
              setShowConfirmPassword(!showConfirmPassword)
            }
          />

          <div className="space-y-4">
            <label className="block text-sm font-medium text-gray-700">
              OTP Verification
            </label>
            <div className="flex gap-3">
              <Input
                type="text"
                placeholder="Enter 6-digit OTP"
                className="flex-1"
                maxLength={6}
              />
              <Button variant="outline" type="button">
                Resend
              </Button>
            </div>
            <p className="text-sm text-gray-500">OTP will expire in: 05:00</p>
          </div>

          <Button type="submit" fullWidth>
            <Link href={"/projects"}>Create Account</Link>
          </Button>
        </form>

        <div className="space-y-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-gray-50 text-gray-500">
                Or continue with
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <Button variant="outline" fullWidth>
              <svg className="h-5 w-5" viewBox="0 0 24 24">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
              Google
            </Button>
            <Button variant="outline" fullWidth>
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z" />
              </svg>
              Facebook
            </Button>
          </div>
        </div>

        <div className="text-center space-y-4">
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <Link
              href="/sign-in"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Sign in
            </Link>
          </p>

          <p className="text-xs text-gray-500">
            By signing up, you agree to our{" "}
            <Link
              href="/terms"
              className="text-indigo-600 hover:text-indigo-500"
            >
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link
              href="/privacy"
              className="text-indigo-600 hover:text-indigo-500"
            >
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </AuthLayout>
  );
}
