import React from "react";
import "./horizontal.scss";

const HorizontalItems = ({ data }) => {

  return (
    <div className="horizontal-items">
      {data.map((item, index) => (index < 8 && index > 0) && (
        <div key={index} className="item">
          {item.media_type === "image" &&
          <img src={item.hdurl} alt="dataImage" height="150" width="280" />
          }
          {item.media_type === "video" &&
          <img src={item.thumbnail_url} alt="dataImage" height="150" width="280" />
          }
          <div className="spotlight-desc">
            <p className="title">{item?.title}</p>
            <p><span className="date">Date : </span>{item?.date}</p>
              <p className="copyright"><span className="author">Author : </span>{item?.copyright || "Unknown"}</p>
          </div>
        </div>
      ))}
    </div>
  )
};

export default HorizontalItems;