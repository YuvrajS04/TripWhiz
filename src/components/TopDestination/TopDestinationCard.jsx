import "./TopDestinationCard.scss"


function TopDestinationCard({element}) {


    const startingUrl = "http://localhost:5555";
    // console.log({`${startingUrl}/${url.url}`} alt={location})

    return (
        <>
    <div class = "card">
    <img src={`${startingUrl}/${element.url}`} alt={element.location}  />
    {/* console.log({`${startingUrl}/${element.url}`} alt={element.location}) */}
    <div class="card-content">
      <h2>
        {element.location}
      </h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt exercitationem iste, voluptatum, quia explicabo laboriosam rem adipisci voluptates cumque, veritatis atque nostrum corrupti ipsa asperiores harum? Dicta odio aut hic.
      </p>
    </div>
  </div>
        </>
    )
}

export default TopDestinationCard;
