import "./ResultsPage.scss";
import TopDestinationCard from "../components/TopDestination/TopDestinationCard";

function ResultsPage({ imageArr }) {
  return (
    <>
      <h1 className="result__title">
        These are the Top Destinations that match your preferences
      </h1>
      <div className="selected-images__wrapper">
        {imageArr.map((element) => {
          return (
            <>
              <TopDestinationCard element={element} />
            </>
          );
        })}
      </div>
    </>
  );
}

export default ResultsPage;
