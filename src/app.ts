export const dva = {
  config: {
    onError(err: ErrorEvent) {
      err.preventDefault();
      console.error(err.message);
    },
  },
};

import {setupConfig} from '@ionic/react';
setupConfig({
  mode: 'ios'
});
