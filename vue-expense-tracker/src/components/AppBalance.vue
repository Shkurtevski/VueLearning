<template>
  <h4>Your Balance</h4>
  <h1 id="balance">${{ total.toFixed(2) }}</h1>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'

const { total } = defineProps({
  total: {
    type: Number,
    required: true
  }
})
</script>
