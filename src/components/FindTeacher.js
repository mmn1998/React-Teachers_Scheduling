import React from 'react';
import data from '../data/data';
import '../styles/Card.css';

export default function FindTeacher({ data, dayOfTheWeek,dayOfTheWeekFa }) {
  return (
    <div>
        <div className='flex-container my-blur'>
            <div key={data.key}>
                <img src={data.pic} alt='پیدا نشد :(' className='my-img'></img>
                <p className='my-email'>{data.email}</p>
            </div>
            <div key={data.key} className='my-text'>
                <h1>{data.time}</h1>
                <h2>{data.name}</h2>
                <p>{data.tel}</p>
            </div>
            <div key={data.key}>
                <div className='flex2'>
                <ComputerIcon />
                </div>
                <p className='my-text'>{data.group}</p>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>           </th> 
                        <th>7:30 - 9:00</th> 
                        <th>9:00 - 10:30</th> 
                        <th>10:30 - 12:00</th> 
                        <th>13:00 - 14:30</th> 
                        <th>14:30 - 16:00</th> 
                        <th>16:00 - 17:30</th> 
                        <th>17:30 - 19:00</th> 
                    </tr>
                </thead>
                <tbody>
                <tr>
                    <td>{dayOfTheWeekFa}</td>
                        {data.dayOfTheWeek.map((item)=>{return <td>{item}</td>})}
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  )
}
