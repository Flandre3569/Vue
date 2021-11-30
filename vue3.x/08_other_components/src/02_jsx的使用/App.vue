
<script>
  import {ref} from 'vue'
  import HelloWorld from './HelloWorld.vue'
  
  export default {
    setup() {
      const counter = ref(0);

      return {
        counter
      }
    },
    // render函数配合jsx的使用
    render() {
      const increment = () => this.counter++;
      const decrement = () => this.counter--;
      return (
        <div>
          <div>hello world</div>
          <h2>{this.counter}</h2>
          <button onClick={increment}>+</button>
          <button onClick={decrement}>-</button>
          <HelloWorld>
            {{default: props => <button>我是按钮</button>}}
          </HelloWorld>
        </div>
      )
    }
  }
</script>

<style scoped>

</style>