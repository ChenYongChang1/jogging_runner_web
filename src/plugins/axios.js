export default function ({ $axios, redirect }) {
  // request interceptor
  // $axios.interceptors.request.use(
  //   (config) => {
  //     // do something before request is sent
  //     return config;
  //   },
  //   (error) => {
  //     // do something with request error
  //     return Promise.reject(error);
  //   }
  // );
  // $axios.onRequest((config) => {
  //   console.log("Making request to " + config.url);
  // });

  // // response interceptor
  // $axios.interceptors.response.use(
  //   /**
  //    * Determine the request status by custom code
  //    * Here is just an example
  //    * You can also judge the status by HTTP Status Code
  //    */
  //   (response) => {
  //     console.log(response);
  //   },
  //   (error) => {
  //     console.log("err" + error); // for debug

  //     return Promise.reject(error);
  //   }
  // );

  // $axios.onError((error) => {
  //   console.log(error);
  // });
}
