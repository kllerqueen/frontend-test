import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";

const rootElement = document.getElementById("root");
const store = {
  title: "Forett At Bukit Timah",
  address: "70 Anchorvale Crescent · D21",
  project_type: "Condo",
  year: 2021,
  ownership_type: "Freehold",
  psf_min: 2609,
  psf_max: 3043,
  subprice_label: "Prices from $1.99M",
  availabilities_label: "231 units · 1, 2, 3, 4 bedrooms",
  description: "Phone number:",
  clickable_num1: "8234 5678",
  descriptionMiddle:
    "Superb 3 bedroom in sentosa for a very affordable price and a very nearby bus station.",
  descriptionMiddle2: "Please call Alex B (CEA No: R0123456) @",
  clickable_num2: "82345678",
  descriptionMiddle3: "or the owner",
  clickable_num3: "(83456789)",
  descriptionEnd: "to arrange for a viewing."
};

ReactDOM.render(
  <StrictMode>
    <App {...store} />
  </StrictMode>,
  rootElement
);
