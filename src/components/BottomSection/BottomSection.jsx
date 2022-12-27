import React from "react";
import "./bottom.scss";

const BottomSection = ({ data }) => {

  return (
    <>
    <h2 style={{margin:"20px"}}>All Pictures</h2>
    <div className="bottom-sec">
      {data.map((item, index) => (index > 7) && (
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
    </>
  )
};

export default BottomSection;