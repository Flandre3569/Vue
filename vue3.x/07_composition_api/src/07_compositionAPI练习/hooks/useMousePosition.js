import {ref} from 'vue'

export default function() {
  const mousePositionX = ref(0);
  const mousePositionY = ref(0);

  window.addEventListener("mousemove",(event) => {
    mousePositionX.value = event.pageX.toFixed(0);
    mousePositionY.value = event.pageY.toFixed(0);
  })

  return {
    mousePositionX,
    mousePositionY
  }
}