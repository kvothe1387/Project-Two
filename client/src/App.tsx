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
          <LeftSide />
          <RightSide />

          <div className="col-md-6"><Outlet /></div>


        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
