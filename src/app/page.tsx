'use client'

import { SummaryList } from "@/component/SummaryList";
import Image from "next/image";
import { ChangeEvent, useEffect, useState } from "react"; 
import useStore from "../store/job";
import ScrollingText from "@/component/ScrollText"; 

export default function Home() {
    const { jobs, page, loading, error, limit, fetchJobs, fetchJobsSearch }  = useStore()
    const [ remind, setRemind ] = useState<string>('')    
 
    const [ position, setPosition ] = useState<string>('')
    const [selectedOption, setSelectedOption] = useState('');

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
 
      // fetchJobs( position );   
      fetchJobsSearch( selectedOption , position )
    }

    const handlePositionChange = (e: ChangeEvent<HTMLInputElement> ) => {
      setPosition(e.target.value)
    }

    const onClickReset = () => { 
      setPosition('')
      setSelectedOption('');
      fetchJobs( );  
    } 

    const handleDropdownlistChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setSelectedOption(event.target.value);
    };
 
    return ( 
      <> 

        <section className="hero">
            <div className="hero-content"> 
                <Image src="/images/background.jpg" alt="background" width={600} height={200}  
                className="hero-image" />
            </div> 
        </section>

        <div className='container  mx-auto  mt-[10px] mb-[20px]'> 
         <div className="p-4 italic">Version: 1.0.2</div>
          <ScrollingText text={ remind } /> 
          <div className="flex items-center w-full gap-2 p-2 mt-2 rounded-md shadow-lg">
            <div className="flex items-center gap-2 grow w-lg">
              <input className="w-full p-2 border-2 border-purple-500 rounded-md hover:border-purple-300 md:w-lg" placeholder="position" value={ position }  onChange={ handlePositionChange } />
  
              <div> 
                <select id="comboBox" value={selectedOption} onChange={handleDropdownlistChange}
                  className="w-full p-2 border-2 border-purple-500 rounded-md hover:border-purple-300 md:w-lg"  >
                    <option value="">Select an option</option> 
                    <option value="1">Remote</option>                    
                    <option value="2">Onsite</option>
                    <option value="3">Hybrid</option>
                    <option value="4">Freelance</option>
                </select> 
              </div> 
            </div>

            <div className="flex gap-2">   
              <div> 
                <button onClick={ onClickSearch } className="p-2 text-white bg-pink-600 rounded-md hover:bg-pink-300 hover:cursor-pointer w-[100px]"> Search </button>
              </div>

              <div> 
                <button onClick={ onClickReset } className="p-2 text-white bg-purple-600 rounded-md hover:bg-purple-300 hover:cursor-pointer w-[100px]"> 
                  Reset 
                </button> 
              </div>
            </div>
          </div> 

          { 
            jobs.length == 0 && 
              <div className='h-[800px] w-full shadow-lg rounded-md text-[50px] flex items-center justify-center mt-4 text-red-500'> NO JOBS AVAILABLE NOW, PLEASE COME BACK LATER </div>
          } 

          { jobs && <SummaryList jobs={ jobs } /> } 
        </div>
      </> 
  );
}
