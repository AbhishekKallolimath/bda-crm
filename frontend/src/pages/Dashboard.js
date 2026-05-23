import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import LeadForm from '../components/LeadForm';

function Dashboard() {
  const { user } = useContext(AuthContext);
  const [leads, setLeads] = useState([]);
  const [stats, setStats] = useState({});
  const [showForm, setShowForm] = useState(false);
  const [editingLead, setEditingLead] = useState(null);

  useEffect(() => {
    fetchLeads();
    fetchStats();
  }, []);

  const fetchLeads = async () => {
    const res = await axios.get('/leads');
    setLeads(res.data);
  };

  const fetchStats = async () => {
    const res = await axios.get('/leads/stats');
    setStats(res.data);
  };

  const deleteLead = async (id) => {
    if (window.confirm('Delete lead?')) {
      await axios.delete(`/leads/${id}`);
      fetchLeads();
      fetchStats();
    }
  };

  return (
    <div style={styles.container}>
      <h1>CRM Dashboard</h1>
      <div style={styles.stats}>
        <div>Total Leads: {stats.totalLeads}</div>
        <div>Won: {stats.wonLeads}</div>
        <div>Lost: {stats.lostLeads}</div>
        <div>Active: {stats.activeLeads}</div>
      </div>
      <button onClick={() => { setEditingLead(null); setShowForm(true); }}>+ Add Lead</button>
      {showForm && (
        <LeadForm 
          lead={editingLead} 
          onSave={() => { setShowForm(false); fetchLeads(); fetchStats(); }} 
          onCancel={() => setShowForm(false)} 
        />
      )}
      <table style={styles.table}>
        <thead><tr><th>Company</th><th>Contact</th><th>Status</th><th>Value</th><th>Assigned To</th><th>Actions</th></tr></thead>
        <tbody>
          {leads.map(lead => (
            <tr key={lead._id}>
              <td>{lead.companyName}</td>
              <td>{lead.contactPerson}</td>
              <td>{lead.status}</td>
              <td>₹{lead.value}</td>
              <td>{lead.assignedTo?.name || 'Unassigned'}</td>
              <td>
                <button onClick={() => { setEditingLead(lead); setShowForm(true); }}>Edit</button>
                {user?.role === 'admin' && <button onClick={() => deleteLead(lead._id)}>Delete</button>}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const styles = {
  container: { padding: '20px' },
  stats: { display: 'flex', gap: '20px', margin: '20px 0', background: '#f0f0f0', padding: '10px' },
  table: { width: '100%', borderCollapse: 'collapse', marginTop: '20px', border: '1px solid #ddd' }
};

export default Dashboard;