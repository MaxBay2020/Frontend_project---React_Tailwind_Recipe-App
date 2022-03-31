import Navbar from "./components/Navbar";
import Main from "./components/Main";

function App() {
  return (
    <div className='text-gray-light-900 font-body grid md:grid-cols-3'>
        <Navbar />
        <Main />
    </div>
  );
}

export default App;
