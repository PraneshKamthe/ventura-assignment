import React from "react";
import TableComponent from "../components/table";

const IPOListingPage = () => {
  return (
    <div className="wrapper max-w-[1200px] p-2 md:p-0 mt-10 sora-font">
      <div className="text-gray-500 mb-4"> Home </div>
      <TableComponent data={data} />
    </div>
  );
};

export default IPOListingPage;

const data = [
  {
    id: "go-air",
    logo: "https://via.placeholder.com/40",
    company: "GO AIR",
    date: "4th - 7th Oct 2022",
    issueSize: "₹3600 Crores",
    priceRange: "₹50-60",
    minInvest: "₹50,000",
    lotSize: "100 Shares/5 Lots",
  },
  {
    id: "bajaj-air",
    logo: "https://via.placeholder.com/40",
    company: "BAJAJ ENERGY",
    date: "4th - 7th Oct 2022",
    issueSize: "₹3600 Crores",
    priceRange: "₹50-60",
    minInvest: "₹50,000",
    lotSize: "100 Shares/5 Lots",
  },
  {
    id: "oyo",
    logo: "https://via.placeholder.com/40",
    company: "OYO",
    date: "To be announced",
    issueSize: "₹3600 Crores",
    priceRange: "₹50-60",
    minInvest: "₹50,000",
    lotSize: "100 Shares/5 Lots",
  },
];
