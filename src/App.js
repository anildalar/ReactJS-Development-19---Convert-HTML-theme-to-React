import { BrowserRouter, Form, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Forms from './pages/Forms';
import Layout from './components/ui/Layout';

//2. Functional Componnent Defination area
function App() {
  //1. Hooks Area

  //2. Function defination

  //3. Return statement
  //Every function return something  "to return html structure"
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
           
            <Route path="dashboard" element={ <Dashboard /> }></Route>
            <Route path="forms" element={ <Forms /> }></Route>
          </Route>
          <Route index path="/" element={ <Login /> }></Route>
          <Route path="/login" element={ <Login /> }></Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
