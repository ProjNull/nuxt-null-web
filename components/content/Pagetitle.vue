<script setup lang="ts">
    defineProps({
    text: String
    })
    const { $anime } = useNuxtApp()

    onMounted(() => {
    $anime({
        targets: '.scroll ',
        translateX: [
            {value:"-4rem",duration:0},
            {value:"-10rem"},
            {value:"0rem"},
            {value:"-4rem"},
        ],
        opacity: [
            {value:"1",duration: 0},
            {value:"0"},
            {value:"0"},
            {value:"0"},
            {value:"1"},
        ],
        easing: 'easeInOutCubic',
        duration: 3000,
        endDelay:5000,
        delay: $anime.stagger(200, {start: 500}),
        loop: true
    });
    })
</script>

<template>
    <div class="titlebg">
        <template v-for="i in 5">
            <div class="scroll">
                <h1>
                    <template v-for="e in 40">
                        {{ (text + ' ').replaceAll(' ', '_')  }}
                    </template>
                </h1>
            </div>
        </template>
        
    </div>




</template>


<style>
    .titlebg h1 {
        display: inline;
        font-weight: inherit;
        font-family: DejavuMono;
    }

    .titlebg {
        overflow: hidden;
        margin-bottom: -5rem;
    }
    .titlebg .scroll {
        width: max-content;
        transition: 100%;
        font-weight: 800;
        transform: translateX(-2%);
    }



    span {
        font: 800 25px Opensans-var;
        font-weight: 250;
        stroke: rgba(255, 255, 255, 0);
        stroke-width: 0.1px;
        fill: white;
    }
</style>