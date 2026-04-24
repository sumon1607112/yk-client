const { withNativeFederation, share } = require('@angular-architects/native-federation/config');

module.exports = withNativeFederation({
  name: 'shell',

  shared: {
    ...share({
      '@angular/core': { singleton: true, strictVersion: true, requiredVersion: 'auto' },
      '@angular/common': { singleton: true, strictVersion: true, requiredVersion: 'auto' },
      '@angular/common/http': { singleton: true, strictVersion: true, requiredVersion: 'auto' },
      '@angular/router': { singleton: true, strictVersion: true, requiredVersion: 'auto' },
      '@angular/forms': { singleton: true, strictVersion: true, requiredVersion: 'auto' },
      '@angular/animations': { singleton: true, strictVersion: true, requiredVersion: 'auto' },
      '@angular/platform-browser': { singleton: true, strictVersion: true, requiredVersion: 'auto' },
      '@angular/cdk': { singleton: true, strictVersion: true, requiredVersion: 'auto' },
      '@angular/material': { singleton: true, strictVersion: true, requiredVersion: 'auto' },
      'rxjs': { singleton: true, strictVersion: true, requiredVersion: 'auto' },
      'tslib': { singleton: true, strictVersion: true, requiredVersion: 'auto' },
    }),
  },
});
