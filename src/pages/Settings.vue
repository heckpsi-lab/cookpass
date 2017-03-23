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
      md-select(v-model="lang", v-on:change="changeLanguage()")
        md-option(value="zh-cn")| 简体中文
        md-option(value="en")| English
    md-input-container
      label(for="computation_mode")
        | {{ $t('computation_mode') }}
      md-select(v-model="mode")
        md-option(value="webworker")| WebWorker
    md-button.md-raised.md-warn#erase(@click.native="wipe()")
      | {{ $t('wipe_data') }}
  tab-bar(tab-selected="3")
</template>

<script>
import { mapMutations } from 'vuex';
import TabBar from '@/components/TabBar';
import * as types from '../store/types';

export default {
  name: 'Settings',
  components: {
    TabBar,
  },
  data() {
    return {
      lang: this.$store.state.preference.lang,
      mode: 'webworker',
    };
  },
  methods: {
    changeLanguage() {
      this.setLang(this.lang);
      this.$i18n.locale = this.lang;
    },
    wipe() {
      this.wipeLang();
      this.lang = this.$store.state.preference.lang;
      this.$i18n.locale = this.lang;
    },
    ...mapMutations({
      setLang: types.SET_LANG,
      wipeLang: types.WIPE_LANG,
    }),
  },
};
</script>

<style lang="stylus" scoped>
#erase
  margin: 0
  width: 100%
</style>
