import {Platform} from 'react-native';
import {TestIds} from 'react-native-google-mobile-ads';
export const Addsid = {
  ...Platform.select({
    android: {
      BANNER: 'ca-app-pub-3339897183017333/6279419981',
      Interstitial: 'ca-app-pub-3339897183017333/7756153180',
    },
    ios: {
      BANNER: 'ca-app-pub-3339897183017333/8395281585',
      Interstitial: 'ca-app-pub-3339897183017333/4842741917',
    },
  }),
};
