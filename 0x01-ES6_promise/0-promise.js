const getResponseFromAPI = () => new Promise((resolve, reject) => {
  try {
    // Simulating an asynchronous operation
    setTimeout(() => {
      resolve('Success');
    }, 1000); // Delay in milliseconds
  } catch (error) {
    reject(error);
  }
});

export default getResponseFromAPI;
