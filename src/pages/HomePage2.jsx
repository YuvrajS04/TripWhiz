import "./HomePage2.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Tag from "../components/Tag/Tag";
import arrow from "../assets/icons/arrow.svg";
import hero from "../assets/image/hero2.jpg";
import deleteIcon from "../assets/icons/delete.svg";

function HomePage2({ handleTags, tagsArr, handleDelete }) {
  const navigate = useNavigate();

  const [selectedTag, setSelectedTag] = useState(null);

  const handleGenerate = (e) => {
    navigate("/results");
  };

  const handleTagClick = (tag) => {
    setSelectedTag(tag);

    handleTags(tag);
  };
  const tags = [
    { id: 1, name: "adventure" },
    { id: 2, name: "tropical" },
    { id: 3, name: "historical" },
    { id: 4, name: "beach" },
    { id: 5, name: "mountains" },
    { id: 6, name: "city" },
    { id: 7, name: "culture" },
    { id: 8, name: "food" },
    { id: 9, name: "relaxation" },
    { id: 10, name: "scenic" },
    { id: 11, name: "family-friendly" },
    { id: 12, name: "romantic" },
    { id: 13, name: "nightlife" },
    { id: 14, name: "wildlife" },
  ];

  return (
    <>
      <div className="hero__wrapper">
        <h1 className="hero__title-top">Find Your Calling</h1>
        <h1 className="hero__title-bottom">Explore Vacational Opportunities</h1>
        <img className="hero" src={hero} alt="girl at beach" />
      </div>
      <div className="tag-bar__wrapper">
        <div className="tag-bar__left">
          {tags.map((element) => {
            return (
              <Tag
                name={element.name}
                handleTags={handleTags}
                selected={selectedTag === element.name}
                onClick={() => handleTagClick(element)}
              />
            );
          })}
        </div>
        <div className="tag-bar__right">
          <img src={arrow} alt="arrow" />
          <button className="tag-bar__right-button" onClick={handleGenerate}>
            Show me Destinations
          </button>
        </div>
      </div>
      <div className="selected__tag-wrapper">
        {tagsArr.map((element) => {
          return (
            <div className="selected__tag">
              {element}
              <img
                className="selected__tag-icon"
                src={deleteIcon}
                onClick={() => {
                  handleDelete(element);
                }}
              ></img>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default HomePage2;
