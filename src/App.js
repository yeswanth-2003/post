import logo from './logo.svg';
import './App.css';
import {Routes,Route} from 'react-router-dom';
import Post from './components/post1.js';
import GetUser from './components/get.js';

function App() {
  return (
    <div className="App">
      {/* <Routes> */}
        <Post/>
          {/* <Route path="/" element={<Post />} />
          <Route path="/getuser" element={<GetUser />} />
        </Routes> */}
    </div>
  );
}

export default App;
