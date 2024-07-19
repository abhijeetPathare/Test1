import {
    getNewestId,
    insertBillStatus,
    getBillsByUser,
    getBillsByBill,
    getAll,
    updateStatus,
    updatePaid,
    cancelStatus
} from "../models/BillStatusModel.js";

import logger from '../logger.js'; // Import your Winston logger

// get newest Bill Status
export const showNewestStatusId = (req, res) => {
    getNewestId((err, results) => {
        if (err) {
            logger.error(`Error fetching newest Bill Status: ${err.message}`);
            res.status(500).json({ error: 'Failed to fetch newest Bill Status' });
        } else {
            logger.info('Fetched newest Bill Status');
            res.json(results);
        }
    });
};

// create BillStatus
export const createBillStatus = (req, res) => {
    const data = req.body;
    insertBillStatus(data, (err, results) => {
        if (err) {
            logger.error(`Error creating Bill Status: ${err.message}`);
            res.status(500).json({ error: 'Failed to create Bill Status' });
        } else {
            logger.info(`Created new Bill Status with ID: ${results.insertId}`);
            res.json(results);
        }
    });
};

// get Bills Status by User
export const getAllBillsByUser = (req, res) => {
    getBillsByUser(req.params.id, (err, results) => {
        if (err) {
            logger.error(`Error fetching Bills Status for User ${req.params.id}: ${err.message}`);
            res.status(500).json({ error: 'Failed to fetch Bills Status' });
        } else {
            logger.info(`Fetched Bills Status for User ${req.params.id}`);
            res.json(results);
        }
    });
};

// get Bills Status by Bill
export const getAllBillsByBill = (req, res) => {
    getBillsByBill(req.params.id, (err, results) => {
        if (err) {
            logger.error(`Error fetching Bills Status for Bill ${req.params.id}: ${err.message}`);
            res.status(500).json({ error: 'Failed to fetch Bills Status' });
        } else {
            logger.info(`Fetched Bills Status for Bill ${req.params.id}`);
            res.json(results);
        }
    });
};

// get all Bills Status
export const getAllBills = (req, res) => {
    getAll((err, results) => {
        if (err) {
            logger.error(`Error fetching all Bills Status: ${err.message}`);
            res.status(500).json({ error: 'Failed to fetch all Bills Status' });
        } else {
            logger.info('Fetched all Bills Status');
            res.json(results);
        }
    });
};

// update Bill Status
export const updateBillStatus = (req, res) => {
    updateStatus(req.params.id, (err, results) => {
        if (err) {
            logger.error(`Error updating Bill Status ${req.params.id}: ${err.message}`);
            res.status(500).json({ error: 'Failed to update Bill Status' });
        } else {
            logger.info(`Updated Bill Status ${req.params.id}`);
            res.json(results);
        }
    });
};

// update Bill Paid status
export const updateBillPaid = (req, res) => {
    updatePaid(req.params.id, (err, results) => {
        if (err) {
            logger.error(`Error updating Bill Paid status ${req.params.id}: ${err.message}`);
            res.status(500).json({ error: 'Failed to update Bill Paid status' });
        } else {
            logger.info(`Updated Bill Paid status ${req.params.id}`);
            res.json(results);
        }
    });
};

// cancel Bill Status
export const cancelBillStatus = (req, res) => {
    cancelStatus(req.params.id, (err, results) => {
        if (err) {
            logger.error(`Error canceling Bill Status ${req.params.id}: ${err.message}`);
            res.status(500).json({ error: 'Failed to cancel Bill Status' });
        } else {
            logger.info(`Canceled Bill Status ${req.params.id}`);
            res.json(results);
        }
    });
};
