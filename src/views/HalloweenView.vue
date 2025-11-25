<template>
  <div class="halloween-page">
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

          <!-- 万圣节元素符号 -->
          <div class="halloween-icon halloween-pumpkin"></div>
          <div class="halloween-icon halloween-ghost"></div>
          <div class="halloween-icon halloween-bat"></div>
          <div class="halloween-icon halloween-candy"></div>
          <div class="halloween-icon halloween-moon"></div>

          <!-- 静态雷电装饰 -->
          <div class="lightning-static lightning-1"></div>
          <div class="lightning-static lightning-2"></div>
          <div class="lightning-static lightning-3"></div>
          <div class="lightning-static lightning-4"></div>
          <div class="lightning-static lightning-5"></div>
        </div>
        <div class="frame-content">
          <!-- 页面主要内容区域 -->
          <div class="main-content">
            <h1 class="title">万圣节</h1>
            <div class="content-area">
              <!-- 这里可以放置具体内容 -->
              <img style="width: 200px; height: 200px" src="https://img.starrycognition.cn/PicGo/%E5%9B%BE%E5%B1%82%207.png" alt="" />
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
  name: "HalloweenView",
  methods: {
    goToCatalog() {
      // 跳转到Mumu页面
      this.$router.push("/mumu");
    },
  },
};
</script>

<style lang="less" scoped>
.halloween-page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #2c1e19 0%, #1f122d 100%);
  padding: 20px;
}

.frame-container {
  max-width: 1200px;
  width: 100%;
}

.frame {
  position: relative;
  padding: 50px;
  background: #3e2723;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  min-height: 600px;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23000000' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E");
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
  background: radial-gradient(circle, #4e342e, #3e2723);
  border-radius: 50%;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);

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
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath d='M0 0 L100 0 L100 20 Q50 30 20 100 L0 100 Z' fill='%234e342e'/%3E%3C/svg%3E");
  }

  &.corner-tr {
    top: 0;
    right: 0;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath d='M100 0 L0 0 L0 20 Q50 30 80 100 L100 100 Z' fill='%234e342e'/%3E%3C/svg%3E");
  }

  &.corner-bl {
    bottom: 0;
    left: 0;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath d='M0 100 L100 100 L100 80 Q50 70 20 0 L0 0 Z' fill='%234e342e'/%3E%3C/svg%3E");
  }

  &.corner-br {
    bottom: 0;
    right: 0;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath d='M100 100 L0 100 L0 80 Q50 70 80 0 L100 0 Z' fill='%234e342e'/%3E%3C/svg%3E");
  }

  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
  }
}

.halloween-icon {
  position: absolute;
  width: 50px;
  height: 50px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  z-index: 3;

  &.halloween-pumpkin {
    top: 30px;
    left: 30px;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath d='M30 60 Q50 30 70 60 L65 70 Q50 80 35 70 Z' fill='%23e65100'/%3E%3Cpath d='M40 50 L45 45 L50 50 L55 45 L60 50' stroke='black' stroke-width='2' fill='none'/%3E%3Ccircle cx='40' cy='55' r='3' fill='black'/%3E%3Ccircle cx='60' cy='55' r='3' fill='black'/%3E%3C/svg%3E");
    width: 60px;
    height: 60px;
  }

  &.halloween-ghost {
    top: 30px;
    right: 30px;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath d='M30 30 Q50 10 70 30 L70 70 Q50 90 30 70 Z' fill='white'/%3E%3Ccircle cx='40' cy='40' r='3' fill='black'/%3E%3Ccircle cx='60' cy='40' r='3' fill='black'/%3E%3Cpath d='M45 55 Q50 60 55 55' stroke='black' stroke-width='2' fill='none'/%3E%3C/svg%3E");
    width: 60px;
    height: 60px;
  }

  &.halloween-bat {
    bottom: 30px;
    left: 30px;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath d='M30 50 Q40 30 50 50 Q60 30 70 50 L65 60 Q50 70 35 60 Z' fill='black'/%3E%3C/svg%3E");
    width: 60px;
    height: 60px;
  }

  &.halloween-candy {
    bottom: 30px;
    right: 30px;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect x='35' y='40' width='30' height='20' rx='5' fill='%23ff4081'/%3E%3Ccircle cx='40' cy='45' r='2' fill='white'/%3E%3Ccircle cx='60' cy='55' r='2' fill='white'/%3E%3C/svg%3E");
    width: 60px;
    height: 60px;
  }

  &.halloween-moon {
    top: 30px;
    left: 50%;
    transform: translateX(-50%);
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='40' fill='%23ffeb3b'/%3E%3Ccircle cx='60' cy='40' r='10' fill='%232c1e19'/%3E%3Ccircle cx='40' cy='60' r='15' fill='%232c1e19'/%3E%3C/svg%3E");
    width: 60px;
    height: 60px;
  }
}

.lightning-static {
  position: absolute;
  z-index: 2;

  &::before {
    content: "";
    position: absolute;
    width: 20px;
    height: 30px;
    background-color: #8e24aa; /* 黄色完整填充 */
    clip-path: polygon(50% 0%, 100% 50%, 50% 50%, 100% 100%, 0% 50%, 50% 50%, 0% 0%);
    box-shadow: 0 0 10px #8e24aa;
  }

  &.lightning-1 {
    top: 20%;
    left: 15%;
  }

  &.lightning-2 {
    top: 15%;
    right: 20%;
  }

  &.lightning-3 {
    top: 40%;
    left: 20%;
  }

  &.lightning-4 {
    bottom: 30%;
    right: 25%;
  }

  &.lightning-5 {
    bottom: 20%;
    left: 30%;
  }
}

.frame-content {
  position: relative;
  background: #000000;
  border: 2px solid #4e342e;
  min-height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 1;
  box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.2);
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
  color: #ffeb3b;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  margin-bottom: 30px;
  font-family: "楷体", "STKaiti", serif;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
}

.content-area {
  font-size: 1.2rem;
  line-height: 1.8;
  color: #ffffff;

  p {
    margin-bottom: 20px;
  }
}

.catalog-button {
  position: absolute;
  bottom: 20px;
  right: 20px;
  padding: 10px 20px;
  background-color: #4e342e;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  z-index: 4;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #3e2723;
  }

  &:active {
    transform: scale(0.98);
  }
}
</style>
