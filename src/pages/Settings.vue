<template lang="pug">
.tab-bar-container
  md-theme(md-name="brown")
    md-toolbar(class="md-dense")
      md-button(class="md-icon-button")
        md-icon| settings
      h2(class="md-title" style="flex: 1")| {{ $t('settings') }}
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
