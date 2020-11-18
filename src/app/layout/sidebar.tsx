import React from 'react';
import { useDispatch } from 'react-redux';

import appIcon from '../../assets/app-icon.png';
import { toggleNewNote } from '../../store/slicer/portal';

function SideBar() {
  const dispatch = useDispatch();

  return (
    <aside className="sidebar">
      <div className="sidebar-inner">
        <div className="sidebar-icon">
          <img src={appIcon} alt="App icon" />
        </div>
        <button
          className="sidebar-btn btn-reset"
          title="New Note"
          onClick={() => dispatch(toggleNewNote())}
        >
          <i className="fas fa-plus-circle icon" />
        </button>
      </div>
    </aside>
  );
}

export default SideBar;
