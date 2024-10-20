import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL as string;

export interface Transaction {
  id: string;
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

export const fetchTransactions = async (
  walletAddress: string,
  page: number = 1,
  limit: number = 10
): Promise<{ transactions: Transaction[]; page: number }> => {
  const response = await axios.get(
    `${API_BASE_URL}/transactions/${walletAddress}`,
    {
      params: {
        page,
        limit,
      },
    }
  );

  return {
    transactions: response.data.transactions,
    page,
  };
};
