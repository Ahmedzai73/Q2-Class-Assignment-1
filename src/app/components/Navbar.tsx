import Link from 'next/link';
import 'animate.css';

export default function Navbar() {
  return (
    <div className="flex justify-between font-bold text-center w-auto p-4 bg-[#9A275A] shadow-2xl px-28 ">
      <Link href="/" className="text-3xl text-[#e8f537] ">
        Logo
      </Link>
      <nav>
        <ul className=" flex p-1 space-x-6">
          <Link href="/" className="hover:text-yellow-300 font-sans">Home</Link>
          <Link href="/Pages/about" className="hover:text-yellow-300 font-sans">About</Link>
          <Link href="/Pages/loading" className="hover:text-yellow-300 font-sans">Loading Page</Link>
          <Link href="/Pages/notfound" className="hover:text-yellow-300 ">Page not Found</Link>
          <Link href="/Pages/contact" className="hover:text-yellow-300 font-sans">Contact</Link>
        </ul>
      </nav>
    </div>
  );
}
