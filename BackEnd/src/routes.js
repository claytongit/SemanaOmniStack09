const express = require('express');
const multer = require('multer');

const uploadConfig = require('./config/upload');

const routes = express.Router();
const upload = multer(uploadConfig);

const SessionControllers = require('./controllers/SessionController');
const SpotControllers = require('./controllers/SpotController');
const DashboardController = require('./controllers/DashboardController');
const BookingController = require('./controllers/BookingController');

routes.post('/sessions', SessionControllers.store);

routes.get('/spots', SpotControllers.index);
routes.post('/spots', upload.single('thumbnail'), SpotControllers.store);

routes.get('/dashboard', DashboardController.show);

routes.post('/spots/:spot_id/booking', BookingController.store);

module.exports = routes;