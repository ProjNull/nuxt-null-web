<script setup>
defineProps({
  href: String,
  text: String,
  insidelink: Boolean (false)
})
</script>

<template>
    <a v-if="!insidelink" :href="href">{{ text }}</a>
    <NuxtLink v-else :to="href">{{ text }}</NuxtLink>
</template>