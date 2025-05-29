import "../StyleSheet/Movie.css"

const Movie = ({name, year, rating, poster}) => {
    return(
        <>
        <div className="movie">
            <img src={poster} alt="Movie Poster"/>
            <h3>Title: {name}</h3>
            <p>Release: {year}</p>
            <p>Rating: {rating}</p>
        </div>
        </>
    )
};

export default Movie;