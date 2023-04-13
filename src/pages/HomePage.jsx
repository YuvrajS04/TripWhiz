import "./HomePage.scss";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useEffect, useState, useCallback } from "react";
import Masonry from "react-masonry-css";
import HomePage2 from "./HomePage2";
import plus from "../assets/icons/add.svg"

function HomePage({addImage}) {
  const api = "http://localhost:5555";
  const url = "http://localhost:5555";
  const [locationsData, setLocationsData] = useState([]);
  const [tagsArr, setTagsArr] = useState([]);
  // const [imageArr, setImageArr] = useState([]);

  useEffect(() => {
    getPhotos();
  }, []);

  const handlePlusImageClick = (url, location) => {
    // Create an alert when the "plus" image is clicked
    toast(`Image added!`);
    addImage(url, location);
  };


  // function addImage(url, location){
  //   setImageArr([...imageArr, {url, location}]);
  //   console.log([imageArr]);

  // }

  const imagelist = []; 

  function handleTags(tag){
    setTagsArr([...tagsArr, tag])
    toast(`"${tag}" tag selected.`)
  }

  function handleDelete(tag){
    const newTagsArr = tagsArr.filter((e) => (
      e !== tag
     ))
    setTagsArr(newTagsArr)
    toast(`"${tag}" tag removed.`)
  }

  function getPhotos() {
    axios.get(`${api}/locations`).then((res) => {
      setLocationsData(res.data);
    });
  }
  // console.log(locationsData);

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
    <HomePage2 handleDelete={handleDelete} tagsArr={tagsArr} handleTags={handleTags} />
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
              <img 
              onClick={() =>
                handlePlusImageClick(element.url, element.location)
              }
              // onClick={()=>addImage(element.url, element.location)} 
              className="plus" src={plus} />
            </div>
          );
        })
      )) :
      locationsData.map(location=>(
        location.images.map((element) => {
          return (
            <div className="img__wrapper">
              <img className="imgs" src={`${url}/${element.url}`} alt={element.tag} />
              
              <img 
              // onClick={()=>addImage(element.url, element.location)} 
              onClick={() =>
                handlePlusImageClick(element.url, element.location)
              }
              className="plus" src={plus} />
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
