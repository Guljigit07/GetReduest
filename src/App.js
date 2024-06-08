import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import GlobalRouter from './getuserpage/router/GlobalRouter';

function App() {
    return (
          <BrowserRouter className="App">
                 <GlobalRouter/>
          </BrowserRouter>
    );
}

export default App;
