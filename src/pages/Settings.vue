<template lang="pug">
.tab-bar-container
  | Settings
  tab-bar(tab-selected="3")
</template>

<script>
import TabBar from '@/components/TabBar';

export default {
  name: 'Settings',
  components: {
    TabBar,
  },
};
</script>

<style lang="stylus">
</style>
