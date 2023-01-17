<template>
    <button class="button" @click="clicado" :disabled="desabilitado">
      <span class="icon">
        <i :class="icone"></i>
      </span>
      <span>{{ texto }}</span>
    </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    name: 'BBotao',
    directives: {
      tooltip: (el, binding) => {
        alert(binding.value.tooltip)
      }
    },
    emits: ['clicado'],
    props: {
      desabilitado: {
        type: Boolean,
        default: false,
      },
      texto: {
        type: String,
        default: '',
      },
      icone: {
        type: String,
        default: ''
      }
    },
    methods: {
      clicado(): void {
        this.$emit('clicado')
      }
    }
})
</script>