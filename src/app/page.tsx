import Banner from "@/components/Home/Banner";
import FlashDeals from "@/components/Home/FlashDeals";
import FrequentlyTravelled from "@/components/Home/FrequentlyTravelled";
import PopularRoutes from "@/components/Home/PopularRoutes";
import Steps from "@/components/Home/Steps";
import WhyChooseUs from "@/components/Home/WhyChooseUs";

export default function Home() {
  return (
    <div>
      <Banner />
      <FlashDeals />
      <FrequentlyTravelled />
      <PopularRoutes />
      <WhyChooseUs />
      <Steps />
    </div>
  );
}
