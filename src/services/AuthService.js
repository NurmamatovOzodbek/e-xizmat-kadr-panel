// import { data } from "autoprefixer";
import axios from "axios";

axios.defaults.baseURL = "http://134.209.238.241/";
class AuthServices {
  login = async (data) => {
    // console.log(data);
    try {
      const response = await axios.post("token/", data);
      // console.log(response);

      const { access } = response.data;
      localStorage.setItem("accessTokenKadr", access);
      // if (response.ok) {
      //   const { access } = await response.json();
      //   return true;
      // } else {
      //   throw new Error(`Failed to fetch data: ${response.status}`);
      // }
      // console.log(localStorage);

      return true;
    } catch (err) {
      return false;
    }
  };
  logout = () => {
    localStorage.removeItem("accessTokenKadr");
  };
}

export const authService = new AuthServices();
