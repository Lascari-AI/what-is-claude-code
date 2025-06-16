---
layout: default
---

<div class="grid grid-cols-3 gap-6">
  
  <!-- Web-Based Architecture -->
  <div class="bg-ash-graphite rounded-lg p-4 border border-slate-steel">
    <h3 class="text-lg font-bold mb-3 text-bone-white">Web Apps</h3>
    <p class="text-xs text-fog-grey mb-3">ChatGPT, Claude.ai, Perplexity</p>
    <div class="mb-4">
      <div class="bg-obsidian-black p-3 rounded text-xs font-mono">
        <p class="text-fog-grey"># Architecture</p>
        <p class="text-bone-white">Browser → API → LLM</p>
        <p class="text-crimson-signal mt-2">No filesystem access</p>
        <p class="text-crimson-signal">No process execution</p>
      </div>
    </div>
    <div class="space-y-2 text-sm">
      <p class="text-signal-gold">Use case: Quick answers, prototypes</p>
      <p class="text-fog-grey">Workflow: Copy → Paste → Repeat</p>
      <p class="text-crimson-signal">Bottleneck: Manual context switching</p>
    </div>
  </div>
  
  <!-- IDE-Based Architecture -->
  <div class="bg-ash-graphite rounded-lg p-4 border border-slate-steel">
    <h3 class="text-lg font-bold mb-3 text-bone-white">IDE Plugins</h3>
    <p class="text-xs text-fog-grey mb-3">Cursor, Copilot, Windsurf</p>
    <div class="mb-4">
      <div class="bg-obsidian-black p-3 rounded text-xs font-mono">
        <p class="text-fog-grey"># Architecture</p>
        <p class="text-bone-white">IDE → Plugin API → LLM</p>
        <p class="text-signal-gold mt-2">✓ File read/write</p>
        <p class="text-crimson-signal">✗ Limited to IDE sandbox</p>
      </div>
    </div>
    <div class="space-y-2 text-sm">
      <p class="text-signal-gold">Use case: Active development</p>
      <p class="text-fog-grey">Workflow: Code → Suggest → Accept</p>
      <p class="text-crimson-signal">Bottleneck: Single-file focus</p>
    </div>
  </div>
  
  <!-- Terminal Architecture -->
  <div class="bg-ash-graphite rounded-lg p-4 border border-deep-indigo">
    <h3 class="text-lg font-bold mb-3 text-bone-white">Terminal Agents</h3>
    <p class="text-xs text-fog-grey mb-3">Claude Code, Aider</p>
    <div class="mb-4">
      <div class="bg-obsidian-black p-3 rounded text-xs font-mono">
        <p class="text-fog-grey"># Architecture</p>
        <p class="text-bone-white">Shell → OS APIs → LLM</p>
        <p class="text-signal-gold mt-2">✓ Full filesystem</p>
        <p class="text-signal-gold">✓ Process execution</p>
        <p class="text-signal-gold">✓ Network access</p>
      </div>
    </div>
    <div class="space-y-2 text-sm">
      <p class="text-signal-gold">Use case: Complex workflows</p>
      <p class="text-fog-grey">Workflow: Plan → Execute → Verify</p>
      <p class="text-deep-indigo">Strength: Autonomous operation</p>
    </div>
  </div>
  
</div>

<v-click>
<div class="mt-8 p-4 bg-charcoal-tint rounded">
  <p class="text-center font-mono text-sm">
    <span class="text-fog-grey">Power Level:</span>
    <span class="text-bone-white ml-4">Web (10%) → IDE (40%) → Terminal (100%)</span>
  </p>
  <p class="text-center text-xs text-fog-grey mt-2">
    With great power comes great responsibility (and complexity)
  </p>
</div>
</v-click>

<!--
Let's cut through the marketing and look at the actual architecture. This isn't about which tool is "better" - it's about understanding the fundamental constraints each approach faces.

Web apps are sandboxed in your browser. They can't touch your filesystem, can't run commands, can't see your git history. You're manually ferrying code back and forth.

IDE plugins are better - they can read and write files, see your project structure. But they're still constrained by the IDE's plugin API. They can't run your test suite, can't check out branches, can't deploy your code.

Terminal agents have full OS access. They can do anything you can do from the command line. This is both powerful and dangerous - which is why we need to talk about security next.
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