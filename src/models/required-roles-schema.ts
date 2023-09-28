import mongoose from 'mongoose';

const requiredRolesSchema = new mongoose.Schema({
  // guildId-commandName
  _id: {
    type: String,
    required: true,
  },
  roles: {
    type: [String],
    required: true,
  },
});

const name = 'required-roles';
export default mongoose.models[name] ||
  mongoose.model(name, requiredRolesSchema);
