import React from "react";
import { footerList1, footerList2, footerList3 } from "../../utils/constants";
import ListFooter from "./ListFooter/ListFooter";

function Footer() {
  return (
    <div className="mt-6 hidden xl:block">
      <ListFooter items={footerList1} />
    </div>
  );
}

export default Footer;
