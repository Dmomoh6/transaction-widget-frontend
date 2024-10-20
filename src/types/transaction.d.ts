export interface Transaction {
  id: integer;
  transactionType: string;
  amountSpent: string;
  amountReceived: string;
  asset: {
    name: string;
    symbol: string;
    logo: string;
  };
  timestamp: string;
}
