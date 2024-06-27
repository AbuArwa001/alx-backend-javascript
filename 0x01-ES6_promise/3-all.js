import { uploadPhoto, createUser } from './utils';

async function handleProfileSignup() {
  try {
    // Assuming these functions return promises
    await uploadPhoto();
    const userResult = await createUser();

    // Extract firstName and lastName from the results
    const { firstName, lastName } = userResult.body;

    // Log the values to the console
    console.log(`User profile created: ${firstName} ${lastName}`);
  } catch (error) {
    console.error('Signup system offline');
  }
}

handleProfileSignup();
