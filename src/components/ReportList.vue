<template>
  <div ref="bodyEl" class="h-full overflow-y-scroll">
    <div class="grid grid-cols-2 md:grid-cols-5 gap-2 md:gap-4 h-fit">
      <a
        v-for="(report, idx) in $reports"
        :key="report.id"
        :href="route(`reports/${report.id}`)"
        class="group relative flex justify-center overflow-hidden rounded-lg"
        :class="[idx === 0 ? 'col-span-2 row-span-2 md:col-span-3 md:row-span-3' : 'col-span-1 row-span-1']"
      >
        <img
          :src="`${resourcePath}/reports/${report.coverImg}`"
          alt="image"
          class="max-w-full h-full object-cover ease-in-out duration-500 group-hover:scale-110"
          @load="handleImgLoad(idx)"
        />
        <div
          class="absolute bg-black w-full h-full opacity-10 transition-opacity duration-500 group-hover:opacity-50"
        />
        <p
          class="absolute bottom-0 p-2 w-full text-gray-700 text-sm rounded-b-lg backdrop-blur-lg backdrop-opacity-75"
          :class="[idx === 0 ? 'md:text-xl md:font-semibold' : 'md:text-base']"
        >
          {{ report.title }}
        </p>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useStore } from '@nanostores/vue'

  import { fetchNewReports, reports } from '@/stores/report'
  import { route } from '@/stores/routes'

  import { resourcePath } from '@/pages/_common'

  const bodyEl = ref()
  const { arrivedState } = useScroll(bodyEl)

  const $reports = useStore(reports)

  const reportCount = computed(() => $reports.value.length)
  const hasScroll = computed(() => bodyEl.value.clientHeight < bodyEl.value.scrollHeight)

  const handleImgLoad = (idx: number) => {
    if (reportCount.value - 1 === idx) {
      if (!hasScroll.value) {
        fetchNewReports()
      }
    }
  }

  watch(arrivedState, ({ bottom }) => {
    if (bottom) {
      fetchNewReports()
    }
  })
</script>