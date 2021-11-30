import {ref, watch} from 'vue'

export default function() {
  const scrollXRef = ref(0);
  const scrollYRef = ref(0);

  document.addEventListener("scroll",() => {
    scrollXRef.value = window.scrollX.toFixed(0);
    scrollYRef.value = window.scrollY.toFixed(0);
  });

  return {
    scrollXRef,
    scrollYRef
  }
}