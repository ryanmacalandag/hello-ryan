'use client'


import { useRouter } from "next/navigation"
import { BiHomeCircle} from "react-icons/bi";

export default function BackButton() {
  const router = useRouter();

  return (
    <button type="button" onClick={() => router.back()} className="w-10 h-10 flex justify-center items-center rounded-full border-2 border-neutral-800 m-4">
      <BiHomeCircle size={24} />
    </button>
  )
}
