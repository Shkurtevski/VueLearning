<template>
  <AppHeader />
  <div class="container">
    <AppBalance />
    <IncomeExpenses />
    <TransactionList />
    <AddTransaction />
  </div>
</template>

<script lang="ts">
import AppHeader from './components/AppHeader.vue'
import AppBalance from './components/AppBalance.vue'
import IncomeExpenses from './components/IncomeExpenses.vue'
import TransactionList from './components/TransactionList.vue'
import AddTransaction from './components/AddTransaction.vue'

export default {
  components: {
    AppHeader,
    AppBalance,
    IncomeExpenses,
    TransactionList,
    AddTransaction
  }
}
</script>
