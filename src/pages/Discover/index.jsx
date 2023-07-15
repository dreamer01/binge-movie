import { useState, useRef } from 'react';

import { MOVIES } from '../../constants/movies';
import { More, Sun } from '../../components/Icons';
import Sidebar from '../../components/Sidebar';
import Search from '../../components/SearchInput';
import MovieCard from '../../components/MovieCard';
import MovieDetails from '../../components/MovieDetails';
import Styles from './discover.module.css';

function Discover() {
  const listViewRef = useRef(null);
  const [showMenu, toggleMenu] = useState(false);
  const [search, setSearch] = useState('');
  const [movie, setMovie] = useState('');

  const renderMovie = ({ title, poster }) => (
    <MovieCard key={title} title={title} poster={poster} onClick={setMovie} />
  );

  let filteredMovies = search
    ? MOVIES.filter(({ title }) =>
        title.toLowerCase().match(search.toLowerCase())
      )
    : MOVIES;

  const movieList = filteredMovies.map(renderMovie);

  if (movie) {
    const listWidth = listViewRef.current.offsetWidth;
    const itemsPerRow =
      window.innerWidth > 786 ? Math.floor(listWidth / 196) : 2;
    const selectedIndex = MOVIES.findIndex(({ title }) => title === movie);
    const insertAtIndex = Math.floor(selectedIndex / itemsPerRow) * itemsPerRow;

    const detailView = movie && (
      <div key={insertAtIndex + '-inserted'} className={Styles.translate}>
        <MovieDetails
          key={insertAtIndex}
          {...MOVIES.find(({ title }) => title === movie)}
        />
        <div className={Styles.top} />
        <div className={Styles.bottom} />
      </div>
    );
    movieList.splice(insertAtIndex, 0, detailView);
  }

  return (
    <div className={Styles.wrapper}>
      <aside className={Styles.sidebar}>
        <Sidebar />
      </aside>

      {showMenu && (
        <aside className={Styles.mobileMenu}>
          <Sidebar closeMenu={() => toggleMenu(false)} />
        </aside>
      )}

      <main className={Styles.main}>
        <div className={Styles.toolsBar}>
          <Search value={search} onChange={setSearch} />
          <div className={Styles.actionView}>
            <Sun />
            <More
              className={Styles.moreAction}
              onClick={() => toggleMenu(true)}
            />
          </div>
        </div>

        <div ref={listViewRef} className={Styles.listView}>
          {movieList}
        </div>
      </main>
    </div>
  );
}

export default Discover;
