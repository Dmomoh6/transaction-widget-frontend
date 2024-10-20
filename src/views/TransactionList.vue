<template>
  <div
    class="transaction-list h-[700px] overflow-y-auto max-w-md min-w-[70vw] mx-auto p-4 bg-white dark:bg-gray-800 border-l rounded-lg"
    @scroll="handleScroll"
  >
    <h2
      class="text-2xl text-primary_black dark:text-white text-left font-semibold m-2 mb-5"
    >
      Latest Transactions
    </h2>

    <div
      class="p-4 flex flex-col gap-6 mt-40 items-center"
      v-if="transactions.length === 0 && !isLoading && !error"
    >
      <p>No transactions found.</p>
      <button @click="refreshTransactions">Refresh</button>
    </div>

    <TransactionItem
      v-for="transaction in transactions"
      :key="transaction.id"
      :transaction="transaction"
    />

    <div v-if="isLoading" class="flex justify-center items-center">
      <div
        class="animate-spin rounded-full h-8 w-8 border-4 border-t-transparent border-primary_black"
      ></div>
    </div>

    <div class="p-4 flex flex-col gap-6 mt-40 items-center" v-if="error">
      <p>{{ error }}</p>
      <button @click="refreshTransactions">Try Again</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import TransactionItem from "../components/TransactionItem.vue";
import { useTransaction } from "../composables/useTransaction";

export default defineComponent({
  name: "TransactionList",
  components: { TransactionItem },
  props: {
    walletAddress: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const {
      transactions,
      isLoading,
      error,
      loadTransactions,
      resetTransactions,
      hasMore,
    } = useTransaction(props.walletAddress);

    const handleScroll = (event: Event) => {
      const target = event.target as HTMLElement;
      if (
        target.scrollTop + target.clientHeight >= target.scrollHeight &&
        hasMore.value
      ) {
        loadTransactions();
      }
    };

    const refreshTransactions = () => {
      resetTransactions();
      loadTransactions();
    };

    onMounted(() => {
      resetTransactions();
      loadTransactions();
    });

    return {
      transactions,
      isLoading,
      error,
      loadTransactions,
      handleScroll,
      refreshTransactions,
    };
  },
});
</script>
