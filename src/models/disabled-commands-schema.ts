import mongoose from 'mongoose';

const disabledCommandSchema = new mongoose.Schema({
  // guildId-commandName
  _id: {
    type: String,
    required: true,
  },
});

const name = 'disabled-commands';
export default mongoose.models[name] ||
  mongoose.model(name, disabledCommandSchema);
