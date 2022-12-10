import {WelcomeScreen} from '@/screens/WelcomeScreen';

export const routes: Record<string, any> = {
  WelcomeScreen: {
    title: 'WelcomeScreen',
    component: WelcomeScreen,
    isHeaderButton: false,
  },
} as const;
