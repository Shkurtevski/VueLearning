<template>
  <AppHeader />
  <div class="container">
    <AppBalance :total="total" />
    <IncomeExpenses />
    <TransactionList :transactions="transactions" />
    <AddTransaction />
  </div>
</template>

<!-- WITH-KEYWORD-SETUP-DOESNT-NEED-TO-BE-EXPORTED -->
<script lang="ts" setup>
import AppHeader from './components/AppHeader.vue'
import AppBalance from './components/AppBalance.vue'
import IncomeExpenses from './components/IncomeExpenses.vue'
import TransactionList from './components/TransactionList.vue'
import AddTransaction from './components/AddTransaction.vue'

import { ref, computed } from 'vue'

const transactions = ref([
  { id: 1, text: 'Flower', amount: -19.99 },
  { id: 2, text: 'Salary', amount: 299.97 },
  { id: 3, text: 'Book', amount: -10 },
  { id: 4, text: 'Camera', amount: 150 }
])

const total = computed(() => {
  return transactions.value.reduce((acc, transaction) => {
    return acc + transaction.amount
  }, 0)
})

// OLDER-WAY-TO-EXPORT-FILES
// export default {
//   components: {
//     AppHeader,
//     AppBalance,
//     IncomeExpenses,
//     TransactionList,
//     AddTransaction
//   }
// }
</script>
