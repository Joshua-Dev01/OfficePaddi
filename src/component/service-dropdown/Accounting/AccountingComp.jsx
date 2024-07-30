import React from "react";
import bank from "/service-page/service-dropdown/Accounting/bank.svg";
import sales from "/service-page/service-dropdown/Accounting/sales.svg";
import expense from "/service-page/service-dropdown/Accounting/expense.svg";
import payroll from "/service-page/service-dropdown/Accounting/payroll.svg";
import Budget from "/service-page/service-dropdown/Accounting/budget.svg";
import Accountant from "/service-page/service-dropdown/Accounting/accountant.svg";
const AccountingComp = () => {
  return (
    <div className="text-center bg-slate-200 py-10">
      <p className="uppercase text-2xl font-semibold mb-10">Our Accounting Features include:</p>
      <div className="grid grid-cols-3 items-center justify-center leading-7 gap-10 mx-24 ipad:grid-cols-2 xs:block xsm:block mv:mx-4 mv:text-center">
        {/* ****************BANK******************* */}
        <div className="flex flex-col items-center">
          <img src={bank} alt="" className="mb-3  w-16" />
          <p className="font-bold text-[20px] mb-3">Banking</p>
          <p className="w-[100%]">
          Streamline your financial transactions with our integrated banking tools. Connect your bank accounts, reconcile statements, and manage cash flow with ease
          </p>
        </div>
        {/* ****************SALES******************* */}
        <div className="flex flex-col items-center my-10">
          <img src={sales} alt="" className="mb-3  w-16" />
          <p className="font-bold text-[20px] mb-3">Sales</p>
          <p className="w-[100%]">
          Generate invoices, manage receivables, and monitor sales performance to ensure accurate and timely revenue reporting.
          </p>
        </div>
        {/* ****************EXPENSE******************* */}
        <div className="flex flex-col items-center">
          <img src={expense} alt="" className="mb-3 w-16" />
          <p className="font-bold text-[20px] mb-3">Expenses</p>
          <p className="w-[100%]">
          Record, categorize, and track all expenditures to maintain control over your finances and optimize spending.

          </p>
        </div>
           {/* ****************PAYROLL******************* */}
           <div className="flex flex-col items-center">
          <img src={payroll} alt="" className="mb-3 w-16" />
          <p className="font-bold text-[20px] mb-3">Payroll</p>
          <p className="w-[100%]">
          Calculate salaries, manage employee benefits, and ensure timely payments with minimal effort.
          </p>
        </div>
    {/* ****************Budget******************* */}
        <div className="flex flex-col items-center">
          <img src={Budget} alt="" className="mb-3 w-16" />
          <p className="font-bold text-[20px] mb-3">Budget</p>
          <p className="w-[100%]">
          Create detailed budgets, track actuals against forecasts, and make informed financial decisions to stay on track
          </p>
        </div>
 {/* ****************Accountant******************* */}
        <div className="flex flex-col items-center">
          <img src={Accountant} alt="" className="mb-3 w-16" />
          <p className="font-bold text-[20px] mb-3">Accountant</p>
          <p className="w-[100%]">
          Share access to your financial data, streamline audits, and ensure compliance with all accounting standards 
          </p>
        </div>
      </div>
    </div>
  );
};

export default AccountingComp;
