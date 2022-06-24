import { BrowserRouter as Router, Route, Routes , Link} from 'react-router-dom'
import FilterScreen from './screen/FilterScreen';
import HomeScreen from './screen/HomeScreen';
import './App.css'
import IndexScreen from './screen/IndexScreen';
// import { IndexScreen1 } from './screen/IndexScreen';
// import 'bootstrap/dist/css/bootstrap.css';

function App() {  
    let navigationLinks = document.getElementById('navigationLinks');
    let homeNavigationLink = document.getElementById('homeNavigationLink');
    let filterNavigationLink = document.getElementById('filterNavifgationLink');
    let indexNavigationLink = document.getElementById('indexNavigationLink');

    const homeNavigationHandler = () => {  
        
        homeNavigationLink.childNodes[0].style.display='none';
        filterNavigationLink.childNodes[0].style.display='block';
        indexNavigationLink.childNodes[0].style.display='block';
        navigationLinks.classList.remove('flex-container');
        navigationLinks.classList.add('navigation-links-clicked');
    }
    const filterNavigationHandler = () => {        
        navigationLinks.classList.remove('flex-container');
        navigationLinks.classList.add('navigation-links-clicked');
        homeNavigationLink.childNodes[0].style.display='block';
        filterNavigationLink.childNodes[0].style.display='none';     
        indexNavigationLink.childNodes[0].style.display='block';
    }
    const indexNavigationHandler = () => {        
        homeNavigationLink.childNodes[0].style.display='block';
        filterNavigationLink.childNodes[0].style.display='block';
        indexNavigationLink.childNodes[0].style.display='block';
        navigationLinks.classList.add('flex-container');
        navigationLinks.classList.remove('navigation-links-clicked');   
    }
  return (

    <Router>            
      {/* <IndexScreen /> */}
      {/* <div style={{ height:'10rem' }}>
        <Header searchPhrase={searchPhrase} setSearchPhrase={setSearchPhrase} />
      </div> */}
      <div id='navigationLinks' className='flex-container btn-c'>
        <div id='homeNavigationLink'>       
            <Link className='m-b-2 mbg-b' to="/home" onClick={homeNavigationHandler}>
                مشاهده برنامه همه اساتید
            </Link>
        </div> 
        <div id='filterNavifgationLink'>
            <Link className='m-b-2 mbg-g' to="/filter" onClick={filterNavigationHandler}>
                فیلتر کردن
            </Link>
        </div>
        <div id='indexNavigationLink'>
            <Link className='m-b-2 mbg-y' to="/index" onClick={indexNavigationHandler}>
                صفحه اصلی
            </Link> 
        </div> 
      </div>
      <Routes>
        <Route path='/index' element={<IndexScreen />}></Route>
        <Route path='/home' element={<HomeScreen />}></Route>
        <Route path='/filter' element={<FilterScreen />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
