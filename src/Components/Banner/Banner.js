import useFetch from "../../Hooks/FetchData/useFetch";
import requests from "../../api/requests/requests";
import {useEffect, useState} from "react";
import useTrancate from "../../Hooks/Trancate/useTrancate";

const Banner = () => {
    const {resData} = useFetch(requests.fetchTrending);
    const [banner, setBanner] = useState([]);
    const {trancate} = useTrancate(banner?.overview, 150);

    useEffect(() => {
        setBannerMovie();
    }, [resData]);
    const setBannerMovie = () => {
        const random = Math.floor(Math.random() * resData?.results.length - 1);

        setBanner(resData?.results[random]);
    }


    return (
        <header className={"banner"}
                style={{
                    backgroundPosition: 'center center',
                    backgroundSize: 'cover',
                    backgroundImage: `url("https://image.tmdb.org/t/p/original/${banner?.backdrop_path}")`,
                }}>
            <div className={"banner_content"}>
                <div className={"banner_title"}>
                    {banner?.title || banner?.name || banner?.original_name}
                </div>
                <div className={"banner_buttons"}>
                    <button className={"banner_button"}>Play</button>
                    <button className={"banner_button"}>My List</button>
                </div>
                <h1 className={"banner_description"}>{trancate}</h1>
            </div>
            <div className={"banner-fadebuttom"}/>
        </header>
    )
}
export default Banner;