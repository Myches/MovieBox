import './index.css'
import './App.css'
import Homepage from './Pages/Homepage';
import {HashRouter,Route,Routes} from 'react-router-dom'
import Details from './Pages/Details';

function App() {
  

  return (

    <div>
       <HashRouter>
       <Routes >
       <Route  path ="/" element={<Homepage />} />
       <Route  path ="/Details" element={<Details />} />
       </Routes>
       </HashRouter>
   </div>
  )
}

export default App
