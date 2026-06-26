import { Outlet } from 'react-router-dom';
import BackToTop from './BackToTop';
import Footer from './Footer';
import PortfolioNavbar from './Navbar';

export default function Layout() {
  return (
    <div className="portfolio-app">
      <PortfolioNavbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
