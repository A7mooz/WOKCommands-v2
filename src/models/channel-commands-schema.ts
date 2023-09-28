import mongoose from 'mongoose';

const channelCommandSchema = new mongoose.Schema({
  // guildId-commandName
  _id: {
    type: String,
    required: true,
  },
  channels: {
    type: [String],
    required: true,
  },
});

const name = 'channel-commands';
export default mongoose.models[name] ||
  mongoose.model(name, channelCommandSchema);
