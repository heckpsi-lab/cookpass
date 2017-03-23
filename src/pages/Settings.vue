<template lang="pug">
.tab-bar-container
  md-theme(md-name="brown")
    md-toolbar.md-dense
      md-button.md-icon-button
        md-icon| settings
      h2.md-title(style="flex: 1")| {{ $t('settings') }}
  .content-container
    md-input-container
      label(for="language")
        | Language
      md-select(v-model="lang" v-on:change="changeLanguage()")
        md-option(value="zh-cn")| 简体中文
        md-option(value="en")| English
  tab-bar(tab-selected="3")
</template>

<script>
import { mapMutations } from 'vuex';
import TabBar from '@/components/TabBar';
import store from '../store';
import * as types from '../store/types';

export default {
  name: 'Settings',
  components: {
    TabBar,
  },
  data() {
    return {
      lang: store.state.preference.lang,
    };
  },
  methods: {
    changeLanguage() {
      this.setLang(this.lang);
      this.$i18n.locale = this.lang;
    },
    ...mapMutations({
      setLang: types.SET_LANG,
    }),
  },
};
</script>

<style lang="stylus">
</style>
