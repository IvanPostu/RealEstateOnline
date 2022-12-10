import {ReduxWrapper} from '@/store/root';
import React, {FC, ReactElement} from 'react';
import {ApplicationRoutes} from './routes/ApplicationRoutes';
import {WelcomeScreen} from './screens/WelcomeScreen';

const App: FC = (): ReactElement => {
  return (
    <ReduxWrapper>
      <ApplicationRoutes />
    </ReduxWrapper>
  );
};

export default App;
