import PropTypes from 'prop-types';

import Styles from './profile.module.css';

function UserProfile({ avatarSrc, name }) {
  return (
    <div className={Styles.wrapper}>
      <img
        className={Styles.avatar}
        alt={`${name}-profile-pic`}
        src={avatarSrc}
      />
      <p className={Styles.name}>{name}</p>
    </div>
  );
}

UserProfile.propTypes = {
  avatarSrc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default UserProfile;
