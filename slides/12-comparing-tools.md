---
layout: default
---

# Where Tools Sit on the Continuum

<div class="mb-6">
  <div class="flex justify-between items-center">
    <div class="text-left">
      <p class="text-xl font-bold text-crimson-signal">← Done-For-You</p>
      <p class="text-sm text-fog-grey">Low control, High magic</p>
    </div>
    <div class="text-center">
      <p class="text-xl font-bold text-signal-gold">The Sweet Spot</p>
      <p class="text-sm text-fog-grey">Agentic + Controllable</p>
    </div>
    <div class="text-right">
      <p class="text-xl font-bold text-deep-indigo">Done-With-You →</p>
      <p class="text-sm text-fog-grey">High control, Low leverage</p>
    </div>
  </div>
</div>

<!-- Tool Spectrum Visualization -->
<div class="relative h-24 bg-gradient-to-r from-crimson-signal via-signal-gold to-deep-indigo rounded-lg mb-8">
  <div class="absolute inset-0 flex items-center justify-between px-4">
    <!-- Done-For-You Tools -->
    <div class="flex flex-col space-y-2">
      <span class="text-xs font-semibold text-bone-white bg-obsidian-black px-2 py-1 rounded">V0</span>
      <span class="text-xs font-semibold text-bone-white bg-obsidian-black px-2 py-1 rounded">Devin</span>
      <span class="text-xs font-semibold text-bone-white bg-obsidian-black px-2 py-1 rounded">Bolt</span>
    </div>
    
    <!-- Sweet Spot -->
    <div class="flex flex-col items-center">
      <span class="text-sm font-bold text-bone-white bg-obsidian-black px-3 py-2 rounded border-2 border-signal-gold">Claude Code</span>
      <span class="text-xs font-semibold text-bone-white bg-obsidian-black px-2 py-1 rounded mt-2">Windsurf*</span>
    </div>
    
    <!-- Done-With-You Tools -->
    <div class="flex flex-col space-y-2 items-end">
      <span class="text-xs font-semibold text-bone-white bg-obsidian-black px-2 py-1 rounded">Aider</span>
      <span class="text-xs font-semibold text-bone-white bg-obsidian-black px-2 py-1 rounded">Cursor</span>
      <span class="text-xs font-semibold text-bone-white bg-obsidian-black px-2 py-1 rounded">Copilot</span>
    </div>
  </div>
</div>

<div class="grid grid-cols-3 gap-6">
  <v-clicks>
  
  <!-- Done-For-You Analysis -->
  <div class="bg-ash-graphite rounded-lg p-4 border-t-4 border-crimson-signal">
    <h3 class="text-md font-bold text-crimson-signal mb-3">Far Left Problems</h3>
    <div class="space-y-2 text-sm">
      <p>🎰 <span class="text-fog-grey">Quality roulette</span></p>
      <p>📦 <span class="text-fog-grey">Black box debugging</span></p>
      <p>🚫 <span class="text-fog-grey">No mid-flight corrections</span></p>
      <p>🏗️ <span class="text-fog-grey">"Vibe code" architecture</span></p>
    </div>
    <div class="mt-3 p-2 bg-obsidian-black rounded">
      <p class="text-xs text-iron-ochre">Best for: Prototypes, demos, throwaway code</p>
    </div>
  </div>
  
  <!-- Sweet Spot Analysis -->
  <div class="bg-ash-graphite rounded-lg p-4 border-t-4 border-signal-gold">
    <h3 class="text-md font-bold text-signal-gold mb-3">Sweet Spot Benefits</h3>
    <div class="space-y-2 text-sm">
      <p>🤖 <span class="text-fog-grey">Autonomous execution</span></p>
      <p>👁️ <span class="text-fog-grey">Full visibility</span></p>
      <p>🎛️ <span class="text-fog-grey">Granular control</span></p>
      <p>🔄 <span class="text-fog-grey">Programmable workflows</span></p>
    </div>
    <div class="mt-3 p-2 bg-obsidian-black rounded">
      <p class="text-xs text-iron-ochre">Best for: Production code, complex refactors, systematic tasks</p>
    </div>
  </div>
  
  <!-- Done-With-You Analysis -->
  <div class="bg-ash-graphite rounded-lg p-4 border-t-4 border-deep-indigo">
    <h3 class="text-md font-bold text-deep-indigo mb-3">Far Right Limitations</h3>
    <div class="space-y-2 text-sm">
      <p>⏰ <span class="text-fog-grey">Time intensive</span></p>
      <p>🧠 <span class="text-fog-grey">High cognitive load</span></p>
      <p>🔄 <span class="text-fog-grey">Manual orchestration</span></p>
      <p>📈 <span class="text-fog-grey">Limited scale</span></p>
    </div>
    <div class="mt-3 p-2 bg-obsidian-black rounded">
      <p class="text-xs text-iron-ochre">Best for: Precision edits, learning, pair programming</p>
    </div>
  </div>
  
  </v-clicks>
</div>

<v-click>
<div class="mt-6 p-4 bg-charcoal-tint rounded-lg">
  <p class="text-sm text-fog-grey text-center">
    <span class="text-iron-ochre font-semibold">*Note:</span> Tool positions approximate. Windsurf's "Cascade" mode shows promise for the sweet spot.
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

<style>
  .text-crimson-signal { color: #C1121F; }
  .text-signal-gold { color: #C6A300; }
  .text-slate-steel { color: #4C5A61; }
  .text-fog-grey { color: #B0B3B8; }
  .text-bone-white { color: #EAE7DC; }
  .text-deep-indigo { color: #3F3CBB; }
  .text-iron-ochre { color: #A35E35; }
  .bg-ash-graphite { background-color: #2B2B2B; }
  .bg-charcoal-tint { background-color: #1A1A1A; }
  .bg-obsidian-black { background-color: #0C0C0C; }
  .border-crimson-signal { border-color: #C1121F; }
  .border-signal-gold { border-color: #C6A300; }
  .border-deep-indigo { border-color: #3F3CBB; }
  .from-crimson-signal { --tw-gradient-from: #C1121F; }
  .via-signal-gold { --tw-gradient-via: #C6A300; }
  .to-deep-indigo { --tw-gradient-to: #3F3CBB; }
</style>