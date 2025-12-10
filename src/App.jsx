import { Routes, Route } from 'react-router-dom';
import HomeView from './features/home/Home.jsx';
import OurMenu from './features/ourMenu/ourMenuView.jsx';
import ProfileView from './features/profile/ProfileView';
import AuthenticationView from './features/auth/AuthenticationView.jsx';
import Header from './shared/components/Header/Header';
import ThemeController from './shared/components/app/ThemeController.jsx';
import { Toaster } from 'sonner';

function App() {

  return (
    <>
      <ThemeController />
      <Toaster richColors position='top-right'/>

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
