import React from "react";

const About = () => {
  return(
    <div className="about-info">
      <h1 className="about-info__heading">What is Mooguri?</h1>
      <a className="about-info__link" href="#">
        Read our wonderfully weird Github description.
      </a>
      <ul className="about-info__list">
        <li className="about-info__list-items">
          <h2 className="about-info__list-item-heading">
            A LinkedIn connection doing good
          </h2>
          <span className="about-info__list-item-span"></span>
        </li>
        <li className="about-info__list-items">
          <h2 className="about-info__list-item-heading">
            Support a jobseeker
          </h2>
          <span className="about-info__list-item-span"></span>
        </li>
        <li className="about-info__list-items">
          <h2 className="about-info__list-item-heading">
            Peace of Personal
          </h2>
          <span className="about-info__list-item-span"></span>
        </li>
      </ul>
      <label className="about-info__help-label">
        <button className="about-info__help-button">Go to Help Center</button>
      </label>
    </div>
  )
  
}

export default About;