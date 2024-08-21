<template>
  <div class="w-full rounded-[50px] bg-white shadow-[0px_5px_30px_5px_#00000040] px-[70px] py-[40px]">
    <div class="w-full flex flex-row justify-start items-center pb-[25px] border-b border-b-black">
      <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24.9997 25.0001C26.1455 25.0001 27.1264 24.5921 27.9424 23.7761C28.7584 22.9602 29.1663 21.9792 29.1663 20.8334C29.1663 19.6876 28.7584 18.7067 27.9424 17.8907C27.1264 17.0747 26.1455 16.6667 24.9997 16.6667C23.8538 16.6667 22.8729 17.0747 22.057 17.8907C21.241 18.7067 20.833 19.6876 20.833 20.8334C20.833 21.9792 21.241 22.9602 22.057 23.7761C22.8729 24.5921 23.8538 25.0001 24.9997 25.0001ZM24.9997 45.8334C19.4094 41.0765 15.234 36.6581 12.4736 32.5782C9.71322 28.4983 8.33301 24.7223 8.33301 21.2501C8.33301 16.0417 10.0084 11.8924 13.359 8.80217C16.7097 5.71189 20.59 4.16675 24.9997 4.16675C29.4094 4.16675 33.2896 5.71189 36.6403 8.80217C39.991 11.8924 41.6663 16.0417 41.6663 21.2501C41.6663 24.7223 40.2861 28.4983 37.5257 32.5782C34.7653 36.6581 30.59 41.0765 24.9997 45.8334Z" fill="black"/>
      </svg>
      <div class="flex flex-row justify-start items-center gap-[10px] font-medium text-[36px] text-right">
        <span>
          آدرس
        </span>
      </div>
      <div class="flex flex-row flex-wrap justify-start items-start font-medium text-[36px] text-right">
        <div class="w-1/2">
          <LMap
              ref="map"
              :zoom="zoom"
              :center="getLatLng"
              :options="options"
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
        <div class="w-1/2">

        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  user: {
    type: Object,
    required: true
  }
})
const zoom = ref(13)
const map = ref()
const getLatLng = computed(() => [props.user.location?.lat, props.user.location?.lng])
const point = computed(() => props.user.location)
const options = { zoomControl: false, dragging: false, doubleClickZoom: false, scrollWheelZoom: false }
</script>

<style scoped>

</style>