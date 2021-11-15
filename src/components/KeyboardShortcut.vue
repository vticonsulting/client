<template>
  <section>
    <button @click="handleShortkey" v-shortkey.push="['shift', '?']" @shortkey="handleShortkey">
      <span class="shortcut-combo">
        <span class="shortcut">shift</span>
        <span class="shortcut-joiner">+</span>
        <span class="shortcut">?</span>
      </span>
    </button>
  </section>
</template>

<script>
import HelpSheet from '@/components/HelpSheet'

export default {
  created() {
    window.addEventListener('keydown', this.escapeListener)
  },
  // make sure you remove the listener when the component is no longer visible
  destroyed() {
    window.removeEventListener('keydown', this.escapeListener)
  },
  data: function() {
    return {
      isHelpActive: false,
      message: '',
      name: 'Name',
      show: false,
    }
  },
  methods: {
    handleShortkey() {
      this.show = !this.show

      this.$oruga.modal.open({
        parent: this,
        component: HelpSheet,
        custom: true,
        trapFocus: true,
      })

      console.log('...shortcut', this.show)
    },
    escapeListener(event) {
      if (event.key === 'Escape') {
        this.message = 'Escape has been pressed'
      }
    },
  },
}
</script>

<style>
.shortcut-combo {
  display: flex;
  order: 2;
}

.shortcut-pair {
  padding-bottom: 8px;
  margin-bottom: 8px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.shortcut-joiner {
  --text-opacity: 1;
  color: #737f8c;
  color: rgba(
    114.75000000000001,
    127.49999999999999,
    140.24999999999997,
    var(--text-opacity)
  );
  font-size: 13px;
  margin-left: 4px;
  margin-right: 4px;
}

.shortcut {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  border-radius: 3px;
  background: linear-gradient(-225deg, #d5dbe4, #f8f8f8);
  box-shadow: inset 0 -2px 0 0 #cdcde6, inset 0 0 1px 1px #fff,
    0 1px 2px 1px rgba(30, 35, 90, 0.4);
  color: #8d949e;
  min-width: 18px;
  height: 18px;
  margin: 0 0.25em;
  padding: 0 2px 2px;
}

.modal-card {
  display: flex;
  flex-direction: column;
  max-height: calc(100vh - 40px);
  overflow: hidden;
}
@media screen and (min-width: 769px) {
  .modal-card {
    margin: 0 auto;
    max-height: calc(100vh - 40px);
    width: 640px;
  }
}
.modal-card {
  margin: 0 20px;
  max-height: calc(100vh - 160px);
  overflow: auto;
  position: relative;
  width: 100%;
}
.modal-card-foot,
.modal-card-head {
  align-items: center;
  background-color: #f5f5f5;
  display: flex;
  flex-shrink: 0;
  justify-content: flex-start;
  padding: 20px;
  position: relative;
}
.modal-card-head {
  border-bottom: 1px solid #dbdbdb;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}
.modal-card-body {
  -webkit-overflow-scrolling: touch;
  background-color: #fff;
  flex-grow: 1;
  flex-shrink: 1;
  overflow: auto;
  padding: 20px;
}
.modal-card-foot {
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-top: 1px solid #dbdbdb;
}
.modal-card-title {
  color: #363636;
  flex-grow: 1;
  flex-shrink: 0;
  font-size: 1.5rem;
  line-height: 1;
  margin: 0;
}
.modal-card-foot .o-button:not(:last-child) {
  margin-right: 0.5em;
}
</style>
