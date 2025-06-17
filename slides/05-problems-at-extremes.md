---
layout: default
---

# The Problems at Each Extreme

<div class="grid grid-cols-2 gap-6">

<!-- Pure Done-For-You Problems -->
<div>
  <h2 class="text-xl font-bold text-crimson-signal mb-4">When "Magic" Goes Wrong</h2>
  
  <div class="space-y-4">
    <div class="bg-ash-graphite rounded-lg p-4 border-l-2 border-crimson-signal">
      <h3 class="text-md font-semibold text-bone-white mb-2">🎲 The Quality Gamble</h3>
      <div class="bg-obsidian-black p-3 rounded font-mono text-xs">
        <p class="text-fog-grey"># What you get:</p>
        <p class="text-bone-white">looks_good_demo.js</p>
        <p class="text-crimson-signal"># What you discover at 3am:</p>
        <p class="text-crimson-signal">- No error handling</p>
        <p class="text-crimson-signal">- SQL injection vectors</p>
        <p class="text-crimson-signal">- Hardcoded credentials</p>
      </div>
    </div>

    <div class="bg-ash-graphite rounded-lg p-4 border-l-2 border-crimson-signal">
      <h3 class="text-md font-semibold text-bone-white mb-2">🚁 The Helicopter Parent Problem</h3>
      <p class="text-sm text-fog-grey">Can't intervene mid-flight. It's all or nothing.</p>
      <p class="text-xs text-iron-ochre mt-2">"Wait, why is it creating 47 database tables?"</p>
    </div>

    <div class="bg-ash-graphite rounded-lg p-4 border-l-2 border-crimson-signal">
      <h3 class="text-md font-semibold text-bone-white mb-2">📦 The Black Box Syndrome</h3>
      <p class="text-sm text-fog-grey">When it breaks, you don't know why.</p>
      <p class="text-sm text-fog-grey">When it works, you still don't know why.</p>
    </div>
  </div>
</div>

<!-- Pure Done-With-You Problems -->
<div>
  <h2 class="text-xl font-bold text-deep-indigo mb-4">When "Control" Means Exhaustion</h2>
  
  <div class="space-y-4">
    <div class="bg-ash-graphite rounded-lg p-4 border-l-2 border-deep-indigo">
      <h3 class="text-md font-semibold text-bone-white mb-2">🏋️ The Cognitive Load Crisis</h3>
      <div class="bg-obsidian-black p-3 rounded font-mono text-xs">
        <p class="text-fog-grey"># Your mental stack:</p>
        <p class="text-bone-white">1. Remember project context</p>
        <p class="text-bone-white">2. Craft perfect prompts</p>
        <p class="text-bone-white">3. Review every change</p>
        <p class="text-bone-white">4. Manually orchestrate flow</p>
        <p class="text-deep-indigo"># Stack overflow at step 23...</p>
      </div>
    </div>

    <div class="bg-ash-graphite rounded-lg p-4 border-l-2 border-deep-indigo">
      <h3 class="text-md font-semibold text-bone-white mb-2">⏱️ The Time Paradox</h3>
      <p class="text-sm text-fog-grey">Supposed to save time. Actually just redistributes it.</p>
      <p class="text-xs text-iron-ochre mt-2">"I spent 4 hours prompting to save 2 hours coding"</p>
    </div>

    <div class="bg-ash-graphite rounded-lg p-4 border-l-2 border-deep-indigo">
      <h3 class="text-md font-semibold text-bone-white mb-2">🔄 The Context Switching Hell</h3>
      <p class="text-sm text-fog-grey">Brain → AI → Code → Terminal → AI → Brain...</p>
      <p class="text-sm text-fog-grey">Each switch costs 23 minutes of focus.</p>
    </div>
  </div>
</div>

</div>

<v-click>
<div class="mt-8 p-6 bg-charcoal-tint rounded-lg">
  <h3 class="text-lg font-bold text-bone-white text-center mb-4">The Senior Engineer's Dilemma</h3>
  <div class="grid grid-cols-2 gap-4 text-sm">
    <div class="text-center">
      <p class="text-crimson-signal font-semibold">Too Much Magic = </p>
      <p class="text-fog-grey">"I don't trust this in production"</p>
    </div>
    <div class="text-center">
      <p class="text-deep-indigo font-semibold">Too Much Control = </p>
      <p class="text-fog-grey">"This isn't actually saving me time"</p>
    </div>
  </div>
  <p class="text-center text-signal-gold mt-4 text-lg">We need a third way.</p>
</div>
</v-click>

<!--
Let's be honest about what actually happens with these tools.

With done-for-you tools, you get what I call "conference demo code" - it looks great on stage, then you spend weeks fixing it for production. And good luck debugging it when you didn't write it and can't see how it was built.

With done-with-you tools, you maintain control but inherit all the orchestration overhead. You're basically a human API between the AI and your codebase. It's exhausting.

Both approaches have their place. But for serious engineering work, we need something that respects both our expertise AND our time.
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
  .border-deep-indigo { border-color: #3F3CBB; }
</style>