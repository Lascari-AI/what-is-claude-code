---
layout: default
---

# The Daily Reality: Where Your Time Actually Goes {.text-4xl.font-bold.mb-8}

<div class="grid grid-cols-2 gap-8">
  <div>
    <h3 class="text-xl font-bold mb-4 text-slate-steel">Your Last Sprint (Be Honest)</h3>
    <div class="space-y-3 text-base">
      <div class="flex items-start">
        <span class="text-crimson-signal mr-3 font-mono">42%</span>
        <span>Refactoring legacy code, updating dependencies</span>
      </div>
      <div class="flex items-start">
        <span class="text-crimson-signal mr-3 font-mono">23%</span>
        <span>Writing tests for code that "worked fine" in prod</span>
      </div>
      <div class="flex items-start">
        <span class="text-crimson-signal mr-3 font-mono">18%</span>
        <span>Debugging issues across 6 microservices</span>
      </div>
      <div class="flex items-start">
        <span class="text-crimson-signal mr-3 font-mono">11%</span>
        <span>Code reviews that found actual problems</span>
      </div>
      <div class="flex items-start">
        <span class="text-signal-gold mr-3 font-mono font-bold">6%</span>
        <span class="font-semibold">Building new features from scratch</span>
      </div>
    </div>
  </div>
  
  <div>
    <h3 class="text-xl font-bold mb-4 text-slate-steel">The AI Tools Disconnect</h3>
    <v-click>
      <div class="bg-ash-graphite p-4 rounded mb-4">
        <p class="text-sm font-mono text-fog-grey mb-2">$ your_ai_tool</p>
        <p class="text-base">"Generate a React component with TypeScript"</p>
        <p class="text-signal-gold mt-2">✓ Done in 5 seconds, looks great!</p>
      </div>
    </v-click>
    <v-click>
      <div class="bg-ash-graphite p-4 rounded">
        <p class="text-sm font-mono text-fog-grey mb-2">$ your_ai_tool</p>
        <p class="text-base">"Refactor auth service to JWT, update 47 consumers, maintain backward compatibility, add tests"</p>
        <p class="text-fog-grey mt-2">✗ "Here's a JWT implementation example..."</p>
      </div>
    </v-click>
  </div>
</div>

<v-click>
  <div class="mt-12 p-4 bg-charcoal-tint rounded">
    <p class="text-center text-lg font-semibold text-bone-white">
      Most AI tools optimize for the 6% that's already easy
    </p>
    <p class="text-center text-base text-fog-grey mt-2">
      What about the 94% where we actually need help?
    </p>
  </div>
</v-click>

<!--
Let's be brutally honest about where your time goes. Pull up your last sprint's time tracking. How much was greenfield development? I'll wait.

For most of us, it's single digits. The reality is we spend most of our time on the unglamorous work: refactoring that service that's been "temporary" for 3 years, writing tests because the coverage report is embarrassing, debugging issues that span multiple services.

And here's the disconnect: AI coding tools are amazing at generating new code - components, functions, classes. But that's not where we're stuck. We need tools that can handle the messy reality of production codebases with 5 years of technical debt.
-->

<style>
  .text-crimson-signal { color: #C1121F; }
  .text-signal-gold { color: #C6A300; }
  .text-slate-steel { color: #4C5A61; }
  .text-fog-grey { color: #B0B3B8; }
  .text-bone-white { color: #EAE7DC; }
  .bg-ash-graphite { background-color: #2B2B2B; }
  .bg-charcoal-tint { background-color: #1A1A1A; }
</style>