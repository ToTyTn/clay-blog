<template>
  <div class="lottery-container">
    <div class="lottery-header">
      <h1>角色抽卡系统</h1>
      <p>抽取项目中的角色卡牌</p>
    </div>

    <div class="lottery-content">
      <!-- 抽奖结果展示区 -->
      <div class="result-section" v-if="drawResults.length > 0">
        <h2>抽卡结果</h2>
        <div class="cards-container" ref="cardsContainer">
          <div
            v-for="(card, index) in drawResults"
            :key="index"
            :ref="
              (el) => {
                cardRefs[index] = el;
              }
            "
            class="card"
            :class="{
              purple: card.rarity === 'purple',
              blue: card.rarity === 'blue',
              yellow: card.rarity === 'yellow',
              empty: card.type === 'empty',
            }"
            @click="goToCharacter(card)"
          >
            <div class="card-inner">
              <div class="card-front">
                <div class="card-front-content"></div>
              </div>
              <div class="card-back" v-if="card.type !== 'empty'">
                <div class="card-content">
                  <img :src="card.image" :alt="card.name" class="card-image" />
                </div>
              </div>
              <div class="card-back empty-card" v-else>
                <div class="empty-content">空</div>
              </div>
            </div>
          </div>
        </div>

        <!-- 再来一次按钮 -->
        <div class="retry-section" v-if="drawResults.length > 0">
          <button @click="retryDraw" class="retry-button">再来一次</button>
        </div>
      </div>

      <!-- 抽奖按钮区 -->
      <div class="controls" v-if="drawResults.length === 0">
        <button @click="draw(1)" class="draw-button single-draw">单抽</button>
        <button @click="draw(10)" class="draw-button multi-draw">十连抽</button>
      </div>

      <!-- 烟花特效容器 -->
      <div ref="fireworksContainer" class="fireworks-container"></div>

      <!-- 特殊展示卡片 -->
      <div v-if="specialCard" ref="specialCardRef" class="special-card" :class="specialCard.rarity" @click="closeSpecialCard">
        <div class="card-inner">
          <div class="card-front">
            <div class="card-front-content"></div>
          </div>
          <div class="card-back">
            <div class="card-content">
              <img :src="specialCard.image" :alt="specialCard.name" class="card-image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { gsap } from "gsap";
import { useRouter } from "vue-router";

export default {
  name: "LotteryView",
  setup() {
    const router = useRouter();

    // 卡牌数据
    const characters = [
      { name: "哪吒", image: "https://img.starrycognition.cn/PicGo/%E5%9B%BE%E5%B1%82%202.png", rarity: "blue", path: "/nezha" },
      { name: "熊熊", image: "https://img.starrycognition.cn/PicGo/%E5%9B%BE%E5%B1%82%203.png", rarity: "blue", path: "/bear" },
      { name: "哆啦A梦", image: "https://img.starrycognition.cn/PicGo/%E5%9B%BE%E5%B1%82%204.png", rarity: "blue", path: "/doraemon" },
      { name: "玉桂狗", image: "https://img.starrycognition.cn/PicGo/%E5%9B%BE%E5%B1%82%205.png", rarity: "purple", path: "/cinnamoroll" },
      { name: "喜羊羊", image: "https://img.starrycognition.cn/PicGo/图层 6.png", rarity: "purple", path: "/PleasantGoat" },
      { name: "万圣节", image: "https://img.starrycognition.cn/PicGo/图层 7.png", rarity: "purple", path: "/halloween" },
      { name: "浣熊", image: "https://img.starrycognition.cn/PicGo/xiaohuanx.png", rarity: "purple", path: "/raccoon" },
      { name: "帕朵菲利", image: "https://img.starrycognition.cn/PicGo/pa.png", rarity: "purple", path: "/paddog" },
      { name: "神里绫华", image: "https://img.starrycognition.cn/PicGo/she.png", rarity: "yellow", path: "/genshin" },
    ];

    // 空卡
    const emptyCard = { type: "empty" };

    // 抽卡结果
    const drawResults = ref([]);

    // 卡牌引用
    const cardRefs = ref([]);

    // 卡牌容器引用
    const cardsContainer = ref(null);

    // 烟花容器引用
    const fireworksContainer = ref(null);

    // 特殊展示卡片引用
    const specialCardRef = ref(null);

    // 特殊卡片（用于展示五星角色）
    const specialCard = ref(null);

    // 保底计数器
    const guaranteedCounter = ref(0);

    // 跳转到角色页面
    const goToCharacter = (card) => {
      if (card.path) {
        router.push(card.path);
      }
    };

    // 关闭特殊卡片展示
    const closeSpecialCard = () => {
      specialCard.value = null;
    };

    // 再来一次
    const retryDraw = () => {
      drawResults.value = [];
      specialCard.value = null;
    };

    // 抽卡函数
    const draw = (count) => {
      // 清空之前的结果
      drawResults.value = [];
      specialCard.value = null;

      // 生成抽卡结果
      for (let i = 0; i < count; i++) {
        // 有一定概率抽到空卡
        if (Math.random() < 0.3) {
          // 30%概率抽到空卡
          drawResults.value.push({ ...emptyCard });
        } else {
          let character;

          // 检查是否触发保底机制
          if (guaranteedCounter.value >= 10) {
            // 保底机制：十次十连后必定出现神里绫华
            character = characters.find((char) => char.name === "神里绫华");
            guaranteedCounter.value = 0; // 重置计数器
          } else {
            // 根据概率决定稀有度
            const rarityRoll = Math.random();

            // 提高获得五星角色的概率（从2%提高到5%）
            if (rarityRoll < 0.05) {
              // 查找是否已经抽到过神里绫华
              const isKamisatoDrawn = drawResults.value.some((card) => card.name === "神里绫华");

              // 如果还没抽到过神里绫华，则有可能抽到她
              if (!isKamisatoDrawn && Math.random() < 0.5) {
                character = characters.find((char) => char.name === "神里绫华");
                guaranteedCounter.value = 0; // 抽到五星重置计数器
              } else {
                // 否则从其他四星角色中随机选择
                const purpleCharacters = characters.filter((char) => char.rarity === "purple" || char.rarity === "blue");
                character = purpleCharacters[Math.floor(Math.random() * purpleCharacters.length)];
              }
            } else {
              // 95%概率获得四星角色
              const purpleCharacters = characters.filter((char) => char.rarity === "purple" || char.rarity === "blue");
              character = purpleCharacters[Math.floor(Math.random() * purpleCharacters.length)];
            }
          }

          drawResults.value.push({
            ...character,
            flipped: false,
          });
        }
      }

      // 增加保底计数器
      guaranteedCounter.value += 1;

      // 如果是十连抽，执行特殊动画
      if (count === 10) {
        animateMultiDraw();
      } else {
        // 单抽动画
        setTimeout(() => {
          animateSingleDraw();
        }, 50);
      }
    };

    // 单抽动画
    const animateSingleDraw = () => {
      const card = cardRefs.value[0];
      if (!card) return;

      // 翻牌动画
      gsap.to(card, {
        duration: 0.8,
        rotationY: 0, // 不翻转
        ease: "power2.out",
        onStart: () => {
          // 添加轻微的弹性效果
          gsap.to(card, {
            duration: 0.2,
            scale: 1.1,
            yoyo: true,
            repeat: 1,
          });
        },
        onComplete: () => {
          // 检查是否抽到了神里绫华，如果是则播放烟花效果
          if (drawResults.value[0].name === "神里绫华") {
            playFireworks();
            showSpecialCard(drawResults.value[0]);
          }
        },
      });
    };

    // 十连抽动画
    const animateMultiDraw = () => {
      // 确保DOM已更新
      setTimeout(() => {
        const cards = cardRefs.value;
        if (!cards || cards.length !== 10) return;

        // 计算最终位置 - 根据屏幕宽度调整布局
        const finalPositions = [];
        const isMobile = window.innerWidth <= 768;
        const columns = isMobile ? 3 : 5;
        const cardSpacingX = isMobile ? 120 : 170;
        const cardSpacingY = isMobile ? 180 : 230;

        for (let i = 0; i < 10; i++) {
          finalPositions.push({
            x: ((i % columns) - Math.floor(columns / 2)) * cardSpacingX,
            y: Math.floor(i / columns) * cardSpacingY,
          });
        }

        // 初始位置都在底部中心叠在一起
        gsap.set(cards, {
          x: 0,
          y: 300,
          rotation: gsap.utils.random(-10, 10),
          scale: 0.8,
          opacity: 0,
          zIndex: (i) => 10 - i,
        });

        // 从底部弹出并展开
        gsap.to(cards, {
          duration: 1,
          y: 0,
          opacity: 1,
          scale: 1,
          rotation: 0,
          stagger: 0.05,
          ease: "elastic.out(1, 0.5)",
          onComplete: () => {
            // 展开到指定位置
            gsap.to(cards, {
              duration: 1,
              x: (i) => finalPositions[i].x,
              y: (i) => finalPositions[i].y,
              ease: "back.out(1.5)",
              onComplete: () => {
                // 检查是否有五星角色，播放烟花
                let yellowIndices = [];
                drawResults.value.forEach((card, index) => {
                  if (card.name === "神里绫华") {
                    yellowIndices.push(index);
                  }
                });

                if (yellowIndices.length > 0) {
                  playFireworks();
                  setTimeout(() => {
                    showSpecialCard(drawResults.value[yellowIndices[0]]);
                  }, 500);
                }
              },
            });
          },
        });
      }, 50);
    };

    // 显示特殊卡片（五星角色居中展示）
    const showSpecialCard = (card) => {
      specialCard.value = card;

      // 等待DOM更新
      setTimeout(() => {
        if (!specialCardRef.value) return;

        // 初始状态
        gsap.set(specialCardRef.value, {
          scale: 0,
          rotation: 360,
        });

        // 放大并旋转到中心
        gsap.to(specialCardRef.value, {
          duration: 1,
          scale: 1,
          rotation: 0,
          ease: "elastic.out(1, 0.5)",
        });
      }, 50);
    };

    // 播放烟花效果
    const playFireworks = () => {
      const container = fireworksContainer.value;
      if (!container) return;

      // 创建多个烟花粒子
      for (let i = 0; i < 100; i++) {
        const particle = document.createElement("div");
        particle.className = "firework-particle";

        // 随机颜色
        const colors = ["#ffeb3b", "#f44336", "#4caf50", "#2196f3", "#9c27b0", "#ff9800"];
        particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

        // 随机大小
        const size = Math.random() * 15 + 5;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;

        container.appendChild(particle);

        // 动画
        gsap.fromTo(
          particle,
          {
            x: 0,
            y: 0,
            opacity: 1,
            scale: 1,
          },
          {
            x: (Math.random() - 0.5) * 800,
            y: (Math.random() - 0.5) * 800,
            opacity: 0,
            scale: 0,
            duration: 2 + Math.random() * 1,
            ease: "power2.out",
            onComplete: () => {
              if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
              }
            },
          }
        );
      }
    };

    // 初始化
    onMounted(() => {
      // 设置3D透视
      gsap.set(".cards-container", {
        perspective: 1000,
      });
    });

    return {
      drawResults,
      cardRefs,
      cardsContainer,
      fireworksContainer,
      specialCardRef,
      specialCard,
      draw,
      goToCharacter,
      closeSpecialCard,
      retryDraw,
    };
  },
};
</script>

<style lang="less" scoped>
.lottery-container {
  min-height: 100vh;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  color: white;
  font-family: "Arial", sans-serif;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  overflow: hidden;
}

.lottery-header {
  text-align: center;
  margin-bottom: 30px;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 10px;
    color: #ffd700;
    text-shadow: 0 0 10px rgba(255, 215, 0, 0.5);
  }

  p {
    font-size: 1.2rem;
    opacity: 0.8;
  }
}

.lottery-content {
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.result-section {
  margin-bottom: 40px;
  width: 100%;

  h2 {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 30px;
    color: #4fc3f7;
  }
}

.cards-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-bottom: 40px;
  position: relative;
  min-height: 500px;
  align-items: center;
  justify-content: center;
}

.card {
  width: 150px;
  height: 220px;
  cursor: pointer;
  perspective: 1000px;
  position: absolute;

  &.blue {
    .card-back {
      background: linear-gradient(135deg, #1976d2, #0d47a1);
      border: 2px solid #64b5f6;
    }
  }

  &.purple {
    .card-back {
      background: linear-gradient(135deg, #7b1fa2, #4a148c);
      border: 2px solid #ce93d8;
    }
  }

  &.yellow {
    .card-back {
      background: linear-gradient(135deg, #ff8f00, #ff6f00);
      border: 2px solid #ffd54f;
      box-shadow: 0 0 20px rgba(255, 215, 0, 0.5);
    }
  }

  &.empty {
    .card-back {
      background: linear-gradient(135deg, #795548, #4e342e);
      border: 2px solid #a1887f;
    }
  }
}

.card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  transform: rotateY(0deg);
}

.card-front,
.card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.card-front {
  background: #000000;
  border: 2px solid #4a4a8a;
  transform: rotateY(0deg);
}

.card-back {
  transform: rotateY(0deg);
}

.card-front-content,
.card-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  width: 100%;
  height: 100%;
}

.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.empty-card {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: bold;
  color: #bdbdbd;
}

.card-name {
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 5px;
  color: white;
  text-shadow: 0 0 3px rgba(0, 0, 0, 0.8);
}

.card-rarity {
  font-size: 0.9rem;
  padding: 3px 10px;
  border-radius: 10px;
  font-weight: bold;

  &.blue {
    background-color: #2196f3;
    color: white;
  }

  &.purple {
    background-color: #9c27b0;
    color: white;
  }

  &.yellow {
    background-color: #ffeb3b;
    color: #333;
  }
}

.controls {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 30px;
  flex-wrap: wrap;
}

.draw-button {
  padding: 15px 30px;
  font-size: 1.2rem;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: bold;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);

  &.single-draw {
    background: linear-gradient(45deg, #2196f3, #21cbf3);
    color: white;

    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 6px 20px rgba(33, 150, 243, 0.6);
    }
  }

  &.multi-draw {
    background: linear-gradient(45deg, #9c27b0, #e040fb);
    color: white;

    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 6px 20px rgba(156, 39, 176, 0.6);
    }
  }

  &:active {
    transform: translateY(1px);
  }
}

.fireworks-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1000;
}

.firework-particle {
  position: absolute;
  top: 50%;
  left: 50%;
  border-radius: 50%;
  pointer-events: none;
}

.special-card {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 200px;
  height: 300px;
  cursor: pointer;
  perspective: 1000px;
  z-index: 2000;

  &.blue {
    .card-back {
      background: linear-gradient(135deg, #1976d2, #0d47a1);
      border: 2px solid #64b5f6;
    }
  }

  &.purple {
    .card-back {
      background: linear-gradient(135deg, #7b1fa2, #4a148c);
      border: 2px solid #ce93d8;
    }
  }

  &.yellow {
    .card-back {
      background: linear-gradient(135deg, #ff8f00, #ff6f00);
      border: 2px solid #ffd54f;
      box-shadow: 0 0 30px rgba(255, 215, 0, 0.8);
    }
  }
}

.special-card .card-inner {
  transform: rotateY(0deg);
}

.special-card .card-front {
  transform: rotateY(0deg);
}

.special-card .card-back {
  transform: rotateY(0deg);
}

.retry-section {
  text-align: center;
  margin-top: 20px;
  position: relative;
  top: -500px;
}

.retry-button {
  padding: 12px 24px;
  background: linear-gradient(45deg, #43a047, #76ff03);
  color: white;
  border: none;
  border-radius: 30px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(67, 160, 71, 0.4);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(67, 160, 71, 0.6);
  }

  &:active {
    transform: translateY(1px);
  }
}

@media (max-width: 768px) {
  .lottery-header h1 {
    font-size: 2rem;
  }

  .cards-container {
    gap: 10px;
    min-height: 400px;
  }

  .card {
    width: 100px;
    height: 150px;
  }

  .controls {
    gap: 10px;
  }

  .draw-button {
    padding: 12px 20px;
    font-size: 1rem;
  }

  .special-card {
    width: 150px;
    height: 220px;
  }

  .result-section h2 {
    font-size: 1.5rem;
  }
}
</style>
