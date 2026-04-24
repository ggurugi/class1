<template>
  <div class="contact-form-container">
    <h2>문의하기</h2>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="name">이름</label>
        <input type="text" id="name" v-model="formData.name" required />
      </div>
      <div class="form-group">
        <label for="email">이메일</label>
        <input type="email" id="email" v-model="formData.email" required />
      </div>
      <div class="form-group">
        <label for="message">문의 내용</label>
        <textarea id="message" v-model="formData.message" rows="5" required></textarea>
      </div>
      <button type="submit" class="submit-btn">보내기</button>
    </form>
    <p v-if="submitStatus === 'success'" class="success-msg">문의가 성공적으로 접수되었습니다.</p>
    <p v-if="submitStatus === 'error'" class="error-msg">오류가 발생했습니다. 다시 시도해 주세요.</p>
  </div>
</template>

<script>
export default {
  name: 'ContactForm',
  data() {
    return {
      formData: {
        name: '',
        email: '',
        message: ''
      },
      submitStatus: null // null, 'success', 'error'
    };
  },
  methods: {
    async submitForm() {
      try {
        // 실제 운영 환경에서는 여기에 API 호출 로직을 넣습니다.
        // 현재는 로컬 스토리지에 저장하여 문의 내용을 보관합니다.
        const inquiries = JSON.parse(localStorage.getItem('inquiries') || '[]');
        inquiries.push({ ...this.formData, date: new Date().toISOString() });
        localStorage.setItem('inquiries', JSON.stringify(inquiries));

        this.submitStatus = 'success';
        this.formData = { name: '', email: '', message: '' }; // 폼 초기화

        // 3초 후 성공 메시지 숨김
        setTimeout(() => {
          this.submitStatus = null;
        }, 3000);
      } catch (error) {
        console.error('Submission error:', error);
        this.submitStatus = 'error';
      }
    }
  }
}
</script>

<style scoped>
.contact-form-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 1.5rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
}

input, textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-family: inherit;
}

.submit-btn {
  width: 100%;
  padding: 1rem;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

.submit-btn:hover {
  background-color: #555;
}

.success-msg {
  color: green;
  margin-top: 1rem;
  text-align: center;
}

.error-msg {
  color: red;
  margin-top: 1rem;
  text-align: center;
}
</style>
