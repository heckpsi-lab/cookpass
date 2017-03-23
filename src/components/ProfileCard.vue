<template lang="pug">
md-card.profile-card(md-with-hover)
  md-card-header
    .md-title
      | {{ software }}
    .md-subhead
      | {{ account }}
  md-card-content
    | Engine: {{ engine }} <br>
    | Length: {{ length }} <br>
    | Strength: {{ strength }}
  md-card-actions
    md-button| Edit
    md-button| Delete
</template>

<script>
export default {
  props: {
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
};
</script>

<style lang="stylus" scoped>
.profile-card
  margin: 0 0 20px 0
</style>
