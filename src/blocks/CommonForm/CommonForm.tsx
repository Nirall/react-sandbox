import React, { useState } from 'react';
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

  const handleFullNameChange = (value: string) => {
    setFullName(value);
    setFullNameError(validateLength(fullName));
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
        handler={handleFullNameChange}
      />
      <button type="submit" className="common-form__button-submit">Отправить</button>
      <h3 className="common-form__error-message">{ formResultMessage }</h3>
    </form>
  );
};

export default CommonForm;
