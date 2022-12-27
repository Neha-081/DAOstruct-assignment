import React, { useEffect, useState } from "react";
import "./home.scss";
import { getData } from "../../api";
import SpotLight from "../SpotLight";
import HorizontalItems from "../HorizontaItems/HorizontaItems";
import BottomSection from "../BottomSection/BottomSection";

const HomePage = () => {

const [data, setData] = useState([]);

//API call for fetching data
  const getInfo = async () => {
    try {
      const response = await getData();
      setData(response);
    } catch (e) {
      console.error('Error while fetching quotes info');
    }
  };

  useEffect(() => {
    getInfo();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="container">
    <SpotLight data={data} />
    <HorizontalItems data={data} />
    <BottomSection data={data} />
    </div>
  )
};

export default HomePage;