<template>
  <div class="slidev-layout title">
    <div class="flex flex-col items-center justify-center h-full px-8">
      <div class="relative mb-16">
        <!-- Shadow effect for title -->
        <div class="absolute inset-0 text-6xl font-bold text-center transform translate-y-2 translate-x-2 opacity-10 blur-sm">
          <slot name="title" />
        </div>
        <h1 class="relative text-7xl font-bold text-center leading-tight tracking-tight">
          <slot name="title" />
        </h1>
      </div>
      <h2 class="text-3xl text-center mb-16 max-w-3xl leading-relaxed">
        <slot name="subtitle" />
      </h2>
      <div class="relative">
        <!-- Shadow for QR box -->
        <div class="absolute inset-0 bg-gradient-to-br from-iron-ochre/20 to-primary-600/20 rounded-2xl transform translate-x-3 translate-y-3 blur-xl"></div>
        <div class="relative bg-gradient-to-br from-white to-bone-white p-8 rounded-2xl shadow-2xl">
          <div class="text-center mb-4 text-slate-steel font-medium">
            <slot name="qr-text">Scan to Follow Along</slot>
          </div>
          <div class="w-56 h-56 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center shadow-inner">
            <slot name="qr" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.slidev-layout.title {
  @apply bg-gradient-to-br from-bone-white via-gray-50 to-white;
}

.slidev-layout.title h1 {
  @apply text-obsidian-black;
  font-family: 'StyreneB-Black-Trial', system-ui, sans-serif;
  letter-spacing: -0.03em;
}

.slidev-layout.title h2 {
  @apply text-slate-steel;
  font-family: 'StyreneA-Regular-Trial', system-ui, sans-serif;
  font-weight: 400;
}

/* Animated gradient text effect on hover */
.slidev-layout.title h1:hover {
  @apply bg-gradient-to-r from-iron-ochre to-primary-500 bg-clip-text text-transparent transition-all duration-700;
}
</style>
</template>