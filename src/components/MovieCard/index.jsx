import { useRef } from 'react';
import PropTypes from 'prop-types';

import { Add, Play } from '../Icons';
import Styles from './moviecard.module.css';

const MovieCard = ({ title, poster, onClick }) => {
  const movieCard = useRef(null);

  return (
    <button
      ref={movieCard}
      className={Styles.card}
      onClick={() => onClick(title)}
    >
      <img className={Styles.poster} alt={`${title}-poster`} src={poster} />
      <p className={Styles.title}>{title}</p>
      <div className={Styles.actionView}>
        <Play className={Styles.actionIcon} />
        <Add className={Styles.actionIcon} />
      </div>
    </button>
  );
};

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default MovieCard;
