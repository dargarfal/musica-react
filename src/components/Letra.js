import React, { Fragment } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Titulo = styled.div`
  border-bottom: solid red 0.3rem;
  margin-bottom: 2rem;
`;

const Letrast = styled.div`
  white-space: pre-wrap;
`;

const Letra = ({ infoLetra }) => {
  return (
    <Fragment>
      <Titulo>
        <h2>Letra de la Canción</h2>
      </Titulo>

      <Letrast>{infoLetra.lyrics}</Letrast>
    </Fragment>
  );
};

Letra.propTypes = {
  infoLetra : PropTypes.object.isRequired
}

export default Letra;
