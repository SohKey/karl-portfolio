<template>
  <section class="relative flex items-center justify-center min-h-screen w-full overflow-hidden">
    <!-- Vidéo de fond -->
    <video autoplay loop muted playsinline class="absolute inset-0 w-full h-full object-cover z-0">
      <source :src="heroVideo" type="video/mp4" />
      Votre navigateur ne supporte pas la vidéo HTML5.
    </video>
    <!-- Overlay sombre -->
    <div class="absolute inset-0 bg-black/20 z-10"></div>
    <!-- Contenu -->
    <div
      class="relative z-20 flex flex-col items-center justify-center text-center w-full px-4 hero-anim"
      :style="isShrunk ? 'pointer-events:none;' : ''"
    >
      <h1 class="hero-title text-6xl md:text-8xl font-extrabold mb-6 text-white leading-tight drop-shadow-lg">Karl Tourelle</h1>
      <h2 class="hero-title text-5xl md:text-7xl font-extrabold mb-6 text-white leading-tight drop-shadow-lg">3D Artist & VFX Designer</h2>
      <p class="text-2xl md:text-3xl text-white max-w-2xl mx-auto font-medium drop-shadow" data-aos="fade-up" data-aos-delay="200">
        Création d'univers visuels uniques et immersifs
      </p>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap';

const isShrunk = ref(false);

// Import dynamique du chemin vidéo pour compatibilité Vite
const heroVideo = new URL('@/assets/videos/Karl_Tourelle_Render_03.mp4', import.meta.url).href;

onMounted(() => {
  setTimeout(() => {
    isShrunk.value = true;
    gsap.to('.hero-anim', {
      y: '-40vh',
      scale: 0.5,
      duration: 1.2,
      ease: 'power3.inOut',
    });
  }, 1000);
});
</script>
