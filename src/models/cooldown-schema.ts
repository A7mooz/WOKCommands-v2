import mongoose from 'mongoose';

const cooldownSchema = new mongoose.Schema({
  // The key from Cooldowns.getKey()
  _id: {
    type: String,
    required: true,
  },
  expires: {
    type: Date,
    required: true,
  },
});

const name = 'cooldowns';
export default mongoose.models[name] || mongoose.model(name, cooldownSchema);
