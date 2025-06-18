---
theme: ../
layout: default
---

# Live Demo: Shipping a Feature With 4 Commands  
_(same four you just saw in the Agent Flow)_

<div class="grid grid-cols-12 gap-6">

<!-- LEFT COLUMN –– Commands -->
<div class="col-span-5 space-y-4 text-sm font-mono bg-gray-50 p-4 rounded shadow">

  <div>
    <p class="text-gray-600"># 1  Prime context</p>
    <p class="text-gray-800">$ claude prime ./**/*.ts</p>
  </div>

  <div>
    <p class="text-gray-600 mt-4"># 2  Pull team rules & docs</p>
    <p class="text-gray-800">$ claude sub search ./docs ./CONTRIBUTING.md</p>
  </div>

  <div>
    <p class="text-gray-600 mt-4"># 3  Plan the change</p>
    <p class="text-gray-800">$ claude plan "Add Stripe billing"</p>
  </div>

  <div>
    <p class="text-gray-600 mt-4"># 4  Execute with agents</p>
    <p class="text-gray-800">$ claude run --agents 4</p>
  </div>

</div>

<!-- RIGHT COLUMN –– What Happens -->
<div class="col-span-7 bg-emerald-50 p-4 rounded shadow text-xs font-mono">

<v-clicks>

  <div>
    <p class="text-gray-600">[prime] digesting 67 files → vector db</p>
    <p class="text-emerald-600">✓ context fingerprint complete</p>
  </div>


  <div>
    <p class="text-gray-600">[sub] reading 5 rule docs</p>
    <p class="text-emerald-600">✓ extracted 14 compliance checks</p>
  </div>

  <div>
    <p class="text-gray-600">[plan] generating task graph</p>
    <p class="text-emerald-600">• create <code>BillingService</code><br>
    • update <code>User</code> schema<br>
    • write integration tests<br>
    • update docs</p>
  </div>

  <div>
    <p class="text-gray-600">[run] spawning 4 agents</p>
    <p class="text-emerald-600">agent-1 → code<br>
    agent-2 → tests<br>
    agent-3 → docs<br>
    agent-4 → review</p>
  </div>
</v-clicks>
</div>

</div>

<v-click>
<div class="mt-6 bg-purple-50 p-4 rounded shadow text-center">
  <p class="text-lg text-gray-900 font-semibold">You controlled the workflow.<br/>Claude supplied the compute.</p>
</div>
</v-click>