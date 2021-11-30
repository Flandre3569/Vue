import {ref,watch} from 'vue'

export default function(titleValue) {
  const useTitle = ref(titleValue);

  watch(useTitle,(newValue) => {
    document.title = newValue;
  },{
    immediate: true
  })

  return useTitle;
}