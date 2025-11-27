<template>
  <div class="gsap-container">
    <h1>GSAP 动画展示</h1>
    
    <!-- 基础动画示例 -->
    <div class="section">
      <h2>基础动画</h2>
      <div class="demo-area">
        <div ref="basicBox" class="box basic-box">基础动画</div>
        <button @click="playBasicAnimation" class="btn">播放基础动画</button>
      </div>
    </div>

    <!-- 3D动画示例 -->
    <div class="section">
      <h2>3D动画</h2>
      <div class="demo-area">
        <div ref="cube" class="cube">
          <div class="face front">前</div>
          <div class="face back">后</div>
          <div class="face right">右</div>
          <div class="face left">左</div>
          <div class="face top">上</div>
          <div class="face bottom">下</div>
        </div>
        <div class="controls">
          <button @click="play3DAnimation" class="btn">播放3D动画</button>
          <button @click="reset3D" class="btn">重置</button>
        </div>
      </div>
    </div>

    <!-- 复杂序列动画 -->
    <div class="section">
      <h2>复杂序列动画</h2>
      <div class="demo-area">
        <div class="ball-container" ref="ballContainer">
          <div 
            v-for="i in 5" 
            :key="i" 
            :ref="(el) => { ballRefs[i-1] = el }"
            class="ball"
            :class="`ball-${i}`"
          >
            {{ i }}
          </div>
        </div>
        <button @click="playSequenceAnimation" class="btn">播放序列动画</button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap';

export default {
  name: 'GsapAnimationView',
  setup() {
    // 基础动画引用
    const basicBox = ref(null);
    
    // 3D立方体引用
    const cube = ref(null);
    
    // 小球序列引用
    const ballContainer = ref(null);
    const ballRefs = ref([]);

    // 基础动画
    const playBasicAnimation = () => {
      const tl = gsap.timeline();
      
      tl.to(basicBox.value, {
        duration: 1,
        x: 200,
        rotation: 360,
        backgroundColor: '#ff6b6b',
        ease: 'power2.out'
      })
      .to(basicBox.value, {
        duration: 0.5,
        scale: 1.5,
        backgroundColor: '#4ecdc4',
        ease: 'bounce.out'
      })
      .to(basicBox.value, {
        duration: 0.8,
        x: 0,
        scale: 1,
        rotation: 0,
        backgroundColor: '#1a73e8',
        ease: 'power3.inOut'
      });
    };

    // 3D动画
    const play3DAnimation = () => {
      gsap.to(cube.value, {
        duration: 3,
        rotationX: 360,
        rotationY: 360,
        ease: 'power2.inOut',
        repeat: -1,
        yoyo: true
      });
    };

    // 重置3D动画
    const reset3D = () => {
      gsap.killTweensOf(cube.value);
      gsap.to(cube.value, {
        duration: 1,
        rotationX: 0,
        rotationY: 0,
        ease: 'power2.out'
      });
    };

    // 序列动画
    const playSequenceAnimation = () => {
      // 清除现有动画
      gsap.killTweensOf(ballRefs.value);
      
      // 创建时间线
      const tl = gsap.timeline({
        defaults: {
          duration: 0.5,
          ease: 'back.out(1.7)'
        }
      });

      // 初始状态
      gsap.set(ballRefs.value, {
        y: 100,
        opacity: 0,
        scale: 0
      });

      // 依次动画每个小球
      ballRefs.value.forEach((ball, i) => {
        tl.to(ball, {
          y: 0,
          opacity: 1,
          scale: 1
        }, i * 0.1)
        .to(ball, {
          x: gsap.utils.random(-100, 100),
          rotation: gsap.utils.random(-180, 180),
          backgroundColor: `hsl(${gsap.utils.random(0, 360)}, 70%, 60%)`,
          scale: gsap.utils.random(0.8, 1.5)
        }, '>-=0.3');
      });

      // 添加结尾效果
      tl.to(ballRefs.value, {
        duration: 1,
        x: 0,
        y: 0,
        rotation: 0,
        scale: 1,
        backgroundColor: '#3498db'
      }, '+=0.5');
    };

    onMounted(() => {
      // 初始化时给小球容器添加一些样式
      gsap.set(ballContainer.value, {
        perspective: 800
      });
    });

    return {
      basicBox,
      cube,
      ballContainer,
      ballRefs,
      playBasicAnimation,
      play3DAnimation,
      reset3D,
      playSequenceAnimation
    };
  }
};
</script>

<style lang="less" scoped>
.gsap-container {
  padding: 20px;
  font-family: 'Arial', sans-serif;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  min-height: 100vh;
  color: white;

  h1 {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 30px;
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
  }

  .section {
    margin-bottom: 50px;
    padding: 20px;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 15px;
    backdrop-filter: blur(10px);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);

    h2 {
      font-size: 1.8rem;
      margin-bottom: 20px;
      color: #4ecdc4;
      border-bottom: 2px solid #4ecdc4;
      padding-bottom: 10px;
    }
  }

  .demo-area {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    min-height: 200px;
  }

  .box {
    width: 100px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: bold;
    border-radius: 10px;
    cursor: pointer;
    user-select: none;
  }

  .basic-box {
    background-color: #1a73e8;
    box-shadow: 0 4px 15px rgba(26, 115, 232, 0.4);
  }

  .btn {
    padding: 12px 24px;
    background: linear-gradient(45deg, #6a11cb 0%, #2575fc 100%);
    color: white;
    border: none;
    border-radius: 30px;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(37, 117, 252, 0.4);

    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 6px 20px rgba(37, 117, 252, 0.6);
    }

    &:active {
      transform: translateY(1px);
    }
  }

  // 3D立方体样式
  .cube {
    width: 100px;
    height: 100px;
    position: relative;
    transform-style: preserve-3d;
    transform: translateZ(-50px);

    .face {
      position: absolute;
      width: 100px;
      height: 100px;
      background: rgba(52, 152, 219, 0.8);
      border: 2px solid rgba(255, 255, 255, 0.5);
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      color: white;
      opacity: 0.9;
    }

    .front  { transform: rotateY(0deg) translateZ(50px); background: rgba(231, 76, 60, 0.8); }
    .back   { transform: rotateY(180deg) translateZ(50px); background: rgba(46, 204, 113, 0.8); }
    .right  { transform: rotateY(90deg) translateZ(50px); background: rgba(241, 196, 15, 0.8); }
    .left   { transform: rotateY(-90deg) translateZ(50px); background: rgba(155, 89, 182, 0.8); }
    .top    { transform: rotateX(90deg) translateZ(50px); background: rgba(26, 188, 156, 0.8); }
    .bottom { transform: rotateX(-90deg) translateZ(50px); background: rgba(230, 126, 34, 0.8); }
  }

  // 小球容器
  .ball-container {
    display: flex;
    gap: 20px;
    margin: 30px 0;
  }

  .ball {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: #3498db;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    color: white;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 768px) {
    .gsap-container {
      padding: 10px;
    }

    h1 {
      font-size: 2rem;
    }

    .section {
      padding: 15px;
    }

    .section h2 {
      font-size: 1.5rem;
    }
  }
}
</style>