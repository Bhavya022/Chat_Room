const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };
  
  const validatePhoneNumber = (phoneNumber) => {
    const re = /^\+?[1-9]\d{1,14}$/;
    return re.test(phoneNumber);
  };
  
  const validatePassword = (password) => {
    return password.length >= 6;
  };
  
  module.exports = {
    validateEmail,
    validatePhoneNumber,
    validatePassword
  };
  