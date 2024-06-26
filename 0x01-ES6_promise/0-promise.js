const getResponseFromAPI = () => {
    return new Promise((resolve, reject) => {
      // Simulating an asynchronous operation
      setTimeout(() => {
        // For the sake of example, resolving the promise
        resolve("Success");
      }, 1000); // Delay of 1 second
    });
  };
  
  export default getResponseFromAPI;
  