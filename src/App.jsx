import './App.css';
import Navbar from './components/Navbar';
import LeftColumn from './pages/LeftColumn';
import MiddleColumn from './pages/MiddleColumn';
import RightColumn from './pages/RightColumn';

function App() {
  return (
    <>
      <Navbar />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4">
        {/* LeftColumn takes up full width on mobile, 1/4 on larger screens */}
        <div className="col-span-1">
          <LeftColumn />
        </div>
        {/* MiddleColumn takes up full width on mobile, 2/4 on larger screens */}
        <div className="col-span-1 md:col-span-2">
          <MiddleColumn />
        </div>
        {/* RightColumn takes up full width on mobile, 1/4 on larger screens */}
        <div className="col-span-1">
          <RightColumn />
        </div>
      </div>
    </>
  );
}

export default App;
