<template lang="pug">
.tab-bar-container
  md-theme(md-name="blue")
    md-toolbar(class="md-dense")
      md-button(class="md-icon-button")
        md-icon| fingerprint
      h2(class="md-title" style="flex: 1")| {{ $t('cookpass') }}
  tab-bar(tab-selected="1")
</template>

<script>
import TabBar from '@/components/TabBar';

export default {
  name: 'Home',
  components: {
    TabBar,
  },
};
</script>

<style lang="stylus">
</style>
