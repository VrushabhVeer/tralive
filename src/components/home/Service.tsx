"use client";
import Image from "next/image";
import React from "react";
import service from "@/assets/service-cuate.png";
import Accordion from "../common/Accordion";

const Service = () => {
  const accordionItems = [
    { title: "What are the advantages of your service?", content: "If you go over your organisations or user limit, a member of the team will reach out about bespoke pricing. In the meantime, our collaborative features won't appear in accounts or users that are over the 100-account or 1,000-user limit." },
    { title: "What are the advantages of your service?", content: "If you go over your organisations or user limit, a member of the team will reach out about bespoke pricing. In the meantime, our collaborative features won't appear in accounts or users that are over the 100-account or 1,000-user limit." },
    { title: "What are the advantages of your service?", content: "If you go over your organisations or user limit, a member of the team will reach out about bespoke pricing. In the meantime, our collaborative features won't appear in accounts or users that are over the 100-account or 1,000-user limit." },
    { title: "What are the advantages of your service?", content: "If you go over your organisations or user limit, a member of the team will reach out about bespoke pricing. In the meantime, our collaborative features won't appear in accounts or users that are over the 100-account or 1,000-user limit." },
    { title: "What are the advantages of your service?", content: "If you go over your organisations or user limit, a member of the team will reach out about bespoke pricing. In the meantime, our collaborative features won't appear in accounts or users that are over the 100-account or 1,000-user limit." },
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
