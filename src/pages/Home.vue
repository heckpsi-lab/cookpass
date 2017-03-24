<template lang="pug">
.tab-bar-container
  md-theme(md-name="blue")
    md-toolbar.md-dense
      md-button.md-icon-button
        md-icon
          | fingerprint
      h2.md-title(style="flex: 1")
        | {{ $t('cookpass') }}
    .justify-container
      .home-container
        md-input-container(md-has-password)
          label(for="password")
            | {{ $t('password') }}
          md-input(type="password", v-model="password")
        md-input-container
          label(for="profile")
            | {{ $t('profile') }}
          md-select(v-model="profileSelected")
            div(v-for="(value, key) in profiles")
              md-subheader
                | {{ key }}
              md-option(v-for="profile in value", :value="profile.id", :key="profile.id")
                | {{ profile.account }}
        .cook-button
          md-button.md-fab.md-size-3x(@click.native="cook", :class="{ 'md-primary': progress >= 100 }")
            md-icon.md-size-3x(v-if="progress < 100")| restaurant
            md-icon.md-size-3x(v-if="progress >= 100")| done
          md-spinner(
            :md-size="192",
            :md-stroke="1.2",
            :md-progress="progress",
            v-if="progress != 0 && progress != 100"
          )
  md-dialog-alert(
    :md-title="$t('cooked')",
    :md-content="generated",
    @close="onClose",
    ref="dialog",
  )
  tab-bar(tab-selected="1")
</template>

<script>
import { mapGetters } from 'vuex';
import * as types from '@/store/types';
import TabBar from '@/components/TabBar';

const Worker = require('../worker/progress.worker');

export default {
  name: 'Home',
  components: {
    TabBar,
  },
  data() {
    return {
      progress: 0,
      password: '',
      generated: 'Hello World',
      profiles: {},
      profileSelected: null,
    };
  },
  methods: {
    cook() {
      const worker = new Worker();
      worker.postMessage(JSON.stringify({
        password: this.password,
        profile: this.$store.state.config.config[Number(this.profileSelected)],
      }));
      worker.onmessage = (event) => {
        const data = JSON.parse(event.data);
        if (data.event === 'progress') {
          this.progress = data.data;
        } else if (data.event === 'done') {
          this.progress = 100;
          this.generated = data.data;
          this.$refs.dialog.open();
        }
      };
    },
    onClose() {
      this.progress = 0;
    },
    ...mapGetters({
      getProfiles: types.GET_PROFILES,
    }),
  },
  mounted() {
    this.profiles = this.getProfiles();
  },
};
</script>

<style lang="stylus" scoped>
.cook-button
  width: 150px
  height: 150px
  margin: 80px auto 0 auto
  position: relative
  .md-fab
    margin: 0
    width: 150px
    height: 150px
    border-radius: 150px
  .md-spinner
    position: absolute
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)
.justify-container
  height: 496px
  display: flex
  align-items: center
  justify-content: center
.home-container
  margin: 0 40px 0 40px
  width: 100%
</style>
