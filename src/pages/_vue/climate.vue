<template>
  <div class="flex flex-col-reverse md:flex-row py-2 md:py-4 justify-center">
    <div class="flex flex-col">
      <!-- Scenario -->
      <div class="flex flex-col items-center space-y-2 px-6">
        <h3 class="text-center text-2xl font-semibold mt-4 mb-2">Scenario</h3>
        <RowGroupBtns v-model:activeItem="$activeScenario" :items="scenarios" class="text-xs" />
      </div>
      <!-- Variables -->
      <div class="flex flex-col items-center space-y-2 px-6 min-w-max w-2/5 md:w-full mx-auto">
        <h3 class="text-center text-2xl font-semibold mt-4 mb-2">Variable</h3>
        <button
          v-for="climVar in variables"
          :key="climVar.val"
          :class="
            climVar.val === $activeVariable.val
              ? 'bg-skin-button-active text-skin-button-active'
              : 'cursor-pointer bg-skin-button text-skin-button hover:bg-skin-button-accent hover:text-skin-button-accent'
          "
          @click.prevent="setActiveVariable(climVar)"
          class="w-40 flex justify-center text-center font-bold py-2 px-4 rounded"
          type="button"
        >
          {{ climVar.text }}
        </button>
      </div>
    </div>
    <div class="flex flex-col items-center gap-2 w-full">
      <h2 class="text-center font-semibold text-2xl md:text-3xl">Climate Anomaly</h2>
      <Range
        v-model.number="$activeDecade"
        :ticks="decades.map((d) => ({ val: d[0], text: `${d[0]}` }))"
        :step="10"
        :can-play="true"
        class="max-w-lg w-full md:w-9/12 scale-[.8]"
        @next="handleNext"
      />
      <div class="max-w-lg">
        <Transition name="fade" mode="out-in">
          <img
            :key="`${$activeScenario.val}.${$activeVariable.val}`"
            class="shadow-md rounded-2xl"
            :src="$activeImage"
          />
        </Transition>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useStore, useVModel } from '@nanostores/vue'

  import {
    activeDecade,
    activeImage,
    activeScenario,
    activeVariable,
    decades,
    scenarios,
    setActiveDecade,
    setActiveVariable,
    variables,
  } from '@/stores/climate'

  const $activeScenario = useVModel(activeScenario)
  const $activeDecade = useVModel(activeDecade)
  const $activeVariable = useStore(activeVariable)
  const $activeImage = useStore(activeImage)

  const handleNext = (nextIdx: number) => {
    setActiveDecade(decades[nextIdx][0])
  }
</script>

<style scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
</style>
