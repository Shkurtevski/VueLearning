<template>
  <h3>Add new transaction</h3>
  <form id="form" @submit.prevent="onSubmit">
    <div class="form-control">
      <label for="text">Text</label>
      <input type="text" id="text" v-model="text" placeholder="Enter text..." />
    </div>
    <div class="form-control">
      <label for="amount">Amount <br />(negative - expense, positive - income)</label>
      <input type="number" id="amount" v-model="amount" placeholder="Enter amount..." />
      <button class="btn">Add transaction</button>
    </div>
  </form>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const text = ref('')
const amount = ref(0)

const onSubmit = () => {
  console.log('Submitted:', { text: text.value, amount: amount.value })
}
</script>
