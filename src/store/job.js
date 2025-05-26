import { create } from 'zustand'; 
import { jobs } from '@/data/jobs';

const useStore = create(( set, get ) => ({  // set, get theo thu tu nha, sai la ko hien thi data dau nha
  jobs: [],
  currentJob: null,
  loading: false,
  error: null,
  lastVisible: null, // To keep track of the last document fetched
  limit: 10, // Number of items per page
  page: 0,

  fetchJobs: (title = null) => {
    set({ loading: true, error: null }) 
    const jobLists = jobs.filter( job => job.status.toLowerCase() == "open" || job.status.toLowerCase() == "urgent" ).sort((a, b) => b.id - a.id) 

    if (title) {
      const filterJobs = jobLists.filter( (job) => {
        job.title.toLowerCase().includes( title.toLowerCase() )
      })
      set ({ jobs: filterJobs, loading: false }) 

    } else {
      set ({ jobs: jobLists, loading: false }) 
    } 
  },

  getCurrentJob: (jobCode) => {
    const job = jobs.find( (job) => job.jobCode == jobCode )  
    set({ currentJob: job, loading: false })
  }

  // fetchJobs: async ( page = 0, title = null ) => {
  //   set({ loading: true, error: null });
  //   try { 
  //     const jobsCollection = collection(db, "jobs");
  //     if (title && title != '' && title != null) {
 
  //       const querySnapshot = await getDocs(jobsCollection);
  //       const jobs = querySnapshot.docs.map(doc => ({
  //         id: doc.id,
  //         ...doc.data(),
  //       }));

  //       const filterJobs = jobs.filter( (job) => 
  //         job.title.toLowerCase().includes( title.toLowerCase() )
  //       )

  //       set ({ jobs: filterJobs, loading: false })
  //       return 
  //     } 
     
  //     let jobsQuery;

  //     if (page === 0) {

  //       // First page
  //       jobsQuery = query(jobsCollection, orderBy('id', "desc"), limit(get().limit)); 

  //       if ( title ) {
  //         jobsQuery = query(
  //           jobsCollection,  
  //         ); 
  //       }
       
  //     } else {

  //       // Load more  
  //       jobsQuery = query(jobsCollection,  orderBy('id', "desc"), limit(get().limit), startAfter(get().lastVisible));
  //     }
 
  //     const querySnapshot = await getDocs(jobsQuery);
  //     const jobs = querySnapshot.docs.map(doc => ({
  //       id: doc.id,
  //       ...doc.data(),
  //     }));
 

  //     // Update lastVisible to the last document fetched
  //     const lastVisible = querySnapshot.docs[querySnapshot.docs.length - 1];

  //     set((state) => ({
  //       jobs: page === 0 ? jobs : [...state.jobs, ...jobs],
  //       loading: false,
  //       lastVisible: lastVisible || get().lastVisible,
  //       // page: page,

  //     }));

  //     page = page + 1
  //     set((state) => ({
  //       page: page,
  //     }))
  //   } catch (error) {
  //     set({ error: error.message, loading: false });
  //   }
  // },
   
//   addProducts: async() => {
//     set({ loading: true, error: null })

//     try {

//       const list = productsData;    // products from 
//       const productsCollection = collection(db, "products")

//       for (const product of productsData.data) {
//         await addDoc(productsCollection, product)
//       }

//       set({ loading: false });
//     } catch (error) {
//       set({ error: error.message, loading: false })
//     }
//   }
}));

export default useStore;