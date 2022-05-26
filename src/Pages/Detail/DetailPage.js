import {useParams} from "react-router-dom";
import useFetch from "../../Hooks/FetchData/useFetch";
import {API_KEY} from "../../api/requests/requests";
import useTrancate from "../../Hooks/Trancate/useTrancate";
import Actor from "../../Components/Actor/Actor";
import Trailer from "../../Components/Trailer";

const DetailPage = () => {
    const {id} = useParams();
    const {resData} = useFetch(`/movie/${id}?api_key=${API_KEY}&language=en-US`);
    const {
        resData: casts,
    } = useFetch(`/movie/${id}/credits?api_key=${API_KEY}`);
    const {
        resData: trailers,

    } = useFetch(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
    const {trancate} = useTrancate(resData?.overview, 200);

    return (
        <>
            <header className={"detail"}
                    style={{
                        backgroundPosition: 'center center',
                        backgroundSize: 'cover',
                        backgroundImage: `url("https://image.tmdb.org/t/p/original/${resData?.backdrop_path}")`,
                    }}>
                <div className={"detail_content"}>
                    <div className={"detail_title"}>
                        {resData?.title || resData?.name || resData?.original_name}
                    </div>
                    <div className={"detail_buttons"}>
                        {resData?.genres.map(genre => (
                            <button className={"detail_button"}>{genre.name}</button>

                        ))}
                    </div>
                    <h1 className={"detail_description"}>{trancate}</h1>
                </div>
                <div className={"detail-fadebuttom"}/>
            </header>
            <div className={"detail_row"}>
                <div className={"detail_actor_poster"}>
                    {casts?.cast.map((actor) => (
                        <Actor key={actor.id} actor={actor}/>
                    ))}
                </div>
                <div className={"detail_trailer"}>
                    {
                        trailers?.results.map((trailer) => (
                            <Trailer key={trailer.id} trailer={trailer}/>
                        ))
                    }
                </div>
            </div>
        </>
    )
}
export default DetailPage