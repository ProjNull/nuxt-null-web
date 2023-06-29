<script setup>
defineProps({
  type:String ("left")
})
</script>

<template>
    <div v-if="type == 'left' || type=='l'" class="section-left">
      <div class="container-fit">
        <slot/>
      </div>
    </div>
    <div v-else-if="type == 'right' || type=='r'" class="section-right">
      <div class="container-fit">
        <slot/>
      </div>
    </div>
    <div v-else class="section-none">
      <div class="container-fit">
        <slot/>
      </div>
    </div>
</template>

<style scoped>
  .container-fit {
    max-width: 70rem;
    margin-inline: auto;
    padding-inline: 1rem;
    text-align: center;
  }
  
</style>