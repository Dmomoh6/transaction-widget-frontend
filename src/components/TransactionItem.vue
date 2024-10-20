<template>
  <div
    class="flex flex-col items-center p-2 pb-3 mt-2 border-b border-secondary_gray"
  >
    <div class="flex self-start items-center mb-4">
      <img
        :src="transaction.asset.logo"
        alt="Asset logo"
        class="w-10 h-10 rounded-full"
      />
      <img class="w-[18px] mt-9 -ml-3 mr-3" :src="iconPath" />
      <h3 class="text-lg text-black dark:text-white font-semibold">
        {{ transaction.asset.name }}
      </h3>
    </div>

    <div class="flex w-full gap-6">
      <p
        class="text-xs flex-1 flex flex-col text-left font-medium text-primary_grey"
      >
        Spent Amount:
        <span class="text-black dark:text-white text-sm"
          >{{ transaction.amountSpent }}
          {{
            transaction.transactionType == "buy"
              ? "USD"
              : transaction.asset.symbol
          }}</span
        >
      </p>
      <img src="/images/swap.svg" class="w-4" />
      <p
        class="text-xs flex-1 flex flex-col text-right font-medium text-primary_grey"
      >
        Received Amount:
        <span class="text-black dark:text-white text-sm"
          >{{ transaction.amountReceived }}
          {{
            transaction.transactionType == "sell"
              ? "USD"
              : transaction.asset.symbol
          }}</span
        >
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Transaction } from "../services/transactionService";

export default defineComponent({
  name: "TransactionItem",
  props: {
    transaction: {
      type: Object as PropType<Transaction>,
      required: true,
    },
  },
  computed: {
    iconPath() {
      return `/images/${this.transaction.transactionType}.svg`;
    },
  },
});
</script>
