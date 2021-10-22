# Form Builder React Demo
---
Package description

## Installation
---
Add below line in `package.json` dependencies.
```
"dependencies": {
  "form-builder-react-demo": "git+ssh://git@github.com:aniket-ch/form-builder-react-demo.git",
}
```

then run _yarn add_ to install the dependency.


### Components and attributes

```
Component: Form
props
attributes: { name, keyName, customClassName, action, target, method }
fields: [FIELD] // Array of type fields
```

```
Field:
{
  type: One of ['input', 'textarea', 'checkbox', 'select']
  keyName: Unique name for the field
  label: Label for the field, if any
  customClassName: className to be added
  placeholder: placeholder to be added
  rows: Textarea rows, only available for textarea
  cols: Textarea cols, only available for textarea
  options: Select options, only available for select
}
```
