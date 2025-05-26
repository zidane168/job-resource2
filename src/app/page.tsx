'use client'

import { SummaryList } from "@/component/SummaryList";
import Image from "next/image";
import { useEffect, useState } from "react"; 
import useStore from "../store/job";
import ScrollingText from "@/component/ScrollText";

export default function Home() {
    const { jobs, page, loading, error, limit, fetchJobs }  = useStore()
    const [ remind, setRemind ] = useState('') 

    useEffect(() => {  
        fetchJobs( );  
        const str = "Sau khi các bạn đã Apply Job, \
          Chúng tôi sẽ phản hồi trong vòng 3 ngày làm việc \
          (không bao gồm Thứ Bảy, Chủ Nhật) \
          nếu sau thời gian trên mà các bạn chưa nhận được phản hồi, \
          xin vui lòng liên hệ qua zalo (Scan QR code trên backgrounds) \
          hay mail: rockman1688@gmail.com";
        setRemind( str )
    }, [] ); 

    return ( 
    <>
      <div className='container flex justify-center w-full mx-auto'>
        <Image src="/images/background.jpg" alt="background" layout="responsive"   width={600} height={200} />
      </div>

      <div className='container  mx-auto  mt-[10px] mb-[20px]'>
        
        <ScrollingText text={ remind } />

        {/* 
        ko cần form 
        <div className='flex gap-4 mb-[40px] mt-[20px]'>
          <input value="Skills" className='w-full p-2 border rounded-md'/>
          <input value="Location" className='w-full p-2 border rounded-md'/>
          <button type="submit" className="p-2 font-bold text-white uppercase bg-purple-500 rounded-md"> Search </button>
        </div> */}

        <SummaryList jobs={ jobs } />
      
      </div>
    </> 
  );
}
