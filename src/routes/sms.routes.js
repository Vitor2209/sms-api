const router = require('express').Router();
const controller = require('../controllers/sms.controller');

router.put('/messages/:id/status',controller.updateStatus);
router.get('/messages/report',controller.getReport);

module.exports = router;
