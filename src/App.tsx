import ApplicationRouterWrapper from '@/routes/AppRouter';
import {ReduxWrapper} from '@/store/root';
import React, {FC, ReactElement} from 'react';
import {WelcomeScreen} from './screens/WelcomeScreen';

const App: FC = (): ReactElement => {
  return (
    <ReduxWrapper>
      <WelcomeScreen />
    </ReduxWrapper>
  );
};

export default App;
