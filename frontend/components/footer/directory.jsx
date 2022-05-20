// will render at home page, product page, and checkout page
// import into app

import React from "react";

const Directory = () => {
  return (
    <div className="footer-outer-container">
      <div className="footer-inner-container">
        <div className="footer-columns">
          <h1 className="footer-column-heading">About</h1>
          <ul className="footer-column-list">
            <li className="footer-column-list-items">
              <a 
                href="https://github.com/ee3y0re/mooguri" 
                target="_blank"
                className="footer-column-list-links"
              >
                Repository
              </a>
            </li>
            <li className="footer-column-list-items">
              <a 
                href="https://github.com/ee3y0re/mooguri/wiki" 
                target="_blank"
                className="footer-column-list-links"
              >
                Wiki Brainstorm
              </a>
            </li>
            <li className="footer-column-list-items">
              <a 
                href="https://www.etsy.com/" 
                target="_blank"
                className="footer-column-list-links"
              >
                Etsy, the inspiration
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-columns">
          <h1 className="footer-column-heading">Other Projects</h1>
          <ul className="footer-column-list">
            <li className="footer-column-list-items">
              <a 
                href="https://ee3y0re.github.io/Sassper-the-Sassy-Ghost/"
                target="_blank"
                className="footer-column-list-links"
              >
                Sassper, the Sassy Ghost
              </a>
            </li>
            <li className="footer-column-list-items">
              <a
                href="https://psychiccipher.herokuapp.com/#/"
                target="_blank"
                className="footer-column-list-links"
              >
                Psychic Cipher
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-columns">
          <h1 className="footer-column-heading">
            <div className="footer-icon-container">
              Special Thanks &nbsp;
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                {/* <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --> */}
                <path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z" />
              </svg>
            </div>
          </h1>
          <ul className="footer-column-list">
            <li className="footer-column-list-items"><i>To my teachers,</i></li>
            <li className="footer-column-list-items"><i>My classmates,</i></li>
            <li className="footer-column-list-items"><i>And my loved ones</i></li>
          </ul>
        </div>
        <div className="footer-columns">
          <h1 className="footer-column-heading">Let's keep in touch!</h1>
          <div className="social-links-list__email-container">
            <div className="social-links-list__svg-container">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 512 512"
                className="social-links-list__icons"
              >
                {/* <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --> */}
                <path d="M0 128C0 92.65 28.65 64 64 64H448C483.3 64 512 92.65 512 128V384C512 419.3 483.3 448 448 448H64C28.65 448 0 419.3 0 384V128zM48 128V150.1L220.5 291.7C241.1 308.7 270.9 308.7 291.5 291.7L464 150.1V127.1C464 119.2 456.8 111.1 448 111.1H64C55.16 111.1 48 119.2 48 127.1L48 128zM48 212.2V384C48 392.8 55.16 400 64 400H448C456.8 400 464 392.8 464 384V212.2L322 328.8C283.6 360.3 228.4 360.3 189.1 328.8L48 212.2z" />
              </svg>
            </div>
            <a 
              className="social-links-list__email-link" 
              href="mailto:ajoyvmon@gmail.com"
            >
              ajoyvmon@gmail.com
            </a>
          </div>
          <ul className="social-links-list">
            <li className="social-links-list__list-items">
              <a 
                href="https://github.com/ee3y0re" 
                target="_blank" 
                className="social-links-list__a-tags"
              >
                <div className="social-links-list__svg-container"></div>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="social-links-list__icons" 
                  viewBox="0 0 496 512"
                >
                  {/* <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --> */}
                  <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/>
                </svg>
              </a>
            </li>
            <li className="social-links-list__list-items">
              <a 
                href="https://www.linkedin.com/in/abigail-montemayor/" 
                target="_blank" 
                className="social-links-list__a-tags"
              >
                <div className="social-links-list__svg-container"></div>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 448 512"
                  className="social-links-list__icons"
                >
                  {/* <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --> */}
                  <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                </svg>
              </a>
            </li>
            <li className="social-links-list__list-items">
              <a 
                href="https://angel.co/u/ee3y0re" 
                target="_blank" 
                className="social-links-list__a-tags"
              >
                <div className="social-links-list__svg-container"></div>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 448 512"
                  className="social-links-list__icons"
                >
                  {/* <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --> */}
                  <path d="M347.1 215.4c11.7-32.6 45.4-126.9 45.4-157.1 0-26.6-15.7-48.9-43.7-48.9-44.6 0-84.6 131.7-97.1 163.1C242 144 196.6 0 156.6 0c-31.1 0-45.7 22.9-45.7 51.7 0 35.3 34.2 126.8 46.6 162-6.3-2.3-13.1-4.3-20-4.3-23.4 0-48.3 29.1-48.3 52.6 0 8.9 4.9 21.4 8 29.7-36.9 10-51.1 34.6-51.1 71.7C46 435.6 114.4 512 210.6 512c118 0 191.4-88.6 191.4-202.9 0-43.1-6.9-82-54.9-93.7zM311.7 108c4-12.3 21.1-64.3 37.1-64.3 8.6 0 10.9 8.9 10.9 16 0 19.1-38.6 124.6-47.1 148l-34-6 33.1-93.7zM142.3 48.3c0-11.9 14.5-45.7 46.3 47.1l34.6 100.3c-15.6-1.3-27.7-3-35.4 1.4-10.9-28.8-45.5-119.7-45.5-148.8zM140 244c29.3 0 67.1 94.6 67.1 107.4 0 5.1-4.9 11.4-10.6 11.4-20.9 0-76.9-76.9-76.9-97.7.1-7.7 12.7-21.1 20.4-21.1zm184.3 186.3c-29.1 32-66.3 48.6-109.7 48.6-59.4 0-106.3-32.6-128.9-88.3-17.1-43.4 3.8-68.3 20.6-68.3 11.4 0 54.3 60.3 54.3 73.1 0 4.9-7.7 8.3-11.7 8.3-16.1 0-22.4-15.5-51.1-51.4-29.7 29.7 20.5 86.9 58.3 86.9 26.1 0 43.1-24.2 38-42 3.7 0 8.3.3 11.7-.6 1.1 27.1 9.1 59.4 41.7 61.7 0-.9 2-7.1 2-7.4 0-17.4-10.6-32.6-10.6-50.3 0-28.3 21.7-55.7 43.7-71.7 8-6 17.7-9.7 27.1-13.1 9.7-3.7 20-8 27.4-15.4-1.1-11.2-5.7-21.1-16.9-21.1-27.7 0-120.6 4-120.6-39.7 0-6.7.1-13.1 17.4-13.1 32.3 0 114.3 8 138.3 29.1 18.1 16.1 24.3 113.2-31 174.7zm-98.6-126c9.7 3.1 19.7 4 29.7 6-7.4 5.4-14 12-20.3 19.1-2.8-8.5-6.2-16.8-9.4-25.1z" />
                </svg>
              </a>
            </li>
            <li className="social-links-list__list-items">
              <a 
                href="https://ee3y0re.github.io/porkfolio.github.io/" 
                target="_blank" 
                className="social-links-list__a-tags"
              >
                <div className="social-links-list__svg-container"></div>
                <svg 
                  className="social-links-list__icons"
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 384 512"
                >
                  {/* <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --> */}
                  <path d="M336 0h-288c-26.51 0-48 21.49-48 48v416C0 490.5 21.49 512 48 512h288c26.51 0 48-21.49 48-48v-416C384 21.49 362.5 0 336 0zM192 128c35.35 0 64 28.65 64 64s-28.65 64-64 64S128 227.3 128 192S156.7 128 192 128zM288 384H96c-8.836 0-16-7.164-16-16C80 323.8 115.8 288 160 288h64c44.18 0 80 35.82 80 80C304 376.8 296.8 384 288 384z" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Directory;