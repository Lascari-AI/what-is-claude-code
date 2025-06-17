---
theme: ../
layout: default
---

# Real-World Workflow: Database Migration

<div class="mb-4">
  <p class="text-lg text-gray-600">Let's see how this actually works in production</p>
</div>

<div class="grid grid-cols-12 gap-4">

<!-- Left: The Command -->
<div class="col-span-5">
  <h3 class="text-md font-bold text-gray-900 mb-3">The Command</h3>
  <div class="bg-gray-100 p-3 rounded font-mono text-xs shadow">
    <p class="text-gray-600"># One command to rule them all</p>
    <p class="text-gray-800">$ claude --plan-mode \</p>
    <p class="text-emerald-600 ml-2">"Migrate our PostgreSQL database to MongoDB. Follow our migration standards: backup first, maintain data integrity, zero downtime, full rollback capability"</p>
  </div>

  <v-click>
  <div class="mt-4 bg-amber-50 rounded p-3 shadow-sm">
    <h4 class="text-sm font-bold text-sky-700 mb-2">What Happens Next:</h4>
    <ol class="text-xs text-gray-700 space-y-1">
      <li>1. Claude analyzes your schema</li>
      <li>2. Presents migration plan</li>
      <li>3. You review & adjust</li>
      <li>4. Executes with full visibility</li>
    </ol>
  </div>
  </v-click>
</div>

<!-- Right: The Execution -->
<div class="col-span-7">
  <h3 class="text-md font-bold text-gray-900 mb-3">Autonomous Execution</h3>
  <div class="bg-emerald-50 rounded p-3 text-xs font-mono shadow-sm">
    <v-clicks>
    <div class="mb-3">
      <p class="text-gray-600"># Phase 1: Analysis [2 min]</p>
      <p class="text-emerald-600">✓ Analyzing 87 tables, 234 relationships</p>
      <p class="text-emerald-600">✓ Identifying migration complexities</p>
      <p class="text-emerald-600">✓ Creating dependency graph</p>
    </div>
    <div class="mb-3">
      <p class="text-gray-600"># Phase 2: Backup [5 min]</p>
      <p class="text-emerald-600">✓ Creating full PostgreSQL backup</p>
      <p class="text-emerald-600">✓ Verifying backup integrity</p>
      <p class="text-emerald-600">✓ Storing rollback checkpoint</p>
    </div>
    <div class="mb-3">
      <p class="text-gray-600"># Phase 3: Schema Translation [15 min]</p>
      <p class="text-emerald-600">✓ Converting relational → document model</p>
      <p class="text-emerald-600">✓ Optimizing for MongoDB patterns</p>
      <p class="text-emerald-600">✓ Creating migration scripts</p>
    </div>
    <div class="mb-3">
      <p class="text-gray-600"># Phase 4: Data Migration [3.5 hours]</p>
      <p class="text-emerald-600">✓ Migrating in dependency order</p>
      <p class="text-emerald-600">✓ Validating data integrity</p>
      <p class="text-emerald-600">✓ Running consistency checks</p>
    </div>
    <div>
      <p class="text-gray-600"># Phase 5: Verification [20 min]</p>
      <p class="text-emerald-600">✓ Running test suite against new DB</p>
      <p class="text-emerald-600">✓ Performance benchmarking</p>
      <p class="text-emerald-600">✓ Generating migration report</p>
    </div>
    </v-clicks>
  </div>
</div>

</div>

<v-click>
<div class="mt-6 bg-purple-50 rounded-lg p-4 shadow">
  <div class="grid grid-cols-3 gap-4 text-sm">
    <div class="text-center">
      <p class="text-amber-700 font-semibold">Total Time</p>
      <p class="text-2xl text-emerald-600 font-bold">4 hours</p>
      <p class="text-xs text-gray-600">(vs 3-5 days manual)</p>
    </div>
    <div class="text-center">
      <p class="text-amber-700 font-semibold">Human Effort</p>
      <p class="text-2xl text-emerald-600 font-bold">30 min</p>
      <p class="text-xs text-gray-600">(review & approval)</p>
    </div>
    <div class="text-center">
      <p class="text-amber-700 font-semibold">Error Rate</p>
      <p class="text-2xl text-emerald-600 font-bold">0%</p>
      <p class="text-xs text-gray-600">(systematic validation)</p>
    </div>
  </div>
</div>
</v-click>

<!--
This is a real migration from last month. Notice what's happening here:

The AI isn't just generating migration scripts. It's orchestrating the entire process - backup, analysis, execution, validation. 

You maintained complete control. You set the standards, reviewed the plan, could intervene at any point. But you didn't have to micromanage 87 tables worth of schema conversions.

This is the power of agentic + controllable. You're the architect. The AI is your construction crew.
-->

