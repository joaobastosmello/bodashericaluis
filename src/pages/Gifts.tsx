import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GiftCard from '../components/GiftCard';
import { GIFT_VALUES} from '../utils/constants';
import { Gift } from 'lucide-react';

const Gifts: React.FC = () => {
  const [selectedValue, setSelectedValue] = useState<number | null>(null);
  const [customValue, setCustomValue] = useState<string>('');
  const [isCustom, setIsCustom] = useState(false);
  const navigate = useNavigate();
  
  const handleSelectGift = (value: number) => {
    setSelectedValue(value);
    setIsCustom(false);
  };
  
  const handleCustomClick = () => {
    setSelectedValue(null);
    setIsCustom(true);
  };
  
  const handleCustomValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomValue(e.target.value);
  };
  
  const handleProceed = () => {
    if (isCustom && customValue) {
      navigate(`/pagamento/${customValue}`);
    } else if (selectedValue) {
      navigate(`/pagamento/${selectedValue}`);
    }
  };
  
  const isButtonDisabled = (!selectedValue && !isCustom) || (isCustom && !customValue);
  
  return (
    <div className="pt-24 pb-16">
      <div className="container-custom">
        <h1 className="section-title mb-3">Presentear os Noivos</h1>
        <p className="text-center text-silver-600 mb-12 max-w-3xl mx-auto">
          Sua presença já é o melhor presente que poderíamos receber!
Mas, se desejar nos presentear, criamos uma lista especial com opções que refletem nosso momento e nossos sonhos.
        </p>
        
        <div className="mb-12">
          <h2 className="section-subtitle text-center mb-8">Escolha um Valor</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {GIFT_VALUES.map((value) => (
              <GiftCard
                key={value}
                value={value}
                isSelected={selectedValue === value}
                onClick={() => handleSelectGift(value)}
              />
            ))}
            
            <GiftCard
              value="Outro Valor"
              isSelected={isCustom}
              onClick={handleCustomClick}
            />
          </div>
        </div>
        
        {isCustom && (
          <div className="max-w-md mx-auto mb-8 p-6 border border-silver-200 rounded-lg bg-white animate-fade-in">
            <label htmlFor="customValue" className="block text-sm font-medium text-silver-700 mb-2">
              Digite o valor desejado (R$)
            </label>
            <input
              type="number"
              id="customValue"
              min="1"
              value={customValue}
              onChange={handleCustomValueChange}
              className="w-full px-3 py-2 border border-silver-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary-500"
              placeholder="Ex: 150"
            />
          </div>
        )}
        
        <div className="text-center">
          <button
            onClick={handleProceed}
            disabled={isButtonDisabled}
            className={`btn ${isButtonDisabled ? 'bg-silver-300 cursor-not-allowed' : 'btn-primary'} px-8 py-3`}
          >
            Prosseguir para Pagamento
          </button>
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-block p-6 border border-silver-200 rounded-lg bg-white max-w-3xl">
            <div className="flex justify-center mb-4">
              <div className="flex items-center">
                <Gift className="text-primary-500 mr-2" size={36} />
                <div className="w-12 h-12 bg-[url('/casal.jpg')] bg-cover bg-center rounded-full border-2 border-primary-500"></div>
              </div>
            </div>
            <h3 className="text-xl font-serif mb-3">Por que Presentear?</h3>
            <p className="text-silver-700 leading-relaxed mb-4">
              Cada presente representa um gesto de amor e amizade que fez parte da nossa história. Mais do que um item, é uma lembrança de quem compartilhou conosco esses 25 anos de amor, cumplicidade e conquistas.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gifts;