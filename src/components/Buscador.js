import React, { useState } from "react";
import PropTypes from "prop-types";
import Error from "./Error";

const Buscador = ({ setCriterios }) => {
  const [error, setError] = useState(false);
  const [grupo, setGrupo] = useState("");
  const [cancion, setCancion] = useState("");

  const sendDatas = (e) => {
    e.preventDefault();

    if (grupo === "" || cancion === "") {
      setError(true);
      return;
    } else {
      setError(false);

      const valores = {
        grupo: grupo,
        cancion: cancion,
      };

      setCriterios(valores);
    }
  };

  return (
    <div className="bg-primary w-100 text-center h-auto p-5">
      <div className="bg-danger d-inline-flex text-white p-2">
        Buscador de letras
      </div>
      <div className="d-block text-white p-1 mt-5">
        <form onSubmit={sendDatas}>
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-6">
              <input
                type="text"
                className="form-control"
                placeholder="Nombre del Grupo"
                onChange={e => setGrupo(e.target.value)}
                value={grupo}
              />
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6 my-3 my-md-0 my-lg-0">
              <input
                type="text"
                className="form-control"
                placeholder="Nombre de la canción"
                onChange={e => setCancion(e.target.value)}
                value={cancion}
              />
            </div>
            <button
              type="submit"
              className="btn btn-danger d-flex ml-auto mt-2 mr-3"
            >
              Buscar
            </button>
          </div>
        </form>
        {error ? <Error mensaje="Debe llenar ambos campos" /> : null}
      </div>
    </div>
  );
};

Buscador.propTypes = {
  setCriterios : PropTypes.func.isRequired
}

export default Buscador;
