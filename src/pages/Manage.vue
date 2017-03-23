<template lang="pug">
.tab-bar-container
  md-theme(md-name="teal")
    md-toolbar.md-dense
      md-button.md-icon-button
        md-icon| dashboard
      h2.md-title(style="flex: 1")| {{ $t('manage') }}
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
