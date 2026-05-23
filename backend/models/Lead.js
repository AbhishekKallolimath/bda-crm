const mongoose = require('mongoose');

const LeadSchema = new mongoose.Schema({
  companyName: { type: String, required: true },
  contactPerson: { type: String, required: true },
  email: String,
  phone: String,
  status: { 
    type: String, 
    enum: ['New', 'Contacted', 'Negotiation', 'Won', 'Lost'],
    default: 'New'
  },
  assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  notes: String,
  value: Number,
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
}, { timestamps: true });

module.exports = mongoose.model('Lead', LeadSchema);