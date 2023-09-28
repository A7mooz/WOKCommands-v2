import mongoose from 'mongoose';

const requiredPermissionsSchema = new mongoose.Schema({
  // guildId-commandName
  _id: {
    type: String,
    required: true,
  },
  permissions: {
    type: [String],
    required: true,
  },
});

const name = 'required-permissions';
export default mongoose.models[name] ||
  mongoose.model(name, requiredPermissionsSchema);
