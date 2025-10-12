
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
export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }, {
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
        ]
    },
]);