import { useState } from 'react';

import { MOVIES } from '../../constants/movies';
import Sidebar from '../../components/Sidebar';
import Search from '../../components/SearchInput';
import MovieCard from '../../components/MovieCard';
import Styles from './discover.module.css';

function Discover() {
  const [showMenu, toggleMenu] = useState(false);
  const [search, setSearch] = useState('');

  const renderMovie = ({ title, poster }) => (
    <MovieCard
      key={title}
      title={title}
      poster={poster}
      onClick={() => console.log(title)}
    />
  );

  const filteredMovies = search
    ? MOVIES.filter(({ title }) =>
        title.toLowerCase().match(search.toLowerCase())
      )
    : MOVIES;

  return (
    <div className={Styles.wrapper}>
      <aside className={Styles.sidebar}>
        <Sidebar />
      </aside>

      {showMenu && (
        <aside className={Styles.mobileMenu}>
          <Sidebar />
        </aside>
      )}

      <main className={Styles.main}>
        <div className={Styles.toolsBar}>
          <Search value={search} onChange={setSearch} />
        </div>
        <div className={Styles.listView}>{filteredMovies.map(renderMovie)}</div>
      </main>
    </div>
  );
}

export default Discover;
