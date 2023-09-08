import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home/Home';
import { New } from '../pages/New/New';
import { Details } from '../pages/Details/Details';
import { Profile } from '../pages/Profile/Profile';

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/new' element={<New />} />
      <Route path='/details/:movieId' element={<Details />} />
      <Route path='/profile' element={<Profile />} />
    </Routes>
  );
}
