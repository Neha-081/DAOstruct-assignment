import React from "react";
import './spotlight.scss';

const SpotLight = ({data}) => {
  console.log(data,"data");

  return (
  <div className="spotlight">
   <div className="spotlight-desc">
    <p className="title">{data[0]?.title}</p>
    <p className="desc">{data[0]?.explanation}</p>
    <p className="copyright"><span className="author">Author : </span>{data[0]?.copyright}</p>
   </div>
   <img src={data[0]?.hdurl} alt="dataImage" height="350" width="300" />
  </div>
  )

};

export default SpotLight;