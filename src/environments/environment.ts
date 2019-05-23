// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig : {
     apiKey: "AIzaSyBYbqS-qoEQaTKs8gpe4owWJyxIIzoAxFw",
    authDomain: "crud-d438d.firebaseapp.com",
    databaseURL: "https://crud-d438d.firebaseio.com",
    projectId: "crud-d438d",
    storageBucket: "crud-d438d.appspot.com",
    messagingSenderId: "209534676253"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
