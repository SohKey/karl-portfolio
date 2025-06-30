<script setup>
// Import dynamique du chemin vidéo pour compatibilité Vite
const aboutVideo = new URL('@/assets/videos/SC05_Fourmi_V001.mp4', import.meta.url).href;
</script>

<template>
  <section id="contact" class="relative min-h-[100vh] w-full flex flex-col items-center justify-center text-center overflow-hidden">
    <!-- Background image section only -->
    <video :src="aboutVideo" autoplay loop muted playsinline class="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none">
      Votre navigateur ne supporte pas la vidéo HTML5.
    </video>
    <!-- Overlay sombre section only -->
    <div class="absolute inset-0 bg-black/40 z-10 pointer-events-none"></div>
    <div class="relative z-20 w-full max-w-2xl mx-auto flex flex-col items-center justify-center py-16 px-4 md:px-0">
      <h3 class="text-3xl font-bold mb-8 text-white drop-shadow-lg" data-aos="fade-down">Contact</h3>
      <div class="flex flex-col items-center gap-4 w-full" data-aos="fade-up">
        <p class="text-xl text-white drop-shadow">Intéressé par mon travail ? Contactez-moi !</p>
        <a href="mailto:karl.tourelle@email.com" class="inline-block mt-2 px-8 py-3 rounded-full bg-sky-600 text-white font-semibold shadow-lg hover:scale-105 transition-transform">Me contacter</a>
      </div>
    </div>
  </section>
</template>
