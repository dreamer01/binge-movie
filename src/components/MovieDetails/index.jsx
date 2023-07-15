import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Styles from './moviedetails.module.css';
import Button from '../Button/Button';

const MovieDetails = ({
  title,
  poster,
  year,
  runtime,
  director,
  language,
  plot,
}) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => setShow(true), [1000]);
  });

  const ActionView = (
    <>
      <p>{plot}</p>
      <div className={Styles.btnView}>
        <Button className={Styles.playBtn}>Play Movie</Button>
        <Button variant='secondary'>Watch Trailer</Button>
      </div>
    </>
  );

  return (
    <div className={`${Styles.wrapper} ${show && Styles.showStyle}`}>
      <img className={Styles.poster} src={poster} alt={`${title}-poster`} />
      <div className={Styles.details}>
        <h2>{title}</h2>
        <table className={Styles.detailsTable}>
          <tbody>
            <tr>
              <td>Year</td>
              <td className={Styles.detailsText}>{year}</td>
            </tr>
            <tr>
              <td>Running Time</td>
              <td className={Styles.detailsText}>{runtime}</td>
            </tr>
            <tr>
              <td>Directed By</td>
              <td className={Styles.detailsText}>{director}</td>
            </tr>
            <tr>
              <td>Language</td>
              <td className={Styles.detailsText}>{language}</td>
            </tr>
          </tbody>
        </table>
        <div className={Styles.desktopActions}>{ActionView}</div>
      </div>
      <div className={Styles.break} />
      <div className={Styles.mobileActions}>{ActionView}</div>
    </div>
  );
};

MovieDetails.propTypes = {
  title: PropTypes.string,
  poster: PropTypes.string,
  year: PropTypes.string,
  runtime: PropTypes.string,
  director: PropTypes.string,
  language: PropTypes.string,
  plot: PropTypes.string,
};

export default MovieDetails;
