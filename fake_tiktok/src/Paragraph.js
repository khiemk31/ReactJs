import { ThemeContext } from "./ThemeContext";
import { useContext } from "react";

function Faragraph() {
  const context = useContext(ThemeContext);
  return (
    <p className={context.theme}>
      adsfasdfsdfsdfasdfsdfsdfsdafww werqwehrkjsdf skdfhasdfjkh qewryadfhadjk
      adjkfgdasfadsgfh akdsfgadh adfsferqwer232bncn qrtfgd
    </p>
  );
}

export default Faragraph;
