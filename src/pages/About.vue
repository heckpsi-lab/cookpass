<template lang="pug">
.tab-bar-container
  md-theme(md-name="indigo")
    md-toolbar.md-dense
      md-button.md-icon-button
        md-icon
          | stars
      h2.md-title(style="flex: 1")
        | {{ $t('about') }}
    .justify-container
      .about-container
        div
          img#logo(src="/static/img/heckpsi.png")
        p
          | Made by HeckPsi Lab with ❤️
        p
          a(href="https://github.com/heckpsi-lab/cookpass")
            | GitHub 
          | | v0.1.1 alpha
        
  tab-bar(tab-selected="4")
</template>

<script>
import TabBar from '@/components/TabBar';

export default {
  name: 'About',
  components: {
    TabBar,
  },
};
</script>

<style lang="stylus" scoped>
.justify-container
  height: 496px
  display: flex
  align-items: center
  justify-content: center
.about-container
  margin: 0 40px 0 40px
  width: 100%
  text-align: center
#logo
  width: 120px
  height: 100px
</style>
