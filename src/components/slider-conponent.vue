<template>
  <div class="slider" :data-value="val" :progress="tweenedNumber">
    <div class="progress" @click.stop="JoystickClick">
      <div class="go" :style="{width:  `calc(${tweenedNumber}% - 5px)`}"></div>
    </div>
    <div
      class="Joystick"
      v-drag:tweenedNumber="setData"
      :style="{left: `calc(${tweenedNumber}% - 5px)`}"
    ></div>
  </div>
</template>
<script lang="ts">
import { Vue, Prop, Component, Emit, Watch } from "vue-property-decorator";
import { gsap } from "gsap";

let s = false;
@Component({
  directives: {
    drag: {
      inserted: function(el: HTMLElement, binding) {
        const odiv: HTMLElement = el; //获取当前元素
        let debounceTime: number | undefined;
        let sendEmitValue: number | undefined;
        let actualLeft = el.offsetLeft;
        let current: any = el.offsetParent;

        while (current !== null) {
          actualLeft += current.offsetLeft;
          current = current.offsetParent;
        }
        // 使用防抖是为了不过多的发送，节约资源： 发送@Emit
        function sendEmit(x: any) {
          if (sendEmitValue) clearTimeout(sendEmitValue);
          sendEmitValue = setTimeout(() => {
            binding.value("sliderChange", x);
          }, 60);
        }

        odiv.onmousedown = (de: MouseEvent) => {
          s = true;
          const screenX: number = de.clientX;
          document.onmousemove = (me: MouseEvent) => {
            if (!s) return;
            //防抖
            if (debounceTime) clearTimeout(debounceTime);
            debounceTime = setTimeout(() => {
              if (!s) return;
              const mex = me.offsetX;
              const pnw: any = el.parentNode;
              const x =
                (me.clientX - actualLeft - (de as any).layerX) /
                (pnw.offsetWidth / 100);
              // console.log(x)

              if (x >= 100) {
                binding.value(binding.arg, "100");
                sendEmit(100);
              } else if (x <= 0) {
                binding.value(binding.arg, 0);
                sendEmit(0);
              } else {
                binding.value(binding.arg, x);
                sendEmit(x);
              }
            }, 5);
          };
        };
        document.onmouseup = e => {
          s = false;
        };
      }
    }
  }
})
export default class Yslider extends Vue {
  @Prop({
    default: 0,
    type: String || Number,
    required: false
  })
  private go?: string | number;
  mounted() {
    if (this.go) {
      if (this.go > 100) {
        this.val = 100;
      } else if (this.go < 0) {
        this.val = 0;
      } else {
        this.val = this.go;
      }
    }
  }
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  @Emit("sliderChange") private sliderChange(number: number) {}
  @Watch("val")
  private setVal(nv: any, ov: any) {
    gsap.to(this.$data, { duration: 0.5, tweenedNumber: nv });
    this.sliderChange(nv);
  }

  private val?: string | number = 0;
  private MouseDiwn: boolean | undefined = false;
  private tweenedNumber?: string | number = 0;
  // private progress?: number | undefined = this.go;

  private JoystickClick(event: MouseEvent) {
    // const percentage = (event.target as any).offsetWidth / 100;
    const x = event.offsetX;

    this.val = this.toPercentage(x, (event.currentTarget as any).offsetWidth);
  }
  private getType(d: any) {
    return Object.prototype.toString.call(d);
  }
  private setData(key: string[] | string, value: any) {
    if (this.getType(key) === "[object Array]") {
      (key as []).forEach(item => {
        if (typeof (this as any)[item] === "function") {
          (this as any)[item](value);
        } else {
          (this as any)[item] = value;
        }
      });
    } else {
      const item: string = key.toString();
      if (typeof (this as any)[item] === "function") {
        (this as any)[item](value);
      } else {
        (this as any)[item] = value;
      }
    }
  }
  // 计算val在max中的占比。
  private toPercentage(val: any, max: any) {
    return val / (max / 100);
  }
}
</script>

<style scoped lang="scss">
@import "../style.scss";

.slider {
  width: 100%;
  height: 10px;
  box-sizing: border-box;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;

  .progress {
    border-radius: 6px;
    background: $slider-background;
    height: 6px;
    width: 100%;
    overflow: hidden;

    .go {
      width: 0px;
      background: $slider-background-progress;
      height: inherit;
    }
  }

  .Joystick {
    height: 10px;
    width: 10px;
    border-radius: 50%;
    background: #1890ff;
    left: 0px;
    position: absolute;
    cursor: pointer;
    transition: height 0.2s, width 0.2s;
    // transform: translateX(-50%);

    &:hover {
      height: 12px;
      width: 12px;
    }
  }
}
</style>