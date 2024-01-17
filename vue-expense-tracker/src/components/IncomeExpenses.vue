<template>
  <div class="inc-exp-container">
    <div>
      <h4>Income</h4>
      <p id="money-plus" class="money plus">$+{{ formattedIncome }}</p>
    </div>
    <div>
      <h4>Expense</h4>
      <p id="money-minus" class="money minus">${{ formattedExpenses }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, ref } from 'vue';

const props = defineProps(['income', 'expenses']);

const formattedIncome = ref(Number(props.income).toFixed(2));
const formattedExpenses = ref(Number(props.expenses).toFixed(2));
</script>