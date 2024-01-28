'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

export const Navbar = () => {

  const pathname = usePathname();

  return (
    <div className="flex justify-center mt-8">
        <nav className="flex gap-8">
            <Link href={"/products"} className={`${'/products' === pathname ? 'text-blue-600' : ''}`}>Products</Link>
            <Link href={"/categories"} className={`${'/categories' === pathname ? 'text-blue-600' : ''}`}>Categories</Link>
        </nav>
    </div>
  )
}
