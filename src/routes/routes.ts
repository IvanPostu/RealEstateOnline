import {WelcomeScreen} from '@/screens/WelcomeScreen';
import {MainScreen} from '@/screens/MainScreen';

export const routes: Record<string, any> = {
  WelcomeScreen: {
    title: 'WelcomeScreen',
    component: WelcomeScreen,
  },
  MainScreen: {
    isHeaderButton: false,
    title: 'MainScreen',
    component: MainScreen,
  },
} as const;
