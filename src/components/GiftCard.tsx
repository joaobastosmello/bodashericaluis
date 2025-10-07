import React from 'react';
import { Gift } from 'lucide-react';

interface GiftCardProps {
  value: number | string;
  isSelected: boolean;
  onClick: () => void;
}

const GiftCard: React.FC<GiftCardProps> = ({ value, isSelected, onClick }) => {
  return (
    <div 
      className={`gift-card ${isSelected ? 'selected' : ''}`}
      onClick={onClick}
    >
      <div className="flex justify-center mb-3">
        <Gift className={`${isSelected ? 'text-primary-500' : 'text-silver-400'}`} size={32} />
      </div>
      <h3 className="text-xl font-medium mb-1">
        {typeof value === 'number' ? `R$ ${value}` : value}
      </h3>
      <p className="text-sm text-silver-500">
        {typeof value === 'number' 
          ? 'Presente para os noivos' 
          : 'Escolha um valor personalizado'}
      </p>
    </div>
  );
};

export default GiftCard;