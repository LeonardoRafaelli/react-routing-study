
import './App.css';
import PageA from './pages/PageA';
import PageB from './pages/PageB';
import { BrowserRouter, Routes, Route, Link , Outlet} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="pageA" element={<PageA />} />
          <Route path="pageB" element={<PageB />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


function Layout() {
  return (
    <>
      <h1>Fixed layout</h1>
      <p>Options: </p>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="pageA"> Page A</Link></li>
        <li><Link to="pageB"> Page B</Link></li>
      </ul>
      <div className='Content'>
          <Outlet />
      </div>
    </>
  )
}

export default App;
