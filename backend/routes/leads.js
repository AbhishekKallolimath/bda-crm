const express = require('express');
const router = express.Router();
const Lead = require('../models/Lead');
const auth = require('../middleware/auth');

// Get all leads
router.get('/', auth, async (req, res) => {
  try {
    let leads;
    if (req.user.role === 'admin') {
      leads = await Lead.find().populate('assignedTo', 'name email').populate('createdBy', 'name');
    } else {
      leads = await Lead.find({ assignedTo: req.user.id }).populate('assignedTo', 'name email');
    }
    res.json(leads);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

// Create lead
router.post('/', auth, async (req, res) => {
  try {
    const { companyName, contactPerson, email, phone, status, assignedTo, notes, value } = req.body;
    const lead = new Lead({
      companyName,
      contactPerson,
      email,
      phone,
      status,
      assignedTo,
      notes,
      value,
      createdBy: req.user.id
    });
    await lead.save();
    res.json(lead);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

// Update lead
router.put('/:id', auth, async (req, res) => {
  try {
    const lead = await Lead.findById(req.params.id);
    if (!lead) return res.status(404).json({ msg: 'Lead not found' });

    if (req.user.role !== 'admin' && lead.assignedTo.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not authorized' });
    }

    const updatedLead = await Lead.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedLead);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

// Delete lead
router.delete('/:id', auth, async (req, res) => {
  try {
    if (req.user.role !== 'admin') return res.status(401).json({ msg: 'Admin only' });
    await Lead.findByIdAndDelete(req.params.id);
    res.json({ msg: 'Lead deleted' });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

// Dashboard stats
router.get('/stats', auth, async (req, res) => {
  try {
    let query = {};
    if (req.user.role !== 'admin') query.assignedTo = req.user.id;

    const totalLeads = await Lead.countDocuments(query);
    const wonLeads = await Lead.countDocuments({ ...query, status: 'Won' });
    const lostLeads = await Lead.countDocuments({ ...query, status: 'Lost' });
    const activeLeads = await Lead.countDocuments({ ...query, status: { $in: ['New', 'Contacted', 'Negotiation'] } });

    const leadsByStatus = await Lead.aggregate([
      { $match: query },
      { $group: { _id: '$status', count: { $sum: 1 } } }
    ]);

    res.json({ totalLeads, wonLeads, lostLeads, activeLeads, leadsByStatus });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

module.exports = router;