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
          <div id="mapContainer" style="height: 130px"></div>
        </div>
      </div>
      <div class="w-full flex flex-row justify-start items-center" v-if="hasError || error">
        <ErrorRedIcon />
        <span class="mr-1 text-[#F44336] text-[10px] leading-[12px]">{{errorText || props.error}}</span>
      </div>
      <ClientOnly>
        <MapDrawer :lat="lat" :lng="lng" :is-open="showMapDrawer" :show-point="true" @close="closeMapDrawer" @choose="onChooseLocation"/>
      </ClientOnly>
    </div>
</template>

<script setup lang="ts">
import ErrorRedIcon from "~/components/icons/ErrorRedIcon.vue";
import MapDrawer from "~/components/drawer/MapDrawer.vue";
import L from 'leaflet'

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
const lat = ref(props.modelValue?.lat ?? 34.7999968)
const lng = ref(props.modelValue?.lng ?? 48.5166646)
const errorText = ref<String>('')
const hasError = ref<Boolean>(false)
const loaded = ref<Boolean>(false)
const zoom = ref(14)
const showMapDrawer = ref(false)
const point = ref(props.point)
const map = ref<any>()
const marker = ref(null);

const openMapDrawer = () => {
  showMapDrawer.value = true
}
const closeMapDrawer = () => {
  showMapDrawer.value = false
}

const onChooseLocation = (location) => {
  lat.value = location[0]
  lng.value = location[1]
  point.value = location
  validateLocationDebounce({lat: lat.value, lng: lng.value})
}

const validateLocation = (latLng) => {
  emits('update:modelValue', latLng)
  closeMapDrawer()
}

const validateLocationDebounce = useDebounce(validateLocation, 500)

setTimeout(()=>loaded.value=true, 500)

onMounted(() => {
  const mapDiv = document.getElementById('mapContainer')
  if (mapDiv) {
    map.value = L.map(mapDiv, props.options).setView([lat.value, lng.value], zoom.value);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "<a target='_blank' href=&quot;https://www.SaeedHeydari.ir/&quot;>SaeedHeydari.ir</a>",
    }).addTo(map.value);
    map.value.dragging.disable(); // غیرفعال کردن درگ
    map.value.touchZoom.disable(); // غیرفعال کردن زوم لمسی
    map.value.doubleClickZoom.disable(); // غیرفعال کردن زوم دابل کلیک
    map.value.scrollWheelZoom.disable(); // غیرفعال کردن زوم با اسکرول موس
    map.value.boxZoom.disable(); // غیرفعال کردن زوم مستطیلی
    map.value.keyboard.disable(); // غیرفعال کردن کنترل با کیبورد
    map.value.tap?.disable(); // غیرفعال کردن لمس در موبایل
    if (props.point) {
      addMarker(props.point);
    }
  }
})

watch(
    () => point.value,
    (newVal: any) => {
      if (newVal) {
        addMarker(newVal);
      }
    }
);
const addMarker = (latLng) => {
  if (!map.value) return;

  if (!marker.value) {
    marker.value = L.marker(latLng, { draggable: true })
        .addTo(map.value);

    marker.value.on("dragend", () => {
      const pos = marker.value.getLatLng();
      lat.value = pos.lat;
      lng.value = pos.lng;
    });
  } else {
    marker.value.setLatLng(latLng);
  }
};

</script>

<style scoped>

</style>