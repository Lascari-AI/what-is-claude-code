---
theme: ../
layout: default
---

# Understanding Agentic Coding

<div class="mb-6">
  <h2 class="text-2xl text-gray-900 font-bold mb-2">Definition: Multi-Step Autonomous Execution</h2>
  <p class="text-lg text-gray-600">Not just generating code - orchestrating complete workflows</p>
</div>

<div class="grid grid-cols-2 gap-8">

<!-- Traditional vs Agentic -->
<div>
  <h3 class="text-lg font-bold text-rose-600 mb-3">Traditional AI Coding</h3>
  <div class="bg-rose-50 rounded-lg p-4 border border-rose-300 shadow-sm">
    <div class="bg-white p-3 rounded font-mono text-xs mb-3">
      <p class="text-gray-600"># Your workflow:</p>
      <p class="text-gray-800">1. "Generate a React component"</p>
      <p class="text-amber-600 ml-3">→ Copy code</p>
      <p class="text-gray-800">2. "Add TypeScript types"</p>
      <p class="text-amber-600 ml-3">→ Copy updates</p>
      <p class="text-gray-800">3. "Write tests for it"</p>
      <p class="text-amber-600 ml-3">→ Copy tests</p>
      <p class="text-gray-800">4. Manually integrate everything</p>
      <p class="text-rose-600 font-semibold">5. Debug integration issues</p>
    </div>
    <p class="text-sm text-gray-600">Time: ~2 hours of back-and-forth</p>
  </div>
</div>

<div>
  <h3 class="text-lg font-bold text-emerald-600 mb-3">Agentic Coding</h3>
  <div class="bg-emerald-50 rounded-lg p-4 border border-emerald-300 shadow-sm">
    <div class="bg-white p-3 rounded font-mono text-xs mb-3">
      <p class="text-gray-600"># Your command:</p>
      <p class="text-gray-800">"Add user auth to the app"</p>
      <p class="text-gray-600 mt-2"># Agent autonomously:</p>
      <p class="text-emerald-600">✓ Analyzes existing patterns</p>
      <p class="text-emerald-600">✓ Implements auth middleware</p>
      <p class="text-emerald-600">✓ Updates all endpoints</p>
      <p class="text-emerald-600">✓ Adds error handling</p>
      <p class="text-emerald-600">✓ Writes & runs tests</p>
      <p class="text-emerald-600">✓ Updates documentation</p>
    </div>
    <p class="text-sm text-gray-600">Time: ~15 minutes total</p>
  </div>
</div>

</div>

<v-click>
<div class="mt-8 bg-amber-50 rounded-lg p-6 shadow">
  <h3 class="text-xl font-bold text-gray-900 mb-4 text-center">Real Production Metrics (Not Demos)</h3>
  
  <div class="grid grid-cols-3 gap-6 text-sm">
    <div class="bg-white rounded p-4 shadow-sm">
      <p class="text-amber-700 font-semibold">Database Migration</p>
      <p class="text-xs text-gray-600 mb-2">PostgreSQL → MongoDB (87 models)</p>
      <div class="space-y-1">
        <p><span class="text-rose-600 font-medium">Manual:</span> 3 engineers × 5 days</p>
        <p><span class="text-emerald-600 font-medium">Agentic:</span> 1 engineer × 4 hours</p>
      </div>
      <p class="text-sky-600 font-bold mt-2">93% reduction</p>
    </div>
    
    <div class="bg-white rounded p-4 shadow-sm">
      <p class="text-amber-700 font-semibold">Test Coverage</p>
      <p class="text-xs text-gray-600 mb-2">0% → 80% (1,247 test cases)</p>
      <div class="space-y-1">
        <p><span class="text-rose-600 font-medium">Manual:</span> 2 weeks estimation</p>
        <p><span class="text-emerald-600 font-medium">Agentic:</span> 1.5 days actual</p>
      </div>
      <p class="text-sky-600 font-bold mt-2">87% reduction</p>
    </div>
    
    <div class="bg-white rounded p-4 shadow-sm">
      <p class="text-amber-700 font-semibold">API Versioning</p>
      <p class="text-xs text-gray-600 mb-2">v1 → v2 (42 endpoints)</p>
      <div class="space-y-1">
        <p><span class="text-rose-600 font-medium">Manual:</span> 1 week</p>
        <p><span class="text-emerald-600 font-medium">Agentic:</span> 6 hours</p>
      </div>
      <p class="text-sky-600 font-bold mt-2">91% reduction</p>
    </div>
  </div>
  
  <p class="text-xs text-gray-600 text-center mt-4">
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

