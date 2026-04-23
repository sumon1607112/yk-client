import { initFederation } from '@angular-architects/native-federation';
import { environment } from './environment/environment';

initFederation(environment.manifestPath)
  .catch(err => console.error(err))
  .then(_ => import('./bootstrap'))
  .catch(err => console.error(err));
