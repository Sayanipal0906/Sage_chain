
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Switch } from '@/components/ui/switch';
import { Button } from '@/components/ui/button';

const Settings = () => {
  const [riskTolerance, setRiskTolerance] = useState([3]);
  
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold tracking-tight">Settings</h2>
      
      <Card>
        <CardHeader>
          <CardTitle>Risk Profile</CardTitle>
          <CardDescription>Adjust your risk tolerance for AI recommendations</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Risk Tolerance</span>
              <span className="font-medium text-sage-400">{riskTolerance[0]}/5</span>
            </div>
            <Slider 
              defaultValue={[3]} 
              max={5} 
              min={1} 
              step={1} 
              value={riskTolerance} 
              onValueChange={setRiskTolerance}
              className="py-4"
            />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>Conservative</span>
              <span>Balanced</span>
              <span>Aggressive</span>
            </div>
          </div>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-medium mb-2">Investment Goals</h3>
              <RadioGroup defaultValue="passive-income">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="passive-income" id="passive-income" />
                  <Label htmlFor="passive-income">Passive Income</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="capital-preservation" id="capital-preservation" />
                  <Label htmlFor="capital-preservation">Capital Preservation</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="high-growth" id="high-growth" />
                  <Label htmlFor="high-growth">High Growth</Label>
                </div>
              </RadioGroup>
            </div>
            
            <div className="space-y-4">
              <h3 className="font-medium">Privacy Settings</h3>
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">Enable ZK Identity Proofs</h4>
                  <p className="text-sm text-muted-foreground">Preserve privacy while proving wallet ownership</p>
                </div>
                <Switch defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">Anonymous Transaction Mode</h4>
                  <p className="text-sm text-muted-foreground">Mask on-chain activity with ZK rollups</p>
                </div>
                <Switch />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Button className="w-full bg-sage-600 hover:bg-sage-700">Save Settings</Button>
    </div>
  );
};

export default Settings;
