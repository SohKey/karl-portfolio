<template>
    <section>
        <div class="min-h-screen flex flex-col items-center justify-center bg-white bg-opacity-80 text-black">
            <video autoplay loop muted playsinline
                class="absolute inset-0 invert w-full h-full object-cover z-0 pointer-events-none">
                <source src="@/assets/videos/Drake_Rigging_Anim_Texture.mp4" type="video/mp4" />
                Votre navigateur ne supporte pas la vidéo HTML5.
            </video>
            <div class="relative z-20 w-full">

                <h1 class="text-4xl font-bold mb-4">Portal Runner</h1>
                <p class="text-lg max-w-2xl text-center">Projet 3D/VFX : Portal Runner. Présentation détaillée, images,
                    vidéos et explications à venir.</p>
            </div>
        </div>
    </section>

    <section class="relative flex items-center justify-center min-h-[180vh] w-full overflow-hidden">
        <!-- Vidéo de fond -->
        <video autoplay loop muted playsinline class="absolute inset-0 w-full h-full object-cover z-0">
            <source :src="viewportVideo" type="video/mp4" />
            Votre navigateur ne supporte pas la vidéo HTML5.
        </video>
        <!-- Overlay sombre -->
        <div class="absolute inset-0 bg-black/20 z-10"></div>
    </section>

    <section>
        <div class="min-h-screen flex flex-col items-center justify-center bg-white bg-opacity-80 text-black">
            <div class="relative z-20 w-full">

                <h1 class="text-4xl font-bold mb-4">Portal Runner</h1>
                <p class="text-lg max-w-2xl text-center">Projet 3D/VFX : Portal Runner. Présentation détaillée, images,
                    vidéos et explications à venir.</p>
            </div>
        </div>
    </section>

</template>

<script setup>
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap';

const isShrunk = ref(false);

// Import dynamique du chemin vidéo pour compatibilité Vite
const heroVideo = new URL('@/assets/videos/Karl_Tourelle_Render_03.mp4', import.meta.url).href;
const viewportVideo = new URL('@/assets/videos/ViewPort_RenduFinal.mp4', import.meta.url).href;
</script>
