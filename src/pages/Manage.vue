<template lang="pug">
.tab-bar-container
  | Manage
  tab-bar(tab-selected="2")
</template>

<script>
import TabBar from '@/components/TabBar';

export default {
  name: 'Manage',
  components: {
    TabBar,
  },
};
</script>

<style lang="stylus">
</style>
