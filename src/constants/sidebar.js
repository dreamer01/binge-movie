import {
  List,
  Logout,
  Movie,
  Playlist,
  Recommended,
  Search,
  Setting,
  Show,
  WatchLater,
} from '../components/Icons';

export const PAGES = [
  {
    label: 'Discover',
    path: '/',
    icon: Search,
  },
  {
    label: 'Playlist',
    path: '/playlist',
    icon: Playlist,
  },
  {
    label: 'Movie',
    path: '/movies',
    icon: Movie,
  },
  {
    label: 'TV Shows',
    path: '/shows',
    icon: Show,
  },
  {
    label: 'My List',
    path: '/my-list',
    icon: List,
  },
];

export const QUICK_ACTIONS = [
  {
    label: 'Watch Later',
    path: '/watch-later',
    icon: WatchLater,
  },
  {
    label: 'Recommended',
    path: '/recommended',
    icon: Recommended,
  },
];

export const LINKS = [
  {
    label: 'Settings',
    path: '/settings',
    icon: Setting,
  },
  {
    label: 'Logout',
    path: '/logout',
    icon: Logout,
  },
];
