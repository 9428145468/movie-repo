// app/admin/login/auth/page.tsx
"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <div className="flex flex-1">
        <div
          className="w-3/5 bg-cover bg-center"
          style={{ backgroundImage: 'url("/images/li.jpg")' }}
        ></div>
        <div className="w-2/5 flex items-center justify-center p-8 bg-stone-950">
          <div className="w-full max-w-md">
            {isLogin ? (
              <LoginForm setIsLogin={setIsLogin} />
            ) : (
              <SignupForm setIsLogin={setIsLogin} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const NavBar = () => (
  <nav className="bg-stone-950 p-4 shadow-lg">
    <div className="max-w-7xl mx-auto">
      <div className="flex justify-between">
        <Link href="/" passHref>
          <div className="text-3xl font-bold text-yellow-500 cursor-pointer">
            movieCo
          </div>
        </Link>
      </div>
    </div>
  </nav>
);

const LoginForm = ({
  setIsLogin,
}: {
  setIsLogin: (isLogin: boolean) => void;
}) => {
  const router = useRouter();

  const handleUserClick = () => {
    router.push("/admin/login/auth");
  };

  return (
    <div className="bg-stone-950 p-8 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-stone-50">User Login</h2>
      <form className="space-y-4">
        <div>
          <input
            type="text"
            placeholder="Username"
            className="mt-1 block w-full bg-stone-950 border border-stone-300 rounded-xl shadow-sm py-2 px-3 focus:outline-none focus:ring-stone-500 focus:border-stone-500 sm:text-sm text-stone-100"
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Email"
            className="mt-1 block w-full bg-stone-950 border border-stone-300 rounded-xl shadow-sm py-2 px-3 focus:outline-none focus:ring-stone-500 focus:border-stone-500 sm:text-sm text-stone-100"
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            className="mt-1 block w-full bg-stone-950 border border-stone-300 rounded-xl shadow-sm py-2 px-3 focus:outline-none focus:ring-stone-500 focus:border-stone-500 sm:text-sm text-stone-100"
          />
        </div>
        <div className="text-right">
          <a href="#" className="text-sm text-stone-200 hover:text-teal-300">
            Forgot your password?
          </a>
        </div>
        <div>
          <button
            type="submit"
            className="w-full py-2 px-4 border border-transparent rounded-full shadow-sm text-sm text-stone-800 font-medium bg-stone-200 hover:bg-stone-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-stone-500"
          >
            Confirm
          </button>
        </div>
      </form>
      <div className="text-center mt-4">
        <span className="text-stone-200">Or</span>
      </div>
      <div className="mt-4">
        <button className="w-full py-2 px-4 border border-transparent rounded-full shadow-sm text-sm font-medium text-stone-800 bg-stone-200 hover:bg-stone-300">
          Continue with Google
        </button>
      </div>
      <div className="mt-2">
        <button className="w-full py-2 px-4 border border-transparent rounded-full shadow-sm text-sm font-medium text-stone-800 bg-stone-200 hover:bg-stone-300">
          Continue with Apple
        </button>
      </div>
      <div className="text-center mt-4">
        <button
          onClick={() => setIsLogin(false)}
          className="text-sm text-stone-200 hover:text-teal-300"
        >
          Don't have an account?
        </button>
      </div>
      <div className="flex justify-end mt-4">
        <button
          onClick={handleUserClick}
          className="text-md font-bold text-stone-700 hover:text-teal-800 bg-stone-200 p-2 rounded-lg"
        >
          admin?
        </button>
      </div>
    </div>
  );
};

const SignupForm = ({
  setIsLogin,
}: {
  setIsLogin: (isLogin: boolean) => void;
}) => (
  <div className="bg-stone-950 p-8 rounded-xl shadow-lg">
    <h2 className="text-2xl font-bold mb-6 text-stone-50">User Sign Up</h2>
    <form className="space-y-4">
      <div>
        <input
          type="text"
          placeholder="Username"
          className="mt-1 block w-full bg-stone-950 border border-stone-300 rounded-xl shadow-sm py-2 px-3 focus:outline-none focus:ring-stone-500 focus:border-stone-500 sm:text-sm text-stone-100"
        />
      </div>
      <div>
        <input
          type="email"
          placeholder="Email"
          className="mt-1 block w-full bg-stone-950 border border-stone-300 rounded-xl shadow-sm py-2 px-3 focus:outline-none focus:ring-stone-500 focus:border-stone-500 sm:text-sm text-stone-100"
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="Password"
          className="mt-1 block w-full bg-stone-950 border border-stone-300 rounded-xl shadow-sm py-2 px-3 focus:outline-none focus:ring-stone-500 focus:border-stone-500 sm:text-sm text-stone-100"
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="Rewrite Password"
          className="mt-1 block w-full bg-stone-950 border border-stone-300 rounded-xl shadow-sm py-2 px-3 focus:outline-none focus:ring-stone-500 focus:border-stone-500 sm:text-sm text-stone-100"
        />
      </div>
      <div>
        <button
          type="submit"
          className="w-full py-2 px-4 border border-transparent rounded-full shadow-sm text-sm font-medium text-stone-800 bg-stone-200 hover:bg-stone-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-stone-500"
        >
          Confirm
        </button>
      </div>
    </form>
    <div className="text-center mt-4">
      <button
        onClick={() => setIsLogin(true)}
        className="text-sm text-stone-200 hover:text-teal-300"
      >
        Already have an account?
      </button>
    </div>
  </div>
);

export default LoginPage;
