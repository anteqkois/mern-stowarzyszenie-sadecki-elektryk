import React, { useState, useContext, useEffect } from 'react';
import { ErrorModal } from '../components/utils/ErrorModal';

export const ErrorContext = React.createContext();

export const ErrorProvider = ({ children }) => {
  const [redirectPath, setRedirectPath] = useState('');
  const [error, setError] = useState('');

  const handleResetError = () => {
    setError('');
    setRedirectPath('');
  };

  return (
    <ErrorContext.Provider
      value={{
        error: error,
        setError: setError,
        setRedirectPath: setRedirectPath,
        ErrorComponent: () =>
          error && (
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

const useError = (redirectPath = 'siema') => {
  const { setError, setRedirectPath } = useContext(ErrorContext);

  useEffect(() => {
    setRedirectPath(redirectPath);
  }, [redirectPath]);

  return setError;
};

export default useError;
