
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Componant/Home/Home';
import Breakfast from './Componant/Breakfast/Breakfast';
import Dinner from './Componant/Dinner/Dinner';
import Footer from './Componant/Footer/Footer';
import Header from './Componant/Header/Header';
import Login from './Componant/Login/Login';
import Lunch from './Componant/Lunch/Lunch';
import NotFound from './Componant/NotFound/NotFound';
import SignUp from './Componant/SignUp/SignUp';

function App() {
  return (
    <div className="App">


      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signUp' element={<SignUp></SignUp>}></Route>
        <Route path='/breakfast' element={<Breakfast></Breakfast>}></Route>
        <Route path='/lunch' element={<Lunch></Lunch>}></Route>
        <Route path='/dinner' element={<Dinner></Dinner>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      {/* <Footer></Footer> */}
    </div>
  );
}

export default App;
