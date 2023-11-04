const mongoose = require('mongoose');

const ChallengeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  difficulty: { type: String, required: true },
  // Add other fields as necessary
});

const Challenge = mongoose.model('Challenge', ChallengeSchema);

module.exports = Challenge;
