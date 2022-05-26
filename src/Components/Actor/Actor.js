const Actor = ({actor}) => {
    const image_url = "https://image.tmdb.org/t/p/w185";

    return (
        <div className={"actor"}>
            <img key={actor.id}
                 src={`${image_url}${
                actor.profile_path
            }`} alt={actor.name}/>
            <h3 className={"actor_name"}>{actor.name}</h3>
        </div>
    )
}

export default Actor;