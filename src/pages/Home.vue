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
            | {{ $t('password') }}
          md-input(type="password")
        md-input-container
          label(for="profile")
            | {{ $t('profile') }}
          md-select()
            md-subheader| QQ
            md-option(value="zh-cn")| 443539548
            md-option(value="zh-cn")| 443539548
            md-option(value="zh-cn")| 443539548
            md-subheader| 微博
            md-option(value="en")| dsh0416@gmail.com
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
      generated: 'Hello World',
    };
  },
  methods: {
    cook() {
      const worker = new Worker();
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
