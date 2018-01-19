<template>
	<div class="czb__input" :class="{'is-autowidth': autowidth}">
    <input class="czb__input__default" v-if="type !== 'textarea'" :placeholder="placeholder" :readonly="readonly || type === 'date'" :disabled="disabled" :autofocus="autofocus" :name="name" :required="required" type="text" :value="input" @input="updateVal">
    <textarea class="czb__input__textarea" :class="{'is-hascols': cols}" :placeholder="placeholder" :readonly="readonly || type === 'date'" :disabled="disabled" :autofocus="autofocus" :name="name" :required="required" :cols="cols"  :rows="rows" v-if="type === 'textarea'" :value="input" @input="updateVal"></textarea>
    <i class="czbfont iczb-clear czb__input__icon" @click="clearInput" v-show="type !== 'textarea' && clear && input"></i>
  </div>
</template>
<script>
export default {
  name: 'czb-input',
  props: {
    placeholder: {
      type: String,
      default: ''
    },
    autofocus: {
      type: Boolean,
      default: false
    },
    name: {
      type: Boolean,
      default: false
    },
    required: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    cols: {
      type: Number,
      default: null
    },
    rows: {
      type: Number,
      default: null
    },
    clear: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: ''
    },
    autowidth: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      input: ''
    }
  },
  methods: {
    updateVal (e) {
      this.input = e.target.value
      this.$emit('input', this.input)
    },
    clearInput () {
      this.input = ''
      this.$emit('input', this.input)
    },
    chooseDate () {
      console.log(2)
    }
  }
}
</script>
