import React from "react";

type ListFooterType = {
  items: string[];
};

const ListFooter = ({ items }: ListFooterType) => {
  return (
    <div className="flex flex-wrap gap-2 mt-5">
      {items.map((item) => (
        <p
          key={item}
          className="text-gray-400 text-sm hover-underline cursor-pointer"
        >
          {item}
        </p>
      ))}
    </div>
  );
};

export default ListFooter;
