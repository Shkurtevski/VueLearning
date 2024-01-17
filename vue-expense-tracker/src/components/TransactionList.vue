<template>
  <h3>History</h3>
  <ul id="list" class="list">
    <li
      v-for="transaction in transactions"
      :key="transaction.id"
      :class="transaction.amount < 0 ? 'minus' : 'plus'"
    >
      {{ transaction.text }} <span>${{ transaction.amount }}</span>
      <button class="delete-btn">x</button>
    </li>
  </ul>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'
import type { Transaction } from '../interfaces'

const { transactions } = defineProps({
  transactions: {
    type: Array as () => Transaction[],
    required: true
  }
})
</script>

<!----- COMPOSITION-API ----->
<!-- <script lang="ts" setup>
const transactions = [
  { id: 1, text: 'Flower', amount: -19.99 },
  { id: 2, text: 'Salary', amount: 299.97 },
  { id: 3, text: 'Book', amount: -10 },
  { id: 4, text: 'Camera', amount: 150 }
]
</script> -->

<!----- OPTIONS-API ----->
<!-- <script lang="ts">
export default {
  data() {
    return {
      transactions: [
        { id: 1, text: 'Flower', amount: -19.99 },
        { id: 2, text: 'Salary', amount: 299.97 },
        { id: 3, text: 'Book', amount: -10 },
        { id: 4, text: 'Camera', amount: 150 }
      ]
    }
  }
}
</script> -->
