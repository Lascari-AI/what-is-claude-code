---
layout: default
---

# Understanding Agentic Coding

<div class="mb-6">
  <h2 class="text-2xl text-bone-white font-bold mb-2">Definition: Multi-Step Autonomous Execution</h2>
  <p class="text-lg text-fog-grey">Not just generating code - orchestrating complete workflows</p>
</div>

<div class="grid grid-cols-2 gap-8">

<!-- Traditional vs Agentic -->
<div>
  <h3 class="text-lg font-bold text-crimson-signal mb-3">Traditional AI Coding</h3>
  <div class="bg-ash-graphite rounded-lg p-4 border border-slate-steel">
    <div class="bg-obsidian-black p-3 rounded font-mono text-xs mb-3">
      <p class="text-fog-grey"># Your workflow:</p>
      <p class="text-bone-white">1. "Generate a React component"</p>
      <p class="text-signal-gold ml-3">→ Copy code</p>
      <p class="text-bone-white">2. "Add TypeScript types"</p>
      <p class="text-signal-gold ml-3">→ Copy updates</p>
      <p class="text-bone-white">3. "Write tests for it"</p>
      <p class="text-signal-gold ml-3">→ Copy tests</p>
      <p class="text-bone-white">4. Manually integrate everything</p>
      <p class="text-crimson-signal">5. Debug integration issues</p>
    </div>
    <p class="text-sm text-fog-grey">Time: ~2 hours of back-and-forth</p>
  </div>
</div>

<div>
  <h3 class="text-lg font-bold text-signal-gold mb-3">Agentic Coding</h3>
  <div class="bg-ash-graphite rounded-lg p-4 border border-deep-indigo">
    <div class="bg-obsidian-black p-3 rounded font-mono text-xs mb-3">
      <p class="text-fog-grey"># Your command:</p>
      <p class="text-bone-white">"Add user auth to the app"</p>
      <p class="text-fog-grey mt-2"># Agent autonomously:</p>
      <p class="text-signal-gold">✓ Analyzes existing patterns</p>
      <p class="text-signal-gold">✓ Implements auth middleware</p>
      <p class="text-signal-gold">✓ Updates all endpoints</p>
      <p class="text-signal-gold">✓ Adds error handling</p>
      <p class="text-signal-gold">✓ Writes & runs tests</p>
      <p class="text-signal-gold">✓ Updates documentation</p>
    </div>
    <p class="text-sm text-fog-grey">Time: ~15 minutes total</p>
  </div>
</div>

</div>

<v-click>
<div class="mt-8 bg-charcoal-tint rounded-lg p-6">
  <h3 class="text-xl font-bold text-bone-white mb-4 text-center">Real Production Metrics (Not Demos)</h3>
  
  <div class="grid grid-cols-3 gap-6 text-sm">
    <div class="bg-ash-graphite rounded p-4">
      <p class="text-iron-ochre font-semibold">Database Migration</p>
      <p class="text-xs text-fog-grey mb-2">PostgreSQL → MongoDB (87 models)</p>
      <div class="space-y-1">
        <p><span class="text-crimson-signal">Manual:</span> 3 engineers × 5 days</p>
        <p><span class="text-signal-gold">Agentic:</span> 1 engineer × 4 hours</p>
      </div>
      <p class="text-deep-indigo font-bold mt-2">93% reduction</p>
    </div>
    
    <div class="bg-ash-graphite rounded p-4">
      <p class="text-iron-ochre font-semibold">Test Coverage</p>
      <p class="text-xs text-fog-grey mb-2">0% → 80% (1,247 test cases)</p>
      <div class="space-y-1">
        <p><span class="text-crimson-signal">Manual:</span> 2 weeks estimation</p>
        <p><span class="text-signal-gold">Agentic:</span> 1.5 days actual</p>
      </div>
      <p class="text-deep-indigo font-bold mt-2">87% reduction</p>
    </div>
    
    <div class="bg-ash-graphite rounded p-4">
      <p class="text-iron-ochre font-semibold">API Versioning</p>
      <p class="text-xs text-fog-grey mb-2">v1 → v2 (42 endpoints)</p>
      <div class="space-y-1">
        <p><span class="text-crimson-signal">Manual:</span> 1 week</p>
        <p><span class="text-signal-gold">Agentic:</span> 6 hours</p>
      </div>
      <p class="text-deep-indigo font-bold mt-2">91% reduction</p>
    </div>
  </div>
  
  <p class="text-xs text-fog-grey text-center mt-4">
    Source: Actual client projects, Q4 2024. Includes debugging and verification time.
  </p>
</div>
</v-click>

<!--
These aren't cherry-picked examples or conference demos. These are real migrations from production codebases.

The key insight: agentic coding doesn't just save typing time. It eliminates the hundreds of micro-decisions and context switches that actually consume our days.

When an agent can hold the entire migration strategy in context and execute it systematically, it doesn't get tired at model #67. It doesn't forget the error handling pattern you established. It just... executes.

But this only works if you trust the tool. Which brings us to implementation...
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
  .border-slate-steel { border-color: #4C5A61; }
  .border-deep-indigo { border-color: #3F3CBB; }
</style>