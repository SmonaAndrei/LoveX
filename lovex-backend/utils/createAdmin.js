const User = require('../models/User');

async function createAdmin() {
  const existingAdmin = await User.findOne({ isAdmin: true });
  if(!existingAdmin) {
    const admin = new User({
      username: 'admin',
      email: 'admin@lovex.com',
      password: 'loveX123',
      isAdmin: true
    });
    await admin.save();
    console.log('Admin creat: admin@lovex.com / loveX123');
  }
}

module.exports = { createAdmin };
