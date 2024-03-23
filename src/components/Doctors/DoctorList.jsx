

import React from "react";
import {doctors} from '../../assets/data/doctors';
import DoctorCard from './DoctorCard';
const DoctorList = () =>{
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-2 lg:grid-cols-3 grap-5 lg:grap-[30px] mt-[30px] lg:mt-[55px]">
            {doctors.map((doctor)=> <DoctorCard key={doctor.id} doctor={doctor}/>)}
        </div>
    )
}

export default DoctorList