import React, { useState } from 'react'

const Login = () => {
  const [currentState, setCurrentState] = useState('Login')
  const [showPassword, setShowPassword] = useState(false)

  const onSubmitHandler = async (event) => {
    event.preventDefault()
  }

  return (
    <form
      onSubmit={onSubmitHandler}
      className="
        flex flex-col items-center
        w-[90%] sm:max-w-md
        mx-auto mt-24
        gap-6
        text-gray-900
      "
    >
      {/* Header */}
      <div className="text-center space-y-2">
        <h1 className="prata-regular text-3xl">
          {currentState === 'Login'
            ? 'Welcome back'
            : 'Create your account'}
        </h1>
        <p className="text-sm text-gray-500">
          {currentState === 'Login'
            ? 'Sign in to continue'
            : 'It only takes a minute'}
        </p>
      </div>

      {/* Inputs */}
      {currentState === 'Register' && (
        <input
          type="text"
          placeholder="Full name"
          required
          className="
            w-full rounded-xl border border-gray-300
            px-4 py-2.5 text-sm
            focus:outline-none focus:ring-1 focus:ring-gray-400
          "
        />
      )}

      <input
        type="email"
        placeholder="Email address"
        required
        className="
          w-full rounded-xl border border-gray-300
          px-4 py-2.5 text-sm
          focus:outline-none focus:ring-1 focus:ring-gray-400
        "
      />

      {/* Password with toggle */}
      <div className="w-full relative">
        <input
          type={showPassword ? 'text' : 'password'}
          placeholder="Password"
          required
          className="
            w-full rounded-xl border border-gray-300
            px-4 py-2.5 text-sm
            focus:outline-none focus:ring-1 focus:ring-gray-400
          "
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="
            absolute right-4 top-1/2 -translate-y-1/2
            text-xs text-gray-500 hover:text-gray-900
          "
        >
          {showPassword ? 'Hide' : 'Show'}
        </button>
      </div>

      {/* Links */}
      <div className="w-full flex justify-between text-xs text-gray-500">
        {currentState === 'Login' && (
          <p className="cursor-pointer hover:text-gray-900 transition">
            Forgot password?
          </p>
        )}

        <p
          onClick={() =>
            setCurrentState(
              currentState === 'Login' ? 'Register' : 'Login'
            )
          }
          className="cursor-pointer hover:text-gray-900 transition"
        >
          {currentState === 'Login'
            ? 'Create an account'
            : 'Already have an account?'}
        </p>
      </div>

      {/* Button */}
      <button
        className="
          w-full rounded-full bg-black
          py-3 text-sm font-medium
          text-white hover:bg-gray-900
          transition
        "
      >
        {currentState === 'Login' ? 'Sign in' : 'Create account'}
      </button>

      {/* Trust hint */}
      <p className="text-[11px] text-gray-400 text-center max-w-xs">
        By continuing, you agree to our Terms of Service and Privacy Policy.
      </p>
    </form>
  )
}

export default Login
