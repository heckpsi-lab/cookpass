<template lang="pug">
.tab-bar-container
  | Hello World
  tab-bar(tab-selected="1")
</template>

<script>
import TabBar from '@/components/TabBar';

export default {
  components: {
    TabBar,
  },
};
</script>

<style lang="stylus">
</style>
