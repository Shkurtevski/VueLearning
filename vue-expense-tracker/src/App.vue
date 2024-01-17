<template>
  <AppHeader />
  <div class="container">
    <AppBalance :total="+total" />
    <IncomeExpenses :income="+income" :expenses="+expenses" />
    <TransactionList :transactions="transactions" />
    <AddTransaction @transaction-submitted="handleTransactionSubmitted" />
  </div>
</template>

<!-- WITH-KEYWORD-SETUP-DOESNT-NEED-TO-BE-EXPORTED -->
<script lang="ts" setup>
import AppHeader from './components/AppHeader.vue'
import AppBalance from './components/AppBalance.vue'
import IncomeExpenses from './components/IncomeExpenses.vue'
import TransactionList from './components/TransactionList.vue'
import AddTransaction from './components/AddTransaction.vue'
import { useToast } from 'vue-toastification'
import type { TransactionData } from './interfaces'

import { ref, computed} from 'vue'

const transactions = ref([
  { id: 1, text: 'Flower', amount: -19.99 },
  { id: 2, text: 'Salary', amount: 299.97 },
  { id: 3, text: 'Book', amount: -10 },
  { id: 4, text: 'Camera', amount: 150 }
])

const toast = useToast()

// GET-TOTAL-BALANCE
const total = computed(() => {
  return transactions.value.reduce((acc, transaction) => {
    return acc + transaction.amount
  }, 0)
})

// GET-INCOME
const income = computed(() => {
  return transactions.value
    .filter((transaction) => transaction.amount > 0)
    .reduce((acc, transaction) => {
      return acc + transaction.amount
    }, 0)
    .toFixed(2)
})

// GET-EXPENSES
const expenses = computed(() => {
  return transactions.value
    .filter((transaction) => transaction.amount < 0)
    .reduce((acc, transaction) => {
      return acc + transaction.amount
    }, 0)
    .toFixed(2)
})

// ADD-TRANSACTION
const handleTransactionSubmitted = (transactionData: TransactionData) => {
  transactions.value.push({
    id: generateUniqueId(),
    text: transactionData.text,
    amount: transactionData.amount
  })
  toast.success('Transaction added')
}

// GENERATE-UNIQUE-ID
const generateUniqueId = () => {
  return Math.floor(Math.random() * 1000000)
}

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
