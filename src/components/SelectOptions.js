import React from 'react';

function SelectOptions(props) {
  const handleSelected = event => {
    props.handleSelected(props.type, event.target.value);
  };

  return (
    <select onChange={handleSelected}>
      <option value=''>Todos</option>
      {props.options.map((option, index) => {
        return (
          <option key={index} value={option}>
            {option}
          </option>
        );
      })}
    </select>
  );
}

export default SelectOptions;
