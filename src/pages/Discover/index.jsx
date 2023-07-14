import { useState } from 'react';

import Sidebar from '../../components/Sidebar';
import Styles from './discover.module.css';

function Discover() {
  const [showMenu, toggleMenu] = useState(false);
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
        <div>Search</div>
        <button onClick={() => toggleMenu((v) => !v)}> Toggle Menu</button>
        <div className={Styles.listView}> Movie List</div>
      </main>
    </div>
  );
}

export default Discover;
