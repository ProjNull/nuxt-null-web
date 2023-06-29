<template>
    <div class="teamgrid">
        <slot/>
    </div>
</template>

<style scoped>
    .teamgrid {
        display: grid;
        grid-template-columns: repeat(auto-fit,200px);
        grid-template-rows: repeat(auto-fit);
        grid-gap: 10px;
        align-items: baseline;
        justify-content: center;
        width: 100%;
    }

    @media only screen and (max-width: 600px){
        .teamgrid {
            grid-template-columns: 100%;
        }
        
    }   
</style>