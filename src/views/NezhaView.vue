<template>
  <div class="nezha-page">
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

          <!-- 哪吒元素符号 -->
          <div class="nezha-icon nezha-huantianling"></div>
          <div class="nezha-icon nezha-qiankunquan"></div>
          <div class="nezha-icon nezha-fenghuolun"></div>
          <div class="nezha-icon nezha-jian"></div>
          <div class="nezha-icon nezha-lotus"></div>
        </div>
        <div class="frame-content">
          <!-- 页面主要内容区域 -->
          <div class="main-content">
            <h1 class="title">哪吒三太子</h1>
            <div class="content-area">
              <!-- 这里可以放置具体内容 -->
              <img style="width: 200px; height: 250px" src="https://img.starrycognition.cn/PicGo/图层 2.png" alt="" />
            </div>
          </div>
        </div>
        <!-- 下一页按钮 -->
        <button class="next-button" @click="goToNextPage">下一页</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NezhaView",
  methods: {
    goToNextPage() {
      // 跳转到熊出没主题页面
      this.$router.push('/bear');
    }
  }
};
</script>

<style lang="less" scoped>
.nezha-page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 100%);
  padding: 20px;
}

.frame-container {
  max-width: 1200px;
  width: 100%;
}

.frame {
  position: relative;
  padding: 50px;
  background: #f5e9d2;
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
    background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%235d4037' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E");
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
  background: radial-gradient(circle, #d4af37, #b8860b);
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
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath d='M0 0 L100 0 L100 20 Q50 30 20 100 L0 100 Z' fill='%23d4af37'/%3E%3C/svg%3E");
  }

  &.corner-tr {
    top: 0;
    right: 0;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath d='M100 0 L0 0 L0 20 Q50 30 80 100 L100 100 Z' fill='%23d4af37'/%3E%3C/svg%3E");
  }

  &.corner-bl {
    bottom: 0;
    left: 0;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath d='M0 100 L100 100 L100 80 Q50 70 20 0 L0 0 Z' fill='%23d4af37'/%3E%3C/svg%3E");
  }

  &.corner-br {
    bottom: 0;
    right: 0;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath d='M100 100 L0 100 L0 80 Q50 70 80 0 L100 0 Z' fill='%23d4af37'/%3E%3C/svg%3E");
  }

  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
  }
}

.nezha-icon {
  position: absolute;
  width: 50px;
  height: 50px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  z-index: 3;

  &.nezha-huantianling {
    top: 30px;
    left: 30px;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath d='M50 10 Q80 20 90 50 Q80 80 50 90 Q20 80 10 50 Q20 20 50 10 Z' fill='%23e74c3c' stroke='%23c0392b' stroke-width='2'/%3E%3Ccircle cx='50' cy='50' r='20' fill='%23ecf0f1'/%3E%3C/svg%3E");
    width: 60px;
    height: 60px;
  }

  &.nezha-qiankunquan {
    top: 30px;
    right: 30px;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='40' fill='none' stroke='%233498db' stroke-width='8'/%3E%3Ccircle cx='50' cy='50' r='25' fill='none' stroke='%232980b9' stroke-width='5'/%3E%3C/svg%3E");
    width: 60px;
    height: 60px;
  }

  &.nezha-fenghuolun {
    bottom: 30px;
    left: 30px;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='40' fill='%23e67e22'/%3E%3Ccircle cx='50' cy='50' r='25' fill='%23d35400'/%3Ccircle cx='50' cy='50' r='10' fill='%23f1c40f'/%3E%3C/svg%3E");
    width: 60px;
    height: 60px;
  }

  &.nezha-jian {
    bottom: 30px;
    right: 30px;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath d='M20 50 L80 30 L80 70 Z' fill='%2395a5a6'/%3E%3Crect x='10' y='45' width='70' height='10' fill='%237f8c8d'/%3E%3C/svg%3E");
    width: 60px;
    height: 60px;
  }

  &.nezha-lotus {
    top: 30px;
    left: 50%;
    transform: translateX(-50%);
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath d='M50 20 Q60 10 70 20 Q80 30 70 40 Q80 50 70 60 Q80 70 70 80 Q60 90 50 80 Q40 90 30 80 Q20 70 30 60 Q20 50 30 40 Q20 30 30 20 Q40 10 50 20 Z' fill='%232ecc71'/%3E%3C/svg%3E");
    width: 60px;
    height: 60px;
  }
}

.frame-content {
  position: relative;
  background: #ffffff;
  border: 2px solid #d4af37;
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
  color: #d4af37;
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
  color: #333;

  p {
    margin-bottom: 20px;
  }
}

.next-button {
  position: absolute;
  bottom: 20px;
  right: 20px;
  padding: 10px 20px;
  background-color: rgb(127, 172, 243);
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  z-index: 4;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #b8860b;
  }

  &:active {
    transform: scale(0.98);
  }
}
</style>
