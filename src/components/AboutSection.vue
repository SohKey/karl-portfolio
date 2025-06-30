<script setup>
// Import dynamique du chemin vidéo pour compatibilité Vite
const aboutVideo = new URL('@/assets/videos/SC05_Fourmi_V001.mp4', import.meta.url).href;
</script>

<template>
  <section id="about" class="relative flex items-center justify-center min-h-screen w-full overflow-hidden">
    <!-- Vidéo de fond
    <video :src="aboutVideo" autoplay loop muted playsinline class="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none">
      Votre navigateur ne supporte pas la vidéo HTML5.
    </video>
    -->
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
        <div class="flex-1 flex justify-center">
          <div class="w-40 h-40 rounded-full bg-gray-100/80 flex items-center justify-center shadow-lg border border-gray-200 overflow-hidden">
            <img
              src="@/assets/images/pp_karl.jpg"
              alt="Portrait de Karl Tourelle"
              class="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
      <!-- Ajout du texte et des boutons de navigation vers les projets environnement -->
      <div class="pt-26 flex flex-col items-center gap-4" data-aos="fade-up">
        <p class="text-lg text-white font-semibold mb-2">Découvrir mes projets environnement</p>
        <div class="flex flex-row gap-4">
          <RouterLink to="/portal-runner">
            <button class="px-6 py-2 bg-white/90 text-black rounded-lg shadow hover:bg-gray-200 font-bold transition cursor-pointer">Portal Runner</button>
          </RouterLink>
          <RouterLink to="/ruche">
            <button class="px-6 py-2 bg-white/90 text-black rounded-lg shadow hover:bg-gray-200 font-bold transition cursor-pointer">Ruche</button>
          </RouterLink>
          <RouterLink to="/winter">
            <button class="px-6 py-2 bg-white/90 text-black rounded-lg shadow hover:bg-gray-200 font-bold transition cursor-pointer">Winter</button>
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>
