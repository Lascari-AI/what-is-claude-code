---
layout: default
---

# Example: AI Developer Workflows (ADWs) {.text-4xl.font-bold.mb-8}



<div class="grid grid-cols-2 gap-6">
<v-clicks>
  <div>
    <h3 class="text-xl font-semibold mb-3 text-blue-400">1. Context Priming</h3>
    <div class="text-sm">

```xml
<request name="context_priming">
  <user_input>
    Follow the instructions precisely. 
    If it wasn't specified, don't do it.
  </user_input>
  <instructions>
    <instruction content='Parallel Read files'>
      <file_path>"file1.py"</file_path>
      <file_path>"file2.py"</file_path>
      <file_path>"rules/rule1.md"</file_path>
      <file_path>"rules/rule2.md"</file_path>
    </instruction>
    <instruction content='Run command'>
      eza . --tree --level 5 --git-ignore
    </instruction>
  </instructions>
</request>
```

  </div>
  </div>
  <div>
    <h3 class="text-xl font-semibold mb-3 text-green-400">2. Task Execution</h3>
    <div class="text-sm">

```xml
<request name="feature_implementation">
  <user_input>
    Complete the following tasks.
    Spawn sub-agents to complete non-blocking tasks in parallel.
  </user_input>
  <tasks>
    <task>Create a new branch</task>
    <task>Implement authentication module</task>
    <task>Add database migrations</task>
    <task>Create API endpoints</task>
    <task>Run pre-commit checks</task>
    <task>Create pull request</task>
  </tasks>
</request>
```

  </div>
  </div>
  </v-clicks>
</div>

<!--
Let's make this concrete. This is an AI Developer Workflow, or ADW of my own.

When making a feature change I draft up a plan.

I break that plan into sections, and for each section I do the following.

Make a prompt that "primes" the context, by getting the model to read all files I feel are relevant.

Next I give it a follow up prompt that gives it tasks and instructions to do the tasks by making new agents work in parallel.

For brevity I have shortened the task list, but for each of this tasks there would be many sub tasks.
-->
