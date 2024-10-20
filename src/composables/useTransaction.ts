import { ref, computed } from "vue";
import { fetchTransactions, Transaction } from "../services/transactionService";

export function useTransaction(walletAddress: string) {
  const transactions = ref<Transaction[]>([]);
  const page = ref(1);
  const isLoading = ref(false);
  const hasMore = ref(true);
  const error = ref<string | null>(null);

  const loadTransactions = async () => {
    if (isLoading.value || !hasMore.value) return;

    try {
      isLoading.value = true;
      error.value = null;

      const response = await fetchTransactions(walletAddress, page.value);

      transactions.value.push(...response.transactions);

      if (response.transactions.length === 0) {
        hasMore.value = false;
      } else {
        page.value += 1;
      }
    } catch (e) {
      error.value = "Failed to fetch transactions. Please try again.";
    } finally {
      isLoading.value = false;
    }
  };

  const resetTransactions = () => {
    transactions.value = [];
    page.value = 1;
    hasMore.value = true;
  };

  return {
    transactions: computed(() => transactions.value),
    isLoading: computed(() => isLoading.value),
    hasMore: computed(() => hasMore.value),
    error: computed(() => error.value),
    loadTransactions,
    resetTransactions,
  };
}
