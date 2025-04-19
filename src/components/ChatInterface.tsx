
import { useState, useRef, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { SendIcon, Search } from 'lucide-react';
import ChatMessage from './ChatMessage';

type Message = {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: Date;
};

const generateId = () => Math.random().toString(36).substring(2, 9);

const ChatInterface = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: generateId(),
      content: "Welcome to SageChain! I'm your AI advisor for DeFi strategies. What would you like to know about DeFi today?",
      isUser: false,
      timestamp: new Date(),
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const mockResponses: {[key: string]: string} = {
    "eth": "Ethereum is currently trading at $3,450. The 24h change is +2.3%. Would you like to see staking options for ETH?",
    "stake": "For ETH staking, I recommend these options:\n\n1. **Lido Finance**: 3.8% APY, liquid staking\n2. **Rocket Pool**: 4.2% APY, decentralized\n3. **Coinbase**: 3.5% APY, centralized but insured\n\nWould you like me to simulate any of these strategies for you?",
    "apy": "The highest APY for stablecoins right now:\n\n- USDC: 5.2% on Aave\n- DAI: 4.8% on Compound\n- USDT: 5.5% on Curve (boosted)\n\nNote that higher APY often comes with higher risk. Would you like me to analyze the risk profiles of these options?",
    "swap": "To get the best exchange rate for swapping tokens, I'll need to know:\n\n1. What token do you have?\n2. What token do you want?\n3. How much are you swapping?\n\nI can then check Uniswap, 1inch, and other DEXs for the best price and lowest slippage.",
    "default": "I understand you're asking about DeFi strategies. Could you provide more details about what specific information or action you're looking for? For example, you could ask about staking options, current APYs, token swaps, or lending opportunities."
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    
    // Add user message
    const userMessage = {
      id: generateId(),
      content: message,
      isUser: true,
      timestamp: new Date(),
    };
    
    setMessages(msgs => [...msgs, userMessage]);
    setMessage('');
    setIsLoading(true);
    
    // Simulate API delay
    setTimeout(() => {
      // Find response based on keywords in the message
      let responseContent = mockResponses.default;
      
      const lowerCaseMsg = message.toLowerCase();
      if (lowerCaseMsg.includes('eth')) {
        responseContent = mockResponses.eth;
      } else if (lowerCaseMsg.includes('stake') || lowerCaseMsg.includes('staking')) {
        responseContent = mockResponses.stake;
      } else if (lowerCaseMsg.includes('apy') || lowerCaseMsg.includes('yield') || lowerCaseMsg.includes('interest')) {
        responseContent = mockResponses.apy;
      } else if (lowerCaseMsg.includes('swap') || lowerCaseMsg.includes('exchange')) {
        responseContent = mockResponses.swap;
      }
      
      const aiResponse = {
        id: generateId(),
        content: responseContent,
        isUser: false,
        timestamp: new Date(),
      };
      
      setMessages(msgs => [...msgs, aiResponse]);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="flex flex-col h-[calc(100vh-16rem)] overflow-hidden rounded-xl bg-background border border-border">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg) => (
          <ChatMessage 
            key={msg.id}
            content={msg.content}
            isUser={msg.isUser}
            timestamp={msg.timestamp}
          />
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="chat-message-ai flex items-center space-x-2">
              <div className="w-2 h-2 rounded-full bg-sage-400 animate-pulse"></div>
              <div className="w-2 h-2 rounded-full bg-sage-400 animate-pulse delay-150"></div>
              <div className="w-2 h-2 rounded-full bg-sage-400 animate-pulse delay-300"></div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      
      <div className="border-t border-border p-4">
        <form onSubmit={handleSubmit} className="flex gap-2">
          <Input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Ask about DeFi strategies, APY rates, or asset recommendations..."
            className="bg-secondary border-none"
            disabled={isLoading}
          />
          <Button 
            type="submit" 
            size="icon" 
            className="bg-sage-600 hover:bg-sage-700"
            disabled={isLoading}
          >
            <SendIcon className="h-4 w-4" />
          </Button>
          <Button 
            type="button"
            size="icon"
            variant="outline"
            className="border-accent/40 text-accent hover:text-accent/80"
          >
            <Search className="h-4 w-4" />
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ChatInterface;
