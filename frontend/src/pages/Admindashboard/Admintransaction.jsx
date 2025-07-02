import React, { useState } from 'react';


import  styles from '../../cssfolder/Admindashboardcss/Admintransaction.module.css';
import Adminsidebar from '../../components/Adminsidebar';


const Admintransaction = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const transactions = [
    {
      id: 1023456,
      date: '29 Sep2023, 11:28 PM',
      type: 'Wallet Top-up',
      paymentType: 'PayPal',
      amount: 80.00,
      fees: 80.00,
      status: 'Paid'
    },
    {
      id: 1023457,
      date: '17 Sep2023,09:14 AM',
      type: 'Project',
      paymentType: 'Stripe',
      amount: -20.50,
      fees: 20.50,
      status: 'Pending'
    },
    {
      id: 1023458,
      date: '13 Sep2023, 11:15 AM',
      type: 'Income',
      paymentType: 'Bank Transfer',
      amount: 35.70,
      fees: 35.70,
      status: 'Paid'
    },
    {
      id: 1023459,
      date: '07 Sep2023, 05:37 PM',
      type: 'Wallet Top-up',
      paymentType: 'PayPal',
      amount: 62.80,
      fees: 62.80,
      status: 'Pending'
    },
    {
      id: 1023460,
      date: '02 Sep 2023, 07:42 PM',
      type: 'Purchase',
      paymentType: 'Stripe',
      amount: -73.30,
      fees: 73.30,
      status: 'Paid'
    }
  ];

  const filteredTransactions = transactions.filter(transaction =>
    Object.values(transaction).some(value =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const formatAmount = (amount) => {
    const sign = amount >= 0 ? '+' : '';
    return `${sign}$${Math.abs(amount).toFixed(2)}`;
  };

  const getAmountClass = (amount) => {
    return amount >= 0 ? styles.amountPositive : styles.amountNegative;
  };

  const getStatusClass = (status) => {
    return status.toLowerCase() === 'paid' ? styles.statusPaid : styles.statusPending;
  };

  return (<>
    <Adminsidebar/>
    <div className={styles.container}>
      <h1 className={styles.title}>Wallet</h1>
      
      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <div className={styles.statHeader}>
            <div className={`${styles.statIcon} ${styles.added}`}>$</div>
            <span className={styles.statLabel}>Total Added</span>
          </div>
          <div className={styles.statValue}>$10,000</div>
        </div>
        
        <div className={styles.statCard}>
          <div className={styles.statHeader}>
            <div className={`${styles.statIcon} ${styles.balance}`}>B</div>
            <span className={styles.statLabel}>Wallet Balance</span>
          </div>
          <div className={styles.statValue}>$100</div>
        </div>
        
        <div className={styles.statCard}>
          <div className={styles.statHeader}>
            <div className={`${styles.statIcon} ${styles.credit}`}>↑</div>
            <span className={styles.statLabel}>Total Credit</span>
          </div>
          <div className={styles.statValue}>$750</div>
        </div>
        
        <div className={styles.statCard}>
          <div className={styles.statHeader}>
            <div className={`${styles.statIcon} ${styles.debit}`}>↓</div>
            <span className={styles.statLabel}>Total Debit</span>
          </div>
          <div className={styles.statValue}>$870</div>
        </div>
      </div>

      <div className={styles.transactionsSection}>
        <div className={styles.transactionsHeader}>
          <h2 className={styles.transactionsTitle}>Wallet Transactions</h2>
          <div className={styles.searchControls}>
            <div className={styles.searchBox}>
              <span className={styles.searchIcon}>🔍</span>
              <input
                type="text"
                className={styles.searchInput}
                placeholder="Search here"
                value={searchTerm}
                onChange={handleSearch}
              />
            </div>
            <button className={styles.actionBtn}>📄</button>
            <button className={styles.actionBtn}>🔄</button>
          </div>
        </div>

        <table className={styles.transactionsTable}>
          <thead>
            <tr>
              <th>Date</th>
              <th>ID</th>
              <th>Type</th>
              <th>Payment Type</th>
              <th>Amount</th>
              <th>Fees</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredTransactions.map((transaction) => (
              <tr key={transaction.id}>
                <td>{transaction.date}</td>
                <td className={styles.transactionId}>{transaction.id}</td>
                <td>{transaction.type}</td>
                <td>{transaction.paymentType}</td>
                <td className={getAmountClass(transaction.amount)}>
                  {formatAmount(transaction.amount)}
                </td>
                <td className={styles.feeAmount}>${transaction.fees.toFixed(2)}</td>
                <td>
                  <span className={`${styles.statusBadge} ${getStatusClass(transaction.status)}`}>
                    {transaction.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </>
  );
};

export default Admintransaction;