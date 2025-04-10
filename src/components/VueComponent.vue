<script setup>
import { ref } from "vue";

const showText = ref(true);
</script>

<template>
  <div className="flex flex-col items-center py-24 flex-1 border">
    <button
      @click="showText = !showText"
      class="cursor-pointer bg-green-500 px-4 py-2 font-bold text-white uppercase hover:bg-green-700"
    >
      Click me!
    </button>

    <div v-if="showText" class="mt-10 text-2xl">
      This is a <span class="font-bold">Vue</span> component
    </div>
    <div v-else="showText" class="mt-10 text-2xl">Toggled! 🎉🎉🎉</div>
  </div>
</template>
