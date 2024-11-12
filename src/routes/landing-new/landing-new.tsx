import FooterBottom from "../../components/footer/footer-bottom";
import FooterTop from "../../components/footer/footer-top";
import { NavigationBar } from "../../components/navigation-bar/navigation-bar";
import BannerLanding from "./sections/banner-landing";
import ContactLanding from "./sections/contact-landing";
import FeaturedLanding from "./sections/featured-landing";
import ProductsLanding from "./sections/products-landing";
import ServicesLanding from "./sections/services-landing";
import WhyLanding from "./sections/why-landing";

function LandingNew() {
    return (
        <div>
            <div className="w-full">
                <NavigationBar />
            </div>


            <div className="">
                <div className="flex flex-col gap-y-20">
                    <BannerLanding />
                    <WhyLanding />
                    <ServicesLanding />
                    <ProductsLanding />
                    <FeaturedLanding />
                    <ContactLanding />
                    <div>
                        <FooterTop />
                        <FooterBottom />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingNew;