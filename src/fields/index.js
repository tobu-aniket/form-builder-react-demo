import React from 'react'

function Input({ keyName, label, customClassName = '', placeholder = '' }) {
  return (
    <>
      {label && <label className={`${keyName}-label`} for={keyName}>{label}</label>}
      <input type='text' id={keyName} className={customClassName} placeholder={placeholder} />
      <br />
    </>
  )
}

function TextArea({ keyName, label, customClassName = '', placeholder = '', rows = '2', cols = '50'}) {
  return (
    <>
      {label && <label className={`${keyName}-label`} for={keyName}>{label}</label>}
      <textarea type='textarea' id={keyName} className={customClassName} placeholder={placeholder} rows={rows} cols={cols} />
      <br />
    </>
  )
}

function Checkbox({ keyName, label, customClassName = '', placeholder = '' }) {
  return (
    <>
      <input type='checkbox' id={keyName} className={customClassName} placeholder={placeholder} />
      {label && <label className={`${keyName}-label`} for={keyName}>{label}</label>}
      <br />
    </>
  )
}

function Select({ keyName, label, options, customClassName = '', placeholder = '' }) {
  return (
    <>
      {label && <label className={`${keyName}-label`} for={keyName}>{label}</label>}
      <select type='text' id={keyName} className={customClassName} placeholder={placeholder} >
        {options.map(opt => <option value={opt}>{opt}</option>)}
      </select>
      <br />
    </>
  )
}

function RenderField(field) {
  switch (field.type) {
    case 'input':
      return <Input {...field} />
    case 'textarea':
      return <TextArea {...field} />
    case 'checkbox':
      return <Checkbox {...field} />
    case 'select':
    return <Select {...field} />
    // case 'radiogroup':
    //   return <RadioGroup {...field} />
    // case 'button':
    //   return <Button {...field} />
    default:
      return <div>{field.type} not supported</div>
  }
}

export default RenderField
