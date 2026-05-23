import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';

function LeadForm({ lead, onSave, onCancel }) {
  const { user } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    companyName: '', contactPerson: '', email: '', phone: '',
    status: 'New', assignedTo: '', notes: '', value: ''
  });
  const [bdas, setBdas] = useState([]);

  useEffect(() => {
    if (lead) setFormData(lead);
    if (user.role === 'admin') fetchBDAs();
  }, [lead, user]);

  const fetchBDAs = async () => {
    const res = await axios.get('/auth/users');
    setBdas(res.data);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (lead?._id) await axios.put(`/leads/${lead._id}`, formData);
      else await axios.post('/leads', formData);
      onSave();
    } catch (err) { console.error(err); }
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <input name="companyName" placeholder="Company Name" onChange={handleChange} required />
      <input name="contactPerson" placeholder="Contact Person" onChange={handleChange} required />
      <input name="email" placeholder="Email" onChange={handleChange} />
      <input name="phone" placeholder="Phone" onChange={handleChange} />
      <select name="status" onChange={handleChange}>
        <option>New</option><option>Contacted</option><option>Negotiation</option><option>Won</option><option>Lost</option>
      </select>
      {user.role === 'admin' && (
        <select name="assignedTo" onChange={handleChange}>
          <option value="">Assign to BDA</option>
          {bdas.map(bda => <option key={bda._id} value={bda._id}>{bda.name}</option>)}
        </select>
      )}
      <textarea name="notes" placeholder="Notes" onChange={handleChange} />
      <input name="value" placeholder="Deal Value (₹)" onChange={handleChange} />
      <button type="submit">Save</button>
      <button type="button" onClick={onCancel}>Cancel</button>
    </form>
  );
}

const styles = {
  form: { display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '500px', margin: '20px auto', padding: '20px', border: '1px solid #ccc' }
};

export default LeadForm;