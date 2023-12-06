const getUserFromLocalStorage = (): any | null => {
  const userJSON = localStorage.getItem('user');

  if (userJSON === null) {
    return null;
  }

  return JSON.parse(userJSON);
};

  
export default getUserFromLocalStorage ;