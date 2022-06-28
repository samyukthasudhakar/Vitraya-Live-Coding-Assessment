import ImageCard from "./ImageCard"

function DisplayCards(){

    return(
        <div className="mg-2 parent-container flex-column">
            <h3>Image Cards</h3>
            <div className="parent-container">
                {
                    data.length > 0 ?
                    data.map(image => (
                        <ImageCard imgData={image} />
                    ))
                    :<p>We do not have any cards available at the moment.</p>
                }
            </div>
        </div>
    )
}

export default DisplayCards;