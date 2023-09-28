import mongoose from 'mongoose';

const customCommandSchema = new mongoose.Schema({
  // guildId-commandName
  _id: {
    type: String,
    required: true,
  },
  response: {
    type: String,
    required: true,
  },
});

const name = 'custom-commands';
export default mongoose.models[name] ||
  mongoose.model(name, customCommandSchema);
