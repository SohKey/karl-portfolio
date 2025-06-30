<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

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
  <div class="fixed right-6 top-1/2 -translate-y-1/2 z-30 flex flex-col items-center gap-8">
    <div class="flex flex-col items-center gap-6 bg-white/80 shadow-lg rounded-2xl px-4 py-6 border border-gray-100">
      <template v-for="(section, idx) in sections" :key="section.id">
        <button
          :class="[
            'flex flex-col items-center group focus:outline-none',
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
          <span class="text-xs md:text-sm whitespace-nowrap">{{ section.label }}</span>
        </button>
        <div v-if="idx < sections.length - 1" class="w-px h-8 bg-gray-200"></div>
      </template>
    </div>
  </div>
</template>
