<template>
  <div class="paddog-page">
    <div class="frame-container">
      <div class="frame">
        <div class="frame-border">
          <!-- 顶部装饰 -->
          <div class="ornament ornament-top-left"></div>
          <div class="ornament ornament-top-center"></div>
          <div class="ornament ornament-top-right"></div>

          <!-- 右侧装饰 -->
          <div class="ornament ornament-right-top"></div>
          <div class="ornament ornament-right-center"></div>
          <div class="ornament ornament-right-bottom"></div>

          <!-- 底部装饰 -->
          <div class="ornament ornament-bottom-left"></div>
          <div class="ornament ornament-bottom-center"></div>
          <div class="ornament ornament-bottom-right"></div>

          <!-- 左侧装饰 -->
          <div class="ornament ornament-left-top"></div>
          <div class="ornament ornament-left-center"></div>
          <div class="ornament ornament-left-bottom"></div>

          <!-- 四角装饰 -->
          <div class="corner corner-tl"></div>
          <div class="corner corner-tr"></div>
          <div class="corner corner-bl"></div>
          <div class="corner corner-br"></div>

          <!-- 帕嗒狗元素符号 -->
          <div class="paddog-icon paddog-head"></div>
          <div class="paddog-icon paddog-ears"></div>
          <div class="paddog-icon paddog-tail"></div>
          <div class="paddog-icon paddog-paw"></div>
          <div class="paddog-icon paddog-zzz"></div>

          <!-- 星星装饰元素 -->
          <div class="star star-1"></div>
          <div class="star star-2"></div>
          <div class="star star-3"></div>
          <div class="star star-4"></div>
          <div class="star star-5"></div>
          <div class="star star-6"></div>
          <div class="star star-7"></div>
          <div class="star star-8"></div>
          <div class="star star-9"></div>
          <div class="star star-10"></div>
        </div>
        <div class="frame-content">
          <!-- 页面主要内容区域 -->
          <div class="main-content">
            <h1 class="title">帕嗒狗</h1>
            <div class="content-area">
              <!-- 这里可以放置具体内容 -->
              <img style="width: 200px; height: 240px" src="https://img.starrycognition.cn/PicGo/pa.png" alt="" />
            </div>
          </div>
        </div>
        <!-- 返回目录按钮 -->
        <button class="catalog-button" @click="goToCatalog">返回目录</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PaddogView",
  methods: {
    goToCatalog() {
      // 返回目录页面
      this.$router.push("/mumu");
    },
  },
};
</script>

<style lang="less" scoped>
.paddog-page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%);
  padding: 20px;
}

.frame-container {
  max-width: 1200px;
  width: 100%;
}

.frame {
  position: relative;
  padding: 50px;
  background: #1a1a2e;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  min-height: 600px;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E");
    z-index: 0;
  }

  @media (max-width: 768px) {
    padding: 30px;
    min-height: 500px;
  }
}

.frame-border {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
}

.ornament {
  position: absolute;
  width: 30px;
  height: 30px;
  background: radial-gradient(circle, #4cc9f0, #4361ee);
  border-radius: 50%;
  box-shadow: 0 0 5px rgba(76, 201, 240, 0.7);

  &.ornament-top-left {
    top: 15px;
    left: 15px;
  }

  &.ornament-top-center {
    top: 15px;
    left: 50%;
    transform: translateX(-50%);
  }

  &.ornament-top-right {
    top: 15px;
    right: 15px;
  }

  &.ornament-right-top {
    top: 15px;
    right: 15px;
  }

  &.ornament-right-center {
    top: 50%;
    right: 15px;
    transform: translateY(-50%);
  }

  &.ornament-right-bottom {
    bottom: 15px;
    right: 15px;
  }

  &.ornament-bottom-left {
    bottom: 15px;
    left: 15px;
  }

  &.ornament-bottom-center {
    bottom: 15px;
    left: 50%;
    transform: translateX(-50%);
  }

  &.ornament-bottom-right {
    bottom: 15px;
    right: 15px;
  }

  &.ornament-left-top {
    top: 15px;
    left: 15px;
  }

  &.ornament-left-center {
    top: 50%;
    left: 15px;
    transform: translateY(-50%);
  }

  &.ornament-left-bottom {
    bottom: 15px;
    left: 15px;
  }
}

.corner {
  position: absolute;
  width: 100px;
  height: 100px;
  background-size: contain;
  background-repeat: no-repeat;
  z-index: 3;

  &.corner-tl {
    top: 0;
    left: 0;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath d='M0 0 L100 0 L100 20 Q50 30 20 100 L0 100 Z' fill='%234361ee'/%3E%3C/svg%3E");
  }

  &.corner-tr {
    top: 0;
    right: 0;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath d='M100 0 L0 0 L0 20 Q50 30 80 100 L100 100 Z' fill='%234361ee'/%3E%3C/svg%3E");
  }

  &.corner-bl {
    bottom: 0;
    left: 0;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath d='M0 100 L100 100 L100 80 Q50 70 20 0 L0 0 Z' fill='%234361ee'/%3E%3C/svg%3E");
  }

  &.corner-br {
    bottom: 0;
    right: 0;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath d='M100 100 L0 100 L0 80 Q50 70 80 0 L100 0 Z' fill='%234361ee'/%3E%3C/svg%3E");
  }

  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
  }
}

.paddog-icon {
  position: absolute;
  width: 50px;
  height: 50px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  z-index: 3;

  &.paddog-head {
    top: 30px;
    left: 30px;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='40' fill='%23e1bee7'/%3E%3Ccircle cx='35' cy='40' r='5' fill='%23333'/%3E%3Ccircle cx='65' cy='40' r='5' fill='%23333'/%3E%3Cpath d='M40 65 Q50 70 60 65' stroke='%23333' stroke-width='3' fill='none'/%3E%3C/svg%3E");
    width: 60px;
    height: 60px;
  }

  &.paddog-ears {
    top: 30px;
    right: 30px;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath d='M30 40 Q40 20 50 40 Q60 20 70 40 L60 60 L40 60 Z' fill='%23e1bee7'/%3E%3C/svg%3E");
    width: 60px;
    height: 60px;
  }

  &.paddog-tail {
    bottom: 30px;
    left: 30px;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath d='M30 50 Q50 30 70 50 Q50 70 30 50' fill='%23ba68c8'/%3E%3C/svg%3E");
    width: 60px;
    height: 60px;
  }

  &.paddog-paw {
    bottom: 30px;
    right: 30px;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='30' cy='50' r='15' fill='%23e1bee7'/%3E%3Ccircle cx='70' cy='50' r='15' fill='%23e1bee7'/%3E%3Ccircle cx='50' cy='70' r='15' fill='%23e1bee7'/%3E%3C/svg%3E");
    width: 60px;
    height: 60px;
  }

  &.paddog-zzz {
    top: 30px;
    left: 50%;
    transform: translateX(-50%);
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext x='50' y='50' font-family='Arial' font-size='40' fill='%239e9e9e' text-anchor='middle' dominant-baseline='middle' opacity='0.7'%3EZ%3C/text%3E%3Ctext x='30' y='30' font-family='Arial' font-size='20' fill='%239e9e9e' text-anchor='middle' dominant-baseline='middle' opacity='0.5'%3EZ%3C/text%3E%3Ctext x='70' y='20' font-family='Arial' font-size='15' fill='%239e9e9e' text-anchor='middle' dominant-baseline='middle' opacity='0.3'%3EZ%3C/text%3E%3C/svg%3E");
    width: 60px;
    height: 60px;
  }
}

.star {
  position: absolute;
  width: 20px;
  height: 20px;
  background-color: #fff;
  clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
  z-index: 2;
  opacity: 0.8;

  &.star-1 {
    top: 20%;
    left: 10%;
    animation: twinkle 3s infinite;
  }

  &.star-2 {
    top: 15%;
    right: 15%;
    animation: twinkle 4s infinite 0.5s;
  }

  &.star-3 {
    top: 30%;
    left: 20%;
    animation: twinkle 5s infinite 1s;
  }

  &.star-4 {
    bottom: 25%;
    right: 20%;
    animation: twinkle 3.5s infinite 1.5s;
  }

  &.star-5 {
    bottom: 20%;
    left: 15%;
    animation: twinkle 4.5s infinite 2s;
  }

  &.star-6 {
    top: 40%;
    right: 10%;
    animation: twinkle 3s infinite 2.5s;
  }

  &.star-7 {
    top: 25%;
    left: 30%;
    animation: twinkle 5s infinite 3s;
  }

  &.star-8 {
    bottom: 35%;
    left: 25%;
    animation: twinkle 4s infinite 3.5s;
  }

  &.star-9 {
    top: 50%;
    right: 25%;
    animation: twinkle 3.5s infinite 4s;
  }

  &.star-10 {
    bottom: 15%;
    right: 30%;
    animation: twinkle 4.5s infinite 4.5s;
  }
}

@keyframes twinkle {
  0%,
  100% {
    opacity: 0.2;
    transform: scale(0.8);
  }
  50% {
    opacity: 1;
    transform: scale(1.2);
  }
}

.frame-content {
  position: relative;
  background: #16213e;
  border: 2px solid #4361ee;
  min-height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 1;
  box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.5);
  border-radius: 4px;
  padding: 20px;

  @media (max-width: 768px) {
    min-height: 400px;
  }
}

.main-content {
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.title {
  font-size: 2.5rem;
  color: #4cc9f0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  margin-bottom: 30px;
  font-family: "楷体", "STKaiti", serif;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
}

.content-area {
  font-size: 1.2rem;
  line-height: 1.8;
  color: #e6e6e6;

  p {
    margin-bottom: 20px;
  }
}

.catalog-button {
  position: absolute;
  bottom: 20px;
  right: 20px;
  padding: 10px 20px;
  background-color: #4361ee;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  z-index: 4;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #3a0ca3;
  }

  &:active {
    transform: scale(0.98);
  }
}
</style>
