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


<script>
    import "~/assets/css/main.css"
    import "~/assets/css/navbar.css"
    import "~/assets/css/textstyles.css"
    import "~/assets/css/sections.css"
</script>
