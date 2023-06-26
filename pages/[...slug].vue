<template>
    <contentDoc/>
</template>


<style>
    lsection {
        display: block;
        position: relative;
        color: white;
        isolation: isolate;
        padding-block: 5rem;
    }
    lsection::before {
        inset: 0;
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: black;
        z-index: -1;
        transform: skewY(3deg);
    }
    
</style>