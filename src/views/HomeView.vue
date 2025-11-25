<template>
  <div class="home">
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
          <div class="element-icon element-anemo"></div>
          <div class="element-icon element-electro"></div>
          <div class="element-icon element-dendro"></div>
          <div class="element-icon element-hydro"></div>
          <div class="element-icon element-pyro"></div>
          <div class="element-icon element-cryo"></div>
          <div class="element-icon element-geo"></div>
        </div>
        <div class="frame-content" style="text-align: center; line-height: 40px">
          <!-- 中央长方形空白区域 -->
          <p style="font-size: 30px; font-weight: bold">欢迎来到</p>
          <p style="font-size: 20px">鱼鱼</p>
          <p style="font-size: 20px">和</p>
          <p style="font-size: 20px">糖糖</p>
          <p style="font-size: 20px">粘土世界</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "HomeView",
};
</script>

<style lang="less" scoped>
.home {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 20px;
  background: linear-gradient(135deg, #1f122d 0%, #2c1e19 100%);
  font-family: "Times New Roman", serif;
}

.frame-container {
  width: 100%;
  max-width: 900px;
}

.frame {
  position: relative;
  background: #f0e5d0;
  box-shadow: 0 0 0 8px #5d4037, 0 0 0 16px #8d6e63, 0 0 0 24px #a1887f, 0 20px 40px rgba(0, 0, 0, 0.7);
  border-radius: 4px;
  overflow: hidden;
  min-height: 600px;
  padding: 50px;
}

.frame-border {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
}

// 四角装饰
.corner {
  position: absolute;
  width: 120px;
  height: 120px;
  background-size: cover;
  z-index: 3;
}

.corner-tl {
  top: 20px;
  left: 20px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 120'%3E%3Cpath d='M20,20 L40,20 Q60,10 80,20 L100,20 L100,40 Q110,60 100,80 L100,100 L80,100 Q60,110 40,100 L20,100 L20,80 Q10,60 20,40 Z' fill='%235d4037'/%3E%3Cpath d='M30,30 L50,30 Q65,20 80,30 L90,30 L90,50 Q100,65 90,80 L90,90 L80,90 Q65,100 50,90 L30,90 L30,80 Q20,65 30,50 Z' fill='%238d6e63'/%3E%3Ccircle cx='60' cy='40' r='5' fill='%23d4af37'/%3E%3Ccircle cx='80' cy='60' r='4' fill='%23d4af37'/%3E%3Ccircle cx='40' cy='80' r='4' fill='%23d4af37'/%3E%3C/svg%3E");
}

.corner-tr {
  top: 20px;
  right: 20px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 120'%3E%3Cpath d='M20,20 L40,20 Q60,10 80,20 L100,20 L100,40 Q110,60 100,80 L100,100 L80,100 Q60,110 40,100 L20,100 L20,80 Q10,60 20,40 Z' fill='%235d4037' transform='scale(-1,1) translate(-120,0)'/%3E%3Cpath d='M30,30 L50,30 Q65,20 80,30 L90,30 L90,50 Q100,65 90,80 L90,90 L80,90 Q65,100 50,90 L30,90 L30,80 Q20,65 30,50 Z' fill='%238d6e63' transform='scale(-1,1) translate(-120,0)'/%3E%3Ccircle cx='60' cy='40' r='5' fill='%23d4af37'/%3E%3Ccircle cx='40' cy='60' r='4' fill='%23d4af37'/%3E%3Ccircle cx='80' cy='80' r='4' fill='%23d4af37'/%3E%3C/svg%3E");
}

.corner-bl {
  bottom: 20px;
  left: 20px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 120'%3E%3Cpath d='M20,20 L40,20 Q60,10 80,20 L100,20 L100,40 Q110,60 100,80 L100,100 L80,100 Q60,110 40,100 L20,100 L20,80 Q10,60 20,40 Z' fill='%235d4037' transform='scale(1,-1) translate(0,-120)'/%3E%3Cpath d='M30,30 L50,30 Q65,20 80,30 L90,30 L90,50 Q100,65 90,80 L90,90 L80,90 Q65,100 50,90 L30,90 L30,80 Q20,65 30,50 Z' fill='%238d6e63' transform='scale(1,-1) translate(0,-120)'/%3E%3Ccircle cx='60' cy='80' r='5' fill='%23d4af37'/%3E%3Ccircle cx='80' cy='60' r='4' fill='%23d4af37'/%3E%3Ccircle cx='40' cy='40' r='4' fill='%23d4af37'/%3E%3C/svg%3E");
}

.corner-br {
  bottom: 20px;
  right: 20px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 120'%3E%3Cpath d='M20,20 L40,20 Q60,10 80,20 L100,20 L100,40 Q110,60 100,80 L100,100 L80,100 Q60,110 40,100 L20,100 L20,80 Q10,60 20,40 Z' fill='%235d4037' transform='scale(-1,-1) translate(-120,-120)'/%3E%3Cpath d='M30,30 L50,30 Q65,20 80,30 L90,30 L90,50 Q100,65 90,80 L90,90 L80,90 Q65,100 50,90 L30,90 L30,80 Q20,65 30,50 Z' fill='%238d6e63' transform='scale(-1,-1) translate(-120,-120)'/%3E%3Ccircle cx='60' cy='80' r='5' fill='%23d4af37'/%3E%3Ccircle cx='40' cy='60' r='4' fill='%23d4af37'/%3E%3Ccircle cx='80' cy='40' r='4' fill='%23d4af37'/%3E%3C/svg%3E");
}

// 装饰元素
.ornament {
  position: absolute;
  background-size: contain;
  background-repeat: no-repeat;
  z-index: 2;
}

// 顶部装饰
.ornament-top-left {
  top: 25px;
  left: 150px;
  width: 100px;
  height: 40px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 40'%3E%3Cpath d='M0,20 Q20,5 40,20 T80,20 T100,20' fill='none' stroke='%235d4037' stroke-width='3'/%3E%3Ccircle cx='20' cy='15' r='4' fill='%23d4af37'/%3E%3Ccircle cx='60' cy='25' r='5' fill='%23d4af37'/%3E%3C/svg%3E");
}

.ornament-top-center {
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: 200px;
  height: 50px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 50'%3E%3Cellipse cx='100' cy='25' rx='90' ry='15' fill='%235d4037'/%3E%3Cpath d='M20,25 Q50,5 100,25 T180,25' fill='none' stroke='%238d6e63' stroke-width='2'/%3E%3Ccircle cx='50' cy='20' r='5' fill='%23d4af37'/%3E%3Ccircle cx='100' cy='30' r='6' fill='%23d4af37'/%3E%3Ccircle cx='150' cy='20' r='5' fill='%23d4af37'/%3E%3C/svg%3E");
}

.ornament-top-right {
  top: 25px;
  right: 150px;
  width: 100px;
  height: 40px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 40'%3E%3Cpath d='M0,20 Q20,5 40,20 T80,20 T100,20' fill='none' stroke='%235d4037' stroke-width='3'/%3E%3Ccircle cx='80' cy='15' r='4' fill='%23d4af37'/%3E%3Ccircle cx='40' cy='25' r='5' fill='%23d4af37'/%3E%3C/svg%3E");
}

// 右侧装饰
.ornament-right-top {
  top: 150px;
  right: 25px;
  width: 40px;
  height: 100px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 100'%3E%3Cpath d='M20,0 Q35,20 20,40 T20,80 T20,100' fill='none' stroke='%235d4037' stroke-width='3'/%3E%3Ccircle cx='25' cy='20' r='4' fill='%23d4af37'/%3E%3Ccircle cx='15' cy='60' r='5' fill='%23d4af37'/%3E%3C/svg%3E");
}

.ornament-right-center {
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
  width: 50px;
  height: 150px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 50 150'%3E%3Cellipse cx='25' cy='75' rx='15' ry='65' fill='%235d4037'/%3E%3Cpath d='M25,10 Q45,40 25,70 T25,140' fill='none' stroke='%238d6e63' stroke-width='2'/%3E%3Ccircle cx='30' cy='40' r='5' fill='%23d4af37'/%3E%3Ccircle cx='20' cy='90' r='6' fill='%23d4af37'/%3E%3Ccircle cx='30' cy='120' r='5' fill='%23d4af37'/%3E%3C/svg%3E");
}

.ornament-right-bottom {
  bottom: 150px;
  right: 25px;
  width: 40px;
  height: 100px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 100'%3E%3Cpath d='M20,0 Q5,20 20,40 T20,80 T20,100' fill='none' stroke='%235d4037' stroke-width='3'/%3E%3Ccircle cx='15' cy='20' r='4' fill='%23d4af37'/%3E%3Ccircle cx='25' cy='60' r='5' fill='%23d4af37'/%3E%3C/svg%3E");
}

// 底部装饰
.ornament-bottom-left {
  bottom: 25px;
  left: 150px;
  width: 100px;
  height: 40px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 40'%3E%3Cpath d='M0,20 Q20,35 40,20 T80,20 T100,20' fill='none' stroke='%235d4037' stroke-width='3'/%3E%3Ccircle cx='20' cy='25' r='4' fill='%23d4af37'/%3E%3Ccircle cx='60' cy='15' r='5' fill='%23d4af37'/%3E%3C/svg%3E");
}

.ornament-bottom-center {
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: 200px;
  height: 50px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 50'%3E%3Cellipse cx='100' cy='25' rx='90' ry='15' fill='%235d4037'/%3E%3Cpath d='M20,25 Q50,45 100,25 T180,25' fill='none' stroke='%238d6e63' stroke-width='2'/%3E%3Ccircle cx='50' cy='30' r='5' fill='%23d4af37'/%3E%3Ccircle cx='100' cy='20' r='6' fill='%23d4af37'/%3E%3Ccircle cx='150' cy='30' r='5' fill='%23d4af37'/%3E%3C/svg%3E");
}

.ornament-bottom-right {
  bottom: 25px;
  right: 150px;
  width: 100px;
  height: 40px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 40'%3E%3Cpath d='M0,20 Q20,35 40,20 T80,20 T100,20' fill='none' stroke='%235d4037' stroke-width='3'/%3E%3Ccircle cx='80' cy='25' r='4' fill='%23d4af37'/%3E%3Ccircle cx='40' cy='15' r='5' fill='%23d4af37'/%3E%3C/svg%3E");
}

// 左侧装饰
.ornament-left-top {
  top: 150px;
  left: 25px;
  width: 40px;
  height: 100px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 100'%3E%3Cpath d='M20,0 Q5,20 20,40 T20,80 T20,100' fill='none' stroke='%235d4037' stroke-width='3'/%3E%3Ccircle cx='15' cy='20' r='4' fill='%23d4af37'/%3E%3Ccircle cx='25' cy='60' r='5' fill='%23d4af37'/%3E%3C/svg%3E");
}

.ornament-left-center {
  top: 50%;
  left: 20px;
  transform: translateY(-50%);
  width: 50px;
  height: 150px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 50 150'%3E%3Cellipse cx='25' cy='75' rx='15' ry='65' fill='%235d4037'/%3E%3Cpath d='M25,10 Q5,40 25,70 T25,140' fill='none' stroke='%238d6e63' stroke-width='2'/%3E%3Ccircle cx='20' cy='40' r='5' fill='%23d4af37'/%3E%3Ccircle cx='30' cy='90' r='6' fill='%23d4af37'/%3E%3Ccircle cx='20' cy='120' r='5' fill='%23d4af37'/%3E%3C/svg%3E");
}

.ornament-left-bottom {
  bottom: 150px;
  left: 25px;
  width: 40px;
  height: 100px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 100'%3E%3Cpath d='M20,0 Q35,20 20,40 T20,80 T20,100' fill='none' stroke='%235d4037' stroke-width='3'/%3E%3Ccircle cx='25' cy='20' r='4' fill='%23d4af37'/%3E%3Ccircle cx='15' cy='60' r='5' fill='%23d4af37'/%3E%3C/svg%3E");
}

// 原神元素图标
.element-icon {
  position: absolute;
  width: 40px;
  height: 40px;
  background-size: contain;
  background-repeat: no-repeat;
  z-index: 4;
  opacity: 0.7;
  filter: drop-shadow(0 0 2px rgba(0, 0, 0, 0.5));
  transition: all 0.3s ease;

  &:hover {
    opacity: 1;
    transform: scale(1.1);
  }
}

.element-anemo {
  top: 30px;
  left: 30px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='45' fill='%235cccb6'/%3E%3Cpath d='M30,40 Q50,20 70,40 T90,60 M10,60 Q30,80 50,60 T90,60 M30,40 Q50,60 70,40 T90,60' stroke='white' stroke-width='4' fill='none'/%3E%3C/svg%3E");
}

.element-electro {
  top: 30px;
  right: 30px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='45' fill='%239c79eb'/%3E%3Cpath d='M30,30 L70,50 L50,70 L30,70 L50,50 Z' fill='white'/%3E%3C/svg%3E");
}

.element-dendro {
  bottom: 30px;
  left: 30px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='45' fill='%237ec236'/%3E%3Cpath d='M50,20 Q60,30 50,40 Q40,30 50,20 M50,40 Q60,50 50,60 Q40,50 50,40 M50,60 Q60,70 50,80 Q40,70 50,60' fill='white'/%3E%3C/svg%3E");
}

.element-hydro {
  bottom: 30px;
  right: 30px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='45' fill='%235096dd'/%3E%3Cpath d='M30,40 Q50,20 70,40 Q50,60 30,40 M30,60 Q50,40 70,60 Q50,80 30,60' fill='white'/%3E%3C/svg%3E");
}

.element-pyro {
  top: 50%;
  left: 5px;
  transform: translateY(-50%);
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='45' fill='%23e65f39'/%3E%3Cpath d='M50,30 Q60,40 50,50 Q40,40 50,30 M50,50 Q60,60 50,70 Q40,60 50,50' fill='white'/%3E%3C/svg%3E");
}

.element-cryo {
  top: 50%;
  right: 5px;
  transform: translateY(-50%);
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='45' fill='%239fd6ff'/%3E%3Cpath d='M30,50 L50,30 L70,50 L50,70 Z' fill='white'/%3E%3C/svg%3E");
}

.element-geo {
  top: 5px;
  left: 50%;
  transform: translateX(-50%);
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='45' fill='%23fabb3d'/%3E%3Cpath d='M30,60 L50,40 L70,60 L50,80 Z' fill='white'/%3E%3C/svg%3E");
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
}

// 添加纹理细节到画框背景
.frame::before {
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
  .frame {
    padding: 30px;
    min-height: 500px;
  }

  .corner {
    width: 80px;
    height: 80px;
  }

  .corner-tl,
  .corner-tr {
    top: 15px;
    left: 15px;
    right: 15px;
  }

  .corner-bl,
  .corner-br {
    bottom: 15px;
    left: 15px;
    right: 15px;
  }

  .ornament-top-left,
  .ornament-top-right,
  .ornament-bottom-left,
  .ornament-bottom-right {
    width: 60px;
    height: 25px;
    top: 20px;
    bottom: 20px;
  }

  .ornament-right-top,
  .ornament-right-bottom,
  .ornament-left-top,
  .ornament-left-bottom {
    width: 25px;
    height: 60px;
    left: 20px;
    right: 20px;
  }

  .ornament-top-center,
  .ornament-bottom-center {
    width: 120px;
    height: 35px;
  }

  .ornament-right-center,
  .ornament-left-center {
    width: 35px;
    height: 100px;
  }

  .frame-content {
    min-height: 400px;
  }

  .element-icon {
    width: 30px;
    height: 30px;
  }

  .element-anemo,
  .element-electro,
  .element-dendro,
  .element-hydro {
    top: 20px;
    bottom: 20px;
    left: 20px;
    right: 20px;
  }

  .element-pyro,
  .element-cryo {
    top: 50%;
    left: 0;
    right: 0;
  }

  .element-geo {
    top: 0;
    left: 50%;
  }
}
</style>
