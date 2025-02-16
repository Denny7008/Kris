import React, { useState } from 'react';
import axios from 'axios';

function Practical() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [accountNumber, setAccountNumber] = useState('');
    const [ifsc, setIfsc] = useState('');
    const [amount, setAmount] = useState('');
    const [contactId, setContactId] = useState('');
    const [fundAccountId, setFundAccountId] = useState('');

    const createContact = async () => {
        const res = await axios.post('http://localhost:3001/create-contact', {
            name, email, phone
        });
        setContactId(res.data.id);
        alert("Contact created!");
    };

    const addFundAccount = async () => {
        const res = await axios.post('http://localhost:3001/add-fund-account', {
            contact_id: contactId,
            account_number: accountNumber,
            ifsc: ifsc
        });
        setFundAccountId(res.data.id);
        alert("Fund account added!");
    };

    const sendPayout = async () => {
        const res = await axios.post('http://localhost:3001/send-payout', {
            fund_account_id: fundAccountId,
            amount: parseInt(amount)
        });
        alert(`Payout initiated! ID: ${res.data.id}`);
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h2>RazorpayX Payout Test</h2>
            <input placeholder="Name" onChange={e => setName(e.target.value)} /><br />
            <input placeholder="Email" onChange={e => setEmail(e.target.value)} /><br />
            <input placeholder="Phone" onChange={e => setPhone(e.target.value)} /><br />
            <button onClick={createContact}>Create Contact</button>

            <br /><br />
            <input placeholder="Account Number" onChange={e => setAccountNumber(e.target.value)} /><br />
            <input placeholder="IFSC Code" onChange={e => setIfsc(e.target.value)} /><br />
            <button onClick={addFundAccount} disabled={!contactId}>Add Fund Account</button>

            <br /><br />
            <input placeholder="Amount (INR)" onChange={e => setAmount(e.target.value)} /><br />
            <button onClick={sendPayout} disabled={!fundAccountId}>Send Payout</button>
        </div>
    );
}

export default Practical;
