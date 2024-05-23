<template>
  <div
      class="fixed flex flex-col h-full md:hide top-0 bottom-0 right-0 overflow-y-scroll w-full duration-700 ease-in-out bg-white z-[999999999999]"
      :class="[isOpen ? 'left-0 scale-1' : 'left-[-100%] hidden scale-0']"
  >
    <div class="w-full h-screen">
      <LMap
          ref="map"
          :zoom="zoom"
          :center="getLatLng"
          :options="options"
          class="w-full h-full"
          @click="onMapClicked"
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
</template>

<script setup lang="ts">

const emits = defineEmits(['close', 'choose'])
const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true
  },
  showPoint: {
    type: Boolean,
    required: false
  },
  options: {
    type: Object,
    default: { zoomControl: true, dragging: true, doubleClickZoom: true, scrollWheelZoom: true }
  }
})

const lat = ref(47.21322)
const lng = ref(-1.559482)
const zoom = ref(13)
const map = ref()
const getLatLng = computed(() => [lat.value, lng.value])
const showPoint = ref(props.showPoint)
const point = ref()
const l = ref()

const close = () => {
  emits('close')
}

onMounted(() => {
  l.value = window.L
  navigator.geolocation.getCurrentPosition(function(position) {
    lat.value = position.coords.latitude
    lng.value = position.coords.longitude
  })
})

const onMapClicked = (event) => {
  lat.value = event.latlng.lat
  lng.value = event.latlng.lng
  point.value = l.value.latLng(lat.value, lng.value)
  showPoint.value = true
  emits('choose', event.latlng)
}
</script>

<style scoped>

</style>