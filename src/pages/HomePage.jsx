import "./HomePage.scss";

import axios from "axios";
import { useEffect, useState, useCallback } from "react";
import Masonry from "react-masonry-css";
import HomePage2 from "./HomePage2";
import plus from "../assets/icons/add.svg"

function HomePage() {
  const api = "http://localhost:5555";
  const url = "http://localhost:5555";
  const [locationsData, setLocationsData] = useState([]);
  const [tagsArr, setTagsArr] = useState([]);
  const [imageArr, setImageArr] = useState([]);

  useEffect(() => {
    getPhotos();
  }, []);

  // const images = [];

  function addImage(url, location){
    setImageArr([...imageArr, {url, location}]);
    console.log([imageArr]);

  }

  function handleTags(tag){
    setTagsArr([...tagsArr, tag])
  }

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
  console.log(locationsData.filter((location)=> (tagsArr.every((tag) => location.tags.includes(tag)))))
  return (
    <div>
    <HomePage2 handleTags={handleTags} />
    <div className="gallery__wrapper">
      <h1 className="gallery__title">Trending Pictures</h1>
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {tagsArr.length?
      
      locationsData.filter((location)=> (tagsArr.every((tag) => location.tags.includes(tag))))
      
      .map(location=>(
        location.images.map((element) => {
          return (
            <div className="img__wrapper">
              <img className="imgs" src={`${url}/${element.url}`} alt={element.tag} />
              <img onClick={()=>addImage(element.url, element.location)} className="plus" src={plus} />
            </div>
          );
        })
      )) :
      locationsData.map(location=>(
        location.images.map((element) => {
          return (
            <div className="img__wrapper">
              <img className="imgs" src={`${url}/${element.url}`} alt={element.tag} />
              <img onClick={()=>addImage(element.url, element.location)} className="plus" src={plus} />
            </div>
          );
        })
      ))}
    </Masonry>
    </div>
    </div>
  );
}
export default HomePage;
