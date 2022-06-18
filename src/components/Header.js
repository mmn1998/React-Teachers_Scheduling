import React from 'react'
import '../App.css'
import ToggleOnIcon from './ToggleOnIcon'
import ToggleOffIcon from './ToggleOff';
import colors from '../styles/myAssets/colors';
import logo from '../beheshtiLogo.png';
import Menu from './Menu';
import SearchIcon from './SearchIcon';

export default function Header({ searchPhrase, setSearchPhrase }) {
  const clickHandlerToggleOn = () => {
    document.body.style.backgroundColor = colors.dark
    let toggleOff=document.getElementById('toggleOff');
    let toggleOn = document.getElementById('toggleOn');
    toggleOn.classList.remove('flex');
    toggleOn.classList.add('hide');
    toggleOff.classList.remove('hide')
    toggleOff.classList.add('flex')
  }
  const clickHandlerToggleOff = () => {
    document.body.style.backgroundColor = colors.light
    let toggleOff=document.getElementById('toggleOff');
    let toggleOn = document.getElementById('toggleOn');
    toggleOn.classList.remove('hide');
    toggleOn.classList.add('flex');
    toggleOff.classList.remove('flex')
    toggleOff.classList.add('hide')
  }
  const SearchClickHandler = () => {
    let search=document.getElementById('search');
    search.classList.toggle('hide');
  }
  const onChangeHandler = (event) => {
    setSearchPhrase(event.target.value)
  }
  
  return (
    <>
      <div className='search-bg'>
        <div onClick={SearchClickHandler}>
          <SearchIcon />
        </div>
        <input id='search' type='text' className='hide my-text-input' onChange={onChangeHandler} value={searchPhrase}/>
      </div>
      <div className='flex-container'>
        <div className='flex'>
          <div id='toggleOn' onClick={clickHandlerToggleOn} className='flex'>
            <ToggleOnIcon
            />
          </div>
          <div id='toggleOff' onClick={clickHandlerToggleOff} className='hide'>
            <ToggleOffIcon />
          </div>
        </div>
        <div><img alt='Not Found :(' src={logo} className='img'/></div>
        
        <div><Menu /></div>

      </div>
    </>
  )
}
