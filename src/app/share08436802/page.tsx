'use client'

import Image from "next/image";
import { SummaryListAndShare } from "@/component/SummaryListAndShare";
import { useEffect } from "react";
import '@/app/globals.css'
import useStore from "../../store/job";

export default function Share0843680() {
    const { jobs, page, loading, error, limit, fetchJobs }  = useStore()

      useEffect(() => {  
          fetchJobs( );   
      }, [] ); 
   
    return ( 
    <>
      
      <div className='container flex justify-center w-full mx-auto'>
        <Image src="/images/background.jpg" alt="background" layout="responsive"   width={600} height={200} />
      </div>
      <div className="p-2 shadow-2xl uppercase bg-orange-500 text-center text-white text-[30px] m-[20px]">
        ~ Trang nội bộ xem thôi ~
      </div>

      <div className='container  mx-auto  mt-[10px] mb-[20px]'>  
        <SummaryListAndShare jobs={ jobs } /> 
      </div>
    </> 
  );
}
