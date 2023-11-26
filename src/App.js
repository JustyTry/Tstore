import Footer from './components/Footer';
import Header from './components/Header';
import NewsSub from './components/NewsSub';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './pages/Home';
import Panel from './pages/Panel';
import Product from './pages/Product';
import Login from './pages/Login';
import Favorites from './pages/Favorites';
import Cart from './pages/Cart';

function App() {
  const Layout = ({ Page }) => {
    return (
      <div className='flex flex-col h-screen justify-between font-lato'>
        <header>
          <Header />
        </header>
        <main className='mb-auto'>
          <Page />

        </main>
        <footer>
          <NewsSub />
          <Footer />
        </footer>
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout Page={Home} />,
      errorElement: (
        <>
          <h1>Woops</h1>
          <Layout Page={Home} />
        </>
      ),
    },
    {
      path: '/panel',
      element: <Layout Page={Panel} />,
    },
    {
      path: '/product/:id',
      element: <Layout Page={Product} />,
    },
    {
      path: '/favorites',
      element: <Layout Page={Favorites} />,
    },
    {
      path: '/cart',
      element: <Layout Page={Cart} />,
    },
    {
      path: '/login',
      element: <Login />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
