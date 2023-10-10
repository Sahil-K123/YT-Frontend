// import Image from 'next/image'
// import { Inter } from 'next/font/google'
import Google from "next-auth/providers/google";
import { signIn } from "next-auth/react";
import { useSession } from 'next-auth/react'
import { redirect } from "next/dist/server/api-utils";
import { useRouter } from "next/router";
// const inter = Inter({ subsets: ['latin'] })
require('dotenv').config();

const handleclick = (router) => {
  
  
  const url = `https://accounts.google.com/o/oauth2/auth?response_type=code&scope=openid%20profile%20email&client_id=122050923598-39f9ved4v9k2p2mu9ick5jvs9hl7efcl.apps.googleusercontent.com&redirect_uri=https://yt-helper.cyclic.app/api/v1/auth/google/callback`
  window.open(url);
  
  // const codeParam = router.query.code;
  // console.log('4%2F0AfJohXn_dQM9iMzuBQZxWJtl4Ys6xAZsDQ_cKsT5htkEL77SZjaSdHLz5gmQNzMxHNTxMA'); 
  
}



export default function Home() {
  const router = useRouter();
  const { data: session } = useSession()
  const accessToken = session?.user?.accessToken
  return (
    <section className="bg-gray-50">
    <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white ml-20">
            Log in to your account
          </h1>
          <button onClick={() => handleclick(router)} className="px-4 py-2 border flex gap-2 border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150 m-auto" >
            <img
              className="w-6 h-6"
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              loading="lazy"
              alt="google logo"
            />
            <span>Continue with Google</span>
          </button>
        </div>
      </div>
      </div>
    </section>
  );
}
