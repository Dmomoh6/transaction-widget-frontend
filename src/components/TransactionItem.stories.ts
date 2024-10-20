// src/components/TransactionItem.stories.ts
import TransactionItem from "./TransactionItem.vue";
import { Meta, StoryFn } from "@storybook/vue3";
import { Transaction } from "../types/transaction";

export default {
  title: "Components/TransactionItem",
  component: TransactionItem,
} as Meta<typeof TransactionItem>;

const Template: StoryFn<typeof TransactionItem> = (args) => ({
  components: { TransactionItem },
  setup() {
    return { args };
  },
  template: '<TransactionItem v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  transaction: {
    id: 93,
    transactionType: "sell",
    amountSpent: "0.00000000",
    amountReceived: "0.00000000",
    timestamp: "2024-06-23T17:13:31.000Z",
    asset: {
      name: "Polygon",
      symbol: "MATIC",
      logo: "https://metacore.mobula.io/22884f2d889a75fd9715538bf8c4ffedfd91766e8b3a886128dd9495521deca7.png",
    },
  } as Transaction,
};
