---
theme: ../
layout: default
---

# Where Tools Sit on the Continuum

<div class="mb-6">
  <div class="flex justify-between items-center">
    <div class="text-left">
      <p class="text-xl font-bold text-rose-600">← Done-For-You</p>
      <p class="text-sm text-gray-600">Low control, High magic</p>
    </div>
    <div class="text-center">
      <p class="text-xl font-bold text-emerald-600">The Sweet Spot</p>
      <p class="text-sm text-gray-600">Agentic + Controllable</p>
    </div>
    <div class="text-right">
      <p class="text-xl font-bold text-sky-600">Done-With-You →</p>
      <p class="text-sm text-gray-600">High control, Low leverage</p>
    </div>
  </div>
</div>

<!-- Tool Spectrum Visualization -->
<div class="relative h-24 bg-gradient-to-r from-rose-200 via-emerald-200 to-sky-200 rounded-lg mb-8 shadow">
  <div class="absolute inset-0 flex items-center justify-between px-4">
    <!-- Done-For-You Tools -->
    <div class="flex flex-col space-y-2">
      <span class="text-xs font-semibold text-gray-800 bg-white px-2 py-1 rounded shadow-sm">V0</span>
      <span class="text-xs font-semibold text-gray-800 bg-white px-2 py-1 rounded shadow-sm">Devin</span>
      <span class="text-xs font-semibold text-gray-800 bg-white px-2 py-1 rounded shadow-sm">Bolt</span>
    </div>
    
    <!-- Sweet Spot -->
    <div class="flex flex-col items-center">
      <span class="text-sm font-bold text-gray-900 bg-white px-3 py-2 rounded border-2 border-emerald-500 shadow">Claude Code</span>
      <span class="text-xs font-semibold text-gray-800 bg-white px-2 py-1 rounded mt-2 shadow-sm">Windsurf*</span>
    </div>
    
    <!-- Done-With-You Tools -->
    <div class="flex flex-col space-y-2 items-end">
      <span class="text-xs font-semibold text-gray-800 bg-white px-2 py-1 rounded shadow-sm">Aider</span>
      <span class="text-xs font-semibold text-gray-800 bg-white px-2 py-1 rounded shadow-sm">Cursor</span>
      <span class="text-xs font-semibold text-gray-800 bg-white px-2 py-1 rounded shadow-sm">Copilot</span>
    </div>
  </div>
</div>

<div class="grid grid-cols-3 gap-6">
  <v-clicks>
  
  <!-- Done-For-You Analysis -->
  <div class="bg-rose-100 rounded-lg p-4 border-t-4 border-rose-500 shadow-sm">
    <h3 class="text-md font-bold text-rose-700 mb-3">Far Left Problems</h3>
    <div class="space-y-2 text-sm">
      <p>🎰 <span class="text-gray-700">Quality roulette</span></p>
      <p>📦 <span class="text-gray-700">Black box debugging</span></p>
      <p>🚫 <span class="text-gray-700">No mid-flight corrections</span></p>
      <p>🏗️ <span class="text-gray-700">"Vibe code" architecture</span></p>
    </div>
    <div class="mt-3 p-2 bg-white rounded shadow-sm">
      <p class="text-xs text-amber-700">Best for: Prototypes, demos, throwaway code</p>
    </div>
  </div>
  
  <!-- Sweet Spot Analysis -->
  <div class="bg-emerald-100 rounded-lg p-4 border-t-4 border-emerald-500 shadow-sm">
    <h3 class="text-md font-bold text-emerald-700 mb-3">Sweet Spot Benefits</h3>
    <div class="space-y-2 text-sm">
      <p>🤖 <span class="text-gray-700">Autonomous execution</span></p>
      <p>👁️ <span class="text-gray-700">Full visibility</span></p>
      <p>🎛️ <span class="text-gray-700">Granular control</span></p>
      <p>🔄 <span class="text-gray-700">Programmable workflows</span></p>
    </div>
    <div class="mt-3 p-2 bg-white rounded shadow-sm">
      <p class="text-xs text-amber-700">Best for: Production code, complex refactors, systematic tasks</p>
    </div>
  </div>
  
  <!-- Done-With-You Analysis -->
  <div class="bg-sky-100 rounded-lg p-4 border-t-4 border-sky-500 shadow-sm">
    <h3 class="text-md font-bold text-sky-700 mb-3">Far Right Limitations</h3>
    <div class="space-y-2 text-sm">
      <p>⏰ <span class="text-gray-700">Time intensive</span></p>
      <p>🧠 <span class="text-gray-700">High cognitive load</span></p>
      <p>🔄 <span class="text-gray-700">Manual orchestration</span></p>
      <p>📈 <span class="text-gray-700">Limited scale</span></p>
    </div>
    <div class="mt-3 p-2 bg-white rounded shadow-sm">
      <p class="text-xs text-amber-700">Best for: Precision edits, learning, pair programming</p>
    </div>
  </div>
  
  </v-clicks>
</div>

<v-click>
<div class="mt-6 p-4 bg-amber-50 rounded-lg shadow">
  <p class="text-sm text-gray-700 text-center">
    <span class="text-amber-700 font-semibold">*Note:</span> Tool positions approximate. Windsurf's "Cascade" mode shows promise for the sweet spot.
    The landscape evolves weekly. Focus on the principles, not specific tools.
  </p>
</div>
</v-click>

<!--
This isn't about declaring winners and losers. Every tool has its place.

But notice where Claude Code sits. It's found that sweet spot between autonomous power and engineering control.

The key insight: you don't have to choose between being replaced and being overwhelmed. The best tools amplify your expertise while respecting your standards.

And yes, this landscape will change. New tools will emerge. But the principles remain: seek tools that combine agency with transparency, power with control.
-->

