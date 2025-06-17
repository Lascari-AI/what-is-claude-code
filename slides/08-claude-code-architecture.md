---
theme: ../
layout: default
---

# Claude Code: Architecture That Bridges the Gap

<div class="grid grid-cols-12 gap-6">

<!-- Left Column - Architecture Overview -->
<div class="col-span-5">
  <h3 class="text-xl font-bold text-gray-900 mb-4">Terminal-Native Architecture</h3>
  
  <div class="bg-amber-50 rounded-lg p-4 mb-4 shadow-sm">
    <div class="bg-white p-3 rounded font-mono text-xs">
      <p class="text-gray-600"># What makes it different</p>
      <p class="text-gray-800">$ claude "your request"</p>
      <p class="text-emerald-600 mt-2">├─ Full OS access</p>
      <p class="text-emerald-600">├─ Process execution</p>
      <p class="text-emerald-600">├─ File system control</p>
      <p class="text-emerald-600">└─ Tool orchestration</p>
    </div>
  </div>

  <v-click>
  <div class="bg-amber-50 rounded-lg p-4 shadow-sm">
    <h4 class="text-md font-bold text-gray-900 mb-2">The Key Innovation</h4>
    <div class="space-y-2 text-sm">
      <p class="text-gray-700">
        <span class="text-emerald-600 font-semibold">Programmable autonomy:</span>
        Call it from scripts, chain workflows, build your own tools
      </p>
      <p class="text-gray-700">
        <span class="text-sky-600 font-semibold">Transparent execution:</span>
        See every action, understand every decision
      </p>
    </div>
  </div>
  </v-click>
</div>

<!-- Right Column - How It Works -->
<div class="col-span-7">
  <h3 class="text-xl font-bold text-gray-900 mb-4">How It Achieves Both</h3>
  
  <div class="space-y-4">
    <!-- Agentic Capabilities -->
    <div class="bg-emerald-50 rounded-lg p-4 border-l-4 border-emerald-500 shadow-sm">
      <h4 class="text-md font-bold text-emerald-700 mb-2">🤖 Agentic Capabilities</h4>
      <div class="grid grid-cols-2 gap-3 text-xs">
        <div>
          <code class="text-sky-600 font-medium">Agent spawning</code>
          <p class="text-gray-600">Delegates complex subtasks</p>
        </div>
        <div>
          <code class="text-sky-600 font-medium">Parallel execution</code>
          <p class="text-gray-600">Runs multiple tools at once</p>
        </div>
        <div>
          <code class="text-sky-600 font-medium">Error recovery</code>
          <p class="text-gray-600">Handles failures gracefully</p>
        </div>
        <div>
          <code class="text-sky-600 font-medium">Context persistence</code>
          <p class="text-gray-600">Maintains state across operations</p>
        </div>
      </div>
    </div>

    <!-- Control Mechanisms -->
    <div class="bg-sky-50 rounded-lg p-4 border-l-4 border-sky-500 shadow-sm">
      <h4 class="text-md font-bold text-sky-700 mb-2">🎛️ Control Mechanisms</h4>
      <div class="grid grid-cols-2 gap-3 text-xs">
        <div>
          <code class="text-amber-600 font-medium">--permission-mode</code>
          <p class="text-gray-600">Approve each action</p>
        </div>
        <div>
          <code class="text-amber-600 font-medium">--plan-mode</code>
          <p class="text-gray-600">Review before execution</p>
        </div>
        <div>
          <code class="text-amber-600 font-medium">Custom commands</code>
          <p class="text-gray-600">Define your workflows</p>
        </div>
        <div>
          <code class="text-amber-600 font-medium">Tool restrictions</code>
          <p class="text-gray-600">Limit what it can do</p>
        </div>
      </div>
    </div>
  </div>

  <v-click>
  <div class="mt-4 p-3 bg-amber-50 rounded shadow-sm">
    <p class="text-sm text-amber-700 font-semibold">The Result:</p>
    <p class="text-sm text-gray-700">
      An AI that can work autonomously like a senior engineer, but remains as transparent and controllable as any other command-line tool.
    </p>
  </div>
  </v-click>
</div>

</div>

<v-click>
<div class="mt-8 bg-gray-100 rounded-lg p-4 font-mono text-sm shadow">
  <p class="text-gray-600"># Example: Database migration with full control</p>
  <p class="text-gray-800">$ claude --plan-mode "migrate our postgres db to mongodb"</p>
  <p class="text-emerald-600 mt-2">[Claude presents migration plan for review]</p>
  <p class="text-gray-600"># You review, adjust, then approve</p>
  <p class="text-gray-800">$ claude --continue</p>
  <p class="text-emerald-600">[Executes with full visibility]</p>
</div>
</v-click>

<!--
This is where Claude Code found the sweet spot. It's not trying to hide complexity or pretend AI is magic. It's giving you a powerful tool that respects your expertise.

The terminal-native approach isn't just about being "hardcore" - it's about integration. Your existing scripts, your CI/CD pipelines, your workflows - Claude Code slots right in.

And the control mechanisms aren't afterthoughts. They're core to the design. You can be as hands-on or hands-off as the situation demands.
-->

