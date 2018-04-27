<template>
	<div class="czb__input" :class="{'is-autowidth': autowidth}">
    <input class="czb__input__default" v-if="type !== 'textarea' && type !== 'password'" :placeholder="placeholder" :readonly="readonly" :disabled="disabled" :autofocus="autofocus" :name="name" :required="required" type="text" :value="value" @input="updateVal">
    <input class="czb__input__default" v-if="type === 'password'" :placeholder="placeholder" :autofocus="autofocus" :name="name" :required="required" type="password" :value="value" @input="updateVal">
    <textarea class="czb__input__textarea" :class="{'is-hascols': cols}" :placeholder="placeholder" :readonly="readonly" :disabled="disabled" :autofocus="autofocus" :name="name" :required="required" :cols="cols"  :rows="rows" v-if="type === 'textarea'" :value="value" @input="updateVal"></textarea>
    <i class="czbfont iczb-clear czb__input__icon" @click="clearInput" v-show="type !== 'textarea' && clear && value"></i>
  </div>
</template>
<script>
export default {
  name: 'czb-input',
  props: {
    value: {
      type: [String, Number],
      default: ''
    },
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
      default: 'text'
    },
    autowidth: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    updateVal (e) {
      this.$emit('input', e.target.value)
    },
    clearInput () {
      this.$emit('input', '')
    }
  }
}
</script>
