import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {Fragment} from 'react';
import {routes} from './routes';

const Stack = createNativeStackNavigator();

export const ApplicationRoutes = () => {
  return (
    <Fragment>
      <Stack.Navigator>
        {Object.keys(routes).map(key => (
          <Stack.Screen
            key={key}
            name={routes[key].title}
            component={routes[key].component}
            options={({navigation}) => ({
              header: () => <Fragment />,

              animationEnabled: true,
              navigation,
            })}
          />
        ))}
      </Stack.Navigator>
    </Fragment>
  );
};
