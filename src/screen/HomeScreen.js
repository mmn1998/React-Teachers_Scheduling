import React from 'react';
import data from '../data/data';
import '../App.css';
import Header from '../components/Header';
import Card from '../components/Card';
import { useState, useEffect } from 'react';
import FilterScreen from './FilterScreen';

export default function HomeScreen() {
  const [searchPhrase, setSearchPhrase] = useState("");
  
  
    const mydata = data.filter((item)=>
      item.name.includes(searchPhrase)
    );
  return (
    <>
      {/* <FilterScreen /> */}
      <div style={{ height:'10rem' }}>
        <Header searchPhrase={searchPhrase} setSearchPhrase={setSearchPhrase} />
      </div>
      <div className='row m-5'>
        
          {mydata.length>=0?mydata.map((item)=>{
                  return <div>
                      <div>
                          <Card data={item} />
                      </div>
                  </div>
          }):data.map((item)=>{
            return <div>
                <div>
                    <Card data={item} />
                </div>
            </div>
    })}
    </div>
    </>
  )
}
