import { Outlet } from 'react-router-dom';

import Navbar from './components/Navbar';
import LeftSide from './components/LeftSide';
import RightSide from './components/RightSide';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <main className='container-fluid border border-secondary'>
        <div className="row h-100">
          <div className="col-md-3 border border-secondary h-100"><LeftSide /></div>
          <div className="col-md-6 border border-secondary h-100"><Outlet /></div>
          <div className="col-md-3 border border-secondary h-100"><RightSide /></div>

        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
