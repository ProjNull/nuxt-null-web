<script setup>
const {
  cookiesEnabled,
  cookiesEnabledIds,
  isConsentGiven,
  isModalActive,
  moduleOptions
} = useCookieControl()

// example: react to a cookie being accepted
watch(
  () => cookiesEnabledIds.value,
  (current, previous) => {
    if (
      (!previous?.includes('google-analytics') &&
        current?.includes('google-analytics'))
    ) {
      // cookie with id `google-analytics` got added
      window.location.reload() // placeholder for your custom change handler
    }
  },
  { deep: true }
)
</script>
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
    import "~/assets/css/cookies.css"
</script>
