import mongoose from 'mongoose';

const guildPrefixSchema = new mongoose.Schema({
  // guild ID
  _id: {
    type: String,
    required: true,
  },
  prefix: {
    type: String,
    required: true,
  },
});

const name = 'guild-prefixes';
export default mongoose.models[name] || mongoose.model(name, guildPrefixSchema);
