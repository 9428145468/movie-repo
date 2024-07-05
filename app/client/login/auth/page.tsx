// app/admin/login/auth/page.tsx
"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { axios } from "@/utils";

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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:6000/users/login",
        {
          email,
          password,
        },
        {
          withCredentials: true,
        }
      );

      if (response.status === 200) {
        // Handle successful login, e.g., redirect to a protected page
        router.push("/");
      }
    } catch (error) {
      setError("Login failed. Please check your credentials and try again.");
    }
  };

  return (
    <div className="bg-stone-950 p-8 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-stone-50">User Login</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full bg-stone-950 border border-stone-300 rounded-xl shadow-sm py-2 px-3 focus:outline-none focus:ring-stone-500 focus:border-stone-500 sm:text-sm text-stone-100"
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
          onClick={() => setIsLogin(false)}
          className="text-sm text-stone-200 hover:text-teal-300"
        >
          Don't have an account?
        </button>
      </div>
      <div>
        
      </div>
    </div>
  );
};

const SignupForm = ({
  setIsLogin,
}: {
  setIsLogin: (isLogin: boolean) => void;
}) => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:6000/users/register", {
        name,
        email,
        phoneNumber,
        password,
      });
      console.log(response.data);
      router.push("/client/login/auth");
    } catch (error) {
      console.error(error);
      setError("Failed to register user");
    }
  };

  return (
    <div className="bg-stone-950 p-8 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-stone-50">User Sign Up</h2>
      <form className="space-y-4" onSubmit={handleSignup}>
        <div>
          <input
            type="text"
            placeholder="Username"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 block w-full bg-stone-950 border border-stone-300 rounded-xl shadow-sm py-2 px-3 focus:outline-none focus:ring-stone-500 focus:border-stone-500 sm:text-sm text-stone-100"
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full bg-stone-950 border border-stone-300 rounded-xl shadow-sm py-2 px-3 focus:outline-none focus:ring-stone-500 focus:border-stone-500 sm:text-sm text-stone-100"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="mt-1 block w-full bg-stone-950 border border-stone-300 rounded-xl shadow-sm py-2 px-3 focus:outline-none focus:ring-stone-500 focus:border-stone-500 sm:text-sm text-stone-100"
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 block w-full bg-stone-950 border border-stone-300 rounded-xl shadow-sm py-2 px-3 focus:outline-none focus:ring-stone-500 focus:border-stone-500 sm:text-sm text-stone-100"
          />
        </div>
        {error && <div className="text-red-500">{error}</div>}
        <div>
          <button
            type="submit"
            className="w-full py-2 px-4 border border-transparent rounded-full shadow-sm text-sm font-medium text-stone-800 bg-stone-200 hover:bg-stone-300"
          >
            Confirm
          </button>
        </div>
      </form>
      <div>
        <button
          onClick={() => setIsLogin(true)}
          className="text-sm text-stone-200 hover:text-teal-300"
        >
          Already have an account?
        </button>
      </div>
    </div>
  );
};

export default LoginPage;

// const LoginForm = ({
//   setIsLogin,
// }: {
//   setIsLogin: (isLogin: boolean) => void;
// }) => {
//   const router = useRouter();
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleUserClick = () => {
//     router.push("/admin/login/auth");
//   };

//   const handleLogin = async (event: React.FormEvent) => {
//     event.preventDefault();
//     try {
//       const response = await axios.post("/api/auth/login", {
//         username,
//         email,
//         password,
//       });
//       if (response.data.success) {
//         // Handle successful login, e.g., save token, redirect, etc.
//         console.log("Login successful");
//       } else {
//         // Handle login error
//         console.log("Login failed");
//       }
//     } catch (error) {
//       console.error("An error occurred during login", error);
//     }
//   };

//   return (
//     <div className="bg-stone-950 p-8 rounded-xl shadow-lg">
//       <h2 className="text-2xl font-bold mb-6 text-stone-50">User Login</h2>
//       <form className="space-y-4">
//         <div>
//           <input
//             type="text"
//             placeholder="Username"
//             className="mt-1 block w-full bg-stone-950 border border-stone-300 rounded-xl shadow-sm py-2 px-3 focus:outline-none focus:ring-stone-500 focus:border-stone-500 sm:text-sm text-stone-100"
//           />
//         </div>
//         <div>
//           <input
//             type="email"
//             placeholder="Email"
//             className="mt-1 block w-full bg-stone-950 border border-stone-300 rounded-xl shadow-sm py-2 px-3 focus:outline-none focus:ring-stone-500 focus:border-stone-500 sm:text-sm text-stone-100"
//           />
//         </div>
//         <div>
//           <input
//             type="password"
//             placeholder="Password"
//             className="mt-1 block w-full bg-stone-950 border border-stone-300 rounded-xl shadow-sm py-2 px-3 focus:outline-none focus:ring-stone-500 focus:border-stone-500 sm:text-sm text-stone-100"
//           />
//         </div>
//         <div className="text-right">
//           <a href="#" className="text-sm text-stone-200 hover:text-teal-300">
//             Forgot your password?
//           </a>
//         </div>
//         <div>
//           <button
//             type="submit"
//             className="w-full py-2 px-4 border border-transparent rounded-full shadow-sm text-sm text-stone-800 font-medium bg-stone-200 hover:bg-stone-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-stone-500"
//           >
//             Confirm
//           </button>
//         </div>
//       </form>
//       <div className="text-center mt-4">
//         <span className="text-stone-200">Or</span>
//       </div>
//       <div className="mt-4">
//         <button className="w-full py-2 px-4 border border-transparent rounded-full shadow-sm text-sm font-medium text-stone-800 bg-stone-200 hover:bg-stone-300">
//           Continue with Google
//         </button>
//       </div>
//       <div className="mt-2">
//         <button className="w-full py-2 px-4 border border-transparent rounded-full shadow-sm text-sm font-medium text-stone-800 bg-stone-200 hover:bg-stone-300">
//           Continue with Apple
//         </button>
//       </div>
//       <div className="text-center mt-4">
//         <button
//           onClick={() => setIsLogin(false)}
//           className="text-sm text-stone-200 hover:text-teal-300"
//         >
//           Don't have an account?
//         </button>
//       </div>
//       <div className="flex justify-end mt-4">
//         <button
//           onClick={handleUserClick}
//           className="text-md font-bold text-stone-700 hover:text-teal-800 bg-stone-200 p-2 rounded-lg"
//         >
//           admin?
//         </button>
//       </div>
//     </div>
//   );
// };
