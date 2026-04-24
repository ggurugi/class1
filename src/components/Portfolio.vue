<template>
  <div class="portfolio-container">
    <header class="hero">
      <h1>김디자인 (Kim Design)</h1>
      <p>한국의 미와 현대적 감각을 잇는 시각 디자이너</p>
    </header>

    <section class="gallery">
      <h2>포트폴리오</h2>
      <div class="projects-grid">
        <div v-for="project in projects" :key="project.id" class="project-card">
          <div class="project-image" :style="{ backgroundColor: project.color }">
            <!-- 이미지 플레이스홀더 대체 -->
            <span>{{ project.title }}</span>
          </div>
          <div class="project-info">
            <h3>{{ project.title }}</h3>
            <p>{{ project.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="contact-section">
      <ContactForm />
    </section>
  </div>
</template>

<script>
import ContactForm from './ContactForm.vue';

export default {
  name: 'Portfolio',
  components: {
    ContactForm
  },
  data() {
    return {
      projects: [
        { id: 1, title: '한글 타이포그래피 포스터', description: '전통 한글의 조형미를 현대적으로 재해석한 포스터 시리즈', color: '#ff7b54' },
        { id: 2, title: '전통 다과 브랜드 리뉴얼', description: '한국 전통 다과 브랜드의 로고 및 패키지 디자인 리뉴얼', color: '#ffb26b' },
        { id: 3, title: '서울 건축물 일러스트레이션', description: '서울의 대표적인 현대 및 전통 건축물 라인 드로잉', color: '#ffd56b' },
        { id: 4, title: '국악 공연 브로슈어', description: '퓨전 국악 공연을 위한 다국어 브로슈어 및 홍보물 디자인', color: '#939b62' }
      ]
    }
  }
}
</script>

<style scoped>
.portfolio-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  font-family: 'Noto Sans KR', sans-serif;
  color: #333;
}

.hero {
  text-align: center;
  padding: 100px 0;
  border-bottom: 1px solid #eee;
}

.hero h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.hero p {
  font-size: 1.5rem;
  color: #666;
}

.gallery {
  padding: 80px 0;
}

.gallery h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 40px;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
}

.project-card {
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0,0,0,0.05);
  transition: transform 0.3s ease;
}

.project-card:hover {
  transform: translateY(-5px);
}

.project-image {
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: 1.2rem;
}

.project-info {
  padding: 20px;
  background: white;
}

.project-info h3 {
  margin: 0 0 10px 0;
}

.project-info p {
  margin: 0;
  color: #666;
  font-size: 0.9rem;
  line-height: 1.5;
}

.contact-section {
  padding: 80px 0 120px;
  border-top: 1px solid #eee;
}
</style>
