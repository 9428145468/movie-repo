"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import SearchBar from "./Searchbar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useRouter } from "next/navigation";

const Navbar: React.FC = () => {
  const router = useRouter(); 
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  const handleLogin = (option: "admin" | "user") => {
    // Simulate login process (replace with actual login logic)
    if (option === "admin") {
      router.push("/admin/login/auth"); // Navigate to admin login page
    } else if (option === "user") {
      router.push("/client/login/auth"); // Navigate to user login page
    }
  };

  const handleLogout = () => {
    // Simulate logout process (replace with actual logout logic)
    setUsername("");
    setIsLoggedIn(false);
  };

  return (
    <>
      <nav className="relative bg-stone-950 text-stone-300 px-4 py-2 flex justify-between items-center backdrop-filter backdrop-blur-lg shadow-lg">
        <Link href="/">
          {/* <h1 className="text-2xl text-yellow-300 font-bold cursor-pointer"> */}
            movieCo
          {/* </h1> */}
        </Link>

        <SearchBar />

        <div className="flex items-center space-x-4">
          {isLoggedIn ? (
            <Sheet>
              <SheetTrigger asChild>
                <div>
                  <Button variant="ghost">{username}</Button>
                </div>
              </SheetTrigger>
              <SheetContent side="right" className="bg-stone-300">
                <div className="p-4">
                  <div className="flex items-center space-x-4">
                    <div>
                      <h2 className="text-lg font-semibold text-stone-800">
                        {username}
                      </h2>
                    </div>
                  </div>
                  <ul className="mt-4 space-y-2">
                    <li className="border-b border-stone-800 pb-2">
                      <Link href="/orders" legacyBehavior>
                        <a className="flex items-center space-x-2">
                          <span className="text-stone-800">Your Orders</span>
                        </a>
                      </Link>
                    </li>
                    <li className="border-b border-stone-800 pb-2 pt-2">
                      <Link href="/help-support" legacyBehavior>
                        <a className="flex items-center space-x-2">
                          <span className="text-stone-800">Help & Support</span>
                        </a>
                      </Link>
                    </li>
                    <li className="pt-2">
                      <Link href="/accounts-settings" legacyBehavior>
                        <a className="flex items-center space-x-2">
                          <span className="text-stone-800">
                            Accounts & Settings
                          </span>
                        </a>
                      </Link>
                    </li>
                  </ul>
                  <div className="border-t border-stone-800 mt-4"></div>
                  <button onClick={handleLogout} className="text-red-600 mt-4">
                    Logout
                  </button>
                </div>
              </SheetContent>
            </Sheet>
          ) : (
            <DropdownMenu>
              <DropdownMenuTrigger>
                <div>
                <Button variant="ghost">Login</Button>
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-stone-800 text-stone-300 border-none shadow-md shadow-stone-950">
                <DropdownMenuItem onClick={() => handleLogin("admin")}>
                  Admin Login
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleLogin("user")}>
                  User Login
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>
      </nav>
      <div className="bg-gray-500 h-px"></div>
      <nav className="bg-stone-800 px-4 py-2 text-stone-300 flex justify-between items-center backdrop-filter backdrop-blur-lg">
        <ul className="flex space-x-4">
          <li>
            <Link href="/moviesList">Movies</Link>
          </li>
          <li>
            <Link href="/eventsList">Events</Link>
          </li>
          <li>
            <Link href="/finds">Finds</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
