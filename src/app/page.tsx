'use client'

import { SummaryList } from "@/component/SummaryList";
import Image from "next/image";
import { ChangeEvent, useEffect, useState } from "react"; 
import useStore from "../store/job";
import ScrollingText from "@/component/ScrollText";
import Link from "next/link";

export default function Home() {
    const { jobs, page, loading, error, limit, fetchJobs }  = useStore()
    const [ remind, setRemind ] = useState<string>('') 

    const [ position, setPosition ] = useState<string>('')

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

    const onClickSearch = ( ) => {  
      fetchJobs( position );  
    }

    const handlePositionChange = (e: ChangeEvent<HTMLInputElement> ) => {
      setPosition(e.target.value)
    }

    const onClickReset = () => { 
      setPosition('')
      fetchJobs( );  
    }

    return ( 
    <>
      <div className='container flex justify-center w-full mx-auto'>
        <Image src="/images/background.jpg" alt="background" layout="responsive"   width={600} height={200} />
      </div>

      <div className='container  mx-auto  mt-[10px] mb-[20px]'>
        
        <ScrollingText text={ remind } />

        <div className="flex items-center w-full gap-2 mt-2">
          <div className="flex gap-2 grow w-lg">
            <input className="p-2 border-2 border-purple-500 rounded-md w-lg" placeholder="position" value={ position }  onChange={ handlePositionChange } />
            
          </div>
          <div className="flex gap-2">   
            <div> 
              <button onClick={ onClickSearch } className="p-2 text-white bg-pink-600 rounded-md hover:bg-pink-300 hover:cursor-pointer w-xs"> Search </button>
            </div>

            <div> 
              <button onClick={ onClickReset } className="p-2 text-white bg-purple-600 rounded-md hover:bg-purple-300 hover:cursor-pointer w-xs"> 
                Reset 
              </button> 
            </div>
          </div>
        </div>

        {/* 
        ko cần form 
        <div className='flex gap-4 mb-[40px] mt-[20px]'>
          <input value="Skills" className='w-full p-2 border rounded-md'/>
          <input value="Location" className='w-full p-2 border rounded-md'/>
          <button type="submit" className="p-2 font-bold text-white uppercase bg-purple-500 rounded-md"> Search </button>
        </div> */}

        { jobs.length == 0 && "NO JOBS AVAILABLE NOW, PLEASE COME BACK LATER "} 

        { jobs && <SummaryList jobs={ jobs } /> }

      
      
      </div>
    </> 
  );
}
