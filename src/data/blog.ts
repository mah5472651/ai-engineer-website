/**
 * Blog posts — add new posts here.
 * `body` supports Markdown (headings, lists, code, links).
 */

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string; // YYYY-MM-DD
  tags: string[];
  readingMinutes: number;
  body: string;
};

export const posts: BlogPost[] = [
  {
    slug: "building-eval-gates-for-agents",
    title: "Building eval gates that actually block bad agent releases",
    description:
      "How we turned agent quality from a vibe-check into a merge-blocking gate with task suites, faithfulness scores, and canary deploys.",
    date: "2025-11-12",
    tags: ["Agents", "Evals", "MLOps"],
    readingMinutes: 8,
    body: `
## The problem

Agent demos look great until Tuesday. A prompt tweak, a new tool schema, or a model upgrade silently drops task completion. Teams notice weeks later when users complain.

We needed a **release gate**: if quality regresses, the change does not ship.

## What we measure

For research and support agents we track four offline metrics on a fixed suite:

1. **Task success** — binary pass/fail against gold outcomes
2. **Faithfulness** — claims grounded in retrieved or tool context
3. **Tool correctness** — right tool, valid args, sensible retries
4. **Cost & latency** — tokens and wall time budgets

Offline scores alone are not enough. We also run a **canary** on 5% of traffic with online ratings and automatic rollback.

## Suite design that stays useful

- Keep the suite small enough to run in CI (we use ~120 tasks).
- Mix easy, medium, and adversarial cases.
- Version the suite like code; never silently rewrite gold labels.
- Separate **prompt/model** changes from **tool/infra** changes in the report.

\`\`\`python
# Pseudocode for a CI gate
scores = run_eval_suite(agent_build, suite="research_v3")
assert scores.task_success >= baseline.task_success - 0.02
assert scores.faithfulness >= baseline.faithfulness - 0.01
\`\`\`

## Lessons

- One number is a lie; show a small scorecard.
- Flaky tools create flaky evals — isolate network and mock where safe.
- Human review still matters for new failure modes the suite has never seen.

If your agents ship without a gate, you are A/B testing production by accident.
`,
  },
  {
    slug: "hybrid-search-that-actually-ships",
    title: "Hybrid search that actually ships: BM25 + dense + re-rank",
    description:
      "A practical recipe for production RAG retrieval: hybrid search, cross-encoder re-ranking, caching, and the metrics we watch.",
    date: "2025-06-03",
    tags: ["RAG", "Search", "pgvector"],
    readingMinutes: 7,
    body: `
## Dense-only is rarely enough

Dense retrieval is great for paraphrases and soft matches. It is weak on exact identifiers: order IDs, error codes, rare product names. BM25 still wins there.

In VectorForge we run **hybrid retrieval**:

1. BM25 top-k
2. Dense (pgvector) top-k
3. Reciprocal rank fusion
4. Cross-encoder re-rank of the fused candidates
5. Context packing under a token budget

## Latency budget

Retrieval has to stay fast. Our split:

| Stage | Budget |
| --- | --- |
| Hybrid recall | ≤ 40ms p99 |
| Re-rank (top 50 → 8) | ≤ 80ms p99 |
| Total retrieval | ≤ 180ms p99 |

Tricks that helped: HNSW with sane \`ef_search\`, Redis cache on hot queries, and batching re-rank on GPU only when batch size pays off.

## Quality metrics

- **Recall@k** on labeled queries
- **nDCG** for ranking quality
- **Faithfulness** of the final answer (end-to-end)
- **Citation hit rate** — did the model cite a chunk that supports the claim?

Improving retrieval without measuring answer quality optimizes the wrong layer.

## Takeaway

Hybrid + re-rank is boring infrastructure — and that is the point. Boring retrieval ships. Clever one-off embeddings without evals do not.
`,
  },
  {
    slug: "online-learning-for-anomaly-detection",
    title: "Online learning for anomaly detection without pager fatigue",
    description:
      "How SignalNet cut false positives 40% by combining baselines, neural forecasts, and confidence-aware paging.",
    date: "2024-09-18",
    tags: ["Time-series", "MLOps", "Monitoring"],
    readingMinutes: 6,
    body: `
## Static thresholds fail at scale

\`cpu > 90%\` pages forever. Seasonal traffic, deploys, and tenant mix change what "normal" means. Static rules either spam on-call or miss real incidents.

## Approach

SignalNet scores each stream with:

- Robust statistical baselines (seasonal + trend)
- A neural forecaster for complex multi-metric patterns
- A **confidence** head used for paging decisions

Only fire a page when:

\`\`\`text
anomaly_score > τ_score AND confidence > τ_conf AND business_impact ≥ threshold
\`\`\`

## Online updates

We update baselines continuously and retrain the forecaster on a schedule. Shadow mode compares new models against the current page rate and precision estimates before promotion.

## Result

False positives dropped ~40% versus pure static thresholds, with no measured drop in true-positive capture on our incident retrospective set.

## Practical advice

- Log every suppressed anomaly; that dataset is gold.
- Separate detection quality from notification policy.
- Always have a manual override path for on-call.
`,
  },
  {
    slug: "lora-recipes-that-transfer",
    title: "LoRA recipes that transfer across product teams",
    description:
      "What we standardized in TuneKit so five teams could fine-tune domain assistants without five different training stacks.",
    date: "2024-04-22",
    tags: ["LoRA", "Fine-tuning", "LLMs"],
    readingMinutes: 6,
    body: `
## The fragmentation problem

Every team reinvented training scripts, logging, and "eval." Half the models never left a notebook. TuneKit was our answer: one CLI, shared recipes, mandatory eval hooks.

## Defaults that worked

- LoRA rank 16–64 depending on data size
- Strong base instruction model before domain adaptation
- Mixed domain + general data to reduce catastrophic forgetting
- Golden prompt set (50–200) run on every checkpoint

## Promotion criteria

A domain adapter promotes only if:

1. Domain eval improves beyond baseline by a set margin
2. General capability suite does not regress past a floor
3. Smoke generation on golden prompts passes human spot-check

## Export path

Train → merge or serve adapters → vLLM → canary. Artifact IDs are immutable. Rollback is a config change, not a scavenger hunt.

## Closing thought

Fine-tuning is a product process, not a training script. The script is the easy part.
`,
  },
];

export function getAllPosts(): BlogPost[] {
  return [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}

/** Formats a calendar date as `Mon D, YYYY` in a timezone-stable way (UTC). */
export function formatPostDate(date: string): string {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) {
    throw new Error(`Invalid post date "${date}"; expected YYYY-MM-DD`);
  }
  const [year, month, day] = date.split("-").map(Number);
  // Construct via UTC so SSR (often UTC) and clients render the same calendar day.
  const utc = new Date(Date.UTC(year, month - 1, day));
  if (
    utc.getUTCFullYear() !== year ||
    utc.getUTCMonth() !== month - 1 ||
    utc.getUTCDate() !== day
  ) {
    throw new Error(`Invalid calendar date "${date}"`);
  }
  return utc.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  });
}
