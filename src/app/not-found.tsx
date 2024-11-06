import Link from "next/link";

export default function Custom404() {
    return (
      <div className="flex items-center justify-center h-screen bg-black text-gray-700">
        <div className="text-center space-y-4 p-8 bg-white rounded-lg shadow-lg " >
          <h1 className="text-6xl font-bold text-[#9A275A]">404</h1>
          <p className="text-2xl font-semibold">Page Not Found</p>
          <p className="text-lg text-gray-500">
            Sorry, the page you are looking for does not exist.
          </p>
          <Link href="/" className="hover:text-[#9A275A] font-sans"> Go Back to Home</Link>
           
          
        </div>
      </div>
    );
  }
  