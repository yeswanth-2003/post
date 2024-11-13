import logo from './logo.svg';
import './App.css';
import {Routes,Route} from 'react-router-dom';
import Post from './components/post.js';

function App() {
  return (
    <div className="App">
      {/* <Routes> */}
        <Post/>
          {/* <Route path="/" element={<Post />} /> */}
          {/* <Route path="/product/:id" element={<ProductDetail />} /> */}
        {/* </Routes> */}
    </div>
  );
}

export default App;
