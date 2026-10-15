import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackToTop from '../components/ui/BackToTop';

function MainLayout() {
  return (
    <div className="layout">
      <header className="layout__header">
        <Navbar />
      </header>
      <main className="layout__main">
        <Outlet />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default MainLayout;
