<script setup>
defineProps({
  to:String,
  text: String
})
</script>

<template>
    <NuxtLink class="linkbutton" :to="to">{{ text }}</NuxtLink>
</template>
