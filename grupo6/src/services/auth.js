export const TOKEN_KEY = "@CPESports-Token";
export const NUSUARIO = "@CPESports-NUSER";
export const SUSUARIO = "@CPESports-SUSER";
export const EUSUARIO = "@CPESports-EUSER";
export const isAuthenticated = () => sessionStorage.getItem(TOKEN_KEY) !== null;
export const getToken = () => sessionStorage.getItem(TOKEN_KEY);
export const login = token => {
  sessionStorage.setItem(TOKEN_KEY, token);
};
export const logout = () => {
  sessionStorage.removeItem(TOKEN_KEY);
};


export const setUserNome = nome =>{
  sessionStorage.setItem(NUSUARIO, nome);
};
export const getUserNome = () =>  sessionStorage.getItem(NUSUARIO);
;
export const removeUserNome = nome =>{
  sessionStorage.removeItem(NUSUARIO);
};

export const setUserSobrenome = snome =>{
  sessionStorage.setItem(SUSUARIO, snome);
};
export const getUserSobrenome = () =>  sessionStorage.getItem(SUSUARIO);
;
export const removeUserSobrenome = snome =>{
  sessionStorage.removeItem(SUSUARIO);
};


export const setUserEmail = email =>{
  sessionStorage.setItem(EUSUARIO, email);
};
export const getUserEmail = () =>  sessionStorage.getItem(EUSUARIO);
;
export const removeUserEmail = email =>{
  sessionStorage.removeItem(EUSUARIO);
};
