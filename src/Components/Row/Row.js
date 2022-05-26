import useFetch from "../../Hooks/FetchData/useFetch";
import {useNavigate} from "react-router-dom";

const Rows = ({title, fetchUrl, isLargeRow = false}) => {
    const {resData, loading, error} = useFetch(fetchUrl);

    const image_url = "https://image.tmdb.org/t/p/original/";
    const navigate = useNavigate();


    const handleNavigate = (id) => {
        navigate(`/detail/${id}`)
    }

    return (
        <div className={"row"}>
            <h2>{title}</h2>
            <div className={"row_posters"}>
                {resData?.results.map((movie) => (
                    <img key={movie.id} onClick={() => handleNavigate(movie.id)}
                         className={` ${isLargeRow ? "row_posterlarge" : "row_poster"}`} src={`${image_url}${
                        isLargeRow ? movie.poster_path : movie.backdrop_path
                    }`} alt={movie.name}/>
                ))}
            </div>
        </div>
    )


}
export default Rows;