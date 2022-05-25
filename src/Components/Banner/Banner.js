const Banner = () => {

    const trancate = (text, n) => {
        return text?.length > n ? text.substring(0, n - 1) + '...' : text;
    };


    return (
        <header className={"banner"}
                style={{
                    backgroundPosition: 'center center',
                    backgroundSize: 'cover',
                    backgroundImage: `url("https://wallpapercave.com/wp/wp7123665.jpg")`
                }}>
            <div className={"banner_content"}>
                <div className={"banner_title"}>Movie Name</div>
                <div className={"banner_buttons"}>
                    <button className={"banner_button"}>Play</button>
                    <button className={"banner_button"}>My List</button>
                </div>
                <h1 className={"banner_description"}>{trancate("Test Description", 150)}</h1>
            </div>
            <div className={"banner-fadebuttom"}/>
        </header>
    )
}
export default Banner;