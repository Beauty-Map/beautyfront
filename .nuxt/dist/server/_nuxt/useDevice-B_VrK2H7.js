import { f as useNuxtApp } from "../server.mjs";
import "vue";
import "destr";
import "klona";
import "devalue";
import "defu";
const useDevice = () => {
  return useNuxtApp().$device;
};
export {
  useDevice as u
};
//# sourceMappingURL=useDevice-B_VrK2H7.js.map
