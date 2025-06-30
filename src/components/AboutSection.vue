<template>
  <section id="about" class="relative flex items-center justify-center min-h-screen w-full overflow-hidden">
    <!-- Vidéo de fond -->
    <video autoplay loop muted playsinline class="absolute inset-0 w-full h-full object-cover z-0">
      <source src="@/assets/videos/SCENE_RENDER_RUCHE.mp4" type="video/mp4" />
      Votre navigateur ne supporte pas la vidéo HTML5.
    </video>
    <!-- Overlay sombre -->
    <div class="absolute inset-0 bg-neutral-800 z-10"></div>
    <!-- Contenu -->
    <div class="relative z-20 max-w-4xl mx-auto py-16 px-4 md:px-0 flex flex-col items-center text-center">
      <h3 class="text-3xl font-bold pb-8 text-white drop-shadow-lg" data-aos="fade-right">À propos</h3>
      <div class="flex flex-col md:flex-row gap-8 items-center justify-center w-full" data-aos="fade-up">
        <div class="flex-1 text-white text-xl font-normal drop-shadow">
          <p>
            Artiste 3D et VFX passionné par la création d'expériences visuelles uniques.<br>
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
    </div>
  </section>
</template>
