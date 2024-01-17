<template>
  <AppHeader />
  <div class="container">
    <AppBalance />
    <IncomeExpenses />
  </div>
</template>

<script lang="ts">
import AppHeader from './components/AppHeader.vue'
import AppBalance from './components/AppBalance.vue'
import IncomeExpenses from './components/IncomeExpenses.vue'
export default {
  components: {
    AppHeader,
    AppBalance,
    IncomeExpenses
  }
}
</script>
