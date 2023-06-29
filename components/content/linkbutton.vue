<script setup>
defineProps({
  to:String,
  text: String
})
</script>

<template>
    <a class="linkbutton" :href="to">{{ text }}</a>
</template>
