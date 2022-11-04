import axios from "axios";
import { print } from "graphql/language";

//create an axios instance
/**
 * @see https://chunho.tistory.com/52
 */

const request = axios.create({
  baseURL: "",
});
//요청 타임아웃 설정
request.defaults.timeout = 2500;

//요청 인터셉터 추가
request.interceptors.request.use(
  (config) => {
    //요청을 보내기 전에 수행할 로직
    if (config.data instanceof Object) {
      if (config.data.hasOwnProperty("query")) {
        config.data.query = print(config.data.query);
      }
    }
    return config;
  },
  (error) => {
    //요청 에러가 발생했을 때 수행할 로직
    console.log(error); //디버깅
    return Promise.reject(error);
  }
);

//응답 인터셉터 추가
request.interceptors.response.use(
  (response) => {
    //응답에 대한 로직 작성
    const res = response.data;
    return res;
  },

  (error) => {
    //응답 에러가 발생했을 때 수행할 로직
    console.log(error); //디버깅
    return Promise.reject(error);
  }
);

export default request;
