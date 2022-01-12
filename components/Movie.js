import Image from "next/image";
const IMG_API = "https://image.tmdb.org/t/p/w1280";


export const setVoteClass = (vote) => {
  if (vote >= 8) {
    return "green";
  } else if (vote >= 6) {
    return "orange";
  } else {
    return "red";
  }
};

export const Movie = ({ title, poster_path, overview, vote_average }) => {
  return (
    <div className="movie">
      <Image src={IMG_API + poster_path} alt={title} />
      <div className="movie-info">
        <h3>{title}</h3>
        <span className={`tag ${setVoteClass(vote_average)}`}>
          {vote_average}
        </span>
      </div>
      <div className="movie-over">
        <h2>Overview:</h2>
        <p> {overview} </p>
      </div>
    </div>
  );
}

export default Movie;
