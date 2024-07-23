import Navbar from './components/Navbar';
import Welcome from './components/Welcome';
import { cardData } from './cardData';
import Card from './components/Card';
import { Route, Routes } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';

function App() {
  return (
    <div className={`w-screen min-h-screen bg-home`}>
        <Navbar/>

        <Routes>
          <Route path='/' element={
                                    <div className='flex flex-col w-11/12 items-center pt-10 mx-auto'>
                                    <Welcome/>
                                    <div className='w-full flex items-center mx-auto justify-center mt-8 gap-3'>
                                      {
                                        cardData.map((element,index) => {
                                          return (
                                            <Card card={element} key={index}/>
                                          )
                                        })
                                      }
                                    </div>
                                  </div>
          }/>

          <Route path='/login' element={<LoginForm/>}/>
          <Route path='/signup' element={<SignupForm/>}/>

        </Routes>
        
    </div>
  );
}

export default App;
