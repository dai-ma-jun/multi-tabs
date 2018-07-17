<template>
  <div class="not-found-box">
    {{msg}}
  </div>
</template>

<script>
export default {
  name: 'Prizes',
  data () {
    return {
      msg: '500'
    };
  },
  methods: {}
};
</script>
<style scoped>
  .not-found-box {
    text-align: center;
    font-size: 100px;
    margin-top: 100px;
    font-style: italic;
    letter-spacing: 3px;
  }
</style>
