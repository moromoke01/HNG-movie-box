

const moviePosterUrl =(posterpath) =>{
         
    return  `https://www.themoviedb.org/t/p/w220_and_h330_face${posterpath}`
}

const MovieCard =({poster_path, name, first_air_date})=>{
    return <div className="">
        <img src={moviePosterUrl(poster_path)} alt={name} />
        <div>
            <h1>{name}</h1>
            <p>{first_air_date}</p>
        </div>

    </div>
}

export default MovieCard;