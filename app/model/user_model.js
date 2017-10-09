import mongoose from 'mongoose';

var userSchema = new mongoose.Schema({
  name: {
    type: String
  }
});

export default mongoose.model('User', userSchema);
