<template lang="pug">
.tab-bar-container
  md-theme(md-name="indigo")
    md-toolbar.md-dense
      md-button.md-icon-button
        md-icon| stars
      h2.md-title(style="flex: 1")| {{ $t('about') }}
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

<style lang="stylus" scoped>
</style>
