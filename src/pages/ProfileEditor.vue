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
        | Software
      md-input(v-model="software", type="text", required)
    md-input-container
      label
        | Account
      md-input(v-model="account", type="text", required)
    md-input-container
      label
        | Encrypt engine
      md-select(v-model="engine", required)
        md-option(value="cook")
          | Cook Engine (Recommended)
        md-option(value="passnexuser")
          | PassNexuser Engine (Deprecated)
    md-input-container
      label
        | Password Length (8-20)
      md-input(v-model="length", type="Number", required)
    md-input-container
      label
        | Encrypt Strength (1-10000)
      md-input(v-model="strength", type="Number", required)
    md-button.md-raised.md-primary#save(@click.native="save()")
      | {{ $t('save') }}
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
    };
  },
  methods: {
    save() {
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
