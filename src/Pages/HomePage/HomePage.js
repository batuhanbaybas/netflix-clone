import Banner from "../../Components/Banner/Banner";
import Rows from "../../Components/Row/Row";
import requests from "../../api/requests/requests";

const HomePage = () => {
    return (
        <div>
            <Banner/>
            <Rows
                title={"Trending Now"}
                fetchUrl={requests.fetchTrending}
                isLargeRow={true}
            />
            <Rows
                title={"Top Rated"}
                fetchUrl={requests.fetchTopRated}
            />
            <Rows
                title={"Action Movies"}
                fetchUrl={requests.fetchActionMovies}
            />
            <Rows
                title={"Comedy Movies"}
                fetchUrl={requests.fetchComedyMovies}
            />

            <Rows
                title={"Horror Movies"}
                fetchUrl={requests.fetchHorrorMovies}
            />

            <Rows
                title={"Romance Movies"}
                fetchUrl={requests.fetchRomanceMovies}
            />

            <Rows
                title={"Documentaries"}
                fetchUrl={requests.fetchDocumentaries}
            />
        </div>
    );
}

export default HomePage;