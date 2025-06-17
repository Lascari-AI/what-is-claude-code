---
theme: ../
layout: default
---

# Programmability: From Chat to Command

<div class="grid grid-cols-2 gap-8 mb-8">
  <div class="text-center">
    <div class="text-6xl mb-4">💬</div>
    <p class="text-xl text-gray-600">Traditional AI:</p>
    <p class="text-lg text-gray-900 font-semibold">Something you talk to</p>
    <div class="mt-4 bg-rose-100 rounded p-3 shadow-sm">
      <p class="text-sm text-gray-700">Manual, repetitive, unscalable</p>
    </div>
  </div>
  
  <div class="text-center">
    <div class="text-6xl mb-4">⚡</div>
    <p class="text-xl text-gray-600">Programmable AI:</p>
    <p class="text-lg text-emerald-600 font-semibold">Something you build with</p>
    <div class="mt-4 bg-emerald-100 rounded p-3 shadow-sm">
      <p class="text-sm text-gray-700">Automated, repeatable, scalable</p>
    </div>
  </div>
</div>

<v-clicks>

<div class="bg-amber-50 rounded-lg p-6 mb-6 shadow">
  <h3 class="text-xl font-bold text-gray-900 mb-4">The Power of the `-p` Flag</h3>
  <div class="bg-white p-4 rounded font-mono text-sm shadow-sm">
    <p class="text-gray-600"># Your existing process becomes executable</p>
    <p class="text-gray-800">$ claude -p "Review this PR using our team standards: 
    1. Check for SQL injection vulnerabilities
    2. Ensure all endpoints have auth middleware  
    3. Verify test coverage > 80%
    4. Validate error handling patterns"</p>
    <p class="text-emerald-600 mt-2"># Now it's a reusable command</p>
  </div>
</div>

<div class="grid grid-cols-2 gap-6">
  <div class="bg-sky-100 rounded-lg p-4 shadow-sm">
    <h4 class="text-md font-bold text-sky-700 mb-3">Scriptable Workflows</h4>
    <div class="bg-white p-3 rounded font-mono text-xs">
      <p class="text-gray-600">#!/bin/bash</p>
      <p class="text-gray-800">for file in $(git diff --name-only); do</p>
      <p class="text-emerald-600 ml-2">claude -p "Review $file for security"</p>
      <p class="text-gray-800">done</p>
    </div>
  </div>
  
  <div class="bg-purple-100 rounded-lg p-4 shadow-sm">
    <h4 class="text-md font-bold text-purple-700 mb-3">CI/CD Integration</h4>
    <div class="bg-white p-3 rounded font-mono text-xs">
      <p class="text-gray-600"># .github/workflows/ai-review.yml</p>
      <p class="text-gray-800">- name: AI Code Review</p>
      <p class="text-emerald-600 ml-2">run: claude /review_standards</p>
    </div>
  </div>
</div>

<div class="mt-6 p-4 bg-emerald-100 rounded-lg border-l-4 border-emerald-500 shadow">
  <p class="text-lg font-semibold text-gray-900 mb-2">This changes everything.</p>
  <p class="text-sm text-gray-700">
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

