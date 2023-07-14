import { useState } from 'react';

import Sidebar from '../../components/Sidebar';
import Styles from './discover.module.css';
import Search from '../../components/SearchInput';

function Discover() {
  const [showMenu, toggleMenu] = useState(false);
  const [search, setSearch] = useState('');

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
        {/* <button onClick={() => toggleMenu((v) => !v)}> Toggle Menu</button> */}
        <div className={Styles.listView}> Movie List</div>
      </main>
    </div>
  );
}

export default Discover;
