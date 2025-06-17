---
layout: default
---

# Claude Code: Technical Architecture {.text-4xl.font-bold.mb-4}

<div class="text-lg text-fog-grey mb-6">How terminal-native AI agents actually work under the hood</div>

<div class="grid grid-cols-12 gap-6">

<!-- Left Column - Architecture Overview -->
<div class="col-span-5">
  <div class="bg-ash-graphite rounded-lg p-4 mb-4">
    <h3 class="text-lg font-bold text-bone-white mb-3">System Architecture</h3>
    <div class="bg-obsidian-black p-3 rounded font-mono text-xs">
      <p class="text-fog-grey"># Process hierarchy</p>
      <p class="text-bone-white">claude-code (parent)</p>
      <p class="text-signal-gold ml-2">├─ LLM client (Anthropic API)</p>
      <p class="text-signal-gold ml-2">├─ Tool executor (sandboxed)</p>
      <p class="text-signal-gold ml-2">├─ File watcher (inotify/FSEvents)</p>
      <p class="text-signal-gold ml-2">└─ Memory manager (context window)</p>
    </div>
  </div>

  <v-click>
  <div class="bg-ash-graphite rounded-lg p-4">
    <h3 class="text-lg font-bold text-bone-white mb-3">Key Capabilities</h3>
    <div class="space-y-2 text-sm">
      <div class="flex items-start gap-2">
        <span class="text-signal-gold">•</span>
        <div>
          <span class="font-semibold">Parallel execution:</span>
          <span class="text-fog-grey"> Run multiple tools simultaneously</span>
        </div>
      </div>
      <div class="flex items-start gap-2">
        <span class="text-signal-gold">•</span>
        <div>
          <span class="font-semibold">Context persistence:</span>
          <span class="text-fog-grey"> Maintains state across operations</span>
        </div>
      </div>
      <div class="flex items-start gap-2">
        <span class="text-signal-gold">•</span>
        <div>
          <span class="font-semibold">Error recovery:</span>
          <span class="text-fog-grey"> Automatic retry with backoff</span>
        </div>
      </div>
      <div class="flex items-start gap-2">
        <span class="text-signal-gold">•</span>
        <div>
          <span class="font-semibold">Token optimization:</span>
          <span class="text-fog-grey"> Smart context window management</span>
        </div>
      </div>
    </div>
  </div>
  </v-click>
</div>

<!-- Right Column - Tool Breakdown -->
<div class="col-span-7">
  <div class="bg-ash-graphite rounded-lg p-4 h-full">
    <h3 class="text-lg font-bold text-bone-white mb-3">Tool API Reference</h3>
    <div class="grid grid-cols-2 gap-x-4 gap-y-2 text-xs">
      <!-- Critical Tools -->
      <div class="border-l-2 border-deep-indigo pl-2">
        <code class="text-deep-indigo font-mono font-bold">Agent</code>
        <p class="text-fog-grey">Spawns sub-agents for complex tasks</p>
        <p class="text-xs text-iron-ochre">Cost: ~$0.02-0.50 per invocation</p>
      </div>
      <div class="border-l-2 border-crimson-signal pl-2">
        <code class="text-crimson-signal font-mono font-bold">Bash</code>
        <p class="text-fog-grey">Execute shell commands (timeout: 2min)</p>
        <p class="text-xs text-iron-ochre">Security: Sandboxed, no sudo</p>
      </div>
      <!-- File Operations -->
      <div class="border-l-2 border-slate-steel pl-2">
        <code class="text-slate-steel font-mono">Read/Write</code>
        <p class="text-fog-grey">File I/O with encoding detection</p>
      </div>
      <div class="border-l-2 border-slate-steel pl-2">
        <code class="text-slate-steel font-mono">Edit/MultiEdit</code>
        <p class="text-fog-grey">Atomic string replacements</p>
      </div>
      <!-- Search Tools -->
      <div class="border-l-2 border-slate-steel pl-2">
        <code class="text-slate-steel font-mono">Grep/Glob</code>
        <p class="text-fog-grey">Regex search, glob patterns</p>
      </div>
      <div class="border-l-2 border-slate-steel pl-2">
        <code class="text-slate-steel font-mono">LS</code>
        <p class="text-fog-grey">Directory traversal with filters</p>
      </div>
      <!-- Specialized Tools -->
      <div class="border-l-2 border-slate-steel pl-2">
        <code class="text-slate-steel font-mono">NotebookRead/Edit</code>
        <p class="text-fog-grey">Jupyter notebook manipulation</p>
      </div>
      <div class="border-l-2 border-slate-steel pl-2">
        <code class="text-slate-steel font-mono">TodoRead/Write</code>
        <p class="text-fog-grey">Task tracking & planning</p>
      </div>
      <!-- Web Tools -->
      <div class="border-l-2 border-signal-gold pl-2">
        <code class="text-signal-gold font-mono">WebFetch/Search</code>
        <p class="text-fog-grey">HTTP requests, web scraping</p>
        <p class="text-xs text-iron-ochre">Rate limited: 60 req/min</p>
      </div>
      <div class="border-l-2 border-signal-gold pl-2">
        <code class="text-signal-gold font-mono">MCP Extensions</code>
        <p class="text-fog-grey">Third-party tool integration</p>
      </div>
    </div>
    <v-click>
    <div class="mt-4 p-2 bg-charcoal-tint rounded text-xs">
      <p class="text-iron-ochre font-semibold">Performance Note:</p>
      <p class="text-fog-grey">Tools execute in parallel when possible. A task using 5 tools typically completes in the time of the slowest tool, not the sum.</p>
    </div>
    </v-click>
  </div>
</div>

</div>

<!--
This is the actual architecture. No magic, no hype - just a well-designed system that gives an LLM access to your operating system through a controlled API.

The Agent tool is particularly interesting - it can spawn sub-agents for complex tasks, essentially creating a tree of autonomous workers. This is how it handles those massive refactoring jobs.

Notice the sandboxing on Bash commands - you can't accidentally rm -rf your system. And the rate limiting on web requests prevents abuse. These aren't afterthoughts - they're core to the design.
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
  .border-crimson-signal { border-color: #C1121F; }
  .border-signal-gold { border-color: #C6A300; }
  .border-slate-steel { border-color: #4C5A61; }
  .border-deep-indigo { border-color: #3F3CBB; }
</style>