const Trailer = ({trailer}) => {
    return (
        <div className={"trailer_container"}>
            <iframe
                title={trailer.name}
                src={`https://www.youtube.com/embed/${trailer.key}`}
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
        </div>
    )
}
export default Trailer;