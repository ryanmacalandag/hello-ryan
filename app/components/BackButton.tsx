'use client'

import { BiSolidXCircle } from "react-icons/bi";
import { useRouter } from "next/navigation"

export default function BackButton() {
  const router = useRouter();

  return (
    <button type="button" onClick={() => router.back()} >
      <BiSolidXCircle size={24} />
    </button>
  )
}
