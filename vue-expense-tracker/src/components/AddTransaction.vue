<template>
  <h3>Add new transaction</h3>
  <form id="form" @submit.prevent="onSubmit">
    <div class="form-control">
      <label for="text">Text</label>
      <input type="text" id="text" v-model="text" placeholder="Enter text..." />
    </div>
    <div class="form-control">
      <label for="amount">Amount</label>
      <input type="number" id="amount" v-model="amount" placeholder="Enter amount..." />
      <button class="btn">Add transaction</button>
      <router-link to="/router-test">To roter-test</router-link>
      
    </div>
  </form>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useToast } from 'vue-toastification'
import type { TransactionData } from '../interfaces'

const text = ref('')
const amount = ref<number | null>(null)

const emit = defineEmits(['transactionSubmitted'])

const toast = useToast()

const onSubmit = () => {
  if (!text.value || !amount.value) {
    toast.error('Both fields must be filled')
    return
  }

  const transactionData: TransactionData = {
    text: text.value,
    amount: amount.value
  }

  emit('transactionSubmitted', transactionData)

  text.value = ''
  amount.value = null
}
</script>
