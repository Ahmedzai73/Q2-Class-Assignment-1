import { GiCheckMark } from "react-icons/gi";

export default async function about() {
  await new Promise((resolve) => {
    setTimeout(resolve, 5000);
  });
  
  
  return (
    <div className=" bg-[#e8f537] text-[#9A275A] flex flex-col  rounded-xl mt-24 gap-4 items-center  p-10 mx-52 text-5xl font-bold space-x-5">
     <GiCheckMark className="text-9xl "/>Loading page is perfectly working...
      
    </div>
  )
}
