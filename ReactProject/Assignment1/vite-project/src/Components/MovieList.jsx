import Movie from "./Movie";

const MovieList = ({data}) => {;
    return(
        <>
        {
            data.map((movieObj) => {
                return <Movie name={movieObj.name} year={movieObj.year} rating={movieObj.rating} poster={movieObj.poster} />
            })
        }
        </>
    )};
export default MovieList;