import {
  DollarSign,
  Search,
  Percent,
  XCircle,
  Heart,
  Rotate3DIcon,
} from "lucide-react";

export default function WhyChooseBus() {
  const features = [
    {
      icon: <DollarSign className="w-6 h-6 text-primary" />,
      title: "No Booking Charges",
      description:
        "No hidden charges, no payment fees, and free customer service. So you get the best deal every time!",
    },
    {
      icon: <Search className="w-6 h-6 text-primary" />,
      title: "Quick and Easy Search",
      description:
        "We'll find you the best deals available from top bus companies for you to choose from, combining quality and economy.",
    },
    {
      icon: <Percent className="w-6 h-6 text-primary" />,
      title: "Cheapest Price",
      description:
        "Always get cheapest price with the best in the industry. So you get the best deal every time.",
    },
    {
      icon: <Rotate3DIcon className="w-6 h-6 text-primary" />,
      title: "2 Lakh+ Routes",
      description:
        "Make your road journeys easier across world with 10000+ Operators.",
    },
    {
      icon: <XCircle className="w-6 h-6 text-primary" />,
      title: "Easy Cancellation & Refunds",
      description: "Get instant refund and get any booking fees waived off!",
    },
    {
      icon: <Heart className="w-6 h-6 text-primary" />,
      title: "Every time, anywhere",
      description:
        "Because your trip doesn't end with a ticket, we're here for you all the way",
    },
  ];

  return (
    <section className="py-16 bg-muted-bg">
      <div className="custom-container">
        <h2 className="text-4xl font-semibold mb-3 text-center">
          Why Book Bus with BusGo
        </h2>
        <p className="text-center text-muted text-xl font-light">
          Book Bus Tickets Online. Save Time and Money!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-12">
          {features.map((feature, idx) => (
            <div key={idx}>
              <div className="flex flex-col items-start gap-2">
                <div className="flex items-center gap-4">
                  <p>{feature.icon}</p>
                  <h3 className="text-xl font-semibold text-primary">
                    {feature.title}
                  </h3>
                </div>

                <p className="text-muted-gray pl-10 text-base text-muted">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
