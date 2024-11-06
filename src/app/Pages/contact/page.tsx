

export default function contact() {
 return (
 
 <div className="flex flex-col items-center justify-center mt-24 bg-black py-12">
   <h1 className="text-4xl font-bold text-white mb-6">Contact Us</h1>

 
   <form className="w-full max-w-lg bg-white p-8 shadow-lg rounded-lg">
     <div className="mb-6">
       <label className="block text-gray-700 font-semibold mb-2" htmlFor="name">
         Name
       </label>
       <input
         className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
         type="text"
         id="name"
         placeholder="Your Name"
         required
       />
     </div>

     <div className="mb-6">
       <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">
         Email
       </label>
       <input
         className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
         type="email"
         id="email"
         placeholder="Your Email"
         required
       />
     </div>

     <div className="mb-6">
       <label className="block text-gray-700 font-semibold mb-2" htmlFor="message">
         Message
       </label>
       <textarea
         className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
         id="message"
         rows={5}
         placeholder="Your Message"
         required
       ></textarea>
     </div>

     <div className="flex justify-center">
       <button
         type="submit"
         className="px-6 py-3 bg-pink-600 text-white font-bold rounded-lg hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500"
       >
         Submit
       </button>
     </div>
   </form>
 </div>

      
   
  )
}
