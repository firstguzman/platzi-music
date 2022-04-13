<template>
  <b-container>
    <b-row align-h="center">
      <b-col cols="5">
        <b-toast
          id="notification"
          title="Notification"
          v-model="showAlert"
          static
          no-auto-hide
          :variant="notificationType"
        >
          <slot name="body"> Algo ha salido mal. </slot>
        </b-toast>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  props: {
    // eslint-disable-next-line vue/require-prop-type-constructor
    notificationType: '',
  },

  data() {
    return {
      showAlert: true,
    }
  },
}
</script>

<style></style>
