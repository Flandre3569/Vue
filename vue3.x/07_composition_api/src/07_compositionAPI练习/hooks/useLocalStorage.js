import {ref,watch} from 'vue'

export default function(key,defaultValue) {
  const data = ref(defaultValue);

  if(defaultValue) {
    window.localStorage.setItem(key,JSON.stringify(defaultValue));
  }else {
    data.value = JSON.parse(window.localStorage.getItem(key));
  }

  watch(data,() => {
    window.localStorage.setItem(key,JSON.stringify(data.value));
  })

  return data;
}