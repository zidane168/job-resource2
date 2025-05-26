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

export function Detail( { job } : { job : IJob}  ) {
    return (
        <div className="container text-[20px] mx-auto shadow-2xl rounded-md bg-amber-50 mt-[20px] mb-[20px] p-4 text-justify">
            <div className="flex gap-2 items-center">
                <TitleIcon />
                <h2 className='bg-amber-400 p-2'> { job.title } </h2> 
            </div>
            <div className=''>
                <div>
                    <div className='font-bold text-red-700 flex gap-2 items-center'> 
                        <SalaryIcon />
                        <div className='underline'> Salary: </div>
                        { job.salary } 
                    </div>
                    <div className='mt-[5px] flex gap-2 mb-2 '>
                        <LocationIcon />
                        <div className='underline font-bold'> Location: </div>
                        <div className="md:flex md:flex-row flex-col gap-2">
                            { job.location.map( (loc, index) => {
                                return   <div key={ index } className='text-[20px] font-bold rounded-md bg-amber-200 px-2  text-center'> { loc } </div>
                            })} 
                        </div>
                    </div> 
                    <div>
                        <div className='flex gap-2 items-center'>
                            <OurCompanyIcon />
                            <div className='underline font-bold'> Our Company: </div>
                        </div>
                        <ul className='list-disc px-4'>
                            { job.aboutOurCompany.map( (item, index) => {
                                return (<li key={ index } > { item}  </li>)
                            } ) }
                        </ul>
                    </div>

                    <div>
                        <div className='flex gap-2 items-center'>
                            <JobDescriptionIcon />
                            <span className='underline font-bold'> Job Description: </span>
                        </div>
                        <ul className='list-disc px-4'>
                            { job.jobDescription.map( (item, index) => {
                                return (<li key={ index } > { item}  </li>)
                            } ) }
                        </ul>
                    </div>

                    
                    <div>
                        <div className='flex gap-2 items-center'>
                            <JobDescriptionIcon />
                            <span className='underline font-bold'> Job Description: </span>
                        </div>
                        <ul className='list-disc px-4'>
                            { job.jobDescription.map( (item, index) => {
                                return (<li key={ index } > { item}  </li>)
                            } ) }
                        </ul>
                    </div>

                    <div>
                        <div className='flex gap-2 items-center'>
                            <BenefitIcon />
                            <span className='underline font-bold'> Benefit: </span>
                        </div>
                        <ul className='list-disc px-4'>
                            { job.benefit.map( (item, index) => {
                                return (<li key={ index } > { item }  </li>)
                            } ) }
                        </ul>
                    </div>

                    <div>
                        <div className='flex gap-2 items-center'>
                            <LanguageIcon />
                            <span className='underline font-bold'> Language: </span>
                        </div>
                        <ul className='list-disc px-4'>
                            { job.language.map( (item, index) => {
                                return (<li key={ index } > { item }  </li>)
                            } ) }
                        </ul>
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

                    <div className="mt-2 flex gap-2 w-full items-center justify-center">
                        <div>
                            <Link href="https://forms.gle/iCchrtrYXLbLEN4h7" target='_blank' >
                                <button className='bg-pink-600 hover:bg-pink-400 hover:cursor-pointer font-bold text-white p-2 w-full rounded-md' >
                                    Apply Now                        
                                </button>
                            </Link>         
                        </div>
                        <div>
                            <Link href="/">
                                <button className='bg-purple-600 hover:bg-purple-400 hover:cursor-pointer font-bold text-white p-2 w-full rounded-md' >
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