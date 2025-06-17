---
layout: default
---

# Programmability: From Chat to Command

<div class="grid grid-cols-2 gap-8 mb-8">
  <div class="text-center">
    <div class="text-6xl mb-4">💬</div>
    <p class="text-xl text-fog-grey">Traditional AI:</p>
    <p class="text-lg text-bone-white font-semibold">Something you talk to</p>
    <div class="mt-4 bg-ash-graphite rounded p-3">
      <p class="text-sm text-fog-grey">Manual, repetitive, unscalable</p>
    </div>
  </div>
  
  <div class="text-center">
    <div class="text-6xl mb-4">⚡</div>
    <p class="text-xl text-fog-grey">Programmable AI:</p>
    <p class="text-lg text-signal-gold font-semibold">Something you build with</p>
    <div class="mt-4 bg-ash-graphite rounded p-3">
      <p class="text-sm text-fog-grey">Automated, repeatable, scalable</p>
    </div>
  </div>
</div>

<v-clicks>

<div class="bg-charcoal-tint rounded-lg p-6 mb-6">
  <h3 class="text-xl font-bold text-bone-white mb-4">The Power of the `-p` Flag</h3>
  <div class="bg-obsidian-black p-4 rounded font-mono text-sm">
    <p class="text-fog-grey"># Your existing process becomes executable</p>
    <p class="text-bone-white">$ claude -p "Review this PR using our team standards: 
    1. Check for SQL injection vulnerabilities
    2. Ensure all endpoints have auth middleware  
    3. Verify test coverage > 80%
    4. Validate error handling patterns"</p>
    <p class="text-signal-gold mt-2"># Now it's a reusable command</p>
  </div>
</div>

<div class="grid grid-cols-2 gap-6">
  <div class="bg-ash-graphite rounded-lg p-4">
    <h4 class="text-md font-bold text-deep-indigo mb-3">Scriptable Workflows</h4>
    <div class="bg-obsidian-black p-3 rounded font-mono text-xs">
      <p class="text-fog-grey">#!/bin/bash</p>
      <p class="text-bone-white">for file in $(git diff --name-only); do</p>
      <p class="text-signal-gold ml-2">claude -p "Review $file for security"</p>
      <p class="text-bone-white">done</p>
    </div>
  </div>
  
  <div class="bg-ash-graphite rounded-lg p-4">
    <h4 class="text-md font-bold text-iron-ochre mb-3">CI/CD Integration</h4>
    <div class="bg-obsidian-black p-3 rounded font-mono text-xs">
      <p class="text-fog-grey"># .github/workflows/ai-review.yml</p>
      <p class="text-bone-white">- name: AI Code Review</p>
      <p class="text-signal-gold ml-2">run: claude /review_standards</p>
    </div>
  </div>
</div>

<div class="mt-6 p-4 bg-ash-graphite rounded-lg border-l-4 border-signal-gold">
  <p class="text-lg font-semibold text-bone-white mb-2">This changes everything.</p>
  <p class="text-sm text-fog-grey">
    Your knowledge, standards, and processes become executable code. 
    AI doesn't replace your expertise - it scales it.
  </p>
</div>

</v-clicks>

<!--
This is the paradigm shift. When AI becomes programmable, it stops being a toy and becomes a tool.

Think about it: every process you've refined over years, every standard your team has developed, every workflow you've optimized - all of it can now be automated while maintaining your quality bar.

You're not giving up control. You're multiplying your impact.
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