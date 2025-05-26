import { IJob } from "@/types/jobs"; 
import { TitleIcon } from "./icons/titleIcon";
import { DomainIcon } from "./icons/domainIcon";
import { WorkingTimeIcon } from "./icons/workingTime";
import { ProcessInterviewIcon } from "./icons/processInterviewIcon";
import { useState } from "react";
import Modal from "./Model";
import Link from "next/link";
import { LevelIcon } from "./icons/levelIcon";

export function SummaryAndShare( { job } : { job : IJob}  ) {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false); 
    
    return (
        <>
            <div className="p-2 rounded-md shadow-lg leading-[30px] border-l-4 border-l-purple-500" >
                <div className='flex flex-row justify-between'>
                    <div className='font-bold uppercase flex gap-2 items-center'> 
                        <TitleIcon />
                        [{ job.id }]  { job.title } 
                    </div>
                    <div className='font-bold text-red-700'> { job.salary } </div>
                </div>

                { job.level && job.level.length > 0 && (
                    <div className="flex gap-2">
                        <div> <LevelIcon /> </div>
                        <div className="font-bold bg-green-500 text-white px-2 rounded-md"> { job.level }  </div>
                    </div>
                )}
                
                <div className='mt-[5px] flex gap-4 mb-2 '>
                    { job.location.map( (loc, index) => {
                        return   <div key={ index } className='text-[14px] font-bold rounded-md bg-amber-200 px-2  text-center'> { loc } </div>
                    })} 
                </div> 

                <div>
                    <span className="font-bold flex gap-2 items-center">   <DomainIcon /> <span className="underline"> Domain: </span> </span> 
                    <ul className="px-6 list-disc">
                    {
                        job.domain.map( (domain, index) => {
                            return <li key={ index }> {domain} </li>
                        })
                    }
                    </ul>
                </div>

                { job.workingTime && (
                    <div className="gap-2 flex">
                        <WorkingTimeIcon />
                        <span className="underline font-bold"> Working time: </span> { job.workingTime } 
                    </div>
                ) }
            
                <div className="flex justify-between">
                    <div>
                        <div className="flex gap-2">
                            <ProcessInterviewIcon />
                            <span className="underline font-bold">Interview Process : </span>
                        </div>
                        <ul className="px-6 list-disc">
                        {
                            job.interviewProcess.map( (interview, index) => {
                                return <li key={ index }> Rounded {++index}: {interview} </li>
                            })
                        }
                        </ul> 
                    </div> 
                </div>
 
                <div className="flex gap-2 justify-between  text-[20px]">  

                    <div>
                        <Link href={`jobs/${job.id}`} target="_blank">
                            <button className="w-full px-2 text-center font-bold text-white uppercase bg-pink-600 rounded-md shadow-2xl hover:cursor-pointer hover:bg-pink-400"> 
                                View detail && Apply 
                            </button>
                        </Link>
                    </div>

                    <div>
                        <button onClick={ openModal } className="w-full px-2 text-center font-bold text-white uppercase bg-purple-600 rounded-md shadow-2xl hover:cursor-pointer hover:bg-purple-400"> 
                            Share Job
                        </button> 
                    </div>
                </div> 
            </div>

            <Modal isOpen={isModalOpen} onClose={closeModal} job={ job } />

        </>
    )
}