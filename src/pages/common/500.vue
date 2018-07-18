<template>
  <div class="not-found-box">
    {{msg}}
    <div>
      <input placeholder="输入内容切换后不丢失代表alive正常" style="line-height: 32px;height: 40px;border: 1px solid #ccc;border-radius: 5px;width: 100%;"/>
    </div>
  </div>
</template>

<script>
import Tab from '../../decorators/Tab';

export default {
  // @Tab 这样的话，tab名字和当前组件名一致
  @Tab
  name: 'view-500',
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
