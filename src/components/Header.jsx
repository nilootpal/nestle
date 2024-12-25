import React from 'react'
import Home from '../assets/home.png'
import aicoach from '../assets/out2.png';
import person from '../assets/person.png';


function Header() {
  return (
    <div style={{display: 'flex', flexDirection:'row', justifyContent: 'space-around', alignItems: 'center', borderBottom: '1px solid #ccc'}}>
        <div style={{justifyItems: 'center'}}>
            <img src={Home} alt='Home Icon' style={{width:'40px', height:'40px'}}/>
        </div>
        <div>
            <img src={aicoach} alt="Logo" width={250} height={80} style={{borderColor:"black", borderRadius:'2px'}} />
        </div>
        <div>
            <img src={person} alt="Logo" width={60} height={60} style={{ borderRadius: '50%' }} />
        </div>
    </div>
  )
}

export default Header