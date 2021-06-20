<template>
  <div class="home">
    <label for="good">
      <input type="checkbox" name="good" id="good" @click="checkAll" :checked="this.$store.state.checked">全选
    </label>
    <List/>
    <div class="total">总价:{{total}}元</div>
  </div>
</template>

<script>
import List from '../components/List'
import {mapState,mapMutations} from 'vuex'
export default {
  name: 'Home',
  components: {
    List
  },
  computed: {
    ...mapState({
      total: 'total'
    })
  },
  methods: {
    ...mapMutations({
      checkAll: 'checkAll'
    })
  }
}
</script>
<style scoped>
.home {
  width: 1000px;
  margin: auto;
}
.total {
  height: 50px;
  line-height: 50px;
  text-align: right;
  padding-right: 50px;
  background: #fff;
}
</style>
