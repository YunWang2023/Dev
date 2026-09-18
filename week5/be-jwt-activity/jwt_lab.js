const jwt = require('jsonwebtoken');
const secretKey = 'mySecretKey';

const token = jwt.sign(
  { userId: 123, username: 'testuser' },
  secretKey,
  { expiresIn: '1h' }
);

console.log('Generated Token:', token);

try {
  const decoded = jwt.verify(token, secretKey);
  console.log('Decoded Token:', decoded);
} catch (error) {
  console.error('Invalid Token:', error.message);
}

const decodedToken = jwt.decode(token);
console.log('Decoded Token without verification:', decodedToken);