import "./HomePage.scss";

import axios from "axios";
import { useEffect, useState, useCallback } from "react";
import Masonry from "react-masonry-css";

function HomePage() {
  const api = "http://localhost:5555";
  const url = "http://localhost:5555";
  const [locationsData, setLocationsData] = useState([]);

  useEffect(() => {
    getPhotos();
  }, []);

  function getPhotos() {
    axios.get(`${api}/locations`).then((res) => {
      setLocationsData(res.data);
    });
  }
  console.log(locationsData);
  // const getPhotos =  useCallback(() => {
  //   axios.get(`${api}/locations`).then((res) => {
  //     setLocationsData(res.data);
  //     console.log(locationsData);
  //   });
  // }, [])

  // useEffect(() => {
  //   getPhotos();
  // }, [getPhotos]);
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };
  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {locationsData[0]?.images.map((element) => {
        return (
          <div>
            <img className="imgs" src={`${url}/${element.url}`} alt={element.tag} />
          </div>
        );
      })}
    </Masonry>
  );
}
export default HomePage;
