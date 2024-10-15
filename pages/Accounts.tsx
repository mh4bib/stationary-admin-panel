'use client';

import { BsPlusLg } from 'react-icons/bs';
import { RiSearchLine } from 'react-icons/ri';
import 'react-datepicker/dist/react-datepicker.css';
import ButtonWithIcon from '@/components/button/ButtonWithIcon';
import FadeUp from '@/components/motion/FadeUp'; // Assuming you have a FadeUp animation component
import ProfitLoss from '@/components/accounts/ProfitLoss';
import GrowthProgression from '@/components/accounts/GrowthProgression';
import Transactions from '@/components/accounts/Transactions';
import ProfitMargin from '@/components/accounts/ProfitMargin';
import ExpenseBreakdown from '@/components/accounts/ExpenseBreakdown';
import FinancialPerformance from '@/components/accounts/FinancialPerformance';
import SupplierDue from '@/components/accounts/SupplierDue';
import InvoiceSummary from '@/components/accounts/InvoiceSummary';

const Accounts: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-5 sm:px-10 2xl:px-20">
      <header className="flex items-center gap-4">
        <h1 className="pr-10 text-4xl text-blue-600">Accounts</h1>

        {/* Search Bar */}
        <div className="relative flex-grow">
          <input
            type="text"
            placeholder="Search..."
            className="w-full rounded-lg border bg-white px-10 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <span className="absolute left-3 top-1/2 -translate-y-1/2 transform">
            <RiSearchLine className="text-gray-600" />
          </span>
        </div>

        {/* Button Section */}
        <div className="flex gap-4">
          <ButtonWithIcon icon={<BsPlusLg />} text="Generate Report" />
          <ButtonWithIcon icon={<BsPlusLg />} text="Entry Expense" />
        </div>
      </header>

      <main className="mt-5 flex flex-col gap-5">
        {/* First Row - Two Cards */}
        <section className="grid grid-cols-2 gap-5">
          <FadeUp delay={0.1} duration={1}>
            <ProfitLoss />
          </FadeUp>
          <FadeUp delay={0.2} duration={1}>
            <GrowthProgression />
          </FadeUp>
        </section>

        {/* Second Row - Two Sections */}
        <div className="grid grid-cols-12 gap-5">
          {/* Section 1 - Cols 8 */}
          <section className="col-span-8 grid gap-5">
            <FadeUp delay={0.3} duration={1}>
              <Transactions />
            </FadeUp>
          </section>

          {/* Section 2 - Cols 4 with Two Cards */}
          <section className="col-span-4 grid grid-rows-2 gap-5">
            <FadeUp delay={0.4} duration={1}>
              <ProfitMargin />
            </FadeUp>
            <FadeUp delay={0.5} duration={1}>
              <ExpenseBreakdown />
            </FadeUp>
          </section>
        </div>

        {/* Third Row - Two Sections */}
        <div className="grid grid-cols-12 gap-5">
          {/* Section 1 - Cols 7 */}
          <section className="col-span-7 grid gap-5">
            <FadeUp delay={0.3} duration={1}>
              <FinancialPerformance />
            </FadeUp>
          </section>

          {/* Section 2 - Cols 5 with Two Cards */}
          <section className="col-span-5 grid grid-cols-2 gap-5">
            <FadeUp delay={0.4} duration={1}>
              <SupplierDue />
            </FadeUp>
            <FadeUp delay={0.5} duration={1}>
              <InvoiceSummary />
            </FadeUp>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Accounts;