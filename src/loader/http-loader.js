/**
 * HTTP Loader
 * select best loader depending on browser capabilities
 * FetchLoader if fetch supported
 * XhrLoader otherwise
 */

import XhrLoader from './xhr-loader';
import FetchLoader from './fetch-loader';
import StreamLoader from './stream-loader';

class HTTPLoader {
  constructor (config, progressData = false) {
    if (progressData) {
      if (FetchLoader.isSupported())
        return new FetchLoader(config);
      else
        return new StreamLoader(config);
    } else {
      return new XhrLoader(config);
    }
  }
}
export default HTTPLoader;
