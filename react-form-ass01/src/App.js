import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Home from './Home';
import store from './store';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
store.subscribe(() => console.log(store.getState()));

function App() {
  return <>
    <Provider store={store}>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/signup' element={<Register />} />
          <Route path='/home' element={<Home />} />
        </Routes>
      </BrowserRouter>
      {/* <div className="App">
        </div> */}
    </Provider>
  </>
}

export default App;
