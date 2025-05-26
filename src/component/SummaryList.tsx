

import { IJob } from "@/types/jobs"
import { Summary } from "./Summary" 

export function SummaryList( { jobs } : { jobs : IJob[] }  ) {
  
    return (
        <div className="grid lg:grid-cols-2 lg:gap-6 grid-cols-1 ">  
            {   
                jobs.map( (item : IJob, index : number) => {
                    return  (<div className="p-2 rounded-md " key={ item.id } > <Summary key={ item.id } job={ item }/> </div> )
                })
            } 
        </div>
    )
}