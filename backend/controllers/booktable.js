// import functions from BookTableModel
import { insertBooking } from "../models/BookTableModel.js";
import logger from '../logger.js'; // Import your Winston logger

// create Booking
export const createBooking = (req, res) => {
    const data = req.body;
    insertBooking(data, (err, results) => {
        if (err) {
            logger.error(`Error creating booking: ${err.message}`);
            res.status(500).json({ error: 'Failed to create booking' });
        } else {
            logger.info(`Created new booking with ID: ${results.insertId}`);
            res.status(201).json(results);
        }
    });
};
