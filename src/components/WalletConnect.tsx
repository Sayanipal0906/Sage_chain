
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Wallet } from 'lucide-react';

const WalletConnect = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [address, setAddress] = useState<string | null>(null);

  const connectWallet = async () => {
    // This is a mock implementation - in a real app, this would use WalletConnect or similar
    setIsConnected(true);
    setAddress('0x1234...5678');
    
    // In production, would use something like:
    // const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    // setAddress(accounts[0]);
  };

  const disconnectWallet = () => {
    setIsConnected(false);
    setAddress(null);
  };

  return (
    <TooltipProvider>
      {!isConnected ? (
        <Button 
          onClick={connectWallet} 
          className="bg-sage-600 hover:bg-sage-700 text-white"
        >
          <Wallet className="mr-2 h-4 w-4" />
          Connect Wallet
        </Button>
      ) : (
        <Tooltip>
          <TooltipTrigger asChild>
            <Button 
              variant="outline" 
              onClick={disconnectWallet}
              className="border-sage-500 text-sage-500 hover:bg-sage-500/10"
            >
              <span className="flex items-center">
                <span className="h-2 w-2 rounded-full bg-green-500 mr-2 animate-pulse-slow"></span>
                {address}
              </span>
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Click to disconnect</p>
          </TooltipContent>
        </Tooltip>
      )}
    </TooltipProvider>
  );
};

export default WalletConnect;
