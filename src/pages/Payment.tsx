import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CheckCircle, Copy, ArrowLeft } from 'lucide-react';

const Payment: React.FC = () => {
  const { valor } = useParams<{ valor: string }>();
  const [copied, setCopied] = useState(false);
  
  useEffect(() => {
    // Reset copied state after 3 seconds
    if (copied) {
      const timeout = setTimeout(() => {
        setCopied(false);
      }, 3000);
      
      return () => clearTimeout(timeout);
    }
  }, [copied]);
  
  const handleCopyPix = () => {
    // In a real app, this would copy an actual PIX code
    setCopied(true);
  };
  
  return (
    <div className="pt-24 pb-16">
      {/* Decorative Flowers */}
      <div className="fixed top-16 left-0 w-56 h-56 pointer-events-none z-10 opacity-25">
        <img 
          src="/Design sem nome (3).png" 
          alt="" 
          className="w-full h-full object-contain"
        />
      </div>
      <div className="fixed bottom-16 right-0 w-64 h-64 pointer-events-none z-10 opacity-20">
        <img 
          src="/Design sem nome (4).png" 
          alt="" 
          className="w-full h-full object-contain transform scale-x-[-1] rotate-12"
        />
      </div>
      
      <div className="container-custom">
        <div className="max-w-2xl mx-auto">
          <div className="mb-8">
            <Link to="/presentear" className="inline-flex items-center text-primary-500 hover:text-primary-600 transition-colors">
              <ArrowLeft size={18} className="mr-1" />
              Voltar para presentes
            </Link>
          </div>
          
          <div className="bg-white rounded-lg shadow-md border border-silver-200 p-8">
            <div className="absolute top-4 right-4 w-24 h-24 pointer-events-none opacity-30">
            </div>
            <h1 className="text-2xl font-serif text-center mb-6">Pagamento do Presente</h1>
            
            <div className="text-center mb-8">
              <p className="text-silver-600 mb-2">Você está presenteando com:</p>
              <h2 className="text-3xl font-medium text-primary-500">R$ {valor}</h2>
            </div>
            
            <div className="bg-silver-50 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-medium mb-4 text-center">Escaneie o QR Code para pagar</h3>
              
              <div className="flex justify-center mb-6">
                <img 
                  src="/WhatsApp Image 2025-10-06 at 20.57.32 copy copy.jpeg" 
                  alt="QR Code PIX para pagamento" 
                  className="w-56 h-56 object-contain bg-white border-2 border-primary-200 rounded-xl p-3 shadow-lg"
                />
              </div>
              
              <div className="border-t border-silver-200 pt-4">
                <p className="text-sm text-silver-500 mb-3 text-center">Ou copie o código PIX abaixo:</p>
                
                <div className="relative">
                  <div className="bg-white border border-silver-300 rounded-md p-3 pr-10 text-sm text-silver-700 overflow-hidden">
                    00020126510014br.gov.bcb.pix0114+55219941793960211Lua de mel 5204000053039865802BR5925HERICA DE AGUIAR GEMMAL N6014RIO DE JANEIRO62580520SAN2025092602492927450300017br.gov.bcb.brcode01051.0.06304C578
                  </div>
                  <button 
                    onClick={handleCopyPix}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-primary-500 hover:text-primary-600"
                  >
                    {copied ? <CheckCircle size={20} /> : <Copy size={20} />}
                  </button>
                </div>
              </div>
            </div>
            
            <div className="text-center text-silver-600 text-sm">
              <p>Após o pagamento, você receberá um comprovante no email cadastrado.</p>
              <p className="mt-2">Muito obrigado pelo seu presente!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;