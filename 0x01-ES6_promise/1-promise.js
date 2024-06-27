const getResponseFromAPI = (bool = null) => new Promise((resolve, reject) => {
  try {
    if (bool === true) {
      // Resolve immediately if bool is true
      resolve({ status: 200, body: 'Success' });
    } else {
      // Simulate an asynchronous operation with a delay
      setTimeout(() => {
        reject(new Error('The fake API is not working currently'));
      }, 1000); // Delay in milliseconds
    }
  } catch (error) {
    reject(error);
  }
});
export default getResponseFromAPI;
