import { Routes, Route } from 'react-router-dom';
import HomeView from './features/home/components/Home';
import OurMenu from './features/ourMenu/components/ourMenuView';
import ProfileView from './features/profile/components/ProfileView';
import AuthenticationView from './features/auth/components/AuthenticationView';
import Header from './shared/components/Header/Header';

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<HomeView />} />
        <Route path='/OurMenu' element={<OurMenu />} />
        <Route path='/Profile' element={<ProfileView />} />
        <Route path='/Authentication' element={<AuthenticationView />} />
      </Routes>
    </>
  )
}

export default App
