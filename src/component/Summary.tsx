import { IJob } from "@/types/jobs"; 
import { TitleIcon } from "./icons/titleIcon";
import { DomainIcon } from "./icons/domainIcon";
import { WorkingTimeIcon } from "./icons/workingTime";
import { ProcessInterviewIcon } from "./icons/processInterviewIcon"; 
import Link from "next/link";
import { LevelIcon } from "./icons/levelIcon";
import { LocationIcon } from "./icons/locationIcon";

export function Summary( { job } : { job : IJob}  ) {  
    return (
        <>
            <div className="p-2 rounded-md shadow-lg leading-[30px] border-l-4 border-l-purple-500" >
                <div className='flex flex-row justify-between mb-2'>
                    <div className='flex items-center gap-2 font-bold uppercase'> 
                        <TitleIcon />
                        <div className="px-2 text-white bg-purple-500 rounded-md">[{ job.id }]  { job.title } </div>
                    </div>
                    <div className='font-bold text-red-700'> { job.salary } </div>
                </div>

                { job.level && job.level.length > 0 && (
                    <div className="flex gap-2">
                        <div> <LevelIcon /> </div>
                        <div className="flex gap-2"> 
                            <span className="font-bold underline"> Level: </span>  
                            <div className="px-2 font-bold text-white bg-green-500 rounded-md">{ job.level }  </div>
                         </div>
                    </div>
                )}

                 <div className="flex items-center gap-2">
                    <div> <LocationIcon /> </div> 
                    <div className='mt-[5px] flex gap-2 mb-2 '>
                        <span className="font-bold underline"> Location: </span>  
                        { job.location.map( (loc, index) => {
                            return   <div key={ index } className='text-[14px] font-bold rounded-md bg-amber-200 px-2  text-center'> { loc } </div>
                        })} 
                   </div>      
                </div> 

                <div>
                    <span className="flex items-center gap-2 font-bold">   <DomainIcon /> <span className="underline"> Domain: </span> </span> 
                    <ul className="px-6 list-disc">
                    {
                        job.domain.map( (domain, index) => {
                            return <li key={ index }> {domain} </li>
                        })
                    }
                    </ul>
                </div>

                { job.workingTime && (
                    <div className="flex gap-2">
                        <WorkingTimeIcon />
                        <span className="font-bold underline"> Working time: </span> { job.workingTime } 
                    </div>
                ) }
            
                <div className="flex justify-between">
                    <div>
                        <div className="flex gap-2">
                            <ProcessInterviewIcon />
                            <span className="font-bold underline">Interview Process : </span>
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
                        <Link href={`jobs/${job.jobCode}`} target="_blank">
                            <button className="w-full px-2 font-bold text-center text-white uppercase bg-pink-600 rounded-md shadow-2xl hover:cursor-pointer hover:bg-pink-400"> 
                                View detail && Apply 
                            </button>
                        </Link>
                    </div> 
                </div> 
            </div> 
        </>
    )
}