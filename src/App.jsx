import { Routes, Route } from 'react-router-dom';
import HomeView from './features/home/components/Home';
import OurMenu from './features/ourMenu/components/ourMenuView';
import ProfileView from './features/profile/components/ProfileView';
import LoginView from './features/auth/components/LoginView';
import Header from './shared/components/Header/Header';

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<HomeView />} />
        <Route path='/OurMenu' element={<OurMenu />} />
        <Route path='/profile' element={<ProfileView />} />
        <Route path='/login' element={<LoginView />} />
      </Routes>
    </>
  )
}

export default App
