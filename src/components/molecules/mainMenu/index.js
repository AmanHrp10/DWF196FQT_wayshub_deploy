import { Fragment, useContext } from 'react';
import Sidebar from '../sidebar';
import Navbar from '../navbar';
import './mainMenu.css';

export default function Menu({
  isHome,
  isSubscribed,
  isAddVideo,
  onChangeSearch,
}) {
  return (
    <Fragment>
      <Sidebar isHome={isHome} isSubscribed={isSubscribed} />
      <Navbar isAddVideo={isAddVideo} onChange={onChangeSearch} />
    </Fragment>
  );
}
