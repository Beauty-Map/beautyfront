<template>
  <div class="flex flex-col items-start justify-start w-full px-1">
    <div v-if="title" class="text-[14px] leading-[16px] text-right mb-1 font-medium"
         :class="[hasError ? 'text-[#F44336]' : 'text-[#141414]']"
    >
      {{ title }}
    </div>
    <div class="h-[128px] w-full relative border "
         :class="[hasError ? 'border-[#F44336]' : '']"
         @click="openMapDrawer"
    >
      <div class="h-full w-full ltr-dir">
        <LMap
            ref="map"
            :zoom="zoom"
            :center="[47.21322, -1.559482]"
            :options="options"
            :use-global-leaflet="false"
            v-if="loaded"
        >
          <LTileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="&amp;copy; <a href=&quot;https://www.SaeedHeydari.ir/&quot;>SaeedHeydari.ir</a> contributors"
              layer-type="base"
              name="OpenStreetMap"
          />
          <LMarker :draggable="true" :lat-lng="point" v-if="point"/>
        </LMap>
      </div>
    </div>
    <div class="w-full flex flex-row justify-start items-center" v-if="hasError || error">
      <ErrorRedIcon />
      <span class="mr-1 text-[#F44336] text-[10px] leading-[12px]">{{errorText || props.error}}</span>
    </div>
    <MapDrawer :is-open="showMapDrawer" @close="closeMapDrawer" @choose="onChooseLocation"/>
  </div>
</template>

<script setup lang="ts">
import ErrorRedIcon from "~/components/icons/ErrorRedIcon.vue";
import MapDrawer from "~/components/drawer/MapDrawer.vue";

const emits = defineEmits(['update:modelValue'])
const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  modelValue: {
    type: Object,
    default: {
      lat: 34.7999968,
      lng: 48.5166646
    }
  },
  point: {
    type: Object,
    default: null
  },
  error: {
    type: String,
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  },
  options: {
    type: Object,
    default: { zoomControl: false, dragging: false, doubleClickZoom: false, scrollWheelZoom: false }
  }
})
const lat = ref(props.modelValue?.lat)
const lng = ref(props.modelValue?.lng)
const errorText = ref<String>('')
const hasError = ref<Boolean>(false)
const loaded = ref<Boolean>(false)
const zoom = ref(13)
const map = ref()
const showMapDrawer = ref(false)
const point = ref(props.point)

const getLatLng = computed(() => [lat.value, lng.value])

const openMapDrawer = () => {
  showMapDrawer.value = true
}
const closeMapDrawer = () => {
  showMapDrawer.value = false
}

const onChooseLocation = (location) => {
  lat.value = location.lat
  lng.value = location.lng
  point.value = location
  validateLocationDebounce({lat: lat.value, lng: lng.value})
}

const validateLocation = (latLng) => {
  emits('update:modelValue', latLng)
  closeMapDrawer()
}

const validateLocationDebounce = useDebounce(validateLocation, 500)

setTimeout(()=>loaded.value=true, 500)
</script>

<style scoped>

</style>