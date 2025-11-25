<template>
  <div class="pleasant-goat-page">
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

          <!-- 喜羊羊元素符号 -->
          <div class="pleasant-goat-icon pleasant-goat-head"></div>
          <div class="pleasant-goat-icon pleasant-goat-ears"></div>
          <div class="pleasant-goat-icon pleasant-goat-tail"></div>
          <div class="pleasant-goat-icon pleasant-goat-horn"></div>
          <div class="pleasant-goat-icon pleasant-goat-grass"></div>
        </div>
        <div class="frame-content">
          <!-- 页面主要内容区域 -->
          <div class="main-content">
            <h1 class="title">喜羊羊</h1>
            <div class="content-area">
              <!-- 这里可以放置具体内容 -->
              <img style="width: 200px; height: 240px" src="https://img.starrycognition.cn/PicGo/图层 6.png" alt="" />
            </div>
          </div>
        </div>
        <!-- 返回目录按钮 -->
        <button class="catalog-button" @click="goToCatalog">返回目录</button>
        <!-- 下一页按钮 -->
        <button class="next-button" @click="goToNextPage">下一页</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PleasantGoatView",
  methods: {
    goToCatalog() {
      // 返回目录页面
      this.$router.push("/");
    },
    goToNextPage() {
      // 跳转到万圣节页面
      this.$router.push('/halloween');
    }
  }
};
</script>

<style lang="less" scoped>
.pleasant-goat-page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%);
  padding: 20px;
}

.frame-container {
  max-width: 1200px;
  width: 100%;
}

.frame {
  position: relative;
  padding: 50px;
  background: #e1f5fe;
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
    background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%230d47a1' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E");
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
  background: radial-gradient(circle, #42a5f5, #1976d2);
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
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath d='M0 0 L100 0 L100 20 Q50 30 20 100 L0 100 Z' fill='%2342a5f5'/%3E%3C/svg%3E");
  }

  &.corner-tr {
    top: 0;
    right: 0;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath d='M100 0 L0 0 L0 20 Q50 30 80 100 L100 100 Z' fill='%2342a5f5'/%3E%3C/svg%3E");
  }

  &.corner-bl {
    bottom: 0;
    left: 0;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath d='M0 100 L100 100 L100 80 Q50 70 20 0 L0 0 Z' fill='%2342a5f5'/%3E%3C/svg%3E");
  }

  &.corner-br {
    bottom: 0;
    right: 0;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath d='M100 100 L0 100 L0 80 Q50 70 80 0 L100 0 Z' fill='%2342a5f5'/%3E%3C/svg%3E");
  }

  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
  }
}

.pleasant-goat-icon {
  position: absolute;
  width: 50px;
  height: 50px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  z-index: 3;

  &.pleasant-goat-head {
    top: 30px;
    left: 30px;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='40' fill='white'/%3E%3Ccircle cx='35' cy='40' r='5' fill='%23333'/%3E%3Ccircle cx='65' cy='40' r='5' fill='%23333'/%3E%3Cpath d='M40 65 Q50 75 60 65' stroke='%23333' stroke-width='3' fill='none'/%3E%3C/svg%3E");
    width: 60px;
    height: 60px;
  }

  &.pleasant-goat-ears {
    top: 30px;
    right: 30px;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath d='M30 40 Q40 20 50 40 Q60 20 70 40 L60 60 L40 60 Z' fill='white'/%3E%3C/svg%3E");
    width: 60px;
    height: 60px;
  }

  &.pleasant-goat-tail {
    bottom: 30px;
    left: 30px;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath d='M30 50 Q50 30 70 50 Q50 70 30 50' fill='%2342a5f5'/%3E%3C/svg%3E");
    width: 60px;
    height: 60px;
  }

  &.pleasant-goat-horn {
    bottom: 30px;
    right: 30px;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath d='M40 40 L60 20 L65 25 L45 45 Z' fill='%2342a5f5'/%3E%3C/svg%3E");
    width: 60px;
    height: 60px;
  }

  &.pleasant-goat-grass {
    top: 30px;
    left: 50%;
    transform: translateX(-50%);
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath d='M30 70 Q40 50 50 70 Q60 50 70 70 L65 80 Q55 65 50 80 Q45 65 35 80 Z' fill='%234caf50'/%3E%3C/svg%3E");
    width: 60px;
    height: 60px;
  }
}

.frame-content {
  position: relative;
  background: #ffffff;
  border: 2px solid #42a5f5;
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
  color: #42a5f5;
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

.catalog-button {
  position: absolute;
  bottom: 20px;
  right: 20px;
  padding: 10px 20px;
  background-color: #42a5f5;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  z-index: 4;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #1976d2;
  }

  &:active {
    transform: scale(0.98);
  }
}

.next-button {
  position: absolute;
  bottom: 20px;
  right: 20px;
  padding: 10px 20px;
  background-color: #42a5f5;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  z-index: 4;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #1976d2;
  }

  &:active {
    transform: scale(0.98);
  }
}
</style>