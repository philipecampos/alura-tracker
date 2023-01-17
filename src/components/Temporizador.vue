<template>
  <div class="is-flex is-align-items-center is-justify-content-space-between">
    <Cronometro :tempoEmSegundos="tempoEmSegundos" />
    <!-- <button class="button" @click="iniciar" :disabled="cronometroRodando">
      <span class="icon">
        <i class="fa-solid fa-play"></i>
      </span>
      <span>play</span>
    </button> -->
    <!-- <button class="button" @click="finalizar" :disabled="!cronometroRodando">
      <span class="icon">
        <i class="fas fa-stop"></i>
      </span>
      <span>stop</span>
    </button> -->
    <b-botao
      icone="fas fa-play"
      texto="Play"
      :desabilitado="cronometroRodando"
      @clicado="iniciar"
    ></b-botao>
    <b-botao
      icone="fas fa-stop"
      texto="Stop"
      :desabilitado="!cronometroRodando"
      @clicado="finalizar"></b-botao>    
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Cronometro from "@/components/Cronometro.vue";
import BBotao from "@/components/BBotao.vue";

export default defineComponent({
  name: "Temporizador",
  emits: ["aoTemporizadorFinalizado"],
  components: {
    Cronometro,
    BBotao,
  },
  data() {
    return {
      tempoEmSegundos: 0,
      cronometro: 0,
      cronometroRodando: false,
    };
  },
  methods: {
    iniciar() {
      this.cronometroRodando = true;
      this.cronometro = setInterval(() => {
        this.tempoEmSegundos += 1;
      }, 1000);
    },
    finalizar() {
      this.cronometroRodando = false;
      clearInterval(this.cronometro);
      this.$emit("aoTemporizadorFinalizado", this.tempoEmSegundos);
      this.tempoEmSegundos = 0;
    },
  },
});
</script>
