
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type AssetCardProps = {
  name: string;
  symbol: string;
  balance: number;
  value: number;
  changePercentage?: number;
};

const AssetCard = ({ name, symbol, balance, value, changePercentage = 0 }: AssetCardProps) => {
  return (
    <Card className="card-glow">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium flex justify-between">
          <span>{name}</span>
          <span className={changePercentage >= 0 ? "text-green-500" : "text-red-500"}>
            {changePercentage > 0 ? "+" : ""}{changePercentage.toFixed(2)}%
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-xl font-bold">{balance.toFixed(4)} {symbol}</div>
        <div className="text-sm text-muted-foreground">${value.toFixed(2)}</div>
      </CardContent>
    </Card>
  );
};

export default AssetCard;
