const signUpUser = (firstName, lastName) => new Promise((resolve, reject) => {
  try {
    // Resolve immediately if bool is true
    resolve({
      firstName,
      lastName,
    });
  } catch (error) {
    reject(error);
  }
});
export default signUpUser;
