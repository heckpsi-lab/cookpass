<template lang="pug">
.tab-bar-container
  md-theme(md-name="teal")
    md-toolbar.md-dense
      md-button.md-icon-button
        md-icon| dashboard
      h2.md-title(style="flex: 1")| {{ $t('manage') }}
    .content-container
      div(v-for="(value, key) in profiles")
        profile-card(
          v-on:refresh="refresh()"
          v-for="profile in value",
          :key="profile.id",
          :id="profile.id",
          :software="profile.software",
          :account="profile.account",
          :engine="profile.engine",
          :length="profile.length",
          :strength="profile.strength",
        )
    md-button.md-fab(href="#/profile/-1")
      md-icon| add
  tab-bar(tab-selected="2")
</template>

<script>
import { mapGetters } from 'vuex';
import * as types from '@/store/types';
import TabBar from '@/components/TabBar';
import ProfileCard from '@/components/ProfileCard';

export default {
  name: 'Manage',
  components: {
    TabBar,
    ProfileCard,
  },
  data() {
    return {
      profiles: {},
    };
  },
  methods: {
    refresh() {
      this.profiles = this.getProfiles();
    },
    ...mapGetters({
      getProfiles: types.GET_PROFILES,
    }),
  },
  mounted() {
    this.refresh();
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
