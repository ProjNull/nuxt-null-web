<template>
  <div>
    <NavBar brand="{NULL}">
      <NavButton href="/" text="Home" insidelink="true"/>
      <NavButton href="./about" text="About" insidelink="true"/>
    </NavBar>
    <div class="container">
      <NuxtPage/>
    </div>

    <Footer>

    </Footer>
   
  </div>
</template>

<style scoped>
 .container {
  max-width: 70rem;
  margin-inline: auto;
  padding-inline: 1rem;
 }
  
</style>
