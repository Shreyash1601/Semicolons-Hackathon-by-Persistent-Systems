import React from 'react'
import './Hospital.css'
import doctor from './doctor.png'
import contact from './contact.png'
const Hospital=()=>{
    return(
        <>
        <div>
            {/* Navbar */}
            <div className='Navbar'>
            <div className='Logo'>Logo</div>
            <div className='Product Name'>Product Name</div>
            </div>
            <div className='container'>
            <h5>Home > Hospital</h5>
            <div className='box'>
            </div>
            <div className='Contact'>
            <h2>Surekha Criticare Hospital</h2>
            <p>
                Doctors House, 1st Floor, Near Ashok Anil Cinema<br/>
                Ulhasnagar Maharashtra 421003
            </p>
            <div className='Doctors'>
            <div className='heading'>
            <img src={doctor} alt="not found" style={{height:"40px",width:"40px",marginRight:"10px"}}/>
                <h3>DOCTORS</h3>
                </div>
                <div className='list'>
                    <ul>
                        <li>Dr. Agrawal Ashutosh, Radiologist</li>
                        <li>Dr. Achwal Suvarna, Gynaecologist </li>
                        <li>Dr. Agrawal Priyank, Orthopaedic Surgeon</li>
                        <li>Dr. Agnihotri Basant Kumar, Opthalmologist</li>
                        <li>Dr. Agrawal Himanshu, Opthalmologist</li>
                        <li>Dr. Agrawal Shanu, Dental Surgeon</li>
                        <li>Dr. Baghel Satyendra Singh, AYUSH Doctor</li>
                    </ul>
                </div>
            </div>
            <div className='contact2'>
            <div className='heading2'>
                <img src={contact} alt="Not found" style={{width:"20px", height:"20px",paddingRight:"10px"}}/>
                <h3>CONTACTS</h3>
            </div>
            <div>
                <ul>
                    <li>251-3199292</li>
                    <li>Tap to locate hospital</li>
                </ul>
            </div>
            </div>
            </div>
            </div>
        </div>

        </>
    )
}
export default Hospital