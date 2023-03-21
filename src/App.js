
import Quiz from './components/quiz'
import { Route, Routes } from 'react-router-dom';
import Register from './components/register';
import Login from './components/login';
import Score from './components/score';
import PrivateRoute from './components/privateroute';
function App() {
  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path='/' element={
      <PrivateRoute>
          < Quiz />
       
      </PrivateRoute>
      }
      />
      <Route path='/score' element={
      <PrivateRoute>
          < Score />
       
      </PrivateRoute>
      }
      />

  </Routes>
  );
}

export default App;
