---
layout: default
---

# Getting Started: Your Practical Path Forward

<div class="mb-6">
  <p class="text-xl text-fog-grey text-center">You don't need to revolutionize everything tomorrow</p>
</div>

<div class="grid grid-cols-2 gap-8">

<!-- Week 1-2 -->
<div>
  <h3 class="text-lg font-bold text-signal-gold mb-4">🌱 Week 1-2: Start Small</h3>
  <div class="space-y-3">
    <div class="bg-ash-graphite rounded-lg p-4">
      <h4 class="text-md font-semibold text-bone-white mb-2">Pick One Workflow</h4>
      <div class="bg-obsidian-black p-3 rounded text-xs font-mono">
        <p class="text-fog-grey"># Good starting points:</p>
        <p class="text-signal-gold">• Writing tests for existing code</p>
        <p class="text-signal-gold">• Refactoring a single module</p>
        <p class="text-signal-gold">• Generating documentation</p>
        <p class="text-signal-gold">• Code review automation</p>
      </div>
    </div>
    
    <div class="bg-ash-graphite rounded-lg p-4">
      <h4 class="text-md font-semibold text-bone-white mb-2">Build Trust Incrementally</h4>
      <p class="text-sm text-fog-grey">
        • Use <code class="text-deep-indigo">--plan-mode</code> for everything<br/>
        • Review every change carefully<br/>
        • Compare AI output to your approach
      </p>
    </div>
  </div>
</div>

<!-- Week 3-4 -->
<div>
  <h3 class="text-lg font-bold text-deep-indigo mb-4">📈 Week 3-4: Expand Gradually</h3>
  <div class="space-y-3">
    <div class="bg-ash-graphite rounded-lg p-4">
      <h4 class="text-md font-semibold text-bone-white mb-2">Create Your First Commands</h4>
      <div class="bg-obsidian-black p-3 rounded text-xs font-mono">
        <p class="text-fog-grey"># .claude/commands/review.md</p>
        <p class="text-bone-white">Review code for:</p>
        <p class="text-signal-gold">- Our security standards</p>
        <p class="text-signal-gold">- Performance patterns</p>
        <p class="text-signal-gold">- Team conventions</p>
      </div>
    </div>
    
    <div class="bg-ash-graphite rounded-lg p-4">
      <h4 class="text-md font-semibold text-bone-white mb-2">Share With Your Team</h4>
      <p class="text-sm text-fog-grey">
        • Demo small wins in standups<br/>
        • Document what works/doesn't<br/>
        • Build team standards together
      </p>
    </div>
  </div>
</div>

</div>

<v-clicks>

<div class="mt-8 bg-charcoal-tint rounded-lg p-6">
  <h3 class="text-xl font-bold text-bone-white text-center mb-4">The Right Mindset</h3>
  
  <div class="grid grid-cols-3 gap-4 text-center">
    <div>
      <div class="text-3xl mb-2">🔬</div>
      <p class="text-md font-semibold text-iron-ochre">Experiment</p>
      <p class="text-xs text-fog-grey">Try it on throwaway branches first</p>
    </div>
    <div>
      <div class="text-3xl mb-2">📊</div>
      <p class="text-md font-semibold text-iron-ochre">Measure</p>
      <p class="text-xs text-fog-grey">Track time saved vs quality impact</p>
    </div>
    <div>
      <div class="text-3xl mb-2">🔄</div>
      <p class="text-md font-semibold text-iron-ochre">Iterate</p>
      <p class="text-xs text-fog-grey">Refine your approach weekly</p>
    </div>
  </div>
</div>

<div class="mt-6 bg-ash-graphite rounded-lg p-5 border-l-4 border-signal-gold">
  <h4 class="text-lg font-bold text-signal-gold mb-2">⚡ Quick Start Commands</h4>
  <div class="bg-obsidian-black p-3 rounded font-mono text-sm">
    <p class="text-fog-grey"># Install Claude Code</p>
    <p class="text-bone-white">$ brew install claude-cli</p>
    <p class="text-fog-grey mt-2"># Your first command</p>
    <p class="text-bone-white">$ claude --plan-mode "add tests to user.service.ts"</p>
    <p class="text-fog-grey mt-2"># Create your first workflow</p>
    <p class="text-bone-white">$ claude commands create review_pr</p>
  </div>
</div>

</v-clicks>

<!--
You don't need to bet your career on AI tomorrow. Start small. Build confidence. 

Pick something annoying but not critical. Maybe it's writing tests for that legacy module. Maybe it's documenting your API endpoints. Start there.

The goal isn't to immediately 10x your productivity. It's to gradually integrate AI into your workflow in a way that enhances rather than replaces your expertise.

Remember: you've adapted to new tools your entire career. This is just the next one.
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
  .border-signal-gold { border-color: #C6A300; }
</style>