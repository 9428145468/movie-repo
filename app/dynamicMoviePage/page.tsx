import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const MoviePage: NextPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-white">
      <Head>
        <title>Movie Details</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex-grow">
        <div className="min-h-screen flex flex-col items-center bg-stone-950 p-4 text-white">
          <div className="w-full max-w-full bg-stone-800 rounded-lg shadow-md overflow-hidden flex justify-center p-6">
            <div className="w-full max-w-6xl flex p-6">
              <div className="flex-shrink-0">
                <img
                  src="../images/6.jpeg"
                  alt="Movie Poster"
                  className="rounded-xl object-cover"
                  style={{ width: "300px", height: "450px" }}
                />
              </div>
              <div className="w-2/3 pl-9 flex flex-col justify-center">
                <div className="mb-4 text-lg">
                  <h2 className="text-4xl font-bold mb-2">Movie Title</h2>
                  <hr className="border-stone-600 my-2" />
                  <p className="text-stone-400 mb-2">
                    This is a brief description of the movie. It covers the main
                    plot points and provides some insight into the story.
                  </p>
                  <p className="text-stone-400 mb-2">
                    Genre: Comedy, Horror, Mystery
                  </p>
                  <p className="text-stone-400 mb-2">
                    Release Date: May 31, 2024
                  </p>
                  <hr className="border-stone-600 my-2" />
                </div>
                <Link href="/theaterList" legacyBehavior>
                  <a className="bg-teal-500 hover:bg-teal-700 text-white py-3 px-6 rounded-lg text-lg font-semibold self-start no-underline transition-colors duration-200">
                    Book Tickets
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full max-w-full bg-stone-800 mt-6 p-6 rounded-lg shadow-md flex justify-center">
            <div className="w-full max-w-6xl">
              <h3 className="text-lg font-semibold mb-4">About the movie</h3>
              <div className="space-y-4">
                <p className="text-stone-400">
                  While Gujarat is celebrating Navratri, the village of Raniwada
                  is forbidden to play Garba due to the curse of an evil witch
                  named Jhamkudi. But when the rules are broken, the haunting
                  begins. Will Bablo and Kumud be able to solve the mystery and
                  save Raniwada from the curse of Jhamkudi?
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MoviePage;
