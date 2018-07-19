<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul>
      <li>
        <router-link :to="{path: '/403'}">403</router-link>
      </li>
      <li>
        <router-link :to="{path: '/404'}">404</router-link>
      </li>
      <li>
        <router-link :to="{path: '/500'}">500</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import Tab from 'src/decorators/Tab';
export default {
  @Tab('世界')
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome To Vue'
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
