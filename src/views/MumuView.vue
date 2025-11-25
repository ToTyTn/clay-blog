<template>
  <div class="background-container">
    <div class="background-content">
      <div class="frame-border">
        <!-- 顶部装饰 -->
        <div class="ornament ornament-top-left"></div>
        <!-- <div class="ornament ornament-top-center"></div> -->
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
      </div>

      <!-- 保留原有内容 -->
      <div class="as">
        <h2>目录</h2>
        <div class="time">
          <p @click="t1">2025.11.20</p>
          <p @click="goToCinnamoroll">2025.11.21</p>
          <p @click="goToRaccoon">2025.11.22</p>
          <p @click="goToGenshin">2025.11.23</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MumuView",
  data() {
    return {};
  },
  methods: {
    t1() {
      this.$router.push({
        path: "/nezha",
      });
    },
    goToCinnamoroll() {
      this.$router.push({
        path: "/cinnamoroll",
      });
    },
    goToRaccoon() {
      this.$router.push({
        path: "/raccoon",
      });
    },
    goToGenshin() {
      this.$router.push({
        path: "/genshin",
      });
    }
  },
};
</script>

<style lang="less" scoped>
.background-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 20px;
  background: linear-gradient(135deg, #1f122d 0%, #2c1e19 100%);
  font-family: "Times New Roman", serif;
}

.background-content {
  width: 100%;
  max-width: 1200px;
  background: #f0e5d0;
  box-shadow: 0 0 0 8px #5d4037, 0 0 0 16px #8d6e63, 0 0 0 24px #a1887f, 0 20px 40px rgba(0, 0, 0, 0.7);
  border-radius: 4px;
  overflow: hidden;
  min-height: 600px;
  padding: 30px;
  position: relative;
  display: flex;
  justify-content: center;
  font-size: 30px;
}

.as {
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 10;
  position: relative;
  padding: 0 20px;
  h2 {
    padding-top: 20px;
  }
  .time {
    width: 500px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;

    p {
      font-size: 19px;
      margin: 10px;
      border-bottom: 1px solid black;
    }
  }
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

@media (max-width: 768px) {
  .background-content {
    padding: 20px;
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

  .as .time {
    width: 100%;
    max-width: 300px;
  }

  .as .time p {
    margin: 20px;
  }
}
</style>
