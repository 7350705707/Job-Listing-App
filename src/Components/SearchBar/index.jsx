import React, { useState } from 'react'

const SearchBar = ({ fetchJobsCustom }) => {

    const [jobCriteria, setJobCriteria] = useState({
        title:'',
        location:'',
        experience:'',
        type:'',
    });


    const handleChange = (e) => {
        const {name, value} = e.target;

        setJobCriteria((prevCriteria) => {
            return {
                ...prevCriteria,
                [name]: value,
            }
        })
    }

    const handleSearch = async() => {
            await fetchJobsCustom(jobCriteria)
    }

  return (
    <>
    <div className='flex justify-center gap-4 mt-10 my-10 '>        <select  name="title" value={jobCriteria.title} onChange={handleChange} id="" className='w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md'>
            <option value="" disabled hidden>
                Job Role
            </option>
            
            <option value="iOS Developer">
                iOS Developer
            </option>
            <option value="Android Developer">
                Android Developer
            </option>
            <option value="Developer Advocate">
                Developer Advocate
            </option>
            <option value="Frontend Developer">
                Frontend Developer
            </option>
            <option value="Backend Developer">
                Backend Developer
            </option>
        </select>         <select name="type" value={jobCriteria.type} onChange={handleChange} id="" className='w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md'>
            <option value="" disabled hidden>
                Job Type
            </option>
           
            <option value="Full Time">
                Full Time
            </option>
            <option value="Part Time">
                Part Time
            </option>
            <option value="Contract">
                Contract
            </option>
        </select><select name="location" value={jobCriteria.location} onChange={handleChange} id="" className='w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md'>
            <option value="" disabled hidden>
                Location
            </option>
           
            <option value="Remote">
                Remote
            </option>
            <option value="In-Office">
                In-Office
            </option>
            <option value="Hybrid">
                Hybrid
            </option>        </select><select name="experience" value={jobCriteria.experience} onChange={handleChange} id="" className='w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md'>
            <option value="" disabled hidden>
                Experience
            </option>
           
            <option value="Fresher">
                Fresher
            </option>
            <option value="Junior Level">
                Junior Level
            </option>
            <option value="Mid Level">
                Mid Level
            </option>
            <option value="Senior Level">
                Senior Level
            </option>
            

        </select>        <button onClick={handleSearch} className='w-64 bg-blue-500 text-white font-bold rounded-md py-3'>Apply Filters</button>
    </div>
    <div className='flex justify-end mt-5 my-5 pr-20 '>
        <button className='w-64 bg-blue-500 text-white font-bold rounded-md py-3' onClick={() => {
            setJobCriteria({ title: '', location: '', experience: '', type: '' });
            fetchJobsCustom({ title: '', location: '', experience: '', type: '' });
        }}>Reset Filters</button>
    </div>
    </>
  )
}

export default SearchBar