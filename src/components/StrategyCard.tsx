
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

type StrategyCardProps = {
  title: string;
  description: string;
  apy: number;
  protocol: string;
  active?: boolean;
};

const StrategyCard = ({ title, description, apy, protocol, active = false }: StrategyCardProps) => {
  return (
    <Card className={`card-glow ${active ? "border-sage-500" : ""}`}>
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium flex justify-between items-center">
          <span>{title}</span>
          {active && (
            <span className="bg-sage-500/20 text-sage-500 text-xs px-2 py-1 rounded-full flex items-center">
              <Check className="h-3 w-3 mr-1" /> Active
            </span>
          )}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-sm mb-3">{description}</div>
        <div className="flex justify-between items-center">
          <div>
            <div className="text-sm text-muted-foreground">APY</div>
            <div className="text-lg font-bold text-sage-400">{apy.toFixed(2)}%</div>
          </div>
          <div>
            <div className="text-sm text-muted-foreground">Protocol</div>
            <div className="text-sage-400">{protocol}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StrategyCard;
