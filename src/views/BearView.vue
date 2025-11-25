<template>
  <div class="bear-page">
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

          <!-- 熊出没元素符号 -->
          <div class="bear-icon bear-forest"></div>
          <div class="bear-icon bear-honey"></div>
          <div class="bear-icon bear-log"></div>
          <div class="bear-icon bear-basket"></div>
          <div class="bear-icon bear-trees"></div>
        </div>
        <div class="frame-content">
          <!-- 页面主要内容区域 -->
          <div class="main-content">
            <h1 class="title">熊</h1>
            <div class="content-area">
              <!-- 这里可以放置具体内容 -->
              <img style="width: 200px; height: 240px" src="https://img.starrycognition.cn/PicGo/图层 3.png" alt="" />
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
  name: "BearView",
  methods: {
    goToNextPage() {
      // 跳转到哆啦梦主题页面
      this.$router.push('/doraemon');
    }
  }
};
</script>

<style lang="less" scoped>
.bear-page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #e0f7fa 0%, #bbdefb 100%);
  padding: 20px;
}

.frame-container {
  max-width: 1200px;
  width: 100%;
}

.frame {
  position: relative;
  padding: 50px;
  background: #b3e5fc;
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
    background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%231a237e' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E");
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
  background: radial-gradient(circle, #0277bd, #01579b);
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
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath d='M0 0 L100 0 L100 20 Q50 30 20 100 L0 100 Z' fill='%230277bd'/%3E%3C/svg%3E");
  }

  &.corner-tr {
    top: 0;
    right: 0;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath d='M100 0 L0 0 L0 20 Q50 30 80 100 L100 100 Z' fill='%230277bd'/%3E%3C/svg%3E");
  }

  &.corner-bl {
    bottom: 0;
    left: 0;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath d='M0 100 L100 100 L100 80 Q50 70 20 0 L0 0 Z' fill='%230277bd'/%3E%3C/svg%3E");
  }

  &.corner-br {
    bottom: 0;
    right: 0;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath d='M100 100 L0 100 L0 80 Q50 70 80 0 L100 0 Z' fill='%230277bd'/%3E%3C/svg%3E");
  }

  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
  }
}

.bear-icon {
  position: absolute;
  width: 50px;
  height: 50px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  z-index: 3;

  &.bear-forest {
    top: 30px;
    left: 30px;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath d='M20 80 Q30 60 40 70 Q50 50 60 70 Q70 60 80 80 Z' fill='%232e7d32'/%3E%3Ccircle cx='30' cy='50' r='5' fill='%232e7d32'/%3E%3Ccircle cx='70' cy='50' r='5' fill='%232e7d32'/%3E%3C/svg%3E");
    width: 60px;
    height: 60px;
  }

  &.bear-honey {
    top: 30px;
    right: 30px;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath d='M30 30 L70 30 L80 50 L70 70 L30 70 L20 50 Z' fill='%23ffb300'/%3E%3Cpath d='M40 40 L60 40 L65 50 L60 60 L40 60 L35 50 Z' fill='%23ffca28'/%3E%3C/svg%3E");
    width: 60px;
    height: 60px;
  }

  &.bear-log {
    bottom: 30px;
    left: 30px;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect x='20' y='40' width='60' height='20' rx='10' fill='%23795548'/%3E%3Ccircle cx='30' cy='50' r='5' fill='%235d4037'/%3E%3Ccircle cx='50' cy='50' r='5' fill='%235d4037'/%3E%3Ccircle cx='70' cy='50' r='5' fill='%235d4037'/%3E%3C/svg%3E");
    width: 60px;
    height: 60px;
  }

  &.bear-basket {
    bottom: 30px;
    right: 30px;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath d='M30 30 L70 30 L80 60 L20 60 Z' fill='%238d6e63'/%3E%3Cpath d='M30 30 L25 20 L75 20 L70 30' fill='%23a1887f'/%3E%3C/svg%3E");
    width: 60px;
    height: 60px;
  }

  &.bear-trees {
    top: 30px;
    left: 50%;
    transform: translateX(-50%);
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath d='M50 20 L70 50 L60 50 L75 80 L25 80 L40 50 L30 50 Z' fill='%23388e3c'/%3E%3Crect x='45' y='80' width='10' height='15' fill='%235d4037'/%3E%3C/svg%3E");
    width: 60px;
    height: 60px;
  }
}

.frame-content {
  position: relative;
  background: #ffffff;
  border: 2px solid #0277bd;
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
  color: #0277bd;
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
  background-color: #0277bd;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  z-index: 4;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #01579b;
  }

  &:active {
    transform: scale(0.98);
  }
}
</style>