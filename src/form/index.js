import React from 'react';
import RenderField from '../fields';

function form({ fields, attributes, children }) {
  const { name, keyName, customClassName, action, target, method } = attributes
  return (
    <form
      name={name}
      key={keyName}
      className={customClassName}
      action={action}
      target={target}
      method={method}
    >
      {
        fields.map((field, index) => RenderField(field))
      }
      {children}
    </form>
  )
}

export default form