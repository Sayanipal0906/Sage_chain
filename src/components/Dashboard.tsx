
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AssetCard from "./AssetCard";
import StrategyCard from "./StrategyCard";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Dashboard = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold tracking-tight">Portfolio Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="md:col-span-2">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Balance</CardTitle>
            <CardDescription>Across all connected wallets</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$4,320.85</div>
            <div className="text-sm text-green-500">+3.2% ($138.25) today</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Risk Score</CardTitle>
            <CardDescription>Based on your portfolio</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-amber-500">Medium</div>
            <div className="text-sm text-muted-foreground">3/5 risk level</div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="assets" className="space-y-4">
        <TabsList className="grid grid-cols-3 max-w-md">
          <TabsTrigger value="assets">Assets</TabsTrigger>
          <TabsTrigger value="strategies">Strategies</TabsTrigger>
          <TabsTrigger value="history">History</TabsTrigger>
        </TabsList>
        <TabsContent value="assets" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <AssetCard name="Ethereum" symbol="ETH" balance={1.2345} value={4254.89} changePercentage={2.3} />
            <AssetCard name="USD Coin" symbol="USDC" balance={1500} value={1500} changePercentage={0} />
            <AssetCard name="Aave" symbol="AAVE" balance={5.4321} value={567.89} changePercentage={-1.2} />
          </div>
        </TabsContent>
        <TabsContent value="strategies" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <StrategyCard 
              title="ETH Staking" 
              description="1.2 ETH staked on Lido for liquid staking rewards" 
              apy={3.8} 
              protocol="Lido"
              active={true}
            />
            <StrategyCard 
              title="USDC Lending" 
              description="500 USDC supplied to Aave for yield generation" 
              apy={5.2} 
              protocol="Aave"
              active={true}
            />
          </div>
        </TabsContent>
        <TabsContent value="history" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Your latest DeFi interactions</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="flex justify-between border-b border-border pb-2">
                  <div>
                    <div className="font-medium">Staked ETH</div>
                    <div className="text-sm text-muted-foreground">Lido Finance</div>
                  </div>
                  <div className="text-right">
                    <div>1.2 ETH</div>
                    <div className="text-xs text-muted-foreground">2 days ago</div>
                  </div>
                </li>
                <li className="flex justify-between border-b border-border pb-2">
                  <div>
                    <div className="font-medium">Supplied USDC</div>
                    <div className="text-sm text-muted-foreground">Aave v3</div>
                  </div>
                  <div className="text-right">
                    <div>500 USDC</div>
                    <div className="text-xs text-muted-foreground">5 days ago</div>
                  </div>
                </li>
                <li className="flex justify-between">
                  <div>
                    <div className="font-medium">Swapped ETH for USDC</div>
                    <div className="text-sm text-muted-foreground">Uniswap v3</div>
                  </div>
                  <div className="text-right">
                    <div>0.3 ETH → 500 USDC</div>
                    <div className="text-xs text-muted-foreground">1 week ago</div>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Dashboard;
