import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.padocare.app',
  appName: 'padocare',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
