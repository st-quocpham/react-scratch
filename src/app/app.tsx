import React from 'react';
import ReactDOM from 'react-dom';

import Header from './layout/header';
import Main from './layout/main';
import Portal from './layout/portal';
import SideBar from './layout/sidebar';

const App: React.FC = () => {
  const portalElem = document.getElementById('portal-root');

  return (
    <>
      <SideBar />
      <Header />
      <Main />
      {portalElem ? ReactDOM.createPortal(<Portal />, portalElem) : null}
    </>
  );
};

export default App;
