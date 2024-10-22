import './App.css';
import Navbar from './components/Navbar';
import LeftColumn from './pages/LeftColumn';
import MiddleColumn from './pages/MiddleColumn';
import RightColumn from './pages/RightColumn';
import Footer from './pages/Footer';
function App() {
  return (
    <>
      <Navbar />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4">
        {/* LeftColumn takes up full width on mobile, 1/4 on larger screens */}
        <div className="col-span-1 left-column hide-scrollbar">
          <LeftColumn />
        </div>
        {/* MiddleColumn takes up full width on mobile, 2/4 on larger screens */}
        <div className="col-span-1 md:col-span-2 middle-column hide-scrollbar">
          <MiddleColumn />
        </div>
        {/* RightColumn takes up full width on mobile, 1/4 on larger screens */}
        <div className="col-span-1 right-column hide-scrollbar">
          <RightColumn />
        </div>
      </div>
      <div class="relative flex items-center">
        <div class="w-full h-1 bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500"></div>

        <div class="absolute left-1/2 transform -translate-x-1/2 bg-white text-black w-10 h-10 rounded-full flex items-center justify-center border border-black">
          M
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
