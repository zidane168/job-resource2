import { TitleIcon } from "./icons/titleIcon";
import { IJob } from '@/types/jobs';
import { DomainIcon } from './icons/domainIcon';
import { WorkingTimeIcon } from './icons/workingTime';
import { ProcessInterviewIcon } from './icons/processInterviewIcon';
import { SalaryIcon } from './icons/salaryIcon';
import Link from 'next/link';
import { LocationIcon } from './icons/locationIcon';
import { JobDescriptionIcon } from './icons/jobDescriptionIcon';
import { OurCompanyIcon } from './icons/ourCompanyIcon';
import { BenefitIcon } from './icons/benefitIcon';
import { LanguageIcon } from './icons/languageIcon';
import "@/app/globals.css"
import { LevelIcon } from "./icons/levelIcon";

export function Detail( { job } : { job : IJob}  ) {
    return (
        <div className="container text-[20px] mx-auto shadow-2xl rounded-md bg-amber-50 mt-[20px] mb-[20px] p-4 text-justify">
            <div className="flex items-center gap-2">
                <TitleIcon />
                <h2 className='p-2 font-bold bg-purple-400 rounded-md'> { job.title } </h2> 
            </div>
            <div className=''>
                <div>
                    <div className='flex items-center gap-2 font-bold text-red-700'> 
                        <SalaryIcon />
                        <div className='underline'> Salary: </div>
                        { job.salary } 
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
                    
                    <div className='mt-[5px] flex gap-2 mb-2 '>
                        <LocationIcon />
                        <div className='font-bold underline'> Location: </div>
                        <div className="flex-col gap-2 md:flex md:flex-row">
                            { job.location.map( (loc, index) => {
                                return   <div key={ index } className='text-[20px] font-bold rounded-md bg-amber-200 px-2  text-center'> { loc } </div>
                            })} 
                        </div>
                    </div> 

                    <div>
                        <div className='flex items-center gap-2'>
                            <LanguageIcon />
                            <span className='font-bold underline'> Language: </span>
                        </div>
                        <ul className='px-4 list-disc'>
                            { job.language.map( (item, index) => {
                                return (<li key={ index } > { item }  </li>)
                            } ) }
                        </ul>
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
                    <div>
                        <div className='flex items-center gap-2'>
                            <OurCompanyIcon />
                            <div className='font-bold underline'> Our Company: </div>
                        </div>
                        <ul className='px-4 list-disc'>
                            { job.aboutOurCompany.map( (item, index) => {
                                return (<li key={ index } > { item}  </li>)
                            } ) }
                        </ul>
                    </div>

                    <div>
                        <div className='flex items-center gap-2'>
                            <JobDescriptionIcon />
                            <span className='font-bold underline'> Job Description: </span>
                        </div>
                        <ul className='px-4 list-disc'>
                            { job.jobDescription.map( (item, index) => {
                                return (<li key={ index } > { item}  </li>)
                            } ) }
                        </ul>
                    </div>


                    <div>
                        <div className='flex items-center gap-2'>
                            <BenefitIcon />
                            <span className='font-bold underline'> Benefit: </span>
                        </div>
                        <ul className='px-4 list-disc'>
                            { job.benefit.map( (item, index) => {
                                return (<li key={ index } > { item }  </li>)
                            } ) }
                        </ul>
                    </div>

                    
        
                    { job.workingTime && (
                        <div className="flex gap-2">
                            <WorkingTimeIcon />
                            <span className="font-bold underline"> Working time: </span> { job.workingTime } 
                        </div>
                    ) }
                     
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

                    <div className="flex items-center justify-center w-full gap-2 mt-2">
                        <div>
                            <Link href="https://forms.gle/iCchrtrYXLbLEN4h7" target='_blank' >
                                <button className='w-full p-2 font-bold text-white bg-pink-600 rounded-md hover:bg-pink-400 hover:cursor-pointer' >
                                    Apply Now                        
                                </button>
                            </Link>         
                        </div>
                        <div>
                            <Link href="/">
                                <button className='w-full p-2 font-bold text-white bg-purple-600 rounded-md hover:bg-purple-400 hover:cursor-pointer' >
                                    Back to Home Page                        
                                </button>
                            </Link>    
                        </div>
                    </div>
                </div>
            </div>
        </div> 
     
    )
}