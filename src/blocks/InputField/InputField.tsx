import React from 'react';
import * as types from '@src/types';

const InputField = ({
  type, placeholder, errorMessage, handler, fieldName,
}: types.InputFieldProps) => {
  let typeChecked;
  switch (type) {
    case 'text':
      typeChecked = 'text';
      break;
    case 'tel':
      typeChecked = 'tel';
      break;
    case 'email':
      typeChecked = 'email';
      break;
    default:
      typeChecked = 'text';
  }

  return (
    <div className="input-field">
      <input
        className={errorMessage ? 'input-field__input input-field__input_wrong' : 'input-field__input'}
        type={typeChecked}
        placeholder={placeholder}
        onChange={(e) => handler({ fieldName, value: e.target.value })}
      />
      <p className="input-field__error-message">{errorMessage}</p>
    </div>
  );
};

export default InputField;
