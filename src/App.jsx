import './App.css';
import Navbar from './components/Navbar';
import LeftColumn from './pages/LeftColumn';
import MiddleColumn from './pages/MiddleColumn';
import RightColumn from './pages/RightColumn';

function App() {
  return (
    <>
      <Navbar />
      <div className="grid grid-cols-4 gap-4 p-4">
        {/* LeftColumn takes up 1 out of 4 columns */}
        <div className="col-span-1">
          <LeftColumn />
        </div>
        {/* MiddleColumn takes up 2 out of 4 columns */}
        <div className="col-span-2">
          <MiddleColumn />
        </div>
        {/* RightColumn takes up 1 out of 4 columns */}
        <div className="col-span-1">
          <RightColumn />
        </div>
      </div>
    </>
  );
}

export default App;
