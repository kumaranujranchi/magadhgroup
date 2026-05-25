import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ErrorPage from './components/pages/error';
import HomeOne from './components/pages/homes/home';
import HomeTwo from './components/pages/homes/home-2';
import HomeThree from './components/pages/homes/home-3';
import AboutUs from './components/pages/about';
import ServicePage from './components/pages/services/service';
import PricingPages from './components/pages/pricing-plans';
import FaqPage from './components/pages/faq';
import Testimonial from './components/pages/testimonial';
import TeamPage from './components/pages/teams/team';
import TeamPageTwo from './components/pages/teams/team-2';
import TeamPageThree from './components/pages/teams/team-3';
import RequestQuotePage from './components/pages/request-quote';
import PortfolioFilterPage from './components/pages/portfolio/gallery';
import PortfolioTowColumns from './components/pages/portfolio/2-columns';
import PortfolioThreeColumns from './components/pages/portfolio/3-columns';
import PortfolioFourColumns from './components/pages/portfolio/4-columns';
import BlogGrid from './components/pages/blogs/blog';
import { useEffect } from 'react';
import ScrollToTop from './components/pages/common/scroll/scroll-to-top';
import { animationCreate } from '.';
import CustomCursor from './components/pages/common/cursor';
import SwitchTab from './components/pages/common/dark-light';
import HomeFour from './components/pages/homes/home-4';
import History from './components/pages/history';
import ContactUs from './components/pages/contacts';
import BlogStandardPage from './components/pages/blogs/blog-standard';
import ServicesDetails from './components/pages/services/service-single';
import PortfolioDetails from './components/pages/portfolio/portfolio-details';
import BlogDetails from './components/pages/blogs/blog-details';

import ProductsPage from './components/pages/products';
import ProductDetailPage from './components/pages/products/product-detail';

function App() {
    useEffect(() => {
        setTimeout(() => {
            animationCreate();
        }, 500);
    }, []);
    return (
        <>
            <CustomCursor />
            <SwitchTab />
            <Router><Routes>
                <Route path="/" element={<HomeOne />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/history" element={<History />} />
                <Route path="*" element={<ErrorPage />} />
                <Route path="/services" element={<ServicePage />} />
                <Route path="/services/:id" element={<ServicesDetails />} />
                <Route path="/products" element={<ProductsPage />} />
                <Route path="/products/:slug" element={<ProductDetailPage />} />
                <Route path="/testimonial" element={<Testimonial />} />
                <Route path="/pricing-plans" element={<PricingPages />} />
                <Route path="/faq" element={<FaqPage />} />
                <Route path="/team" element={<TeamPage />} />
                <Route path="/team-two" element={<TeamPageTwo />} />
                <Route path="/team-three" element={<TeamPageThree />} />
                <Route path="/request-quote" element={<RequestQuotePage />} />
                <Route path="/gallery" element={<PortfolioFilterPage />} />
                <Route path="/portfolio/2-columns" element={<PortfolioTowColumns />} />
                <Route path="/portfolio/3-columns" element={<PortfolioThreeColumns />} />
                <Route path="/portfolio/4-columns" element={<PortfolioFourColumns />} />
                <Route path="/portfolio/:id" element={<PortfolioDetails />} />
                <Route path="/blog" element={<BlogGrid />} />
                <Route path="/blog-standard" element={<BlogStandardPage />} />
                <Route path="/blog/:id" element={<BlogDetails />} />
                <Route path="/contact-us" element={<ContactUs />} />
            </Routes></Router>
            <ScrollToTop />
        </>
    )
}

export default App;
