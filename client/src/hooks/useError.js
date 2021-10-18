import React, { useState, useContext } from 'react';
import { ErrorModal } from '../components/utils/ErrorModal'

export const ErrorContext = React.createContext();

export const ErrorProvider = ({ children }) => {
  const [redirectPath, setRedirectPath] = useState('')
  const [error, setError] = useState('')

  const handleResetError = ()=>{
    setError('');
    setRedirectPath('');

  }

  return (
    <ErrorContext.Provider
      value={{
        error: error,
        setError: setError,
        setRedirectPath: setRedirectPath,
        ErrorComponent: () => (
          <ErrorModal
            error={error}
            redirectPath={redirectPath}
            handleResetError={handleResetError}
          />
        ),
      }}
    >
      {children}
    </ErrorContext.Provider>
  );
};

const useError = ({redirectPath}) => {

  const { setError, setRedirectPath } = useContext(ErrorContext);
  setRedirectPath(redirectPath);

  return setError;
};

export default useError;