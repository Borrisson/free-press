import axios from "axios";
import { USER_AGENT_DESKTOP, USER_AGENT_MOBILE } from "../constants";

const desktopRegExp = /macintosh|windows|linux/i;

axios.interceptors.request.use((config) => {
  let interceptedUserAgent = config.headers.common["User-Agent"];

  interceptedUserAgent = desktopRegExp.test(interceptedUserAgent)
    ? USER_AGENT_DESKTOP
    : USER_AGENT_MOBILE;

  return config;
});

export default axios;
