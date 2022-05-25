import useFetch from "../../Hooks/FetchData/useFetch";

const Rows = ({title, fetchUrl, isLargeRow = false}) => {
    const {resData, loading, error} = useFetch(fetchUrl);

    const image_url = "https://image.tmdb.org/t/p/original/";


    return (
        <div className={"row"}>
            <h2>{title}</h2>
            <div className={"row_posters"}>
                {resData?.results.map((movie) => (
                    <img className={` ${isLargeRow ? "row_posterlarge" : "row_poster"}`} src={`${image_url}${
                        isLargeRow ? movie.poster_path : movie.backdrop_path
                    }`} alt={movie.name}/>
                ))}
            </div>
        </div>
    )


}
export default Rows;