import React, { MouseEventHandler, useEffect, useState } from 'react';
import "@/app/modal.css" 
import { IJob } from '@/types/jobs'; 
import { CloseIcon } from './icons/closeIcon';

const Modal = ({ job, isOpen, onClose } : { job: IJob, isOpen: boolean, onClose: MouseEventHandler<HTMLButtonElement>}) => {
 
    const [result, setResult] = useState('');
    const [loading, setLoading] = useState(false);

    const callAPI = async() => {
        setLoading(true);
        setResult('');

        const text = job.title + " " +  job.jobDescription + " " + 
            job.aboutOurCompany + " " + job.benefit + " " + job.domain + " " +
            job.interviewProcess + " " + job.language + " " + job.level + " " + job.location + " " + job.salary

        const res = await fetch('/api/chatgpt', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ text }),
        });

        const data = await res.json();

        if (data.error) {
            setResult(data.error);
        } else {
            setResult(data.result || 'No result');
        }
       
        setLoading(false);
    }

    // useEffect(() => {
    //     if (isOpen) {
    //         callAPI()   
    //     }            
    // }, [ isOpen ]) 

    if (!isOpen) return null;

    return (
        <div className="flex flex-col overflow-y-scroll modal-overlay">  
            <div className="modal-content w-lg">      
                <div className='text-right'>
                    <button onClick={ onClose }> 
                        <CloseIcon />
                    </button>
                </div>           

                <div>
                    { loading }
                    <ul className='px-8 list-disc'>
                        { job.share && job.share.map( (item, index) => {
                            return ( <li key={ index } > { item } </li>)
                        } )} 
                    </ul>
                   
                </div>          
            </div>
        </div>
    );
};

export default Modal;