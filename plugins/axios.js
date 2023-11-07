// Failed attempt at getting refresh token logic to work, heavily AI supported, to be reworked later


// let isAlreadyFetchingAccessToken = false;
// let subscribers = [];

// function onAccessTokenFetched(access_token) {
//   subscribers.forEach(callback => callback(access_token));
//   subscribers = [];
// }

// function addSubscriber(callback) {
//   subscribers.push(callback);
// }

// export default function({ $axios, store }) {
//   $axios.onRequest(config => {
//     config.withCredentials = true;
//     return config;
//   });

//   $axios.onResponseError(async (error) => {
//     const { config, response } = error;
//     const originalRequest = config;
//     const code = parseInt(response && response.status);

//     if (code === 401) {
//       $auth.refreshToken();
//       if (!isAlreadyFetchingAccessToken) {
//         isAlreadyFetchingAccessToken = true;

//         try {
//           await $axios.get('/auth/refresh');
//           isAlreadyFetchingAccessToken = false;
//           onAccessTokenFetched();

//           // Now retry the original request
//           originalRequest.headers['Authorization'] = store.state.auth.token; // Make sure you are setting the new token correctly
//           return $axios(originalRequest);
//         } catch (refreshError) {
//           isAlreadyFetchingAccessToken = false;
//           // Redirect to login or do something else
//           store.dispatch('auth/logout'); // Example action to logout
//           return Promise.reject(refreshError);
//         }
//       } else {
//         // Add a subscriber which will retry the request after the token refresh
//         const retryOriginalRequest = new Promise(resolve => {
//           addSubscriber(access_token => {
//             originalRequest.headers['Authorization'] = access_token;
//             resolve($axios(originalRequest));
//           });
//         });
//         return retryOriginalRequest;
//       }
//     }

//     // If it's not a 401 error, just reject the promise
//     return Promise.reject(error);
//   });
// }