import React from 'react';
import Table from '../common/Table';
interface Transaction {
  transactionId: string;
  date: string;
  amount: string;
  type: 'Income' | 'Expense';
  status: 'Completed' | 'Pending' | 'Failed' | 'Refunded';
}

const Transactions = () => {
  const transactionData: Transaction[] = [
    {
      transactionId: 'TX123456789',
      date: '01 Sep, 2024',
      amount: 'MVR 5,000.00',
      type: 'Income',
      status: 'Completed',
    },
    {
      transactionId: 'TX123456790',
      date: '02 Sep, 2024',
      amount: 'MVR 2,500.00',
      type: 'Expense',
      status: 'Pending',
    },
    {
      transactionId: 'TX123456791',
      date: '03 Sep, 2024',
      amount: 'MVR 3,200.00',
      type: 'Income',
      status: 'Failed',
    },
    {
      transactionId: 'TX123456792',
      date: '04 Sep, 2024',
      amount: 'MVR 1,000.00',
      type: 'Expense',
      status: 'Refunded',
    },
    {
      transactionId: 'TX123456793',
      date: '05 Sep, 2024',
      amount: 'MVR 7,500.00',
      type: 'Income',
      status: 'Completed',
    },
    {
      transactionId: 'TX123456794',
      date: '06 Sep, 2024',
      amount: 'MVR 1,500.00',
      type: 'Expense',
      status: 'Pending',
    },
    {
      transactionId: 'TX123456795',
      date: '07 Sep, 2024',
      amount: 'MVR 2,000.00',
      type: 'Income',
      status: 'Completed',
    },
    {
      transactionId: 'TX123456796',
      date: '08 Sep, 2024',
      amount: 'MVR 500.00',
      type: 'Expense',
      status: 'Failed',
    },
    {
      transactionId: 'TX123456797',
      date: '09 Sep, 2024',
      amount: 'MVR 3,500.00',
      type: 'Income',
      status: 'Refunded',
    },
    {
      transactionId: 'TX123456798',
      date: '10 Sep, 2024',
      amount: 'MVR 4,000.00',
      type: 'Expense',
      status: 'Completed',
    },
  ];

  return (
    <Table
      title="Transactions"
      headings={['Transaction ID', 'Date', 'Amount', 'Type', 'Status']}
      data={transactionData}
      href="/"
    />
  );
};

export default Transactions;