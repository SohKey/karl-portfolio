<script setup>
// Import dynamique du chemin vidéo pour compatibilité Vite
const aboutVideo = new URL('@/assets/videos/SC05_Fourmi_V001.mp4', import.meta.url).href;
</script>

<template>
  <section id="about" class="relative flex items-center justify-center min-h-screen w-full overflow-hidden">
    <img
      src="@/assets/images/3D_environement_hiver.png"
      alt="Environnement 3D hiver"
      class="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
      draggable="false"
    />
    <!-- Overlay sombre -->
    <div class="absolute inset-0 bg-black/40 z-10 pointer-events-none"></div>
    <!-- Contenu -->
    <div class="relative z-20 max-w-4xl mx-auto py-16 px-4 md:px-0 flex flex-col items-center text-center gap-y-10">
      <h3 class="text-3xl font-bold pb-8 text-white drop-shadow-lg" data-aos="fade-right">À propos</h3>
      <div class="flex flex-col md:flex-row gap-8 items-center justify-center w-full" data-aos="fade-up">
        <div class="flex-1 text-white text-xl font-normal drop-shadow">
          <p>
            Artiste 3D et VFX passionné par la création d'expériences visuelles uniques.<br />
            <span class="block mt-2">Toujours à la recherche de nouveaux défis créatifs et techniques.</span>
          </p>
        </div>
      </div>
    </div>
  </section>
  <section id="about" class="relative flex items-center justify-center min-h-screen w-full overflow-hidden">
    <!-- Overlay sombre -->
    <div class="absolute inset-0 bg-black/60 z-10 pointer-events-none"></div>
    <!-- Contenu -->
    <div class="relative z-20 max-w-4xl mx-auto py-16 px-4 md:px-0 flex flex-col items-center text-center gap-y-10">
      <h3 class="text-3xl font-bold pb-8 text-white drop-shadow-lg" data-aos="fade-right">À propos</h3>
      <div class="flex flex-col md:flex-row gap-8 items-center justify-center w-full" data-aos="fade-up">
        <div class="flex-1 text-white text-xl font-normal drop-shadow">
          <p>
            Artiste 3D et VFX passionné par la création d'expériences visuelles uniques.<br />
            <span class="block mt-2">Toujours à la recherche de nouveaux défis créatifs et techniques.</span>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
