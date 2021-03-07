

const Carousel = (props) => {

    const { images } = props

    return (
        <div id="carouselExampleIndicators" className="carousel slide my-4" data-ride="carousel">
            <ol className="carousel-indicators">
                {images.map((image, index) => (
                    <li
                        key={image.id}
                        data-target="#carouselExampleIndicators"
                        data-slide-to={index}
                        className={index === 0 ? 'active' : ''}>
                    </li>
                )
                )
                }
            </ol>
            <div className="carousel-inner" role="listbox">
                {images.map((image, index) => (
                    <div key={image.id} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                        <img
                            className="d-block img-fluid carousel-size"
                            src={image.url}
                            alt={image.name}
                        />
                    </div>
                )
                )
                }
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
            <style jsx>{`
                .carousel-item {
                    /* border: 2px solid black; */
                    /* max-height: 500px; */
                    width: 900px;
                    height: 320px;
                }
                .carousel-size {
                    /* border: 1px solid red; */
                    width: 900px;
                    height: 320px;
                    /* object-fit: contain;                     */
                    object-fit: fill;                    
                `}
            </style>

        </div>
    )
}

export default Carousel