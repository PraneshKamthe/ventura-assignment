import React from "react";
import { useNavigate } from "react-router-dom";

const TableComponent = ({ data }) => {
  const navigate = useNavigate();
  return (
    <table className="min-w-full border-collapse border border-gray-300">
      <thead className="bg-[#FAF9F6]">
        <tr>
          <th className="text-left py-3 px-4 border-b">Company / Issue date</th>
          <th className="text-left py-3 px-4 border-b">Issue size</th>
          <th className="text-left py-3 px-4 border-b">Price range</th>
          <th className="text-left py-3 px-4 border-b">Min invest/qty</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr
            key={index}
            className="border-b cursor-pointer"
            onClick={() => {
              navigate(`/ipo/${item.id}`);
            }}
          >
            <td className="py-3 px-4 md:flex items-center">
              <img
                src={item.logo}
                alt={item.company}
                className="w-10 h-10 mr-3"
              />
              <div>
                <div className="font-semibold">{item.company}</div>
                <div className="text-sm text-gray-500">{item.date}</div>
              </div>
            </td>
            <td className="py-3 px-4 font-bold">{item.issueSize}</td>
            <td className="py-3 px-4 font-bold">{item.priceRange}</td>
            <td className="py-3 px-4 ">
              <span className="font-bold">{item.minInvest}</span>
              <br />
              <span className="text-sm text-gray-500">{item.lotSize}</span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableComponent;
