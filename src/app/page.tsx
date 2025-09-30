import Banner from "@/components/Home/Banner";
import FlashDeals from "@/components/Home/FlashDeals";
import FrequentlyTravelled from "@/components/Home/FrequentlyTravelled";
import PopularRoutes from "@/components/Home/PopularRoutes";
import Steps from "@/components/Home/Steps";
import WhyChooseUs from "@/components/Home/WhyChooseUs";

export default function Home() {
  // const sampleBuses = [
  //   {
  //     id: 1,
  //     operator: "Express Travels",
  //     departure: "06:00 AM",
  //     arrival: "02:00 PM",
  //     duration: "8h 00m",
  //     price: 850,
  //     seats: 12,
  //     rating: 4.5,
  //     amenities: ["AC", "WiFi", "Charging Port"],
  //   },
  //   {
  //     id: 2,
  //     operator: "Comfort Lines",
  //     departure: "08:30 AM",
  //     arrival: "04:45 PM",
  //     duration: "8h 15m",
  //     price: 920,
  //     seats: 8,
  //     rating: 4.3,
  //     amenities: ["AC", "Snacks", "Blanket"],
  //   },
  //   {
  //     id: 3,
  //     operator: "Royal Coach",
  //     departure: "10:15 AM",
  //     arrival: "06:30 PM",
  //     duration: "8h 15m",
  //     price: 1150,
  //     seats: 5,
  //     rating: 4.7,
  //     amenities: ["AC", "WiFi", "Entertainment", "Meals"],
  //   },
  //   {
  //     id: 4,
  //     operator: "Swift Transit",
  //     departure: "02:00 PM",
  //     arrival: "10:15 PM",
  //     duration: "8h 15m",
  //     price: 780,
  //     seats: 15,
  //     rating: 4.1,
  //     amenities: ["AC", "Charging Port"],
  //   },
  //   {
  //     id: 5,
  //     operator: "Premium Travels",
  //     departure: "11:30 PM",
  //     arrival: "07:45 AM",
  //     duration: "8h 15m",
  //     price: 1050,
  //     seats: 6,
  //     rating: 4.6,
  //     amenities: ["AC", "WiFi", "Sleeper", "Blanket"],
  //   },
  // ];

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
