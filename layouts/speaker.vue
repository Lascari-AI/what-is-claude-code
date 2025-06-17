<template>
  <div class="slidev-layout speaker h-full flex items-center">
    <div class="grid grid-cols-[1.2fr_1fr] gap-16 w-full max-w-7xl mx-auto px-12">
      <!-- Left side: Content -->
      <div class="flex flex-col justify-center space-y-8">
        <slot />
      </div>
      
      <!-- Right side: Image -->
      <div class="flex items-center justify-center">
        <div class="relative">
          <!-- Shadow effect -->
          <div class="absolute inset-0 bg-gradient-to-br from-primary-400/20 to-primary-600/20 rounded-[2.5rem] transform translate-x-4 translate-y-4 blur-xl"></div>
          <!-- Image container -->
          <div class="relative w-[420px] h-[420px] bg-gradient-to-br from-gray-100 to-gray-200 rounded-[2.5rem] overflow-hidden shadow-2xl">
            <slot name="image">
              <!-- Default placeholder if no image is provided -->
              <div class="w-full h-full flex items-center justify-center text-gray-400">
                <span class="text-xl">Speaker Image</span>
              </div>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.slidev-layout.speaker {
  @apply bg-gradient-to-br from-bone-white to-gray-50;
}

/* Enhanced typography for better readability */
.slidev-layout.speaker :deep(h1) {
  @apply text-5xl font-bold text-obsidian-black mb-2;
  font-family: 'StyreneB-Bold-Trial', system-ui, sans-serif;
  letter-spacing: -0.02em;
}

.slidev-layout.speaker :deep(h3) {
  @apply text-2xl font-semibold text-slate-steel mt-8 mb-4;
  font-family: 'StyreneB-Medium-Trial', system-ui, sans-serif;
}

.slidev-layout.speaker :deep(ul) {
  @apply space-y-3;
}

.slidev-layout.speaker :deep(li) {
  @apply text-lg leading-relaxed text-ash-graphite;
  font-family: 'StyreneA-Regular-Trial', system-ui, sans-serif;
}

.slidev-layout.speaker :deep(strong) {
  @apply text-iron-ochre font-semibold;
}

/* Subtle animation on hover */
.slidev-layout.speaker :deep(li) {
  @apply transition-all duration-200 ease-out;
}

.slidev-layout.speaker :deep(li:hover) {
  @apply translate-x-1;
}

/* Title section styling */
.slidev-layout.speaker :deep(.text-xl) {
  @apply text-2xl text-fog-grey;
  font-family: 'StyreneA-Regular-Trial', system-ui, sans-serif;
}
</style>
