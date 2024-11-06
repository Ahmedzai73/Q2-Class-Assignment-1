import { FaHome } from "react-icons/fa";

export default function BodyContent() {
  return (
    <div className="flex justify-left items-center font-bold h-96 shadow-3xl ">
      <div className="rounded-xl p-10 mx-12 bg-[#9A275A]">
      <h1 className="text-3xl ">Sir. Mubashir Class 4<br/> <span className=" text-6xl text-[#e8f537] uppercase"> What is Assignment 01</span><br/><p className="text-lg w-[50%]">Welcome! to the Home Page <br/> In this assignment, we are doing how to implement app routing and create new pages according to our preferences. Additionally, we are also learning how to create a personal not found page, how to create custom errors, and how to load content before displaying the page. </p></h1>
<div className="absolute bg-[#e8f537] p-24 right-48 top-48 text-[150pt] text-[#9A275A] rounded-2xl">
  <FaHome /></div>

      </div>
    </div>
  )
}
