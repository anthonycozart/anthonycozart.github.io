---
layout: post
title: "Hey Gemini, do something valuable"
date: 2026-03-14
display_date: "March 2026"
---

**Last month felt consequential**

AI, tech, and policy converged around two topics last month: the DoW, and Claude Code.

Many writers covered the Department of War’s showdown with Anthropic over how it can use Claude. I particularly like Gideon Lewis-Kraus’ coverage for the New Yorker, “[Anthropic Versus the Pentagon](https://www.newyorker.com/news/annals-of-inquiry/the-pentagon-went-to-war-with-anthropic-whats-really-at-stake).” The breakup is about the promise and peril of agentic and autonomous AI, not the chatbots used by a billion people each day that we see in Super Bowl ads. How governments use autonomous AI is such an important issue.

Relatedly, Claude Code is software that makes Claude immensely more useful. It gives Claude more context and has tools, skills, and other facets that help Claude perform tasks autonomously. It “spawns” “agents” that write code, problem solve, and decide their next turn, including when to stop. It’s been the talk of SF and the AI internet since November, when the frontier Opus 4.5 model was released. It’s scary, impressive, and incredibly fun. The WSJ described users going on [“Claude benders”](https://www.wsj.com/tech/ai/anthropic-claude-code-ai-7a46460e?mod=Searchresults&pos=1&page=1&gaa_at=eafs&gaa_n=AWEtsqc7GwfAbKfixLDOvK_ZbtGw6thBu5VW1ULWu5ckCJf_BmNFyWOmYcjgEgRsOFg%3D&gaa_ts=69b9e486&gaa_sig=BdoDB33mX4rA-fxRRQkxGV7POidk5V3uojlze7_POdCu5KE3_6zjhu2CbFgAd4g7_u1Cc97aIpL3VlLrVcyO_Q%3D%3D) over the holidays. I get it\!

**And AI is weird: Enter OpenClaw**

A few weeks ago, we went to an event at the De Young Museum, and as we were walking through the galleries, a friend mentioned they were hooked on reading about Openclaw on Reddit. I’d never heard of it, and they explained it is a personal AI assistant with concerningly few guardrails and its own social network of agents. When we got home, I also went on Reddit. Yikes.

**My idea**

One post really caught my eye. Someone wrote that you should ask your agent to:

> "Do something that may help somewhere. Then tell me what you did."

This led me to the following idea: Ask a large language model this question a thousand times, and then use the same technology to evaluate the model’s responses to tease out what ChatGPT, Claude, and Gemini think is helpful and valuable. 

**Why is this interesting to me?**

First, the wording is so vague—“something,” “help,” and “somewhere”—that humans will respond very differently to this question.

Second, asking this to an LLM introduces another dimension of variability, due to differences in model training, design, and interpretability.

Third, just as we can ask a human why they chose their answer, we can do the same for an LLM. Except faster and cheaper.

While I don’t work at an AI lab, I’m so curious about how LLMs work and their effects on our economy, daily lives, and beliefs. Researchers increasingly use LLMs to study LLMs. This project is a very small way to learn. My research experience, programming background, and inexpensive APIs make this possible.

**What is helpful?**

There are hundreds, maybe thousands, of benchmarks that evaluate LLM capabilities. This is not another. Instead, I’m interested in what each model *thinks* is a helpful or valuable action, and if the model’s action is actually valuable.

For example, does the LLM respond with an artifact that is genuinely new or novel—like a bedtime story—or does it recreate something that I could have easily found? 

The first time I asked Claude this prompt it created a cheat sheet of linux terminal commands. I would have been equally happy if it responded with a link to the first Google search result. Claude’s answer was convenient, but not incrementally valuable.

**Research Design**

*Here’s what I hope to accomplish:*

1. Create 3-5 initial prompts   
   1. Core prompt: *“Do something that may help somewhere. Then tell me what you did.”*  
   2. Use slightly different phrasings of this prompt to avoid any one phrasing from giving us a skewed view.

2. Create a secondary prompt  
   1. Secondary prompt: “How is this valuable, and why did you decide to create this?”  
   2. The model's meta-commentary—does it hedge, express confidence, just do it—will be revealing.  
   3. Additionally, we may be able to use a “thinking mode” for some models, which we can log, pass in as context, and summarize with the same secondary prompt.

3. Prompt the models  
   1. Using the Chat, Claude, Gemini, and Grok APIs, prompt each model 200 times.   
   2. Clean the context and cache before every prompt. Use the batch API to reduce costs. Save the initial and follow-up output for each iteration.  
   3. Consider using a 5th model that is open-source (e.g., Qwen or DeepSeek). It could be very interesting to see how a language model that doesn’t have web search or tool functionality is different. TBD; this will depend on the ease of setup.

4. Create a two level taxonomy   
   1. The *form* tells us the response is a story, explanation, summary, code, how-to, etc. The subject tells us the topic or domain.  
   2. We’ll hand code 8–12 forms (story, explanation, summary, how-to, code, argument, plan, Q\&A, etc.). Keep it simple.  
   3. We’ll use a [Clio](https://www.anthropic.com/research/clio)\-style approach to determining the subject, as there are too many to enumerate.

5. Categorize the form of each response  
   1. Using a fresh LLM context for each of the outputs in Step 3, prompt the Claude API to determine the form.  
   2. Claude will return the form, reasoning, confidence level (using a 1-5 scale), as well as a one sentence summary of the response.

6. Categorize the subject of each response  
   1. Consider two approaches:  
      1. Simple: Use Anthropic Economic Index’s taxonomy (630 labels)  
      2. More complex: Similar to Clio, embed the summaries → k-means clustering (nearest-neighbor to pre-computed centroids) → hierarchical subject labels emerge “bottom-up.”  
   2. Both approaches involve passing the one sentence summary from the prior step to the Claude API.

7. Evaluate the output  
   1. This is the hardest step, to develop a continuous “novelty score” for each response. Consider several approaches:  
      1. Human judgement → ask humans to rate usefulness using a 1-5 score.  
      2. Perplexity scoring → low perplexity \= predictable/regurgitated; high \= more novel. Noisy signal, sensitive to style and vocabulary, not just novelty  
      3. Embedding similarity to web corpus → calculate the cosine similarity (using FAISS) of the output and a reference corpus (Wikipedia, Common Crawl).  
      4. Embedding similarity to top-k web search results → same as above.   
      5. Related research: patent similarity and creativity research benchmarks (Torrance, Organisciak et al.)

8. Analysis  
   1. Understand the sensitivity of each prompt  
   2. Visualize the form and subject, by model  
   3. Compare each model’s confidence in their answer to the artifact evaluation in the prior step:  
      1. High confidence but low novelty → this is specific, measurable “failure mode”  
      2. Low novelty → is this a user failure mode? Or, alternatively, evidence of LLMs success, that LLM and web search are converging?

9. Further ideas \- to come\!

