<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

const sections = [
  { id: 'about', label: 'À propos' },
  { id: 'work', label: 'Projets' },
  { id: 'contact', label: 'Contact' }
];

const activeIndex = ref(0);

function updateActiveSection() {
  const scrollY = window.scrollY;
  let found = 0;
  sections.forEach((section, idx) => {
    const el = document.getElementById(section.id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 100;
      if (scrollY >= top) {
        found = idx;
      }
    }
  });
  activeIndex.value = found;
}

onMounted(() => {
  window.addEventListener('scroll', updateActiveSection);
  updateActiveSection();
});
onUnmounted(() => {
  window.removeEventListener('scroll', updateActiveSection);
});

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
</script>

<template>
  <div class="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 flex items-center justify-center w-auto z-10">
    <template v-if="route.path !== '/'">
      <button
        @click="router.push('/')"
        class="flex items-center gap-2 cursor-pointer bg-white/80 text-sky-700 font-bold rounded-full px-8 py-4 shadow-lg border border-gray-400 hover:bg-sky-100 transition"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" /></svg>
        Retour à l'accueil
      </button>
    </template>
    <template v-else>
      <div class="flex flex-row items-center gap-8 bg-white/20 shadow-lg rounded-full px-8 py-4 border border-gray-400">
        <template v-for="(section, idx) in sections" :key="section.id">
          <button
            :class="[
              'flex items-center group focus:outline-none',
              activeIndex === idx ? 'text-sky-600 font-bold' : 'text-gray-400'
            ]"
            @click="scrollToSection(section.id)"
          >
            <span
              :class="[
                'w-4 h-4 rounded-full border-2 mb-1',
                activeIndex === idx ? 'bg-sky-600 border-sky-600' : 'bg-white border-gray-300 group-hover:border-sky-400'
              ]"
            ></span>
            <span class="text-xs pl-2 md:text-sm whitespace-nowrap">{{ section.label }}</span>
          </button>
          <div v-if="idx < sections.length - 1" class="h-px w-8 bg-gray-200 mx-2"></div>
        </template>
      </div>
    </template>
  </div>
</template>
