import { useEffect, useState } from 'react'
import Navbar from './Components/Navbar'
import Header from './Components/Header'
import SearchBar from './Components/SearchBar'
import JobCard from './Components/JobCard'
import JobDummyData from './JobDummyData'

import { collection, query, where, getDocs, orderBy } from "firebase/firestore";
import { db } from './firebase.config'


function App() {

  const [jobs, setJobs] = useState([]);

const jobsRef = query(collection(db, "jobs"));
const q = query(jobsRef, orderBy("postedOn","desc"));


  const fetchJobs = async () => {
    try {
      const req = await getDocs(q);
      const jobsData = [];
      req.forEach((doc) => {
        jobsData.push({ id: doc.id, ...doc.data(), postedOn: doc.data().postedOn.toDate() });
      });
    setJobs(jobsData);
   
   } catch (error) {
     console.error("Error fetching jobs:", error);
   }
  };



   const fetchJobsCustom = async (jobCriteria) => {
    try {
      // Start with basic query
      let queryConstraints = [];
      
      // Only add where clauses for non-empty criteria
      if (jobCriteria.type) {
        queryConstraints.push(where("type", "==", jobCriteria.type));
      }
      
      if (jobCriteria.title) {
        queryConstraints.push(where("title", "==", jobCriteria.title));
      }
      
      if (jobCriteria.location) {
        queryConstraints.push(where("location", "==", jobCriteria.location));
      }
      
      if (jobCriteria.experience) {
        queryConstraints.push(where("experience", "==", jobCriteria.experience));
      }
      
     
      // Build final query
      const filterQuery = query(jobsRef, ...queryConstraints,orderBy("postedOn", "desc"));
      
      // Rest of your code remains the same
      const req = await getDocs(filterQuery);
      const jobsData = [];
      req.forEach((doc) => {
        jobsData.push({ id: doc.id, ...doc.data(), postedOn: doc.data().postedOn.toDate() });
      });
    setJobs(jobsData);
    
   } catch (error) {
     console.error("Error fetching jobs:", error);
   }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <div className='p-2'>
      <Navbar />
      <Header />
      <SearchBar fetchJobsCustom={fetchJobsCustom} />
      {
        jobs.map((job) => (
          <JobCard
            key={job.id}
            title={job.title}
            company={job.company}
            type={job.type}
            experience={job.experience}
            location={job.location}
            skills={job.skills}
            job_link={job.job_link}
            postedOn={job.postedOn}
            
          />
        ))}
    </div>
  )
}

export default App
