import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import FilterScreen from './screen/FilterScreen';
import HomeScreen from './screen/HomeScreen';
import './App.css'
import IndexScreen from './screen/IndexScreen';
// import { IndexScreen1 } from './screen/IndexScreen';
// import 'bootstrap/dist/css/bootstrap.css';

function App() {  
  return (

    <Router>            
      <IndexScreen />
      <Routes>
        <Route path='/index' element={<IndexScreen />}></Route>
        <Route path='/home' element={<HomeScreen />}></Route>
        <Route path='/filter' element={<FilterScreen />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
