import React from 'react';

interface IPropTypes {
  message: string;
}

const ErrorMessage: React.FC<IPropTypes> = ({message}) => (
  <div data-test="errorMessageComponent">
    <p data-test="componentMessage">{message}</p>
  </div>
);

export default ErrorMessage;
