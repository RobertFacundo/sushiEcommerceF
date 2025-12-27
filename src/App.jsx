import { Routes, Route } from 'react-router-dom';
import HomeView from './features/home/Home.jsx';
import OurMenu from './features/ourMenu/ourMenuView.jsx';
import ProfileView from './features/profile/ProfileView';
import AuthenticationView from './features/auth/AuthenticationView.jsx';
import CheckoutView from './features/orders/checkoutView.jsx';
import CheckoutMain from './features/orders/components/CheckoutMain.jsx';
import Header from './shared/components/Header/Header';
import ThemeController from './shared/components/app/ThemeController.jsx';
import { Toaster } from 'sonner';
import CheckoutSuccess from './features/orders/components/CheckoutSuccess.jsx';
import CheckoutCancel from './features/orders/components/CheckoutCancel.jsx';

function App() {

  return (
    <>
      <ThemeController />
      <Toaster richColors position='top-right' />

      <Header />
      <Routes>
        <Route path='/' element={<HomeView />} />
        <Route path='/OurMenu' element={<OurMenu />} />
        <Route path='/Profile' element={<ProfileView />} />
        <Route path='/Authentication' element={<AuthenticationView />} />

        <Route path='/checkout' element={<CheckoutView />}>
          <Route index element={<CheckoutMain />} />
          <Route path='success' element={<CheckoutSuccess />} />
          <Route path='cancel' element={<CheckoutCancel />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
