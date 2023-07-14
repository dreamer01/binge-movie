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
          <Search
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </div>
        <div className={Styles.listView}>{MOVIES.map(renderMovie)}</div>
      </main>
    </div>
  );
}

export default Discover;
