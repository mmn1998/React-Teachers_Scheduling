import React from 'react';
import { Link } from 'react-router-dom';

export default function IndexScreen() {
    let navigationLinks = document.getElementById('navigationLinks');
    let homeNavigationLink = document.getElementById('homeNavigationLink');
    let filterNavigationLink = document.getElementById('homeNavigationLink');
    let indexNavigationLink = document.getElementById('homeNavigationLink');
    const homeNavigationHandler = () => {        
        homeNavigationLink.style.display='none';
        filterNavigationLink.style.display='block';
        indexNavigationLink.style.display='block';
        navigationLinks.classList.remove('flex-container');
        navigationLinks.classList.add('navigation-links-clicked');
    }
    const filterNavigationHandler = () => {        
        homeNavigationLink.style.display='block';
        filterNavigationLink.style.display='none';
        indexNavigationLink.style.display='block';
        navigationLinks.classList.remove('flex-container');
        navigationLinks.classList.add('navigation-links-clicked');
    }
    const indexNavigationHandler = () => {        
        homeNavigationLink.style.display='block';
        filterNavigationLink.style.display='block';
        indexNavigationLink.style.display='none';
        navigationLinks.classList.add('flex-container');
        navigationLinks.classList.remove('navigation-links-clicked');   
    }
  return (
    <div id='navigationLinks' className='flex-container btn-c'>        
        <Link className='m-b-2' to="/home" onClick={homeNavigationHandler} id='homeNavigationLink'>
            مشاهده برنامه همه اساتید
        </Link>
        <Link className='m-b-2' to="/filter" onClick={filterNavigationHandler} id='filterNavifgationLink'>
            فیلتر کردن
        </Link>
        <Link className='m-b-2' to="/index" onClick={indexNavigationHandler} id='indexNavigationLink'>
        صفحه اصلی
        </Link>  
    </div>
  )
}
