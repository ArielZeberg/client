import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  BarChart, ShoppingCart, DollarSign, Folder, 
  RefreshCw, Search, Scale, FileText, LogOut 
} from 'lucide-react';

interface DashboardProps {
  username?: string;
}

const Dashboard: React.FC<DashboardProps> = ({ username = 'Guest' }) => {
  const navigate = useNavigate();
  const [results, setResults] = useState<string>('');

  const handleBuyStocks = () => {
    setResults('Buy stocks functionality will be implemented here');
  };

  const handleSellStocks = () => {
    setResults('Sell stocks functionality will be implemented here');
  };

  const handleShowPortfolio = () => {
    setResults('Portfolio display will be implemented here');
  };

  const handleUpdateStockPrices = () => {
    setResults('Stock prices update functionality will be implemented here');
  };

  const handleEvaluateStock = () => {
    setResults('Stock evaluation functionality will be implemented here');
  };

  const handleEvaluatePortfolio = () => {
    setResults('Portfolio evaluation functionality will be implemented here');
  };

  const handleShowRiskReport = () => {
    setResults('Risk report functionality will be implemented here');
  };

  const handleLogout = () => {
    // Add logout logic here
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <header className="mb-8">
          <div className="flex items-center gap-3">
            <BarChart className="h-8 w-8 text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-800">
              Stock Portfolio Management System
            </h1>
          </div>
        </header>

        <main>
          <h2 className="text-2xl font-semibold text-gray-700 mb-6">
            Welcome, <span className="text-blue-600">{username}</span>!
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <ActionButton 
              icon={<ShoppingCart className="h-5 w-5" />}
              label="Buy Stocks"
              onClick={handleBuyStocks}
            />
            <ActionButton 
              icon={<DollarSign className="h-5 w-5" />}
              label="Sell Stocks"
              onClick={handleSellStocks}
            />
            <ActionButton 
              icon={<Folder className="h-5 w-5" />}
              label="Show Portfolio"
              onClick={handleShowPortfolio}
            />
            <ActionButton 
              icon={<RefreshCw className="h-5 w-5" />}
              label="Update Stock Prices"
              onClick={handleUpdateStockPrices}
            />
            <ActionButton 
              icon={<Search className="h-5 w-5" />}
              label="Evaluate Stock"
              onClick={handleEvaluateStock}
            />
            <ActionButton 
              icon={<Scale className="h-5 w-5" />}
              label="Evaluate Portfolio"
              onClick={handleEvaluatePortfolio}
            />
            <ActionButton 
              icon={<FileText className="h-5 w-5" />}
              label="Comprehensive Risk Report"
              onClick={handleShowRiskReport}
            />
            <ActionButton 
              icon={<LogOut className="h-5 w-5" />}
              label="Log Out"
              onClick={handleLogout}
              variant="secondary"
            />
          </div>

          {results && (
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-semibold text-gray-700 mb-4">Results:</h3>
              <div className="p-4 bg-gray-50 rounded-md">
                {results}
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

interface ActionButtonProps {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
}

const ActionButton: React.FC<ActionButtonProps> = ({ 
  icon, 
  label, 
  onClick, 
  variant = 'primary' 
}) => {
  const baseStyles = "flex items-center justify-center gap-2 p-4 rounded-lg transition-all duration-200 font-medium w-full";
  const variantStyles = variant === 'primary'
    ? "bg-white hover:bg-gray-50 text-gray-700 shadow-sm border border-gray-200"
    : "bg-red-500 hover:bg-red-600 text-white shadow-sm";

  return (
    <button 
      onClick={onClick} 
      className={`${baseStyles} ${variantStyles}`}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
};

export default Dashboard;