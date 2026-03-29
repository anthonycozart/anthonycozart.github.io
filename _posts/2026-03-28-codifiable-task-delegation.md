---
layout: post
title: "Will all codifiable tasks be delegated?"
date: 2026-03-28
display_date: "March 28, 2026"
---

> “Anything that can be described in a [skill.md file](https://agentskills.io/home) won’t be part of your job as a data scientist in the future.” 
   
When a VP of data science made this claim at a recent tech talk, my reaction was mixed.

The reductive version is that anything other than deciding what is strategically important will be delegated to LLMs. As AI tools mature, even complex challenges requiring years of context will be delegated. Agents will get better at reasoning, need less human input when judgement calls emerge, and handle anything that can be codified—gathered, written, and organized. What’s more, explicit instructions will become less important when we let frontier models “train themselves,” which will lead to even greater task delegation.[^1]

To most people, this outcome seems extreme.

But seeing increasingly useful applications of AI every day makes me think the claim will be *mostly* true. For example, the same tech talk had a demo of agents running power analyses for proposed A/B experiments, which they interpreted and discussed with humans. My team’s workflows are rapidly changing due to Cursor and Claude Code. In a couple years, the responsibilities and expectations of data scientists will be very different.

## Why am I hedging…

Models are [improving at an exponential rate](https://metr.org/blog/2025-03-19-measuring-ai-ability-to-complete-long-tasks/), and history tells us we consistently underestimate changes with similar trajectories. So why do I think it will be “mostly” true? I’m hedging because of the adoption challenges that currently prevent “complete” delegation.

## Practical bottlenecks: how we work will need to change.

Take my team, for example. We often discuss choices and reasons informally, without much process. A lot of tacit knowledge and reasoning isn’t written down, often because we work on sensitive issues. This limits LLMs on context-dependent tasks. We also don’t pair program; if we did, the transition to human-agent collaboration might be smoother. 

Many of our tasks require some judgement across a spectrum from the simple (like good “taste” [when visualizing](https://www.reddit.com/r/dataisbeautiful/)) to the highly strategic (like understanding the implications to other public affairs concerns). Even as the models and agents improve, adoption and delegation will be full of trial and error.

Ultimately these reasons feel temporary—we’re already adopting new practices, and could even “hard reset” how we work to be better suited for LLMs. But wholesale change will require more energy, which in a do-more-with-less moment, is hard to prioritize.

## Social bottlenecks: delegation requires trust.

Even when AI assists with the majority of a workflow, I am still responsible for that output. So my ability to check its work, and my confidence that there are few (or zero) silent failures, is important. Human-AI “observability” is a design problem that results in less delegation.[^2] Solving this is a much more difficult challenge.

## Some tasks shouldn’t be delegated.

Even if something can be described in a skill.md file, I don’t expect to delegate 100% of the time. Consider, for example, the task of sharing the results of an experiment. With the right context and tone, AI can already write a clearer status update than many employees. But current models [can’t write the tough updates](https://jasmi.news/p/ai-writing) that require self-awareness, authenticity, and even vulnerability. When the XP setup fails terribly, or there’s a bad mistake, or the results challenge the executive vision and create uncertainty, humans probably shouldn’t delegate to AI. They should pick up the phone or walk over to their stakeholder’s desk.

## What does the research say?

Setting aside my n-of-1 experiences, what does the research say on task-based exposure and delegation to LLMs?

* One of the earlier papers, [“GPTs are GPTs”](https://arxiv.org/pdf/2303.10130) (2023) found that on average, 15% of “tasks” within an occupation are “directly exposed” to GPT-4 models. That’s low, but if we look at [the data](https://github.com/openai/GPTs-are-GPTs/blob/main/data/occ_level.csv), they find that 50-75% of tasks for data scientists, however, are exposed.[^3]  
    
* “[Which Economic Tasks are Performed by AI](https://arxiv.org/abs/2503.04761)” (2025) explores what humans are discussing and delegating to Claude (and the Claude API). Quarterly releases by Anthropic reveal tons of interesting insights, like time savings, equivalent wages, and delegation success rates.  
    
* [Challenges and Paths Towards AI for Software Engineering](https://arxiv.org/pdf/2503.22625) (2026) is a paper by computer scientists with a high-level taxonomy of “tasks in AI software engineering.” Instead of looking at O\*NET tasks [for developers](https://www.onetonline.org/search/task/choose/15-1252.00), they define six categories of tasks and sub tasks (e.g., Code Refactoring), and explore the task scope, logical complexity, and level of human intervention. These dimensions are an attempt to capture the social bottlenecks and model limitations (that frustrate humans today). I’d love to see researchers apply this to real-world data (e.g., GitHub, or a company undertaking wholesale change in their tech stack).  
    
* Looking beyond tasks, [David Autor and Neil Thompson](https://www.digitalistpapers.com/vol2/autorthompson) have thought deeply about expertise and how AI will change labor demand and wages. Their research speaks to a common anxiety about AI—what does it mean for my job security and future earnings? Their framework highlights the difficult task policymakers will have when disruption grows:   
    
  > “The conventional view focuses on labor demand: Automation replaces workers, reducing demand for their labor, causing both wages and employment to fall together. The expertise framework reveals that automation also shifts labor supply constraints. By changing which workers are qualified to perform an occupation’s remaining tasks, automation creates divergent wage and employment effects.”
    
  Figure 1 is an intuitive and instructive visualization—what AI delegation means for data science will depend on what granular tasks are replaced, and how the field moves into new domains of expertise. They consider Software Engineers explicitly:  
    
  > “For senior engineers, AI automates relatively inexpert tasks—boilerplate code, syntax lookup, routine debugging. These engineers now focus more on architecture, design, and complex problem-solving. Their productivity and their wages will likely rise as they concentrate on higher-value activities. For junior engineers, however, AI automates their core expert tasks—the basic programming that traditionally served as their entry point to the profession. Writing functional code was their primary value-add; now AI does it more quickly and cheaply, and may eventually do it better.”

My job, like many others, will change faster than most of us expect. The impacts, however, will be moderated in the short term by challenges—like learning curves, trust, and model performance compared to an expert—such that “all” codifiable tasks won’t disappear.  


[^1]:  This is “[the biggest decision yet](https://www.theguardian.com/technology/ng-interactive/2025/dec/02/jared-kaplan-artificial-intelligence-train-itself).” 

[^2]:  This is similar to the problem managers face with new or underperforming employees, but with an added wrinkle: That AI’s tacit knowledge may be harder to draw out and understand.

[^3]:  A “task” comes from the O\*NET classification, for [example](https://www.onetonline.org/search/task/choose/15-2051.00): *“Analyze, manipulate, or process large sets of data using statistical software.”* A task is “exposed” if LLMs can cut in half the time required to complete a task.