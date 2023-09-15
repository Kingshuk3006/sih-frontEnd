// components/Home/ServicesSection.jsx
// import React from "react";
// import BgImg from "../../assets/Vector.svg";
// import BgImg2 from "../../assets/Doctors-bro 1.svg";
// import Arrow from "../../assets/Arrow 1.svg";
// import { Link } from "react-router-dom";

const ServiceItem = ({ title, items }) => {
    return (
      <div className="service-item rounded-3xl h-[260px] px-10 py-4 flex flex-col justify-around bg-[#FFE6E2] drop-shadow-md hover:drop-shadow-lg">
        <h3 className="text-center text-[#5717A9] text-xl font-semibold">
          {title}
        </h3>
        <ul className="list-disc">
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    );
  };
  
  const TestimonyCard = () => {
    const servicesData = [
      {
        title: "Mental Health",
        items: [
          "Anxiety",
          "Depression",
          "Stress",
          "Grief & Loss",
          "Postpartum",
          "Mood Disorders",
          "PTSD",
        ],
      },
      // Add more services as needed...
    ];
  
    return (
          <div className="flex w-full justify-around">
            {servicesData.map((service, index) => (
              <ServiceItem
                key={index}
                title={service.title}
                items={service.items}
              />
            ))}
          </div>
    );
  };
  
  export default TestimonyCard;
  