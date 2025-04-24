import React, { useState } from 'react';

interface WalletAddressInputProps {
  onChange: (address: string) => void;
}

const WalletAddressInput: React.FC<WalletAddressInputProps> = ({ onChange }) => {
  const [address, setAddress] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(e.target.value);
    onChange(e.target.value);
  };

  return (
    <div className="w-full mt-2">
      <input
        type="text"
        placeholder="Enter wallet address"
        value={address}
        onChange={handleChange}
        className="w-full bg-[#1a2035] border border-[#303550] p-3 rounded-lg text-white placeholder-gray-500"
      />
    </div>
  );
};

export default WalletAddressInput;