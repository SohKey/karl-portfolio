<script setup>
// Import dynamique du chemin vidéo pour compatibilité Vite
const aboutVideo = new URL('@/assets/videos/SC05_Fourmi_V001.mp4', import.meta.url).href;
</script>

<template>
    <section>
        <div class="min-h-screen flex flex-col items-center justify-center bg-white bg-opacity-80 text-black">
            <div class="relative z-20 w-full justify-center items-center text-center">
                <h1 class="text-4xl font-bold mb-4">Ruche</h1>
                <p class="text-lg max-w-2xl text-center">Projet 3D/VFX : Ruche. Présentation détaillée, images,
                    vidéos et explications à venir.</p>
            </div>
        </div>
    </section>
    <section id="contact"
        class="relative min-h-[100vh] w-full flex flex-col items-center justify-center text-center overflow-hidden">
        <!-- Background image section only -->
        <video :src="aboutVideo" autoplay loop muted playsinline
            class="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none">
            Votre navigateur ne supporte pas la vidéo HTML5.
        </video>
        <!-- Overlay sombre section only -->
        <div class="absolute inset-0 bg-black/40 z-10 pointer-events-none"></div>
        <div
            class="relative z-20 w-full max-w-2xl mx-auto flex flex-col items-center justify-center py-16 px-4 md:px-0">
            <h3 class="text-3xl font-bold mb-8 text-white drop-shadow-lg" data-aos="fade-down">texte</h3>
        </div>
    </section>
    <section>
        <div class="min-h-screen flex flex-col items-center justify-center bg-white bg-opacity-80 text-black">
            <div class="relative z-20 w-full justify-center items-center text-center">
                <h1 class="text-4xl font-bold mb-4">Ruche</h1>
                <p class="text-lg max-w-2xl text-center">Projet 3D/VFX : Ruche. Présentation détaillée, images,
                    vidéos et explications à venir.</p>
            </div>
        </div>
    </section>
</template>
