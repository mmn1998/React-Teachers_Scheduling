import React from 'react';
import '../styles/FilterScreen.css';
import { Link } from 'react-router-dom'

export default function FilterScreen() {    
  return (
    <div>                    
        {/* <FilterScreen /> */}
        <div className='m-f-c' style={{ height:'80vh' }}>
            <div>
                <input className='m-i' type='text' placeholder='نام استاد مورد نظر را تایپ کنید...' />
            </div>
            <div>
                <input className='m-i' type='text' placeholder='دانشکده مورد نظر را تایپ کنید...' />
            </div>
            <div>
                <select>
                    <option value='0'> روز هفته را انتخاب کنید :</option>
                    <option value='saturday' data-fa='شنبه'>شنبه</option>
                    <option value='sunday' data-fa='یکشنبه'>یکشنبه</option>
                    <option value='monday' data-fa='دوشنبه'>دوشنبه</option>
                    <option value='tuesday' data-fa='سه شنبه'>سه شنبه</option>
                    <option value='wednesday' data-fa='چهارشنبه'>چهارشنبه</option>
                    <option value='thursday' data-fa='پنجشنبه'>پنجشنبه</option>
                </select>
            </div>        
        </div>
        <button className='m-b'>
            اعمال
        </button>
    </div>
  )
}
