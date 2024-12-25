"use client";

import Link from "next/link";


export default function Page() {

  return (
    <div className="main">
        <Link href={'/sign-in'}>Sign in</Link>
        <Link href={'/sign-up'}>Sign up</Link>
    </div>
  );
}