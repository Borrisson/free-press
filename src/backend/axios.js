import axios from "axios";
import { USER_AGENT_DESKTOP, USER_AGENT_MOBILE } from "../constants";

const desktopRegExp = /macintosh|windows|linux/i;

const PayWallClient = axios.create();

PayWallClient.interceptors.request.use((config) => {
  const interceptedUserAgent = config.headers["User-Agent"];

  config.headers = {
    ...config.headers,
    "User-Agent": desktopRegExp.test(interceptedUserAgent ?? "windows")
      ? USER_AGENT_DESKTOP
      : USER_AGENT_MOBILE,
  };
  return config;
});

export default PayWallClient;
