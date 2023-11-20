import "./styles.css";
import { useState } from "react";

export default function ListingAd({
  title,
  address,
  description,
  descriptionMiddle,
  descriptionMiddle2,
  descriptionMiddle3,
  descriptionEnd,
  clickable_num1,
  clickable_num2,
  clickable_num3,
  project_type,
  year,
  ownership_type,
  availabilities_label,
  psf_min,
  psf_max,
  subprice_label
}) {
  const [desc, setDesc] = useState(false);
  const [num, setNum] = useState(false);
  const handleClick = () => setDesc(!desc);
  const handleClickNum = () => setNum(!num);

  return (
    <div className="App">
      <div className="cardContainer">
        <div className="imageWrapper">
          <div className="temp">
            <img className="mainPic" src="/Building.webp" />
            <img className="flag" src="/Flag.webp" alt="/" />
          </div>

          <div className="arrows">
            <p className="arrow">{"<"}</p>
            <p className="arrow">{">"}</p>
          </div>
        </div>

        <div className="wrapper">
          <div className="grid">
            <div>
              <div className="buildingInfo">
                <img src="/building-icon.svg" alt="/" />
                <div>
                  <h1 className="title">{title}</h1>
                  <span className="subTitle">{address}</span>
                </div>
              </div>
              <div className="additionalInfo">
                <p className="typeInfo">
                  {project_type} · {year} · {ownership_type}
                </p>
                <p className="typeInfo">{availabilities_label}</p>
              </div>
            </div>

            <div className="buildingPrice">
              <h1 className="title">
                ${psf_min} - ${psf_max} psf
              </h1>
              <span className="subTitle">{subprice_label}</span>
            </div>
          </div>

          <div className="buttonContainer">
            <button className="descButton" onClick={handleClick}>
              See description
            </button>
          </div>

          <p className={`descText ${desc ? "fade-in" : "fade-out"}`}>
            {!desc ? (
              ""
            ) : (
              <>
                {description}{" "}
                <span className="phoneNum" onClick={handleClickNum}>
                  {!num
                    ? clickable_num1.substring(0, 4) + " XXXX"
                    : clickable_num1}
                </span>{" "}
                <br />
                <br />
                {descriptionMiddle} <br />
                <br />
                {descriptionMiddle2}
                <span className="phoneNum" onClick={handleClickNum}>
                  {!num
                    ? clickable_num2.substring(0, 4) + "XXXX"
                    : clickable_num2}
                </span>{" "}
                {descriptionMiddle3}
                <span className="phoneNum" onClick={handleClickNum}>
                  {!num
                    ? clickable_num3.substring(0, 5) + "XXXX)"
                    : clickable_num3}
                </span>{" "}
                {descriptionEnd}
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}
