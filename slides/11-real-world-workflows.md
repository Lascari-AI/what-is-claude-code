---
layout: default
---

# Real-World Workflow: Database Migration

<div class="mb-4">
  <p class="text-lg text-fog-grey">Let's see how this actually works in production</p>
</div>

<div class="grid grid-cols-12 gap-4">

<!-- Left: The Command -->
<div class="col-span-5">
  <h3 class="text-md font-bold text-bone-white mb-3">The Command</h3>
  <div class="bg-obsidian-black p-3 rounded font-mono text-xs">
    <p class="text-fog-grey"># One command to rule them all</p>
    <p class="text-bone-white">$ claude --plan-mode \</p>
    <p class="text-signal-gold ml-2">"Migrate our PostgreSQL database to MongoDB. Follow our migration standards: backup first, maintain data integrity, zero downtime, full rollback capability"</p>
  </div>

  <v-click>
  <div class="mt-4 bg-ash-graphite rounded p-3">
    <h4 class="text-sm font-bold text-deep-indigo mb-2">What Happens Next:</h4>
    <ol class="text-xs text-fog-grey space-y-1">
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
  <h3 class="text-md font-bold text-bone-white mb-3">Autonomous Execution</h3>
  <div class="bg-ash-graphite rounded p-3 text-xs font-mono">
    <v-clicks>
    <div class="mb-3">
      <p class="text-fog-grey"># Phase 1: Analysis [2 min]</p>
      <p class="text-signal-gold">✓ Analyzing 87 tables, 234 relationships</p>
      <p class="text-signal-gold">✓ Identifying migration complexities</p>
      <p class="text-signal-gold">✓ Creating dependency graph</p>
    </div>
    <div class="mb-3">
      <p class="text-fog-grey"># Phase 2: Backup [5 min]</p>
      <p class="text-signal-gold">✓ Creating full PostgreSQL backup</p>
      <p class="text-signal-gold">✓ Verifying backup integrity</p>
      <p class="text-signal-gold">✓ Storing rollback checkpoint</p>
    </div>
    <div class="mb-3">
      <p class="text-fog-grey"># Phase 3: Schema Translation [15 min]</p>
      <p class="text-signal-gold">✓ Converting relational → document model</p>
      <p class="text-signal-gold">✓ Optimizing for MongoDB patterns</p>
      <p class="text-signal-gold">✓ Creating migration scripts</p>
    </div>
    <div class="mb-3">
      <p class="text-fog-grey"># Phase 4: Data Migration [3.5 hours]</p>
      <p class="text-signal-gold">✓ Migrating in dependency order</p>
      <p class="text-signal-gold">✓ Validating data integrity</p>
      <p class="text-signal-gold">✓ Running consistency checks</p>
    </div>
    <div>
      <p class="text-fog-grey"># Phase 5: Verification [20 min]</p>
      <p class="text-signal-gold">✓ Running test suite against new DB</p>
      <p class="text-signal-gold">✓ Performance benchmarking</p>
      <p class="text-signal-gold">✓ Generating migration report</p>
    </div>
    </v-clicks>
  </div>
</div>

</div>

<v-click>
<div class="mt-6 bg-charcoal-tint rounded-lg p-4">
  <div class="grid grid-cols-3 gap-4 text-sm">
    <div class="text-center">
      <p class="text-iron-ochre font-semibold">Total Time</p>
      <p class="text-2xl text-signal-gold font-bold">4 hours</p>
      <p class="text-xs text-fog-grey">(vs 3-5 days manual)</p>
    </div>
    <div class="text-center">
      <p class="text-iron-ochre font-semibold">Human Effort</p>
      <p class="text-2xl text-signal-gold font-bold">30 min</p>
      <p class="text-xs text-fog-grey">(review & approval)</p>
    </div>
    <div class="text-center">
      <p class="text-iron-ochre font-semibold">Error Rate</p>
      <p class="text-2xl text-signal-gold font-bold">0%</p>
      <p class="text-xs text-fog-grey">(systematic validation)</p>
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
</style>