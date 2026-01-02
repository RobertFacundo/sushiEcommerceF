import { Routes, Route } from 'react-router-dom';
import HomeView from './features/home/Home.jsx';
import OurMenu from './features/ourMenu/ourMenuView.jsx';
import ProfileView from './features/profile/ProfileView';
import AuthenticationView from './features/auth/AuthenticationView.jsx';
import CheckoutView from './features/orders/CheckoutView.jsx';
import CheckoutMain from './features/orders/components/CheckoutMain.jsx';
import Header from './shared/components/Header/Header';
import ThemeController from './shared/components/app/ThemeController.jsx';
import { Toaster } from 'sonner';
import CheckoutSuccess from './features/orders/components/CheckoutSuccess.jsx';
import CheckoutCancel from './features/orders/components/CheckoutCancel.jsx';
import AppLayout from './shared/components/app/AppLayout.jsx';
import Footer from './shared/components/Footer/Footer.jsx';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <>
      <ThemeController />
      <Toaster richColors position='top-right' />

      <AppLayout>
        <Header isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />
        <main className='relative z-10 flex-1 dark:bg-neutral-950'>
          <Routes>
            <Route path='/' element={<HomeView />} />
            <Route path='/OurMenu' element={<OurMenu isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />} />
            <Route path='/Profile' element={<ProfileView />} />
            <Route path='/Authentication' element={<AuthenticationView />} />

            <Route path='/checkout' element={<CheckoutView />}>
              <Route index element={<CheckoutMain />} />
              <Route path='success' element={<CheckoutSuccess />} />
              <Route path='cancel' element={<CheckoutCancel />} />
            </Route>
          </Routes>
        </main>
        <Footer />
      </AppLayout>
    </>
  )
}

export default App
