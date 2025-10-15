
import { createBrowserRouter, } from "react-router-dom";
import Main from './../Layout/Main';
import Home from "../Pages/HomePage/Home";
import ContactPage from "../Pages/ContactPage/ContactPage";
import AboutPage from "../Pages/AboutPage/AboutPage";
import FreeTrialPage from "../Pages/FreeTrialPage/FreeTrialPage";
import ServicesPage from "../Pages/ServicesPage/ServicesPage";
import PricingPage from "../Pages/PricingPage/PricingPage";
import Clipping from "../Pages/ServicesPage/Services/Clipping/Clipping";
import MultipleClipping from "../Pages/ServicesPage/Services/MultipleClipping/MultipleClipping";
import GhostMannequin from "../Pages/ServicesPage/Services/GhostMannequin/GhostMannequin";
import BackgroundRemove from "../Pages/ServicesPage/Services/BackgroundRemove/BackgroundRemove";
import PhotoRetouching from "../Pages/ServicesPage/Services/PhotoRetouching/PhotoRetouching";
import ImageMasking from "../Pages/ServicesPage/Services/ImageMasking/ImageMasking";
import ColorCorrection from "../Pages/ServicesPage/Services/ColorCorrection/ColorCorrection";
import ImageReflection from "../Pages/ServicesPage/Services/ImageReflection/ImageReflection";
import ImageShadowing from "../Pages/ServicesPage/Services/ImageShadowing/ImageShadowing";
import ImageCleaning from "../Pages/ServicesPage/Services/ImageCleaning/ImageCleaning";
import ImageCropping from "../Pages/ServicesPage/Services/ImageCropping/ImageCropping";
import PhotoRestoration from "../Pages/ServicesPage/Services/PhotoRestoration/PhotoRestoration";
import RasterVector from "../Pages/ServicesPage/Services/RasterVector/RasterVector";
import Portfolio from "../Pages/PortfolioPage/Portfolio";
import Blog from "../Pages/Blog/Blog";
import ReadMore1 from "../Pages/Blog/ReadMore/ReadMore1";
import ReadMore2 from "../Pages/Blog/ReadMore2/ReadMore2";
import ReadMore3 from "../Pages/Blog/ReadMore3/ReadMore3";
import ReadMore6 from "../Pages/Blog/ReadMore6/ReadMore6";
export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }, 
            {
                path:'/portfolio',
                element:<Portfolio></Portfolio>
            },
            {
                path: '/contact',
                element: <ContactPage></ContactPage>
            },
            {
                path: '/about',
                element: <AboutPage></AboutPage>
            }, {
                path: '/free-trial',
                element: <FreeTrialPage></FreeTrialPage>
            }, {
                path: '/services',
                element: <ServicesPage></ServicesPage>
            },
            {
                path:'/pricing',
                element:<PricingPage></PricingPage>
            },
            {
                path:'/services/clipping',
                element:<Clipping></Clipping>
            },
            {
                path:'/services/multiple-clipping',
                element:<MultipleClipping></MultipleClipping>
            },
            {
                path:'/services/ghost-mannequin',
                element:<GhostMannequin></GhostMannequin>
            },
            {
                path:'/services/background-remove',
                element:<BackgroundRemove></BackgroundRemove>
            },
            {
                path:'/services/photo-retouching',
                element:<PhotoRetouching></PhotoRetouching>
            },
            {
                path:'/services/image-masking',
                element:<ImageMasking></ImageMasking>
            },
            {
                path:'/services/color-correction',
                element:<ColorCorrection></ColorCorrection>
            },
            {
                path:'/services/image-reflection',
                element:<ImageReflection></ImageReflection>
            },
            {
                path:'/services/image-shadowing',
                element:<ImageShadowing></ImageShadowing>
            },
            {
                path:'/services/image-cleaning',
                element:<ImageCleaning></ImageCleaning>
            },
            {
                path:'/services/image-cropping',
                element:<ImageCropping></ImageCropping>
            },
            {
                path:'/services/photo-restoration',
                element:<PhotoRestoration></PhotoRestoration>
            },
            {
                path:'/services/raster-to-vector',
                element:<RasterVector></RasterVector>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/employee-interest-in-the-successful-achievement-6',
                element:<ReadMore1></ReadMore1>
            },
            {
                path:'/employee-interest-in-the-successful-achievement-5',
                element:<ReadMore2></ReadMore2>
            },
            {
                path:'/employee-interest-in-the-successful-achievement-4',
                element:<ReadMore3></ReadMore3>
            },
            {
                path:'/get-ready-for-our-upcoming-awesome-plan-for-designer-developer',
                element:<ReadMore6></ReadMore6>
            }
        ]
    },
]);