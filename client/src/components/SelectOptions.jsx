import Form from 'react-bootstrap/Form'

export default function SelectOptions({ handleSelected, type, options }) {
  const onHandleSelected = (event) => {
    handleSelected(type, event.target.value)
  }

  return (
    <Form.Control as='select' onChange={onHandleSelected}>
      <option defaultValue>Buscar por {type === 'selectedDistrict' ? 'distrito' : 'categoría'}...</option>
      <option value=''>Todos</option>
      {options.map((option, index) => {
        return (
          <option key={index} value={option}>
            {option}
          </option>
        )
      })}
    </Form.Control>
  )
}
