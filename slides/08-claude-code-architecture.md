---
theme: ../
layout: default
---

# Introducing Claude Code

<div class="grid grid-cols-3 gap-8 mt-8">
 <div class="col-span-1">
    <!-- Agentic Card -->
    <v-clicks>
    <div class="text-center bg-blue-50 border border-blue-200 rounded-lg p-4 mb-3">
      <h4 class="font-semibold text-blue-600 mb-1 text-sm">
        <span class="align-middle mr-2 text-base">🤖</span>
        Agentic
      </h4>
    </div>
    <!-- Terminal-Native Card -->
    <div class="text-center bg-green-50 border border-green-200 rounded-lg p-4 mb-3">
      <h4 class="font-semibold text-green-600 mb-1 text-sm">
        <span class="align-middle mr-2 text-base">💻</span>
        Terminal-Native
      </h4>
    </div>
    <!-- Programmable Card -->
    <div class="text-center bg-purple-50 border border-purple-200 rounded-lg p-4">
      <h4 class="font-semibold text-purple-600 mb-1 text-sm">
        <span class="align-middle mr-2 text-base">⚡</span>
        Programmable
      </h4>
    </div>
    </v-clicks>
  </div>


<!-- Available Tools Box -->
<v-click>
<div class="col-span-2 bg-gray-800 rounded-xl p-4 shadow-xl text-xs">  
  <!--
    Changed p-6 to p-4 and added text-xs to make all text smaller.
    Also, removed text-sm from the inner grid to ensure all text is extra small.
    This makes the entire tools box and its contents smaller and more compact.
  -->
  <div class="grid grid-cols-2 gap-3">
    <!-- Left Column Tools -->
    <div class="space-y-4">
      <div class="flex items-center gap-2">
        <span class="bg-blue-500 text-white px-2 py-0.5 rounded font-mono">Agent</span>
        <span class="text-gray-300">Runs sub-agents for complex tasks</span>
      </div>
      <div class="flex items-center gap-2">
        <span class="bg-blue-500 text-white px-2 py-0.5 rounded font-mono">Bash</span>
        <span class="text-gray-300">Executes shell commands</span>
      </div>
      <div class="flex items-center gap-2">
        <span class="bg-blue-500 text-white px-2 py-0.5 rounded font-mono">Edit</span>
        <span class="text-gray-300">Makes targeted file edits</span>
      </div>
      <div class="flex items-center gap-2">
        <span class="bg-blue-500 text-white px-2 py-0.5 rounded font-mono">Glob</span>
        <span class="text-gray-300">Finds files by pattern</span>
      </div>
      <div class="flex items-center gap-2">
        <span class="bg-blue-500 text-white px-2 py-0.5 rounded font-mono">Grep</span>
        <span class="text-gray-300">Searches file contents</span>
      </div>
      <div class="flex items-center gap-2">
        <span class="bg-blue-500 text-white px-2 py-0.5 rounded font-mono">LS</span>
        <span class="text-gray-300">Lists files and directories</span>
      </div>
      <div class="flex items-center gap-2">
        <span class="bg-blue-500 text-white px-2 py-0.5 rounded font-mono">MultiEdit</span>
        <span class="text-gray-300">Multiple edits atomically</span>
      </div>
    </div>
    <!-- Right Column Tools -->
    <div class="space-y-4">
      <div class="flex items-center gap-2">
        <span class="bg-blue-500 text-white px-2 py-0.5 rounded font-mono">NotebookEdit</span>
        <span class="text-gray-300">Modifies Jupyter notebooks</span>
      </div>
      <div class="flex items-center gap-2">
        <span class="bg-blue-500 text-white px-2 py-0.5 rounded font-mono">NotebookRead</span>
        <span class="text-gray-300">Reads notebook contents</span>
      </div>
      <div class="flex items-center gap-2">
        <span class="bg-blue-500 text-white px-2 py-0.5 rounded font-mono">Read</span>
        <span class="text-gray-300">Reads file contents</span>
      </div>
      <div class="flex items-center gap-2">
        <span class="bg-blue-500 text-white px-2 py-0.5 rounded font-mono">TodoRead/Write</span>
        <span class="text-gray-300">Manages task lists</span>
      </div>
      <div class="flex items-center gap-2">
        <span class="bg-blue-500 text-white px-2 py-0.5 rounded font-mono">WebFetch</span>
        <span class="text-gray-300">Fetches URL content</span>
      </div>
      <div class="flex items-center gap-2">
        <span class="bg-blue-500 text-white px-2 py-0.5 rounded font-mono">WebSearch</span>
        <span class="text-gray-300">Performs web searches</span>
      </div>
      <div class="flex items-center gap-2">
        <span class="bg-blue-500 text-white px-2 py-0.5 rounded font-mono">Write</span>
        <span class="text-gray-300">Creates or overwrites files</span>
      </div>
    </div>
  </div>
</div>
</v-click>
</div>


<!--
This is where Claude Code found the sweet spot. It's not trying to hide complexity or pretend AI is magic. It's giving you a powerful tool that respects your expertise.

The terminal-native approach isn't just about being "hardcore" - it's about integration. Your existing scripts, your CI/CD pipelines, your workflows - Claude Code slots right in.

And the control mechanisms aren't afterthoughts. They're core to the design. You can be as hands-on or hands-off as the situation demands.
-->

