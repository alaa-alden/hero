import axios from "axios";
import { animateScroll as scroll } from "react-scroll";

export const handleToSearch = (data,url,history) => {
  console.log(data)
  scroll.scrollToTop();
  axios.get(url).then(({ data }) => {
    history.push({
      pathname: "/search",
      state: { data },
    });
  });
};
