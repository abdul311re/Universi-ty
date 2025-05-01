import './App.css';
import Header from './Components/Header';
import Sidebar from './Components/Side';
import WebRoutes from './Webroutes/Webroutes';
function App() {

  // Specify the routes where Header/Footer should be hidden
  
  return (<>
  <Header/>
   {/* Render Footer conditionally */} 
    <div className='flex'>
    <Sidebar/>
    <WebRoutes/> </div>  
    {/* Render Footer conditionally */}
    </> );
}

export default App;
