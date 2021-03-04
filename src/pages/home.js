import TopSlider from "../components/home/Top-slider";
import Brands from "../components/home/Brands";
import Category from "../components/home/Category";
import Images from "../components/home/Images";
import Scan from "../components/home/Scan";
import TabsSec from "../components/home/TabsSec";
import Wrapping from "../components/home/Wrapping";
import Coupon from "../components/home/Coupon";
export default function home() {
  return (
    <div className="full">
      <TopSlider />
      <Category />
      <Images />
      <TabsSec />
      <Brands />
      <Scan />
      <Wrapping />
      <Coupon />
    </div>
  );
}
