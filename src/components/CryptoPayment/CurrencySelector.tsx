import React, { useState } from 'react';
import { ChevronDown, DollarSign } from 'lucide-react';

interface CurrencySelectorProps {
  onSelect: (currency: string) => void;
}

const currencies = [
  { id: 'usdc', name: 'USDC', icon: <DollarSign size={20} className="text-blue-400" />, display: 'USDC' },
  { id: 'brl', name: 'BRL', icon: <span className="text-green-400 font-bold">R$</span>, display: 'BRL' }
];

const CurrencySelector: React.FC<CurrencySelectorProps> = ({ onSelect }) => {
  const [selectedCurrency, setSelectedCurrency] = useState(currencies[0]);
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (currency: typeof currencies[0]) => {
    setSelectedCurrency(currency);
    setIsOpen(false);
    onSelect(currency.id);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 bg-[#1a2035] hover:bg-[#232942] transition-colors p-3 rounded-full text-white"
      >
        <div className="bg-blue-500 p-1.5 rounded-full">
          {selectedCurrency.icon}
        </div>
        <span className="font-medium">{selectedCurrency.name}</span>
        <ChevronDown size={18} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute left-0 right-0 mt-2 bg-[#1a2035] border border-[#303550] rounded-lg shadow-xl z-10">
          {currencies.map((currency) => (
            <button
              key={currency.id}
              className="w-full flex items-center gap-2 p-3 hover:bg-[#232942] transition-colors"
              onClick={() => handleSelect(currency)}
            >
              <div className="bg-blue-500 p-1.5 rounded-full">
                {currency.icon}
              </div>
              <span className="font-medium">{currency.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default CurrencySelector;