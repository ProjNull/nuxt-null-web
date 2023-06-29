<script setup>
defineProps({
  brand: String
})
</script>

<template>
    <div class="navbar">
        <span class="brand" v-html="brand"></span>
        <div class="navlist">
            <slot/>
        </div>  
    </div>
    
</template>
