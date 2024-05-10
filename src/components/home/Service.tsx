"use client";
import Image from "next/image";
import React from "react";
import service from "@/assets/service-cuate.png";
import Accordion from "../common/Accordion";

const Service = () => {
  const accordionItems = [
    {
      title: "What are the payment options available?",
      content:
        "Our website accepts a variety of payment methods, including major credit cards like Visa, MasterCard, American Express, and Discover. We also support payments through UPI and other secure online payment gateways for your convenience.",
    },
    {
      title: "Do you offer travel insurance?",
      content:
        "Yes, we offer travel insurance options that you can purchase during the booking process or as an add-on to your reservation. Travel insurance provides coverage for unforeseen events such as trip cancellations, medical emergencies, lost baggage, and more. You can learn more about our travel insurance offerings on our website.",
    },
    {
      title: "How can I contact customer support?",
      content:
        "Our customer support team is available 24/7 to assist you with any questions, concerns, or issues you may have before, during, or after your trip. You can contact us via phone, email, or live chat through our website. Our dedicated agents are ready to help you with booking inquiries, itinerary changes, technical support, and more.",
    },
    {
      title: "What is your refund policy?",
      content:
        "Our refund policy depends on the specific booking and the provider's terms. Generally, refunds are issued according to the cancellation policy associated with your booking. Refunds are typically processed within a certain number of business days and are subject to any applicable fees or penalties outlined in the terms and conditions.",
    },
    {
      title: "How can I cancel or modify my booking?",
      content:
        " If you need to cancel or make changes to your booking, you can do so by logging into your account on our website and accessing the My Bookings section. Please note that cancellation and modification policies vary depending on the type of booking and the provider, so be sure to check the terms and conditions before making any changes.",
    },
  ];

  return (
    <div className="w-11/12 md:w-10/12 mx-auto mt-20 md:mt-40 mb-10">
      <div className="text-center">
        <p>FAQ</p>
        <h1 className="text-4xl font-bold mt-1">
          Full range of travel service
        </h1>
      </div>
      <div className="w-full mt-8 flex items-center justify-between flex-col md:flex-col lg:flex-row gap-10 md:gap-20">
        <div className="w-full">
          {accordionItems.map((item, index) => (
            <Accordion key={index} title={item.title} content={item.content} />
          ))}
        </div>
        <div className="w-full">
          <Image
            className="w-full"
            src={service}
            alt="traveling-girl"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default Service;
