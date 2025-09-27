import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white pt-16">
      <div className="custom-container">
        <div className="grid md:grid-cols-4 gap-8 pb-10">
          {/* Logo & Description */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-2xl">🚌</span>
              <h5 className="font-medium text-2xl">BusGo</h5>
            </div>
            <p className="text-gray-400">
              Making bus travel simple and comfortable for everyone.
            </p>
          </div>

          {/* Links Sections */}
          {[
            {
              title: "Quick Links",
              links: ["Book Tickets", "Cancel Booking", "Check PNR"],
            },
            {
              title: "Support",
              links: ["Help Center", "Contact Us", "Terms & Conditions"],
            },
          ].map(({ title, links }) => (
            <div key={title}>
              <h6 className="font-medium mb-4 text-xl">{title}</h6>
              <ul className="space-y-2 text-gray-400">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Social Connect */}
          <div>
            <h6 className="font-medium mb-4 text-xl">Connect</h6>
            <div className="flex space-x-4">
              {["📘", "🐦", "📷"].map((icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 pb-8">
          <p>&copy; 2024 BusGo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
