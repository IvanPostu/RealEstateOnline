import {ReduxWrapper} from '@/store/root';
import React, {FC, ReactElement} from 'react';
import {ApplicationRoutes} from './routes/ApplicationRoutes';
import {NavigationContainer} from '@react-navigation/native';

const App: FC = (): ReactElement => {
  return (
    <NavigationContainer>
      <ReduxWrapper>
        <ApplicationRoutes />
      </ReduxWrapper>
    </NavigationContainer>
  );
};

export default App;
