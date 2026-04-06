---
layout: post
title: "Intent and trust signals in AI instructions: Results"
date: 2026-04-05
display_date: "April 5, 2026"
---

*This post shows empirical results for this idea ([part 1](../ai-skills-part-1/)) based on this methodology ([part 3](../ai-skills-part-3/)).*

## Takeaways

**1. Adoption of agent instructions is very low among non-enterprise users.** 

Just 3.5% of a 250k random sample of (project-level) repositories had markers of AI tooling, and only 1.1% had codified skill.md instructions. Those that did had a median of 4 instructions. Among these early adopters, instruction adoption is very similar across logarithmic-scale levels of activity.

![Number of instruction files per repository](../figures/1_1_skill_file_histogram.png)

**2. Instruction files span hundreds of topics in programming and data science.**

Many of the top 20 topics are about workflows, patterns, and execution steps. While they share this commonality, no topic dominates, and ~35% are unique and not easily clustered in groups with at least 15 free-form labels.

![Instruction share by object cluster](../figures/2_7_object_label_share.png)

**3. 3 in 5 instruction files reveal a “process specification” intent.**

The primary reason the human wrote the instruction was to tell the model to follow a specific sequence of steps, decision points, approval gates, or ordering requirements. 

![Instructions by primary intent](../figures/2_1b_intent_frequency.png)

**4. Some clusters, like design and front-end development, are an outsized share of intent categories.**

Humans are writing UI/UX instructions to align their preferences (duh).
	
![Object cluster by primary intent](../figures/2_2_object_intent_bubble.png)

**5. 95% of instructions give agents “adaptive” discretion.**

Very few instructions fully determine the process or output. Instead, most give agents frameworks to apply to situations. This makes sense… if the process is deterministic, then developers could write a script instead of an instruction.

![Primary intent by discretion](../figures/2_3_intent_discretion_matrix.png)

**6. Instructions with intents that have stronger trust explanation signals have more constraints.**

In Part 1, I explained constraints points toward a trust explanation, but their absence is ambiguous. In the chart below, we see that risk-mitigation and preference-alignment have an outsized share of 3rd and 4th quartile constraints per word. Put differently, compared to the “average” instruction, these instructions have more constraints and anticipate the agent’s failure.

![Constraint density by primary intent and discretion](../figures/2_6b_intent_discretion_constraint_quartiles.png)

**7. Instructions with process-specification intents suggest both trust and task explanations.**  

Prescribed discretion (left chart): Most instructions fall in the top quartile for constraints (the right most column), meaning developers provide explicit prohibitions on top of a fixed sequence. That indicates more specification than the task may require, suggests trust concerns are driving the design. The one exception worth noting: a cluster of (top quartile constraints and decisions) instructions that may not be agent instructions at all, but boilerplate policy documents that happen to look like them.

Adaptive discretion (right chart): Because adaptive discretion accounts for roughly 60% of all instructions, its quartile distributions largely mirror the overall sample, making  interpretation difficult. The more meaningful comparison is with the prescribed discretion group on the left, where the constraint pattern diverges noticeably. That said, the top right cell showing the top quartile of both constraints and decisions is the most common combo, which suggests that judgment is delegated but bounded.

![Decision vs constraint density for process-specification](../figures/2_8_process_spec_decision_constraint_matrix.png)
