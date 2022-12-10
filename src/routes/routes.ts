import {ComponentClass, FunctionComponent} from 'react';

import {WelcomeScreen} from '@/screens/WelcomeScreen';

type CustomRouteType = {
  [prop: string]: {
    title: string;
    component: ComponentClass<any, any> | FunctionComponent<any>;
    isHeaderButton: boolean;
    headerButtonName?: string;
  };
};

export const routes: CustomRouteType = {
  WelcomeScreen: {
    title: 'WelcomeScreen',
    component: WelcomeScreen,
    isHeaderButton: false,
  },
};

export const initialRoute = routes.HomeScreen || routes[Object.keys(routes)[0]];
