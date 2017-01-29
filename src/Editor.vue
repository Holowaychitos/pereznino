<script>
export default {
  name: 'pereznino-editor',
  props: ['data'],
  mounted() {
    window.addEventListener("message", this.onIframeMessage, false);
  },
  methods: {
    onIframeMessage(evt) {
      if (evt.data.type === 'READY') {
        this.updateIframe(this.data)
      } else {
        if (evt.data.type === 'UPDATE') {
          this.$emit('input', JSON.parse(evt.data.payload))
        }
      }
    },
    updateIframe(data) {
      console.info(this.$el)
      this.$el.contentWindow.postMessage({
        type: 'DATA',
        payload: data
      }, '*')
    }
  },
  watch: {
    data() {
      console.log('DATA UPDATED')
    }
  }
}
</script>

<template>
  <iframe src="http://localhost:8005/samples/flowchart.html"></iframe>
</template>

<style scoped>
  iframe {
    width: 100%;
    height: 100%;
    border: 0;
  }
</style>
