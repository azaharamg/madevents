import React from 'react';

import Form from 'react-bootstrap/Form';

function SelectOptions(props) {
  const handleSelected = event => {
    props.handleSelected(props.type, event.target.value);
  };

  return (
    <Form.Control as='select' onChange={handleSelected}>
      <option defaultValue>Buscar por {props.type === 'selectedDistrict' ? 'distrito' : 'categoría'}...</option>
      <option value=''>Todos</option>
      {props.options.map((option, index) => {
        return (
          <option key={index} value={option}>
            {option}
          </option>
        );
      })}
    </Form.Control>
  );
}

export default SelectOptions;
