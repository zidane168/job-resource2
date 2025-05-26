'use client'

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Detail } from '@/component/Detail';
import useStore from '@/store/job';
import { useParams } from 'next/navigation';

const JobDetail = () => {
  // const router = useRouter();

  const params = useParams();
  const id = params?.id

  const {  currentJob, page, loading, error, limit, fetchJobs, getCurrentJob }  = useStore() 

  useEffect( () => {
    getCurrentJob( id );  
  }, [])
    
  if (!currentJob) {
    return <div>Loading...</div>;
  }

  return (
    <div>
        <Detail job={ currentJob } /> 
    </div>
  );
};

export default JobDetail;