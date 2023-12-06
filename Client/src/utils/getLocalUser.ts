const getUserFromLocalStorage = (): any | null => {
    const userJSON = localStorage.getItem('user');
    return userJSON ? JSON.parse(userJSON) : null;
  };

  
export default getUserFromLocalStorage ;