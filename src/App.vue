<template>
  <div class="min-h-screen bg-white font-sans flex flex-col items-center relative">
    <ProgressBar />
    <template v-if="$route.path === '/'">
      <HeroSection />
      <AboutSection />
      <WorkSection />
      <ContactSection />
    </template>
    <template v-else>
      <router-view />
    </template>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { gsap } from 'gsap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ProgressBar from './components/ProgressBar.vue';
import HeroSection from './components/HeroSection.vue';
import AboutSection from './components/AboutSection.vue';
import WorkSection from './components/WorkSection.vue';
import ContactSection from './components/ContactSection.vue';

onMounted(() => {
  AOS.init({
    duration: 1000,
    once: true,
    offset: 50
  });
  gsap.from('.hero-title', {
    duration: 1.5,
    y: 50,
    opacity: 0,
    ease: 'power3.out'
  });
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;900&display=swap');
.font-sans {
  font-family: 'Inter', 'Poppins', 'Montserrat', Arial, sans-serif;
}
</style>
