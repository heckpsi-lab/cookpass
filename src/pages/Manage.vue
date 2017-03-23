<template lang="pug">
.tab-bar-container
  md-theme(md-name="teal")
    md-toolbar.md-dense
      md-button.md-icon-button
        md-icon| dashboard
      h2.md-title(style="flex: 1")| {{ $t('manage') }}
    .content-container
      profile-card(
        software="QQ",
        account="12345",
        engine="cook",
        :length="10",
        :strength="10000",
      )
    md-button.md-fab
      md-icon| add
  tab-bar(tab-selected="2")
</template>

<script>
import TabBar from '@/components/TabBar';
import ProfileCard from '@/components/ProfileCard';

export default {
  name: 'Manage',
  components: {
    TabBar,
    ProfileCard,
  },
};
</script>

<style lang="stylus" scoped>
.md-fab
  position: absolute
  bottom: 64px
  right: 8px
  z-index: 700
</style>
