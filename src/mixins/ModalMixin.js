import MessageModal from "../components/MessageModal.vue"

export default {
  components: {
    MessageModal
  },
  data() {
    return {
      activeModal: false
    }
  },
  methods: {
    showModal() {
      this.activeModal = true
    },
    hideModal() {
      this.activeModal = false
    },
  }
}