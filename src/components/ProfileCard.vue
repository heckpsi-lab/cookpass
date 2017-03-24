<template lang="pug">
md-card.profile-card(md-with-hover)
  md-card-header
    .md-title
      | {{ software }}
    .md-subhead
      | {{ account }}
  md-card-content
    | {{ $t('engine') }}: {{ engine }} <br>
    | {{ $t('length') }}: {{ length }} <br>
    | {{ $t('strength') }}: {{ strength }}
  md-card-actions
    md-button(:href="'#/profile/'+id")
      | {{ $t('edit') }}
    md-button(@click.native="removeCard()")
      | {{ $t('delete') }}
  md-dialog-confirm(
    :md-title="$t('confirmAlert')",
    :md-content="$t('areYouSureToDelete')",
    ref="deleteAlert",
    :md-ok-text="$t('yep')",
    :md-cancel-text="$t('nope')",
    @close="deleteConfirm",
  )
</template>

<script>
import { mapMutations } from 'vuex';
import * as types from '@/store/types';

export default {
  props: {
    id: {
      required: true,
      type: Number,
    },
    software: {
      required: true,
      type: String,
      default: 'Test',
    },
    account: {
      required: true,
      type: String,
      default: '123456',
    },
    engine: {
      required: true,
      type: String,
      default: 'PassNexuser',
    },
    length: {
      required: true,
      type: Number,
      default: 12,
    },
    strength: {
      required: true,
      type: Number,
      default: 10000,
    },
  },
  data() {
    return {

    };
  },
  methods: {
    removeCard() {
      this.$refs.deleteAlert.open();
    },
    deleteConfirm(type) {
      if (type === 'ok') {
        this.deleteConfig(this.id);
        this.$emit('refresh');
      }
    },
    ...mapMutations({
      deleteConfig: types.DELETE_CONFIG,
    }),
  },
};
</script>

<style lang="stylus" scoped>
.profile-card
  margin: 0 0 20px 0
</style>
