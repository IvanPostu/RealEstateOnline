import {ComponentClass, FunctionComponent} from 'react';

import {WelcomeScreen} from '@/screens/WelcomeScreen';
import {routeNames} from './routeNames';

type CustomRouteType = {
  [prop: string]: {
    component: ComponentClass<any, any> | FunctionComponent<any>;
    isHeaderButton: boolean;
    routeName: string;
    headerButtonName?: string;
  };
};

export const routes: CustomRouteType = {
  WelcomeScreen: {
    component: WelcomeScreen,
    isHeaderButton: false,
    routeName: routeNames.WelcomeScreen,
  },
};

export const initialRoute = routes.HomeScreen || routes[Object.keys(routes)[0]];
