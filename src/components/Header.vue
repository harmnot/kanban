<template lang="html">
  <div class="main-header">
    <h1>KanVan</h1>
    <div class="sub-main">
      <input type="text" placeholder="input something" v-model="taskname" />
      <input type="text" placeholder="your name" v-model="by" />
      <button class="button-three" type="submit" @click="addItem">Click Me</button>
    </div>
  </div>
</template>

<script>
import database from '../assets/config';
export default {
  data() {
    return {
      taskname: null,
      by: null,
    };
  },
  methods: {
    addItem() {
      database.ref('/').push({
        title: this.taskname,
        by: this.by,
        status: 'Pre-Log',
      });
      this.taskname = '';
    },
  },
};
</script>

<style lang="stylus" scoped>
@import url('https://rsms.me/inter/inter.css')

html,
body
  font-family 'Inter', sans-serif
  margin 0
  padding 0
  overflow-x hidden

h1,h2,h3
  padding 0
  margin 0
.main-header h1
  color rgb(116, 198, 228)
  margin-left auto
  text-align center
  padding-top 1.5%
  font-size 35px
.main-header i
  font-size 20px
  color #4684f6
  text-align center
  margin-left auto
  margin-right auto
  display block
  margin-top auto
  cursor pointer

.main-header input
  display block
  margin-left auto
  margin-right auto
  text-align center

input
  height 30px
  width 400px
  margin-bottom 20px
  margin-top 20px
  border-radius 5px

.sub-main
  align-items center

  /*Button Three*/
  .button-three {
      position: relative;
      background-color: rgb(98, 166, 210);
      border: none;
      padding: 20px;
      width: 200px;
      text-align: center;
      -webkit-transition-duration: 0.4s; /* Safari */
      transition-duration: 0.4s;
      text-decoration: none;
      overflow: hidden;
  }

  .button-three:hover
     background #fff
     box-shadow 0px 2px 10px 5px rgb(97, 155, 232)
     color #000


  .button-three:after
      content  ""
      background: #f1c40f
      display  block;
      position  absolute
      padding-top  300%
      padding-left  350%
      margin-left  -20px !important
      margin-top  -120%
      opacity  0
      transition  all 0.8s


  .button-three:active:after
      padding  0
      margin  0
      opacity  1
      transition  0s
</style>
