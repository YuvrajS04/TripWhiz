import "./TopDestination.scss"

function TopDestination({url, location}) {

    const startingUrl = "http://localhost:5555";

    return (
        <>
        {imageArr.map((element) => {
            return(
                <aside className="selected-img__card">
                <img className="selected-img" src={`${startingUrl}/${url}`} alt={location} />
                <h3 className="selected-img__location">{location}</h3>
                </aside>
            )
        })}
        </>
    )
}