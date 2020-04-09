<template>
    <header class="nav">
        <nav>
            <router-link to="/">One</router-link> | 
            <router-link to="/two">Two</router-link>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'PageSwitcher'
}
</script>

<style scoped lang="scss">
nav {
  position: sticky;
  top: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  width: 160px;
  height: 50px;
  left: 50vw;
  transform: translate(-50%, 20px);
  border-radius: 25px;

  a {
    display: inline-block;
    margin: 0 0.5em;
    font-weight: bold;
    color: hsl(340, 82%, 52%);
    text-decoration: none;

    &:not(.router-link-exact-active) {
      text-decoration: underline;
    }

    &:not(.router-link-exact-active):hover {
      color: hsla(340, 82%, 52%, 0.7);
      text-decoration: none;
    }

    &.router-link-exact-active {
      color: hsla(210, 29%, 24%, 0.3);
      cursor: default;
    }
  }
}
</style>
