<template lang="pug">
.tab-bar
  md-theme(:md-name="theme")
    md-bottom-bar(md-shift)
      md-bottom-bar-item(
        @click.native="updateTheme(1)",
        md-icon="fingerprint",
        href="#/",
        :md-active="tabSelected == 1",
      )| {{ $t("home") }}
      md-bottom-bar-item(
        @click.native="updateTheme(2)",
        md-icon="dashboard",
        href="#/manage",
        :md-active="tabSelected == 2",
      )| {{ $t("manage") }}
      md-bottom-bar-item(
        @click.native="updateTheme(3)",
        md-icon="settings",
        href="#/settings",
        :md-active="tabSelected == 3",
      )| {{ $t("settings") }}
      md-bottom-bar-item(
        @click.native="updateTheme(4)",
        md-icon="stars",
        href="#/about",
        :md-active="tabSelected == 4",
      )| {{ $t("about") }}
</template>

<script>
export default {
  name: 'TabBar',
  props: {
    tabSelected: {
      default: 0,
    },
  },
  data() {
    return {
      theme: 'blue',
      themes: ['blue', 'blue', 'teal', 'brown', 'indigo'],
    };
  },
  methods: {
    updateTheme(option) {
      this.theme = this.themes[option];
    },
  },
  mounted() {
    this.updateTheme(this.tabSelected);
  },
};
</script>

<style lang="stylus">
.tab-bar
  position: absolute
  width: 100%
  bottom: 0
  z-index: 100
</style>
