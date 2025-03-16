<template>
  <div
      class="fixed flex flex-col h-full md:hide top-0 bottom-0 right-0 overflow-y-scroll w-full duration-700 ease-in-out bg-white z-[999999999999]"
      :class="[isOpen ? 'left-0 scale-1' : 'left-[-100%] hidden scale-0']"
  >
    <div id="mapDrawer" class="h-full"></div>
  </div>
</template>

<script setup lang="ts">
import L from "leaflet";

const emits = defineEmits(["close", "choose"]);
const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true,
  },
  showPoint: {
    type: Boolean,
    required: false
  },
  point: {
    type: Object,
    default: null
  },
  lat: {
    type: Number,
    required: false
  },
  lng: {
    type: Number,
    required: false
  },
  options: {
    type: Object,
    default: () => ({
      zoomControl: true,
      dragging: true,
      doubleClickZoom: true,
      scrollWheelZoom: true,
    }),
  },
});

const lat = ref(props.lat ?? 34.7999968);
const lng = ref(props.lng ?? 48.5166646);
const zoom = ref(15);
const map = ref(null);
const marker = ref(null);

const close = () => {
  emits("close");
};

onMounted(() => {
  if (props.isOpen) {
    initMap();
  }
});

  const initMap = () => {
    nextTick(() => {
      setTimeout(() => {
        const mapDiv = document.getElementById("mapDrawer");
        if (!mapDiv) return;

        if (!map.value) {
          map.value = L.map(mapDiv).setView([lat.value, lng.value], zoom.value);
          L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution: "&copy; OpenStreetMap contributors",
          }).addTo(map.value);
          if (props.point) {
            addMarker(props.point)
          }
          map.value.on("click", (event) => {
            lat.value = event.latlng.lat;
            lng.value = event.latlng.lng;
            addMarker([lat.value, lng.value]);
            emits("choose", [event.latlng.lat, event.latlng.lng]);
          });
        }

        setTimeout(() => {
          map.value.invalidateSize();
        }, 300);
      }, 300);
    });
  };

  const addMarker = (latLng) => {
    if (!map.value || latLng.length != 2) return;
    const customIcon = L.icon({
      iconUrl: '/images/marker.png',
      iconSize: [32, 32],
      iconAnchor: [16, 32],
      popupAnchor: [0, -32],
    });
    if (!marker.value) {
      marker.value = L.marker(latLng, {
        icon: customIcon,
        draggable: true
      }).addTo(map.value);

      marker.value.on("dragend", () => {
        const pos = marker.value.getLatLng();
        lat.value = pos.lat;
        lng.value = pos.lng;
        emits("choose", pos);
      });
    } else {
      marker.value.setLatLng(latLng);
      marker.value.setIcon(customIcon);
    }
    map.value.panTo(latLng)
  };

watch(
    () => props.isOpen,
    (newVal) => {
      if (newVal) {
        initMap();
      }
    }
);
</script>
