import { MdOutlineRoundaboutLeft } from "react-icons/md";

export default function BodyContentabout() {
  return (
    <div className="flex justify-left items-center font-bold h-96 shadow-3xl ">
      <div className="rounded-xl p-10 mx-12 bg-[#9A275A]">
      <h1 className="text-3xl ">Sir. Mubashir Class 4<br/> <span className=" text-6xl text-[#e8f537] uppercase"> About Assignment 01</span><br/><p className="text-lg w-[50%]">Five pages are required with proper app routing. Additionally, please include the following requirements: page loading, custom error handling, and your own client-side server page, custom error page, as well as a not found page</p></h1>
      <div className="absolute bg-[#e8f537] p-24 right-48 top-48 text-[150pt] text-[#9A275A] rounded-2xl">
      <MdOutlineRoundaboutLeft />
      </div>
      
      </div>
      
    </div>
  )
}
