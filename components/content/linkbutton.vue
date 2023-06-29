<script setup>
defineProps({
  to:String,
  text: String
})
</script>

<template>
    <a class="linkbutton" :href="to" target="_blank">{{ text }}</a>
</template>
