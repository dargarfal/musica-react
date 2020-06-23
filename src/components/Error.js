import React from 'react';
import PropTypes from 'prop-types';

const Error = ({mensaje}) => {
  return ( 
    <div className="alert alert-danger mt-2" role="alert">
      {mensaje}
    </div>
   );
}
 
Error.propTypes = {
  mensaje : PropTypes.string.isRequired
}

export default Error;