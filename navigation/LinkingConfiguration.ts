import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Profile: {
            screens: {
              ProfileScreen: 'one',
            },
          },
          TabOne: {
            screens: {
              TabOneScreen: 'two',
            },
          },
          TabTwo: {
            screens: {
              TabTwoScreen: 'three',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};
