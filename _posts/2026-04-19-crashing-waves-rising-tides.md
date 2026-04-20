---
layout: post
title: "Crashing waves or rising tides?"
date: 2026-04-19
display_date: "April 19, 2026"
---

*Mertens, Matthias, et al. "Crashing Waves vs. Rising Tides: Preliminary Findings on AI Automation from Thousands of Worker Evaluations of Labor Market Tasks." [arXiv preprint arXiv:2604.01363](https://arxiv.org/pdf/2604.01363) (2026)*

This recent paper caught my eye for many reasons, including that it disagrees with earlier research on whether AI capabilities improve abruptly or broadly over tasks. I explain why the answer depends on how you construct the tasks. 

## Key idea
Build on [METR’s research](https://arxiv.org/pdf/2503.14499) by studying the shape of AI capability curves: Do models improve abruptly over some tasks, or do they increase broadly over most tasks? This question will shape the labor market impacts of more powerful AI systems, and inform the policy responses and political economy of displacement in the next \~2-5 years.

## Research design
Identify [O\*NET tasks](https://www.onetonline.org/search/task/) → create “exam problems” → filter → LLMs solve → humans annotate → model

## Data
First, ask GPT-4 which text-based tasks an LLM could complete in at least 10% less time than a human with “equivalent quality.”[^1] This returns \~11,000 tasks across blue- and white-collar occupations.[^2] Then, ask GPT-4 to create multiple “exam problems” of each task, and filter those that do not adhere to the prompt, are missing key information, and/or are not representative. The difficulty level of each problem is “calibrated for an experienced worker,” and they should be practical, realistic, and written in language common to the occupation.

Next, ask more than 40 LLMs to solve these problems, and survey subject matter experts to (a) evaluate the quality of the AI response and (b) state the time it would take a human to complete.

## Model specification
Like METR, model human time horizons using logistic regressions. 

## Results
Unlike METR, the relationship between task success and duration is “consistently shallow.” This holds for several alternative specifications, leading the authors to conclude that capabilities are improving rapidly and “at a similar pace across task-durations." The curve is flat (and the slope is not stat sig) for many of the job families with the largest number of exposed tasks—including admin support, business ops, and healthcare. What’s more, as models improve, capabilities have shifted up, not out.

## My perspective
This paper addresses a key limitation of METR’s research by including thousands of broadly-defined tasks from dozens of occupations. This scope, and the survey component, are more compelling.

But the research design fails on knowledge-based and longer-horizon work. I’ll use two of the example tasks on page 21 to explain why. 

In the short task (\~5 minutes), the LLM is asked to prepare a restaurant check, and the task is easily captured by the self-contained, 150-word prompt. **The prompt is the task.**

In the long task (\~4 hours), the LLM is asked to create a quarterly project status presentation in 10-12 slides with a few business metrics and some context (*e.g.,* “Stakeholder concerns: customer wants go-live unchanged”). The LLM is being told to make a **facsimile** of something a human would do. That’s different. 

This reflects the research design. Every task, regardless of duration, receives the same instructions and at most 150-words of context. This reduces potential noise from additional context, but introduces a systematic gap that grows with task duration. The more complex or ambiguous the task, the more the prompt likely *substitutes* for the information needed to solve the task in real life.[^3] In other words, longer tasks are transformed *more*.

**Here’s how I described this idea at dinner last night:**

* The short task is like an art professor telling their students to sketch a water lily.  
* The long task is like an art professor telling their students to paint a replica of a Monet water lily.  
* But in the real-world, the long task is like an art professor telling their students to paint an original, detailed scene of water lilies that they saw at a nearby garden. While some students may be influenced by Monet, they are painting what they saw at a specific day and time, from their viewpoint, and with their technique.

![Water Lilies, 1906]({{ "/assets/images/2026-04-19-crashing-waves/monet-water-lilies-1933.1157.jpg" | relative_url }})  
*Water Lilies, 1906. [Art Institute of Chicago](https://www.artic.edu/artworks/16568/water-lilies)*

## Why does this matter?

This shortcoming cuts at the paper’s central finding. If long-horizon tasks are systematically easier than their real-world equivalents, then the relatively flat capability curves may reflect task construction, not a property of AI progress (nor the work it will displace one day). The “rising tide” conclusion rests on tasks that have been quietly leveled.

![Figure 1: Crashing Waves vs Rising Tides in AI Automation]({{ "/assets/images/2026-04-19-crashing-waves/crashing-waves-figure-1.png" | relative_url }})
*Screenshot from the paper. The prompt construction makes LLM capabilities look like (b), even though they could be (a).*

To be fair, this shortcoming isn’t uniform across all long-horizon tasks. Consider another long-horizon task: Writing a Harvard Business School case study. Professors synthesize hours of interviews with the leaders and companies being profiled, and hundreds of pages of domain expertise, research, and conventions. Large, frontier models have already internalized that research during training. If the prompts included hundreds of pages of notes and documents, the interviews would be additive, but research papers might not be. 

Ultimately, the authors of this study accepted this information gap because it makes their research design more tractable.[^4] But it makes the research less compelling, and I think there’s a bigger problem.

*How* a human completes a long-horizon task is very different from the constraints placed on an LLM in this study. For example, the case study author makes hundreds of decisions based on emergent information—from Google searches, interviews, lunch conversations, formal feedback, and so on. In this study, the LLM takes a single turn. 

**Stepping back, this evaluation framework is no longer the best aperture to understand the trajectory of AI progress.** 

The question I want the authors to answer is whether an LLM *with powerful tools and structured context (together, the “operating system”)* can complete a task in at least 10% less time than a human with equivalent quality. Without the OS, we’re studying something different and disconnected, and risk drawing the wrong conclusions. Even if the path to transformative AI brings broad *and* abrupt changes, policymakers need clearer signals for both when considering policies like AI training, unemployment benefits, or [adjustment insurance](https://www.digitalistpapers.com/vol2/marinescu).


--

[^1]:  Equivalent quality means a subject-matter expert “would not be able to determine whether AI was used based on the quality of output.”

[^2]:  The prompts define marginal tasks as those that “require significant human judgement and expertise, with LLMs providing limited support,” such as “documentation or information retrieval.” 

[^3]:  For short tasks, the 150-word context captures most of what a human would have when doing the task. For long tasks, the 150-word context window is a tiny fraction of what a human would have.

[^4]:  *E.g.,* with hundreds of pages of context, we’d introduce variation in each model’s long-context reasoning, and early models would fail at much higher rates. Asking human evaluators to judge “equivalent quality” would also become much more expensive, and likely more inconsistent, thereby increasing the number of evals needed.