import React from "react"
import creativeCommonsIcon from "../images/svg/creativeCommonsIcon.svg"

const Footer = () => (
  <div id="footer">
    {/* <creativeCommonsIcon/> */}
    <span className="icon"><img src={creativeCommonsIcon} alt="Creative Commons icon"/></span>
    <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank" rel="license noreferrer">
      {/* <span class="icon"><svg><use xlinkHref="#icon-cc-by-nc-sa" /></svg></span> */}
      <span className="icon"> </span>
      This work is licensed under a Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License.
    </a>
  </div>
)

export default Footer
