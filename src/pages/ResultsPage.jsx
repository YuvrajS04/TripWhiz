import "./ResultsPage.scss"
import { useState } from "react"
import TopDestinationCard from "../components/TopDestination/TopDestinationCard"

function ResultsPage({imageArr}) {
    console.log(imageArr)
    const hostUrl = "http://localhost:5555";
    
    return(
        <>
        <h1 className="result__title" >These are the Top Destinations that match your preferences</h1>
        <div className="selected-images__wrapper">
            {imageArr.map((element) => {
                console.log(element)
                return(
                    <>
                    <TopDestinationCard element={element}  />
                {/* <img className="selected-image" src={`${hostUrl}/${element.url}`} alt={element.location} /> */}
                </>
            )})}          
        </div>
        </>
    )
}

export default ResultsPage;