import india from './images/india.jpg'
import React, { useState } from 'react'

const Country = () => {
    const[showCountry, setShowCountry] = useState(false)
    const[showUnion, setShowUnion] = useState(false)
    return ( 
        <>
            <div className='header'><h1>INDIA </h1></div>
            <div class="App-logo">
                <img src={india} className="App-logo" alt="logo"  />
            </div>
            <br/>
            <div class="grid">
                <button className='button' onClick={()=>setShowCountry(!showCountry)}>Show States</button> 
                <button className='button'   onClick={()=>setShowUnion(!showUnion)}>Show UnionTeritory</button>
            </div>
            <div class="grid">
            {
                showCountry && <div class="state">
                    <b>
                    <ul>
                        <li>Andhra Pradesh</li>
                        <li>Arunachal Pradesh</li>
                        <li>Assam</li>
                        <li>Bihar</li>
                        <li>Chhattisgarh</li>
                        <li>Goa</li>
                        <li>Gujarat</li>
                        <li>Haryana</li>
                        <li>Himachal Pradesh</li>
                        <li>Jharkhand</li>
                        <li>Karnataka</li>
                        <li>Kerala</li>
                        <li>Madhya Pradesh</li>
                        <li>Maharashtra</li>
                        <li>Manipur</li>
                        <li>Meghalaya</li>
                        <li>Mizoram</li>
                        <li>Nagaland</li>
                        <li>Odisha</li>
                        <li>Punjab</li>
                        <li>Rajasthan</li>
                        <li>Sikkim</li>
                        <li>TamilNadu</li>
                        <li>Telangana</li>
                        <li>Tripura</li>
                        <li>Uttarakhand</li>
                        <li>Uttar Pradesh</li>
                        <li>West Bengal</li>
                    </ul></b>
                </div>
            }
            {
                showUnion && <div class="union">
                    <b><ul>
                        <li>Andaman and Nicobar Islands</li>
                        <li>Daman & Diu</li>
                        <li>Jammu & Kashmir</li>
                        <li>Lakshadweep</li>
                        <li>Chandigarh</li>
                        <li>Delhi</li>
                        <li>Ladakh</li>
                        <li>Puducherry</li>
                    </ul></b>
                </div>
                
            }
            </div>
        </>
     );
}
 
export default Country;