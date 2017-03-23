<template lang="pug">
.tab-bar-container
  md-theme(md-name="teal")
    md-toolbar.md-dense
      md-button.md-icon-button
        md-icon| dashboard
      h2.md-title(style="flex: 1")| {{ $t('manage') }}
    .content-container
      md-button.md-raised.md-primary#add-profile
        | Add New Profile
      md-card(md-with-hover)
        md-card-header
          .md-title
            | QQ
          .md-subhead
            | 443539548
        md-card-content
          | Engine: PassNexuser <br>
          | Length: 12 <br>
          | Strength: 10000
        md-card-actions
          md-button| Edit
          md-button| Delete
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
#add-profile
  margin: 0 auto 20px auto
  width: 100%
</style>
