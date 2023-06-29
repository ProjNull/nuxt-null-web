<script setup>
defineProps({
    name: String,
    icon: String,
    role: Array,
    links: Object,
})
</script>

<template>
    <div class="user">
        <div class="icon">
            
            <img v-if="icon" :src="icon" alt="">
            <img v-else :src="'https://github.com/'+ name.toLowerCase() +'.png'" alt="">
        </div>
    <div class="inside">
    <h3>{{ name }}</h3>
    <p class="role">
        <template v-for="rolename in role">
            {{ rolename}}<br>
        </template>
    </p>
                        
    </div>
    <template v-for="link,linkname in links">
        <a :href="link">{{linkname}}</a>
    </template>

    
                    
    </div>             
</template>

<style scoped>
    .user {
    background-color: rgba(255, 255, 255, 0);
    color: rgb(0, 0, 0);
    position: relative;
    margin-top: 60px;
    padding-bottom: 0px;
    transform: perspective(400px) rotateX(0deg) translateY(0px);
    transition: 400ms;
    position: relative;
    isolation: isolate;
    }


.user::after {
    transition: 200ms;
    content: "";
    position: absolute;
    inset: 0;
    background-color: rgb(255, 255, 255);
    width: 100%;
    height: 100%;
    z-index: -1;
    transform:skewY(5deg);
}

.user:is(:hover, :focus)::after {
    transform:skewY(5deg) scaleY(1.1);
    padding-bottom: 10px;
}


.user:is(:hover, :focus) .icon {
    transform: scale(1.1);
    filter: drop-shadow(rgba(0, 0, 0, 0.5) 2px 2px 5px);
    z-index: 10;
}


.icon img {
    width: 100%;
    height: 100%;
}

p {
    text-align: center;
    word-wrap: break-word;

}

.user .inside {
    margin-top: 60px;
}
.user a {
    padding: 10px 0px;
    display: block;
    margin-top: 10px;
    width: 100%;
    margin-bottom: 10px;
    transition: 400ms;
    color: black;
    border-radius: 0px;
    position: relative;
    isolation: isolate;
    padding-block: 10px;
    text-align: center;
    text-decoration: none;
}
.user a::after {
    content: "";
    position: absolute;
    inset: 0;
    background: rgb(0, 255, 0);
    filter: brightness(0.8);
    width: 100%;
    height: 100%;
    z-index: -1;
    transform:skewY(5deg);
    transition: 400ms;
    
}

.user a::before {
    content: "";
    position: absolute;
    inset: 0;
    background-color: rgb(0, 255, 0);
    filter: brightness(0.6);
    transform: skewY(5deg);
    z-index: -2;
    transition: 200ms;
}

.user a:is(:hover, :focus):after {
    background: rgb(0, 255, 0);
    transform: skewY(5deg) scaleY(1.1);
    filter: brightness(1);
}



.user a:is(:hover, :focus)::before {
    background: rgb(0, 255, 0);
    transform: skewY(6deg) scaleY(1.2);
    filter: brightness(0.8);
}


.user h3 {
    text-align: center;
}
.user .icon {
    aspect-ratio: 1;
    position: absolute;
    height: 100px;
    left: 50%;
    translate:-50% -50%;
    background-color: white;
    border-radius: 5000px;
    overflow: hidden;
    outline-offset: -1px;
    transition: 100ms;
    filter: drop-shadow(rgba(0, 0, 0, 0.5) 0 0 2px);
}
.user .icon h1 {
    position: absolute;
    top: 50%;
    left: 50%;
    padding: 0;
    margin: 0;
    translate: -50% -50%;
    font-size: 3rem;
}
</style>