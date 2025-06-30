<script setup>
import { ref } from 'vue';

// Regroupement des images par projet (exemple basé sur les noms)
const projects = [
  {
    title: 'Montre',
    description: 'Modélisation et rendu de montre.',
    images: [
      new URL('@/assets/images/Montre_Render_1.jpg', import.meta.url).href,
      new URL('@/assets/images/Montre_Render_2.jpg', import.meta.url).href,
      new URL('@/assets/images/Montre_Render_3.jpg', import.meta.url).href,
      new URL('@/assets/images/Modélisation_Montre.PNG', import.meta.url).href,
    ],
    currentIndex: ref(0)
  },
  {
    title: 'Ruche',
    description: 'Modélisation et rendu de ruche.',
    images: [
      new URL('@/assets/videos/SCENE_RENDER_RUCHE.mp4', import.meta.url).href,
      new URL('@/assets/images/Modélisation_Ruche.PNG', import.meta.url).href,
    ],
    currentIndex: ref(0)
  },
  {
    title: 'Marteau',
    description: 'Modélisation et rendu de marteau.',
    images: [
      new URL('@/assets/images/Marteau_Render_1.jpg', import.meta.url).href,
      new URL('@/assets/images/Marteau_Render_2.jpg', import.meta.url).href,
      new URL('@/assets/images/Modélisation_Marteau.PNG', import.meta.url).href,
    ],
    currentIndex: ref(0)
  },
  {
    title: 'Robot',
    description: 'Modélisation de robot.',
    images: [
      new URL('@/assets/images/Drone_Render_V1.jpg', import.meta.url).href,
      new URL('@/assets/images/Drone_Render_V2.jpg', import.meta.url).href,
      new URL('@/assets/images/Modélisation_Robot.PNG', import.meta.url).href,
      new URL('@/assets/images/Modélisation_Robot2.PNG', import.meta.url).href,
    ],
    currentIndex: ref(0)
  },
  {
    title: 'Gun',
    description: 'Modélisation et rendu d’arme.',
    images: [
      new URL('@/assets/images/Gun_Render_1.jpg', import.meta.url).href,
      new URL('@/assets/images/Gun_Render_2.jpg', import.meta.url).href,
      new URL('@/assets/images/Gun_Render_3.jpg', import.meta.url).href,
      new URL('@/assets/images/Gun_Render_4.jpg', import.meta.url).href,
      new URL('@/assets/images/Modélisation_Gun.PNG', import.meta.url).href,
    ],
    currentIndex: ref(0)
  },
  {
    title: 'Enfumoir',
    description: 'Modélisation et rendu d’enfumoir.',
    images: [
      new URL('@/assets/images/Enfumoir.jpg', import.meta.url).href,
      new URL('@/assets/images/Modélisation_Enfumoir.PNG', import.meta.url).href,
    ],
    currentIndex: ref(0)
  }
];

function handleMouseMove(e, project) {
  const rect = e.currentTarget.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const percent = x / rect.width;
  const idx = Math.floor(percent * project.images.length);
  project.currentIndex.value = Math.min(Math.max(idx, 0), project.images.length - 1);
}

function handleMouseLeave(project) {
  project.currentIndex.value = 0;
}
</script>

<template>
  <section id="work" class="relative min-h-screen w-full flex flex-col items-center justify-center text-center py-16 px-4 md:px-8 xl:px-20 overflow-hidden">
    <!-- Vidéo de fond section projets -->
    <video autoplay loop muted playsinline class="absolute inset-0 invert w-full h-full object-cover z-0 pointer-events-none">
      <source src="@/assets/videos/Drake_Rigging_Anim_Texture.mp4" type="video/mp4" />
      Votre navigateur ne supporte pas la vidéo HTML5.
    </video>
    <!-- Overlay sombre -->
    <div class="absolute inset-0 bg-black/40 z-10 pointer-events-none"></div>
    <div class="relative z-20 w-full">
      <h3 class="text-3xl font-bold mb-12 pb-12 text-white drop-shadow-lg" data-aos="fade-right">Projets de modélisation</h3>
      <div class="w-full grid grid-cols-1 md:grid-cols-2 gap-24">
        <div v-for="(project, i) in projects" :key="i" class="bg-white/60 border border-gray-200 rounded-xl shadow-md p-4 flex flex-col items-center w-full" data-aos="fade-up">
          <div
            class="w-full aspect-[3/2] bg-gray-100 rounded-lg flex items-center justify-center mb-4 border border-gray-200 overflow-hidden cursor-pointer transition-all duration-200"
            @mousemove="e => handleMouseMove(e, project)"
            @mouseleave="() => handleMouseLeave(project)"
          >
            <template v-if="project.images[project.currentIndex.value].endsWith('.mp4')">
              <video
                :src="project.images[project.currentIndex.value]"
                class="object-cover w-full h-full"
                autoplay
                loop
                muted
                playsinline
              ></video>
            </template>
            <template v-else>
              <img
                :src="project.images[project.currentIndex.value]"
                class="object-cover w-full h-full transition-all duration-200 select-none"
                draggable="false"
                :alt="project.title"
              />
            </template>
          </div>
          <div class="flex justify-center items-center py-3 gap-2 mb-2">
            <span
              v-for="(img, idx) in project.images"
              :key="idx"
              :class="[
                'inline-block rounded-full transition-all duration-200',
                project.currentIndex.value === idx
                  ? 'bg-sky-600 w-3 h-3'
                  : 'bg-gray-300 w-2 h-2 opacity-70'
              ]"
            ></span>
          </div>
          <h4 class="font-semibold text-lg mb-1 text-black">{{ project.title }}</h4>
          <p class="text-gray-500 text-sm">{{ project.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
