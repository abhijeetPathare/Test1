// ../controllers/BillDetailsController.js

import {
    insertBillDetails,
    getBillDetails
} from "../models/BillDetailsModel.js";

import logger from '../logger.js'; // Import your Winston logger

// Create BillDetails
export const createBillDetails = (req, res) => {
    const data = req.body;
    insertBillDetails(data, (err, results) => {
        if (err) {
            logger.error(`Error creating BillDetails: ${err.message}`);
            res.status(500).json({ error: 'Failed to create BillDetails' });
        } else {
            logger.info(`Created BillDetails with ID: ${results.insertId}`);
            res.json(results);
        }
    });
};

// Get BillDetails by ID
export const getBillDetailsById = (req, res) => {
    const billId = req.params.id;
    getBillDetails(billId, (err, results) => {
        if (err) {
            logger.error(`Error fetching BillDetails with ID ${billId}: ${err.message}`);
            res.status(500).json({ error: `Failed to fetch BillDetails with ID ${billId}` });
        } else {
            logger.info(`Fetched BillDetails with ID: ${billId}`);
            res.json(results);
        }
    });
};
