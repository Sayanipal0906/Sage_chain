
import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import NavBar from "@/components/NavBar";
import ChatInterface from "@/components/ChatInterface";
import Dashboard from "@/components/Dashboard";
import Settings from "@/components/Settings";

const Index = () => {
  const [activeTab, setActiveTab] = useState("chat");

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <NavBar />
      
      <main className="flex-1 container py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h1 className="text-3xl font-bold mb-8 gradient-heading">DeFi Advisor AI</h1>
            
            <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
              <TabsList className="grid w-full grid-cols-3 max-w-md">
                <TabsTrigger value="chat">AI Chat</TabsTrigger>
                <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
                <TabsTrigger value="settings">Settings</TabsTrigger>
              </TabsList>
              <TabsContent value="chat" className="mt-4">
                <ChatInterface />
              </TabsContent>
              <TabsContent value="dashboard" className="mt-4">
                <Dashboard />
              </TabsContent>
              <TabsContent value="settings" className="mt-4">
                <Settings />
              </TabsContent>
            </Tabs>
          </div>
          
          <div className="hidden lg:block">
            <div className="frosted-panel p-6 sticky top-24">
              <h2 className="text-xl font-bold mb-4">Getting Started</h2>
              <div className="space-y-4">
                <div className="border-l-2 border-sage-500 pl-4">
                  <h3 className="text-sage-400 font-medium">Connect Your Wallet</h3>
                  <p className="text-sm text-muted-foreground">Link your wallet to see your assets and get personalized advice.</p>
                </div>
                
                <div className="border-l-2 border-accent pl-4">
                  <h3 className="text-accent font-medium">Ask About DeFi</h3>
                  <p className="text-sm text-muted-foreground">Ask questions like "Where can I stake ETH?" or "What's the best APY for stablecoins?"</p>
                </div>
                
                <div className="border-l-2 border-muted-foreground pl-4">
                  <h3 className="text-muted-foreground font-medium">Explore Strategies</h3>
                  <p className="text-sm text-muted-foreground">View recommended strategies based on your risk profile and portfolio.</p>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-sage-500/10 border border-sage-500/20 rounded-lg">
                <h3 className="font-medium text-sage-400">Simulation Mode</h3>
                <p className="text-sm text-muted-foreground mt-2">You're currently in simulation mode. Actions won't affect real assets until you switch to Live Mode.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
