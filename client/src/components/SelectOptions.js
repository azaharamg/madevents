import React from 'react';

function SelectOptions(props) {
	const handleSelected = event => {
		props.handleSelected(props.type, event.target.value);
	};

	return (
		<form className='input-group mb-3'>
			<select className='custom-select' onChange={handleSelected}>
				<option defaultValue>
					Buscar por {props.type === 'selectedDistrict' ? 'distrito' : 'categoría'}...
				</option>
				<option value=''>Todos</option>
				{props.options.map((option, index) => {
					return (
						<option key={index} value={option}>
							{option}
						</option>
					);
				})}
			</select>
		</form>
	);
}

export default SelectOptions;
