import React, { useState, useEffect } from "react";

//Components
import Buscador from "./components/Buscador";
import Grupo from "./components/Grupo";
import Letra from "./components/Letra";
import Error from "./components/Error";

function App() {
  const [criterios, setCriterios] = useState({
    grupo: "",
    cancion: "",
  });

  const [errorres, setErrorRes] = useState(false);
  const [infoGroup, setInfoGroup] = useState({});
  const [infoLetra, setInfoLetra] = useState({});
  const [resok, setResOk] = useState(false);

  useEffect(() => {
    if (criterios.grupo !== "" && criterios.cancion !== "") {
      
      //constuir URL informacion
      const urlInformacion =
        "https://theaudiodb.com/api/v1/json/1/search.php?s=" + criterios.grupo;

      const getInfoGrupo = async () => {
        try {
          const res = await fetch(urlInformacion);
          const data = await res.json();
          setInfoGroup(data.artists[0]);
        } catch (error) {
          console.log(error);
        }
      };

      setInfoGroup(getInfoGrupo());

      //contruri informacion de letra
      const urlLetra =
        "https://api.lyrics.ovh/v1/" +
        criterios.grupo +
        "/" +
        criterios.cancion;

      //Consultar la APi informacion
      const getLetra = async () => {
        const res = await fetch(urlLetra);
        const data = await res.json();

        if (data.lyrics) {
          setErrorRes(false);
          setInfoLetra(data);
          setResOk(true);
        } else {
          setResOk(false);
          setErrorRes(true);
        }
      };
      getLetra();
    }
  }, [criterios]);

  return (
    <div className="container">
      <div className="row">
        <Buscador setCriterios={setCriterios} />
      </div>
      {errorres ? (
        <Error mensaje="No se econtraron resultados para estos criterios de busqueda" />
      ) : null}
      {resok ? (
        <div className="row">
          <div className="container-fluid">
            <div className="row mt-3">
              <div className="col-lg-6 col-md-6 col-sm-12">
                <Grupo infoGroup={infoGroup} />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12">
                <Letra infoLetra={infoLetra} />
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default App;
