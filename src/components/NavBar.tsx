
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import WalletConnect from './WalletConnect';
import { Shield } from 'lucide-react';

const NavBar = () => {
  const [simulationMode, setSimulationMode] = useState(true);

  return (
    <header className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Shield className="h-6 w-6 text-sage-500" />
          <a href="/" className="flex items-center gap-1">
            <span className="text-xl font-bold gradient-heading">SageChain</span>
          </a>
          <div className="ml-8 hidden md:flex gap-6">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Dashboard</a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Explore</a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Learn</a>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center space-x-2">
            <Switch 
              id="simulation-mode" 
              checked={simulationMode}
              onCheckedChange={setSimulationMode}
              className="data-[state=checked]:bg-sage-600"
            />
            <Label htmlFor="simulation-mode" className="text-sm">
              {simulationMode ? "Simulation Mode" : "Live Mode"}
            </Label>
          </div>
          <WalletConnect />
        </div>
      </div>
    </header>
  );
};

export default NavBar;
