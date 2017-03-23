<template lang="pug">
.tab-bar-container
  md-theme(md-name="blue")
    md-toolbar.md-dense
      md-button.md-icon-button
        md-icon| fingerprint
      h2.md-title(style="flex: 1")| {{ $t('cookpass') }}
    .justify-container
      .home-container
        md-input-container(md-has-password)
          label(for="password")
            | Password
          md-input(type="password")
        md-input-container
          label(for="profile")
            | Profile
          md-select()
            md-subheader| QQ
            md-option(value="zh-cn")| 443539548
            md-option(value="zh-cn")| 443539548
            md-option(value="zh-cn")| 443539548
            md-subheader| 微博
            md-option(value="en")| dsh0416@gmail.com
        .cook-button
          md-button.md-fab.md-size-3x(@click.native="cook")
            md-icon.md-size-3x(v-if="progress != 100")| build
            md-icon.md-size-3x(v-if="progress == 100")| done
          md-spinner(
            :md-size="192",
            :md-stroke="1.2",
            :md-progress="progress",
            v-if="progress != 0 && progress != 100"
          )
  tab-bar(tab-selected="1")
</template>

<script>
import TabBar from '@/components/TabBar';

export default {
  name: 'Home',
  components: {
    TabBar,
  },
  data() {
    return {
      progress: 0,
    };
  },
  methods: {
    cook() {
      this.progress += 10;
    },
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
