import { LINKS, PAGES, QUICK_ACTIONS } from '../../constants/sidebar';
import UserProfile from '../UserProfile';

import Styles from './sidebar.module.css';

const pathname = '/';

function Sidebar() {
  const renderLink = ({ label, path, icon: LinkIcon }) => {
    return (
      <a
        className={`${Styles.link} ${path === pathname ? Styles.active : ''}`}
        key={label}
        href={`/${path}`}
      >
        <LinkIcon style={{ marginRight: 12 }} /> {label}
      </a>
    );
  };

  return (
    <div>
      <UserProfile avatarSrc='/images/avatar.png' name='Eric Hoffman' />
      <hr className={Styles.divider} />
      <nav className={Styles.nav}>{PAGES.map(renderLink)}</nav>
      <hr className={Styles.divider} />
      <nav className={Styles.nav}>{QUICK_ACTIONS.map(renderLink)}</nav>
      <hr className={Styles.divider} />
      <nav className={Styles.nav}>{LINKS.map(renderLink)}</nav>
    </div>
  );
}

export default Sidebar;
