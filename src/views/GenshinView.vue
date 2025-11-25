<template>
  <div class="genshin-page">
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

          <!-- 原神元素符号 -->
          <div class="genshin-icon genshin-element"></div>
          <div class="genshin-icon genshin-weapon"></div>
          <div class="genshin-icon genshin-artifact"></div>
          <div class="genshin-icon genshin-skill"></div>
          <div class="genshin-icon genshin-logo"></div>

          <!-- 神里凌华专属装饰 -->
          <div class="kamisato-decoration kamisato-flower-1"></div>
          <div class="kamisato-decoration kamisato-flower-2"></div>
          <div class="kamisato-decoration kamisato-flower-3"></div>
          <div class="kamisato-decoration kamisato-fan"></div>
          <div class="kamisato-decoration kamisato-crest"></div>

          <!-- 日本风格装饰元素 -->
          <div class="japanese-decoration japanese-circle-1"></div>
          <div class="japanese-decoration japanese-circle-2"></div>
          <div class="japanese-decoration japanese-circle-3"></div>
          <div class="japanese-decoration japanese-wave-1"></div>
          <div class="japanese-decoration japanese-wave-2"></div>
          <div class="japanese-decoration japanese-torii"></div>

          <!-- 星辰装饰 -->
          <div class="star star-1"></div>
          <div class="star star-2"></div>
          <div class="star star-3"></div>
          <div class="star star-4"></div>
          <div class="star star-5"></div>
          <div class="star star-6"></div>
          <div class="star star-7"></div>
          <div class="star star-8"></div>
        </div>
        <div class="frame-content">
          <!-- 页面主要内容区域 -->
          <div class="main-content">
            <h1 class="title">神里绫华</h1>
            <div class="content-area">
              <!-- 这里可以放置具体内容 -->
              <img style="width: 200px; height: 240px" src="https://img.starrycognition.cn/PicGo/she.png" alt="" />
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
  name: "GenshinView",
  methods: {
    goToCatalog() {
      // 返回目录页面
      this.$router.push("/mumu");
    },
  },
};
</script>

<style lang="less" scoped>
.genshin-page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
  padding: 20px;
  position: relative;
  overflow: hidden;
}

.frame-container {
  max-width: 1200px;
  width: 100%;
}

.frame {
  position: relative;
  padding: 50px;
  background: linear-gradient(135deg, #ffffff10 0%, #4cc9f010 100%);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  min-height: 600px;
  backdrop-filter: blur(5px);
  border: 1px solid #4cc9f030;

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
  background: radial-gradient(circle, #f5f5f5, #e0e0e0);
  border-radius: 50%;
  box-shadow: 0 0 5px rgba(255, 255, 255, 0.5);

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
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath d='M0 0 L100 0 L100 20 Q50 30 20 100 L0 100 Z' fill='%23f5f5f5'/%3E%3C/svg%3E");
  }

  &.corner-tr {
    top: 0;
    right: 0;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath d='M100 0 L0 0 L0 20 Q50 30 80 100 L100 100 Z' fill='%23f5f5f5'/%3E%3C/svg%3E");
  }

  &.corner-bl {
    bottom: 0;
    left: 0;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath d='M0 100 L100 100 L100 80 Q50 70 20 0 L0 0 Z' fill='%23f5f5f5'/%3E%3C/svg%3E");
  }

  &.corner-br {
    bottom: 0;
    right: 0;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath d='M100 100 L0 100 L0 80 Q50 70 80 0 L100 0 Z' fill='%23f5f5f5'/%3E%3C/svg%3E");
  }

  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
  }
}

.genshin-icon {
  position: absolute;
  width: 50px;
  height: 50px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  z-index: 3;

  &.genshin-element {
    top: 30px;
    left: 30px;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='40' fill='%237b1fa2'/%3E%3Cpath d='M30 30 L70 70 M70 30 L30 70' stroke='white' stroke-width='8' stroke-linecap='round'/%3E%3C/svg%3E");
    width: 60px;
    height: 60px;
  }

  &.genshin-weapon {
    top: 30px;
    right: 30px;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath d='M50 10 L60 30 L50 90 L40 30 Z' fill='%23ffc107'/%3E%3C/svg%3E");
    width: 60px;
    height: 60px;
  }

  &.genshin-artifact {
    bottom: 30px;
    left: 30px;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='40' fill='%2300bcd4'/%3E%3Ccircle cx='50' cy='50' r='25' fill='%230097a7'/%3E%3C/svg%3E");
    width: 60px;
    height: 60px;
  }

  &.genshin-skill {
    bottom: 30px;
    right: 30px;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='40' fill='%23f57c00'/%3E%3Cpath d='M30 50 Q50 30 70 50 Q50 70 30 50' fill='white'/%3E%3C/svg%3E");
    width: 60px;
    height: 60px;
  }

  &.genshin-logo {
    top: 30px;
    left: 50%;
    transform: translateX(-50%);
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath d='M20 20 L80 20 L90 50 L50 80 L10 50 Z' fill='%231976d2'/%3E%3C/svg%3E");
    width: 60px;
    height: 60px;
  }
}

.kamisato-decoration {
  position: absolute;
  z-index: 3;

  &.kamisato-flower-1 {
    top: 20%;
    left: 15%;
    width: 40px;
    height: 40px;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath d='M50 10 Q60 20 50 30 Q40 20 50 10 Z' fill='%23ff4081'/%3E%3Cpath d='M50 10 Q60 20 70 10 Q60 0 50 10 Z' fill='%23ff4081'/%3E%3Cpath d='M50 10 Q40 20 30 10 Q40 0 50 10 Z' fill='%23ff4081'/%3E%3Cpath d='M50 10 Q50 20 60 30 Q50 20 50 10 Z' fill='%23ff4081'/%3E%3Cpath d='M50 10 Q50 20 40 30 Q50 20 50 10 Z' fill='%23ff4081'/%3E%3Ccircle cx='50' cy='10' r='5' fill='%23ff80ab'/%3E%3C/svg%3E");
    background-size: contain;
    background-repeat: no-repeat;
  }

  &.kamisato-flower-2 {
    top: 15%;
    right: 20%;
    width: 35px;
    height: 35px;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath d='M50 10 Q60 20 50 30 Q40 20 50 10 Z' fill='%23ff4081'/%3E%3Cpath d='M50 10 Q60 20 70 10 Q60 0 50 10 Z' fill='%23ff4081'/%3E%3Cpath d='M50 10 Q40 20 30 10 Q40 0 50 10 Z' fill='%23ff4081'/%3E%3Cpath d='M50 10 Q50 20 60 30 Q50 20 50 10 Z' fill='%23ff4081'/%3E%3Cpath d='M50 10 Q50 20 40 30 Q50 20 50 10 Z' fill='%23ff4081'/%3E%3Ccircle cx='50' cy='10' r='5' fill='%23ff80ab'/%3E%3C/svg%3E");
    background-size: contain;
    background-repeat: no-repeat;
    transform: rotate(30deg);
  }

  &.kamisato-flower-3 {
    bottom: 25%;
    left: 20%;
    width: 30px;
    height: 30px;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath d='M50 10 Q60 20 50 30 Q40 20 50 10 Z' fill='%23ff4081'/%3E%3Cpath d='M50 10 Q60 20 70 10 Q60 0 50 10 Z' fill='%23ff4081'/%3E%3Cpath d='M50 10 Q40 20 30 10 Q40 0 50 10 Z' fill='%23ff4081'/%3E%3Cpath d='M50 10 Q50 20 60 30 Q50 20 50 10 Z' fill='%23ff4081'/%3E%3Cpath d='M50 10 Q50 20 40 30 Q50 20 50 10 Z' fill='%23ff4081'/%3E%3Ccircle cx='50' cy='10' r='5' fill='%23ff80ab'/%3E%3C/svg%3E");
    background-size: contain;
    background-repeat: no-repeat;
    transform: rotate(-20deg);
  }

  &.kamisato-fan {
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    height: 50px;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath d='M20 20 Q50 10 80 20 Q70 50 80 80 Q50 90 20 80 Q30 50 20 20 Z' fill='%23e1bee7' stroke='%23ba68c8' stroke-width='2'/%3E%3Cpath d='M30 30 Q50 20 70 30 Q60 50 70 70 Q50 80 30 70 Q40 50 30 30 Z' fill='%23f3e5f5'/%3E%3C/svg%3E");
    background-size: contain;
    background-repeat: no-repeat;
  }

  &.kamisato-crest {
    top: 30px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 60px;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='40' fill='%23f5f5f5' stroke='%23e0e0e0' stroke-width='2'/%3E%3Cpath d='M30 30 L70 70 M70 30 L30 70' stroke='%237b1fa2' stroke-width='5' stroke-linecap='round'/%3E%3C/svg%3E");
    background-size: contain;
    background-repeat: no-repeat;
  }
}

.japanese-decoration {
  position: absolute;
  z-index: 2;

  &.japanese-circle-1 {
    top: 25%;
    right: 15%;
    width: 25px;
    height: 25px;
    border: 2px solid #f5f5f5;
    border-radius: 50%;
    box-shadow: 0 0 8px #f5f5f5;
  }

  &.japanese-circle-2 {
    bottom: 20%;
    right: 15%;
    width: 30px;
    height: 30px;
    border: 2px solid #e0e0e0;
    border-radius: 50%;
    box-shadow: 0 0 10px #e0e0e0;
  }

  &.japanese-circle-3 {
    top: 40%;
    left: 15%;
    width: 20px;
    height: 20px;
    border: 2px solid #ffffff;
    border-radius: 50%;
    box-shadow: 0 0 6px #ffffff;
  }

  &.japanese-wave-1 {
    top: 60%;
    left: 10%;
    width: 60px;
    height: 20px;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 20'%3E%3Cpath d='M0 10 Q25 0 50 10 T100 10' stroke='%234cc9f0' fill='none' stroke-width='2'/%3E%3C/svg%3E");
    background-size: contain;
    background-repeat: no-repeat;
  }

  &.japanese-wave-2 {
    bottom: 40%;
    right: 10%;
    width: 60px;
    height: 20px;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 20'%3E%3Cpath d='M0 10 Q25 20 50 10 T100 10' stroke='%23f5f5f5' fill='none' stroke-width='2'/%3E%3C/svg%3E");
    background-size: contain;
    background-repeat: no-repeat;
  }

  &.japanese-torii {
    top: 15%;
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    height: 50px;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect x='30' y='20' width='40' height='5' fill='%23f44336'/%3E%3Crect x='35' y='25' width='30' height='50' fill='%23f44336'/%3E%3Crect x='20' y='30' width='60' height='5' fill='%23f44336'/%3E%3C/svg%3E");
    background-size: contain;
    background-repeat: no-repeat;
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
  background: linear-gradient(135deg, #ffffff10 0%, #f5f5f510 100%);
  border: 1px solid #f5f5f530;
  min-height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 1;
  box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  padding: 20px;
  backdrop-filter: blur(3px);

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
  color: #f5f5f5;
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
  color: #f5f5f5;

  p {
    margin-bottom: 20px;
  }
}

.catalog-button {
  position: absolute;
  bottom: 20px;
  right: 20px;
  padding: 10px 20px;
  background-color: #7b1fa2;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  z-index: 4;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #4a148c;
  }

  &:active {
    transform: scale(0.98);
  }
}
</style>
