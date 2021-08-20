import React, { FC } from 'react';
import ProfileCardsPage from 'pages/ProfileCardsPage';
import styles from './App.module.scss';

const App: FC<{}> = (): JSX.Element => {
  return (
    <div className={styles.App}>
      <ProfileCardsPage />
    </div>
  );
};

export default App;
