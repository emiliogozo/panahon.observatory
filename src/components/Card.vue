<template>
  <div
    v-if="data?.value1"
    :class="[
      isActive
        ? 'bg-skin-button-active text-skin-button-active'
        : 'cursor-pointer bg-skin-button text-skin-button hover:bg-skin-button-accent hover:text-skin-button-accent',
    ]"
    class="relative flex flex-col justify-center cursor-pointer py-1.5 md:py-3 px-1 md:px-2 h-32 w-52 md:w-60"
    data-test="card"
  >
    <div class="flex justify-evenly items-center">
      <div data-test="card-icon">
        <i-fa6-solid-cloud-rain v-if="data?.iconName === 'fa6s-cloud-rain'" class="text-4xl md:text-5xl" />
        <i-fa-solid-thermometer-half
          v-else-if="data?.iconName === 'fas-thermometer-half'"
          class="text-4xl md:text-5xl"
        />
        <i-fa6-solid-wind v-else-if="data?.iconName === 'fa6s-wind'" class="text-4xl md:text-5xl" />
        <i-wi-barometer v-else-if="data?.iconName === 'wi-barometer'" class="text-4xl md:text-5xl scale-150" />
      </div>
      <div class="flex flex-col" data-test="card-info">
        <div v-if="data?.title" class="text-base md:text-lg" data-test="card-info-title">{{ data?.title }}</div>
        <div v-if="data?.value1" class="flex justify-evenly items-end" data-test="card-info-detail1">
          <div v-if="data?.label1" class="text-base md:text-lg font-light" data-test="card-info-label1">
            {{ data?.label1 }}
          </div>
          <div class="text-2xl md:text-4xl font-bold" data-test="card-info-value1">{{ data?.value1 }}</div>
        </div>
        <div
          v-if="data?.value2"
          class="flex justify-center items-center space-x-1 md:space-x-1.5"
          data-test="card-info-detail2"
        >
          <div v-if="data?.label2" class="text-sm font-light -ml-6" data-test="card-info-label2">
            {{ data?.label2 }}
          </div>
          <i-wi-wind-deg
            v-if="data?.iconName2 === 'wi-wind-deg'"
            class="text-lg md:text-xl"
            :style="{ transform: `rotate(${windDirStr2Deg[data?.value2 ?? '']}deg)` }"
          />
          <div class="text-xl md:text-2xl font-bold" data-test="card-info-value2">{{ data?.value2 }}</div>
        </div>
      </div>
    </div>
    <div
      v-show="isActive"
      class="hidden md:flex items-center justify-center absolute right-2 top-2 shadow-lg w-5 h-5 text-xs stroke-current text-gray-800 hover:text-gray-900 hover:bg-blue-300 rounded-full"
      @mouseover="showPopup = true"
      @mouseout="showPopup = false"
      data-test="card-info-popup"
    >
      <i-fa-solid-info class="text-xs scale-75" />
      <Popup class="w-32 px-3 py-2 text-center text-xs rounded-lg pointer-events-none" :show="showPopup">
        <slot></slot>
      </Popup>
    </div>
  </div>
</template>

<script setup lang="ts">
  withDefaults(
    defineProps<{
      data: CardProps
      isActive?: boolean
    }>(),
    {
      isActive: false,
    }
  )

  const windDirStr2Deg = computed(() => {
    const dirs = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW']
    const step = 360 / dirs.length

    const r = dirs.reduce((o, c, i) => {
      o[c] = i * step + 180
      return o
    }, {})

    return r
  })

  const showPopup = ref(false)
</script>
