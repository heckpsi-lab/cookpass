<template lang="pug">
md-theme(md-name="blue")
  md-toolbar.md-dense
    md-button.md-icon-button
      md-icon
        | create
    h2.md-title(style="flex: 1")
      | {{ $t('editProfile') }}
  .content-container
    md-input-container
      label
        | {{ $t('software') }}
      md-input(v-model="software", type="text", required)
    md-input-container
      label
        | {{ $t('account') }}
      md-input(v-model="account", type="text", required)
    md-input-container
      label
        | {{ $t('engine') }}
      md-select(v-model="engine", required)
        md-option(value="cook")
          | {{ $t('cook') }}
        md-option(value="passnexuser")
          | {{ $t('passnexuser') }}
    md-input-container
      label
        | {{ $t('length') }}
      md-input(v-model="length", type="Number", required)
    md-input-container
      label
        | {{ $t('strength') }}
      md-input(v-model="strength", type="Number", required)
    md-button.md-raised.md-primary#save(@click.native="save()")
      | {{ $t('save') }}
  md-dialog-alert(
    :md-title="$t('validation')",
    :md-content-html="errorMessage",
    ref="dialog",
  )
</template>

<script>
import { mapMutations } from 'vuex';
import * as types from '@/store/types';

export default {
  data() {
    return {
      id: -1,
      software: '',
      account: '',
      engine: '',
      length: null,
      strength: null,
      errorMessage: '',
    };
  },
  methods: {
    save() {
      // Validate first
      this.errorMessage = '';
      if (this.software === '') {
        this.errorMessage += this.$t('softwareEmpty');
        this.errorMessage += '<br>';
      }
      if (this.account === '') {
        this.errorMessage += this.$t('accountEmpty');
        this.errorMessage += '<br>';
      }
      if (this.engine === '') {
        this.errorMessage += this.$t('engineEmpty');
        this.errorMessage += '<br>';
      }
      if (Number(this.length) < 6) {
        this.errorMessage += this.$t('lengthTooShort');
        this.errorMessage += '<br>';
      }
      if (Number(this.length) > 16) {
        this.errorMessage += this.$t('lengthTooLong');
        this.errorMessage += '<br>';
      }
      if (Number(this.strength) < 10) {
        this.errorMessage += this.$t('strengthTooShort');
        this.errorMessage += '<br>';
      }
      if (Number(this.strength) > 100000) {
        this.errorMessage += this.$t('strengthTooLong');
        this.errorMessage += '<br>';
      }
      if (this.errorMessage !== '') {
        this.$refs.dialog.open();
        return;
      }
      if (this.id === -1) {
        this.addConfig({
          software: this.software,
          account: this.account,
          engine: this.engine,
          length: Number(this.length),
          strength: Number(this.strength),
        });
      } else {
        this.editConfig({
          id: this.id,
          data: {
            software: this.software,
            account: this.account,
            engine: this.engine,
            length: Number(this.length),
            strength: Number(this.strength),
          },
        });
      }
      this.$router.push('/manage');
    },
    ...mapMutations({
      addConfig: types.ADD_CONFIG,
      editConfig: types.EDIT_CONFIG,
    }),
  },
  mounted() {
    this.id = Number(this.$route.params.id);
    if (this.$route.params.id >= 0) {
      // Edit mode
      const data = this.$store.state.config.config[this.id];
      this.software = data.software;
      this.account = data.account;
      this.engine = data.engine;
      this.length = data.length;
      this.strength = data.strength;
    }
  },
};
</script>

<style lang="stylus">
#save
  width: 100%
  margin: 0 auto
</style>
