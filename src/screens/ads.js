import {Platform} from 'react-native';
import {TestIds} from 'react-native-google-mobile-ads';
export const Addsid = {
  ...Platform.select({
    android: {
      BANNER: 'ca-app-pub-3339897183017333/6279419981',
      Interstitial: 'ca-app-pub-3339897183017333/7756153180',
    },
    ios: {
      BANNER: 'ca-app-pub-3339897183017333/1988821180',
      Interstitial: 'ca-app-pub-3339897183017333/8242096724',
    },
  }),
};
