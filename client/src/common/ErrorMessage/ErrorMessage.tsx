import React from 'react';

interface IPropTypes {
  message: string;
}

const ErrorMessage: React.FC<IPropTypes> = ({message}) => (
  <div>
    <span>{message}</span>
  </div>
);

export default ErrorMessage;
