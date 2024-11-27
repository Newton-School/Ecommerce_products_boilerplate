const { v5: uuidv5 } = require('uuid');

// Define a namespace (you can use a static UUID)
const NAMESPACE = '7022d04f-98db-4f84-a0ba-eae9171665f2'; // Example namespace (must always remain the same)

// Define the name for the key
const API_KEY_NAME = 'my-api-auth-key';

// Generate the consistent API auth key
const apiAuthKey = uuidv5(API_KEY_NAME, NAMESPACE);

console.log('API Auth Key:', apiAuthKey);
