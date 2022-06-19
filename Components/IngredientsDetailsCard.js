import React from "react";

const IngredientsDetailsCard = ({ nutrients }) => {
  console.log(nutrients);
  return (
    <table className="table-auto">
      <thead>
        <tr>
          <th>Name of nutrition</th>
          <th>Amount</th>
          <th>Unit</th>
          <th>% Daily Needs</th>
        </tr>
      </thead>
      <tbody>
        {nutrients.slice(0, 15).map((details, index) => (
          <tr key={index} className="border-b bg-blue-100 border-blue-200">
            <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
              {details.name ? details.name : "None"}
            </td>
            <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
              {details.amount ? details.amount : "None"}
            </td>
            <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
              {details.unit ? details.unit : "None"}
            </td>
            <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
              {details.percentOfDailyNeeds
                ? details.percentOfDailyNeeds
                : "None"}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default IngredientsDetailsCard;
