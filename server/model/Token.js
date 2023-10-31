import mongoose from 'mongoose';

const TokenSchema = new mongoose.Schema(
  {
    user_id: {
      type: String,
      required: true,
    },
    refreshToken: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Token = mongoose.model('Token', TokenSchema);
export default Token;
