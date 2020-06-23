import React from "react";
import PropTypes from "prop-types";

const Grupo = ({ infoGroup }) => {
  const fck = "http://" + infoGroup.strFacebook;
  const twt = "http://" + infoGroup.strTwitter;
  const web = "http://" + infoGroup.strWebsite;

  return (
    <div>
      <h2 className="bg-danger d-inline-flex text-white p-2">
        {infoGroup.strArtist}
      </h2>
      <img
        src={infoGroup.strArtistThumb}
        className="w-100"
        alt={infoGroup.strArtist}
      />
      <h2 className="bg-danger d-inline-flex text-white p-2 mt-2">
        Pais: {infoGroup.strCountry}
      </h2>
      <h2 className="bg-primary d-inline-flex text-white p-2 my-2">
        Género: {infoGroup.strStyle}
      </h2>
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item">
          <a
            className="nav-link active"
            id="home-tab"
            data-toggle="tab"
            href="#home"
            role="tab"
            aria-controls="home"
            aria-selected="true"
          >
            Español
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            id="profile-tab"
            data-toggle="tab"
            href="#profile"
            role="tab"
            aria-controls="profile"
            aria-selected="false"
          >
            Inglés
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            id="contact-tab"
            data-toggle="tab"
            href="#contact"
            role="tab"
            aria-controls="contact"
            aria-selected="false"
          >
            Chino
          </a>
        </li>
      </ul>
      <div className="tab-content my-2" id="myTabContent">
        <div
          className="tab-pane fade show active"
          id="home"
          role="tabpanel"
          aria-labelledby="home-tab"
        >
          {infoGroup.strBiographyES}
        </div>
        <div
          className="tab-pane fade"
          id="profile"
          role="tabpanel"
          aria-labelledby="profile-tab"
        >
          {infoGroup.strBiographyEN}
        </div>
        <div
          className="tab-pane fade"
          id="contact"
          role="tabpanel"
          aria-labelledby="contact-tab"
        >
          {infoGroup.strBiographyCN}
        </div>
      </div>
      <div className="text-primary">
        <a href={fck}>
          {" "}
          <i className="fab fa-facebook fa-4x m-4"></i>
        </a>
        <a href={twt}>
          {" "}
          <i className="fab fa-twitter-square fa-4x m-4"></i>
        </a>
        <a href={web}>
          {" "}
          <i className="fas fa-poll-h fa-4x m-4"></i>
        </a>
      </div>
    </div>
  );
};

Grupo.propTypes = {
  infoGroup : PropTypes.object.isRequired
}

export default Grupo;
