import Sidebar from '../../components/Sidebar';
import Styles from './discover.module.css';

function Discover() {
  return (
    <div className={Styles.wrapper}>
      <aside className={Styles.sidebar}>
        <Sidebar />
      </aside>
      <main className={Styles.main}>
        <div>Search</div>
        <div className={Styles.listView}> Movie List</div>
      </main>
    </div>
  );
}

export default Discover;
