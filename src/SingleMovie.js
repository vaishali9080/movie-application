import React ,{useState} from "react";
import { NavLink, useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useCart } from './component/Products';
const SingleMovie = () => {
  const { id } = useParams();
  const [redirect, setRedirect] = useState(false);
  const { addToCart } = useCart();
  console.log(id);
 

  const { isLoading, movie} = useFetch(`&i=${id}`);
  let releaseYear = null;
  let price = null;
  if (movie && movie.Released) {
    releaseYear = new Date(movie.Released).getFullYear();
    price = releaseYear > 2000 ? 150 : 100;
  }
  if (isLoading) {
    return (
      <section className="movie-section ">
        <div className="loading">Loading....</div>;
      </section>
    );
  }
  const priceTextStyle = {
    color: 'green',
    fontWeight: 'bold',
  };

  const priceValueStyle = {
    color: 'blue',
    fontWeight: 'bold',
  };
  const handleAddToCart = () => {
    const movieDetails = {
      Title: movie.Title,
      imdbID: movie.imdbID,
      price: price,
      Poster: movie.Poster,
      
    };
    addToCart(movieDetails);
    setRedirect(true);
  };
  
  return (
    <section className="movie-section">
      <div className="movie-card">
        <figure>
          <img src={movie.Poster} alt="" />
        </figure>
        <div className="card-content">
          <p className="title">{movie.Title}</p>
          <p className="card-text">{movie.imdbID}</p>
          <p className="card-text">{movie.Released}</p>
          <p className="card-text">{movie.Genre}</p>
          <p className="card-text">{movie.imdbRating} / 10</p>
          <p className="card-text">{movie.Country}</p>
          <p className="movie-price" style={priceTextStyle}>
            Price: <span style={priceValueStyle}>₹{price}</span>
          </p>
          <div className="button-group">
          <NavLink to="/" className="back-btn">
            Go Back
          </NavLink>
          {redirect ? (
              <NavLink to="/cart" className="add-to-cart-btn">
                View Cart
              </NavLink>
            ) : (
              <button onClick={handleAddToCart} className="add-to-cart-btn">
                Add To Cart
              </button>
            )}
        </div> 
      </div>
      </div>
    </section>
  );
};

export default SingleMovie;