import {Platform} from 'react-native';
const productSkus = Platform.select({
  android: ['german_in_ads_product'],
  ios: ['com.eflashapps.eflashgerman.proupgrade'],
});
export const constants = {
  productSkus,
};
