'use client'

import { useRouter } from "next/navigation"
import { BiX } from "react-icons/bi";

export default function BackButton() {
  const router = useRouter();

  return (
    <button type="button" onClick={() => router.back()} className="w-8 h-8 flex justify-center items-center rounded-full border-2 border-neutral-800 bg-transparent hover:bg-neutral-800 hover:text-white m-4 transition duration-300">
      <BiX size={22} />
    </button>
  )
}
