<template lang="pug">
.tab-bar-container
  | About
  tab-bar(tab-selected="4")
</template>

<script>
import TabBar from '@/components/TabBar';

export default {
  name: 'About',
  components: {
    TabBar,
  },
};
</script>

<style lang="stylus">
</style>
