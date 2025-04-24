import React, { useState } from 'react';
import CurrencySelector from './CurrencySelector';
import WalletAddressInput from './WalletAddressInput';
import { CircleOff, Wallet } from 'lucide-react';

const CryptoPayment: React.FC = () => {
  const [activeTab, setActiveTab] = useState('crypto');
  const [currency, setCurrency] = useState('usdc');
  const [walletAddress, setWalletAddress] = useState('');

  return (
    <div className="flex flex-col h-screen bg-[#121429]">
      {/* Header */}
      <div className="py-4 bg-[#1d1f2b] px-4 flex items-center justify-center border-b border-[#303550]">
        <h1 className="text-white text-lg">linkednation.io</h1>
      </div>
      
      {/* Tabs */}
      <div className="flex border-b border-[#303550]">
        <button 
          className={`flex-1 py-4 text-lg ${activeTab === 'pix' ? 'text-white' : 'text-gray-500'}`}
          onClick={() => setActiveTab('pix')}
        >
          Buy with Pix
        </button>
        <button 
          className={`flex-1 py-4 text-lg ${activeTab === 'crypto' ? 'text-[#10b981] border-b-2 border-[#10b981]' : 'text-gray-500'}`}
          onClick={() => setActiveTab('crypto')}
        >
          Buy with Crypto
        </button>
      </div>
      
      {/* Main content */}
      <div className="flex-1 p-4 flex flex-col items-center justify-start mt-4">
        <div className="w-full max-w-md bg-[#15192a] rounded-xl p-5 shadow-lg overflow-hidden">
          {/* Jupiter wallet header */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-teal-500 flex items-center justify-center">
                <span className="text-white text-sm font-bold">J</span>
              </div>
              <span className="text-white text-xl font-bold">Jupiter</span>
            </div>
            <button className="px-4 py-2 bg-[#1a2035] text-white rounded-full flex items-center gap-1 hover:bg-[#232942] transition-colors">
              <CircleOff size={16} className="text-gray-400" />
              <span>Connect Wallet</span>
            </button>
          </div>

          {/* USDC Section */}
          <div className="bg-[#1a2035] rounded-lg p-4 mb-4">
            <div className="flex justify-between items-center mb-2">
              <CurrencySelector onSelect={setCurrency} />
              <span className="text-white text-2xl font-medium">0.00</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400 mt-2">
              <span className="text-gray-400">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="24" height="24" rx="12" fill="#6B7280" fillOpacity="0.2"/>
                  <path d="M7 12H17M17 12L13 8M17 12L13 16" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <span>{currency.toUpperCase()}</span>
            </div>
          </div>

          {/* NATION Section */}
          <div className="bg-[#1a2035] rounded-lg p-4 mb-4">
            <div className="flex justify-between items-center mb-2">
              <button className="flex items-center gap-2 bg-[#1a2035] hover:bg-[#232942] transition-colors p-3 rounded-full text-white">
                <img 
                  src="/nation-logo.png" 
                  alt="NATION Token" 
                  className="w-6 h-6"
                />
                <span className="font-medium">NATION</span>
              </button>
            </div>
            <div className="flex items-center gap-2 text-gray-400 mt-2">
              <span className="text-gray-400">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="24" height="24" rx="12" fill="#6B7280" fillOpacity="0.2"/>
                  <path d="M7 12H17M17 12L13 8M17 12L13 16" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <span>NATION</span>
            </div>
            
            {/* Wallet Address Input Field */}
            <WalletAddressInput onChange={setWalletAddress} />
          </div>

          {/* Connect Wallet Button */}
          <button className="w-full bg-[#1c5ed0] hover:bg-[#1a54ba] text-white py-4 rounded-lg font-medium transition-colors">
            Connect Wallet
          </button>
          
          {/* Warning icon */}
          <div className="flex justify-end mt-4">
            <div className="text-yellow-500">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 8V12M12 16H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <div className="p-4 mt-auto">
        <span className="inline-block px-4 py-2 bg-[#032b1f] text-[#10b981] rounded-full text-sm mb-4">
          REAL-WORLD IMPACT
        </span>
        <h2 className="text-white text-4xl font-bold">
          Token 
          <br />
          Overview &
          <br />
          Utility
        </h2>
        
        {/* Chat with AI Button */}
        <div className="fixed bottom-4 right-4">
          <button className="w-12 h-12 rounded-full bg-gradient-to-r from-green-500 to-yellow-500 flex items-center justify-center shadow-lg">
            <Wallet size={24} className="text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CryptoPayment;