<template>
  <AppHeader />
  <div class="container">
    <AppBalance :total="+total" />
    <IncomeExpenses :income="+income" :expenses="+expenses" />
    <TransactionList :transactions="transactions" @transactionDeleted="handleTransactionDeleted" />
    <AddTransaction @transaction-submitted="handleTransactionSubmitted" />
    
  </div>
</template>

<!-- WITH-KEYWORD-SETUP-DOESNT-NEED-TO-BE-EXPORTED -->
<script lang="ts" setup>
import AppHeader from '../components/AppHeader.vue'
import AppBalance from '../components/AppBalance.vue'
import IncomeExpenses from '../components/IncomeExpenses.vue'
import TransactionList from '../components/TransactionList.vue'
import AddTransaction from '../components/AddTransaction.vue'
import { useToast } from 'vue-toastification'
import type { TransactionData } from '../interfaces'

import { ref, computed, onMounted } from 'vue'

const transactions = ref<Array<{ id: number; text: string; amount: number }>>([])

onMounted(() => {
  const localStorageKey = 'transactions'

  if (localStorageKey !== null) {
    const savedTransactions = JSON.parse(localStorage.getItem(localStorageKey) || 'null')

    if (savedTransactions) {
      transactions.value = savedTransactions
    }
  }
})

console.log(transactions)

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

  saveTransactionsToLocalStorage()
  toast.success('Transaction added')
}

// DELETE-TRANSACTION
const handleTransactionDeleted = (id: Number) => {
  transactions.value = transactions.value.filter((transaction) => transaction.id !== id)

  saveTransactionsToLocalStorage()
  toast.success('Transaction deleted')
}

// GENERATE-UNIQUE-ID
const generateUniqueId = () => {
  return Math.floor(Math.random() * 1000000)
}

// SAVE-TO-LOCAl-STORAGE
const saveTransactionsToLocalStorage = () => {
  localStorage.setItem('transactions', JSON.stringify(transactions.value))
}

console.log(localStorage)

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
