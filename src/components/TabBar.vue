<template lang="pug">
.tab-bar
  md-theme(:md-name="theme")
    md-bottom-bar(md-shift)
      md-bottom-bar-item(
        @click.native="updateTheme(1)",
        md-iconset="fa fa-2x fa-home",
        href="#/",
        :md-active="tabSelected == 1",
      )| Home
      md-bottom-bar-item(
        @click.native="updateTheme(2)",
        md-iconset="fa fa-2x fa-pencil",
        href="#/manage",
        :md-active="tabSelected == 2",
      )| Manage
      md-bottom-bar-item(
        @click.native="updateTheme(3)",
        md-iconset="fa fa-2x fa-cog",
        href="#/settings",
        :md-active="tabSelected == 3",
      )| Settings
      md-bottom-bar-item(
        @click.native="updateTheme(4)",
        md-iconset="fa fa-2x fa-rocket",
        href="#/about",
        :md-active="tabSelected == 4",
      )| About
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
</style>
