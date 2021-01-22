import React, { useState } from 'react';
import * as types from '@src/types';
import InputField from '../InputField/InputField';

const CommonForm = () => {
  const [formResultMessage, setFormResultMessage] = useState('');
  const [fullName, setFullName] = useState('');
  const [fullNameError, setFullNameError] = useState('');

  const validateLength = (value: string): string => {
    if (value.length > 20) {
      return 'Текст не должен содержать более 20 символов';
    }

    return '';
  };

  const handleInputChange = (data: types.InputHandlingData) => {
    switch (data.fieldName) {
      case 'fullName':
        setFullName(data.value);
        setFullNameError(validateLength(fullName));
        break;
      default:
        setFormResultMessage('Ошибка обработки данных формы');
    }
  };

  const checkErrors = (): boolean => {
    if (fullNameError !== '') {
      return true;
    }

    return false;
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (checkErrors()) {
      setFormResultMessage('Заполните корректно все поля');
    } else {
      setFormResultMessage('Форма успешно отправлена');
    }

    setTimeout(() => setFormResultMessage(''), 2000);
  };

  return (
    <form
      className="common-form"
      onSubmit={handleFormSubmit}
    >
      <h3 className="common-form__title">Форма №223-B</h3>
      <InputField
        type="text"
        placeholder="Иванов Иван Иванович"
        errorMessage={fullNameError}
        handler={handleInputChange}
        fieldName="fullName"
      />
      <button type="submit" className="common-form__button-submit">Отправить</button>
      <h3 className="common-form__error-message">{ formResultMessage }</h3>
    </form>
  );
};

export default CommonForm;
