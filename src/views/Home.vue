<template>
  <div class="home">
    <Header> </Header>
    <div class="container">
      <div class="container-card">
        <KanbanCard v-for="(data, index) in taskLists" :key="index" :data="data"></KanbanCard>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';
import Header from '@/components/Header.vue';
import KanbanCard from '@/components/Kanban.vue';
import database from '../assets/config';

const taskData = [
  {
    name: 'Pre-Log',
    tasks: [],
  },
  {
    name: 'To-Do',
    tasks: [],
  },
  {
    name: 'On-Going',
    tasks: [],
  },
  {
    name: 'Finished',
    tasks: [],
  },
];

const leadsRef = database.ref('/');
leadsRef.on('value', (snapshot) => {
  taskData[0].tasks = [];
  taskData[1].tasks = [];
  taskData[2].tasks = [];
  taskData[3].tasks = [];
  snapshot.forEach((childSnapshot) => {
    if (childSnapshot.val().status === 'Pre-Log') {
      const obj = childSnapshot.val();
      obj.id = childSnapshot.key;
      taskData[0].tasks.push(obj);
    } else if (childSnapshot.val().status === 'To-Do') {
      const obj = childSnapshot.val();
      obj.id = childSnapshot.key;
      taskData[1].tasks.push(obj);
    } else if (childSnapshot.val().status === 'On-Going') {
      const obj = childSnapshot.val();
      obj.id = childSnapshot.key;
      taskData[2].tasks.push(obj);
    } else {
      const obj = childSnapshot.val();
      obj.id = childSnapshot.key;
      taskData[3].tasks.push(obj);
    }
  });
});

export default {
  name: 'home',
  components: {
    Header,
    KanbanCard,
  },
  data() {
    return {
      taskLists: taskData,
    };
  },
  methods: {},
  created() {},
  mounted() {},
};
</script>
<style lang="stylus" scoped>
.container-card
  margin-top 30px
  padding-top 5%
  display grid
  grid-template-columns 1fr 1fr 1fr 1fr
  margin-left auto
  margin-right auto
  text-align center
  width 90%
  grid-gap 20px

.container
  background-color #f6f7f9
  width 100%
  min-height 675px

@media only screen and (max-width: 800px)
  .container-card
    display block
</style>
