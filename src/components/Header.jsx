import React from 'react'
import Home from '../assets/home.png'
import aicoach from '../assets/out2.png';
import person from '../assets/person.png';


function Header() {
  return (
    <div style={{display: 'flex', flexDirection:'row', justifyContent: 'space-between', padding: '10px 20px', borderBottom: '1px solid #ccc'}}>
        <div style={{justifyItems: 'center'}}>
            <img src={Home} alt='Home Icon' style={{width:'50px', height:'50px'}}/>
        </div>
        <div>
            <img src={aicoach} alt="Logo" width={200} height={100} style={{borderColor:"black", borderRadius:'2px'}} />
        </div>
        <div>
            <img src={person} alt="Logo" width={100} height={100} style={{borderRadius:100}} />
        </div>
    </div>
  )
}

export default Header