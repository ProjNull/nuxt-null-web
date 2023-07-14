<template>
    <video class="video" autoplay loop muted poster="bg-static.png" src="/bg.mp4"/>
</template>

<style scoped>
    .video {
        height: 40rem;
        object-fit: contain;
        width: 100%;
        margin-bottom: -5rem;
        background-color: black;
    }

    @media screen and (max-width: 600px) {
        .video {
        height: 20rem;
        object-fit: cover;
        width: 100%;
        margin-bottom: -2rem;
        background-color: rgb(0, 0, 0);
    }
    }
</style>