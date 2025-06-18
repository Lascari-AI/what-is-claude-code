---
theme: ../
layout: default
---

# The Core Flow: Prime → Sub → Plan → Run

<div class="grid grid-cols-4 gap-4 text-center text-sm font-mono">

<!-- PRIME -->
<div class="bg-gray-50 p-3 rounded shadow">
  <p class="text-xs text-gray-600 mb-1">1. prime</p>
  <p class="text-emerald-700">$ claude prime ./**/*.ts</p>
  <p class="text-gray-600 mt-2">Vector-digests your code base</p>
</div>

<!-- SUB -->
<div class="bg-gray-50 p-3 rounded shadow">
  <p class="text-xs text-gray-600 mb-1">2. sub search</p>
  <p class="text-emerald-700">$ claude sub search ./docs</p>
  <p class="text-gray-600 mt-2">Pulls rules / ADRs / RFCs</p>
</div>

<!-- PLAN -->
<div class="bg-gray-50 p-3 rounded shadow">
  <p class="text-xs text-gray-600 mb-1">3. plan</p>
  <p class="text-emerald-700">$ claude plan "Add Stripe billing"</p>
  <p class="text-gray-600 mt-2">Generates task-graph & checks</p>
</div>

<!-- RUN -->
<div class="bg-gray-50 p-3 rounded shadow">
  <p class="text-xs text-gray-600 mb-1">4. run</p>
  <p class="text-emerald-700">$ claude run --agents 4</p>
  <p class="text-gray-600 mt-2">Spawns N agents, executes graph</p>
</div>
</div>

<v-click>
<div class="mt-6 bg-purple-50 p-4 rounded shadow text-center">
  <p class="text-lg text-gray-900 font-semibold">
    Treat each verb like a UNIX util.  
    Chain, script, or swap them as you wish.
  </p>
</div>
</v-click>