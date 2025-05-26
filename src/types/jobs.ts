 
export interface IJob {
    id: string, 
    title: string,      // 
    jobCode: string,    // 
    status: string,
    reason: string,     
    workingTime: string,    //
    notes: [],              //
    aboutOurCompany: [],    //
    benefit: [],            //
    domain: [],             // 
    interviewProcess: [],   //
    jobDescription: [],     //
    language: [],          //
    level: [],              //
    location: [],           //
    salaryRange?: [], 
    share?: [],
    salary: string,         //      
    postDate: string,  
}


export const icon = {
    "jobCode": "/icons/jobCode.png",
    "domain": "/icons/domain.png",
    "jobDescription": "/icons/jobDescription.png",
    "language": "/icons/language.png",
    "level": "/icons/level.png",
    "location": "/icons/location.png",
    "notes": "/icons/notes.png",
    "ourCompany": "/icons/ourCompany.png",
    "processInterview": "/icons/processInterview.png",
    "salary": "/icons/salary.png",
    "title": "/icons/title.png",
    "workingTime": "/icons/workingTime.png",
} 
