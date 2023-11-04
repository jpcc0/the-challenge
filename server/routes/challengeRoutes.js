const express = require('express');
const router = express.Router();
// ChallengeController would be a separate file where you define the logic for each route
const ChallengeController = require('../controllers/challengeController');

router.get('/', ChallengeController.getAllChallenges);
router.post('/', ChallengeController.createChallenge);

module.exports = router;
