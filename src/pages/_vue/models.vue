<template>
  <div class="flex flex-col-reverse md:flex-row py-2 md:py-4 justify-center">
    <div class="flex flex-col">
      <!-- Forecast Interval -->
      <div class="flex flex-col items-center space-y-2 px-6">
        <h3 class="text-center text-2xl font-semibold mt-4 mb-2">Interval</h3>
        <RowGroupBtns v-model:activeBtn="activeImgFreq" class="text-xs" :buttons="imageFrequencies" />
      </div>
      <!-- Fields -->
      <div class="flex flex-col items-center space-y-2 px-6 min-w-max w-2/5 md:w-full mx-auto">
        <h3 class="text-center text-2xl font-semibold mt-4 mb-2">Fields</h3>
        <Button
          v-for="mf in metFields"
          :key="mf.val"
          :is-active="mf.val === activeVar.val"
          class="w-full flex justify-center font-bold py-2 px-4 rounded"
          @click.prevent="handleVariableChange(mf)"
        >
          {{ mf.text }}
        </Button>
      </div>
    </div>
    <div class="flex flex-1 flex-col items-center gap-2">
      <h2 class="text-center font-semibold text-2xl md:text-3xl">{{ headerName }}</h2>
      <Transition name="fade" mode="out-in">
        <Range
          v-if="showFcstTime"
          :key="activeImgFreq.val"
          v-model.number="activeFcstTime"
          :ticks="ticks"
          :step="step"
          :can-play="true"
          class="max-w-lg w-full md:w-9/12 scale-[.8]"
          @next="handleNext"
        />
      </Transition>
      <Transition name="fade">
        <SwitchGroup v-show="activeVarHasExtreme" class="scale-75 md:scale-100">
          <div class="flex items-center gap-1.5">
            <Switch
              v-model="activeVarIsExtreme"
              :class="activeVarIsExtreme ? 'bg-skin-button' : 'bg-skin-button-accent'"
              class="relative inline-flex h-4 w-8 items-center rounded-full transition-colors ring-1 ring-gray-700 ring-offset-1"
            >
              <span
                :class="activeVarIsExtreme ? 'translate-x-4 bg-skin-button-accent' : 'bg-skin-button translate-x-0'"
                class="inline-block h-3.5 w-3.5 transform rounded-full transition-transform"
              />
            </Switch>
            <SwitchLabel class="text-sm">Show extreme</SwitchLabel>
          </div>
        </SwitchGroup>
      </Transition>
      <div :class="[activeVar.val === 'wrf-ts' ? 'max-w-2xl' : 'max-w-lg']">
        <Transition name="fade" mode="out-in">
          <img
            :key="`${activeImgFreq.val}.${activeVar.val}.${activeVarIsExtreme}`"
            class="shadow-md rounded-2xl"
            :src="activeImg"
            @load="handleImageLoad"
          />
        </Transition>
      </div>
      <div v-show="showCaption">
        <ModelCaption
          :id="activeVarIsExtreme ? `${activeVar.val}x` : activeVar.val"
          class="italic text-xs md:text-sm mx-2 md:mx-5 font-medium text-justify self-center break-words md:break-normal w-11/12"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useStore, useVModel } from '@nanostores/vue'
  import { addDays, addHours, format, getHours, parse } from 'date-fns'

  import {
    activeFcstTime as _activeFcstTime,
    activeImage,
    activeImageFrequency,
    activeVariable,
    fcstTimes as _fcstTimes,
    hasExtreme,
    imageFrequencies,
    initTime as _initTime,
    isExtreme,
    metFields,
    setActiveFcstTime,
    setActiveVariable,
  } from '@/stores/forecast'

  const initTime = useStore(_initTime)
  const fcstTimes = useStore(_fcstTimes)
  const activeVar = useStore(activeVariable)
  const activeFcstTime = useVModel(_activeFcstTime)
  const activeImgFreq = useVModel(activeImageFrequency)
  const activeVarIsExtreme = useVModel(isExtreme)
  const activeVarHasExtreme = useStore(hasExtreme)
  const activeImg = useStore(activeImage)

  const defaultHeaderName = 'Model Forecast Maps'
  const showCaption = ref(false)

  const headerName = computed(() => activeVar.value.headerName ?? defaultHeaderName)

  const showFcstTime = computed(() => activeVar.value.mult !== false)

  const step = computed(() => +activeImgFreq.value.val.slice(0, -4))

  const ticks = computed(() => {
    const startTime =
      getHours(initTime.value) !== 0
        ? addDays(parse(format(initTime.value, 'yyyy-MM-dd'), 'yyyy-MM-dd', new Date()), 1)
        : initTime.value
    const dates = fcstTimes.value.map((f, i) => addHours(initTime.value, i * step.value))
    const idx = dates.findIndex((d) => d >= startTime)
    const nts = 24 / step.value
    return fcstTimes.value.map((f, i) => ({
      val: f,
      text: !((i - idx) % nts) ? format(dates[i], 'MMM dd') : undefined,
      popup: format(dates[i], 'MMM dd h aaa'),
    }))
  })

  const handleImageLoad = () => {
    showCaption.value = true
  }

  const handleVariableChange = (mf: typeof activeVar.value) => {
    showCaption.value = false
    setActiveVariable(mf)
  }

  const handleNext = (nextIdx: number) => {
    setActiveFcstTime(fcstTimes.value[nextIdx])
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