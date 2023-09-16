import './index.css'
import './App.css'
import Homepage from './Pages/Homepage';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Details from './Pages/Details';

function App() {
  

  return (

    <div>
       <BrowserRouter>
       <Routes >
       <Route  path ="/" element={<Homepage />} />
       <Route  path ="/movies/:id" element={<Details />} />
       </Routes>
       </BrowserRouter>
   </div>
  )
}

export default App
