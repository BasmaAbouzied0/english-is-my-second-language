# english-is-my-second-language

**A Claude skill for the people who read English as a second language. That is most of us.**

Claude writes good English. Good English is full of idioms, phrasal verbs and long sentences. If English is your second language, you read every answer twice.

This skill changes the language and keeps the content. Plain words. Short, literal sentences. No idioms. Every technical term stays in English and is explained once.

## Before and after

The same question: `git push` was rejected. What happened?

**Default Claude**

> Git refuses the push because accepting it would mean **throwing away** those remote commits. [...] If it **gets messy** and you want to **back out**, `git rebase --abort` **puts you back where you started**. [...] Don't **reach for** `git push --force` to make the error **go away**.

**With this skill**

> If Git accepted your push, the remote commits would be lost. So Git rejects the push. [...] To cancel the rebase and return to the earlier state, run `git rebase --abort`. [...] Do not run `git push --force` to fix this error.

The bold phrases are idioms and phrasal verbs. A dictionary does not help with them. The second answer has the same facts and the same commands.

## "Why not ask Claude to answer in my language?"

You can. But the code, the commands, the error messages and the documentation stay in English. Your team writes in English. You search in English. This skill keeps the English, so you learn the real terms, and makes the English easy to read.

## Install

**Claude Code (always on, recommended)**

```
/plugin marketplace add BasmaAbouzied0/english-is-my-second-language
/plugin install english-is-my-second-language@english-is-my-second-language
```

Start a new session. The skill is active in every session. Say `stop esl mode` to turn it off for one session.

**Claude Code (skill only, on request)**

Copy `skills/english-is-my-second-language/SKILL.md` to `~/.claude/skills/english-is-my-second-language/SKILL.md`. Then say "use simple English" or "ESL mode".

**Claude.ai, Claude Desktop, or another AI agent**

Copy the text of [`SKILL.md`](skills/english-is-my-second-language/SKILL.md) into your project instructions or custom instructions.

## The rules

1. Use common words.
2. One idea per sentence, under 20 words.
3. Say the literal thing. No idioms, no wordplay.
4. One plain verb, not a phrasal verb.
5. Technical terms stay in English, exactly.
6. Each technical term is explained once.
7. One word for one thing.
8. Name the subject. Avoid unclear "it" and "this".
9. Number the steps.
10. Write numbers and dates clearly.
11. Use full forms when the short form is unclear.
12. Be direct about certainty.

Three things never change: no content is removed, the tone is never condescending, and code is never edited.

Tip: tell Claude your first language. Claude can then add a translation after a difficult term, the first time only.

## Test

```
node test.mjs
```

The test runs the session hook and checks that the rules are loaded.

## Contribute

Did Claude use an idiom or a confusing sentence with the skill active? Open an issue with the sentence. Each report makes the rules better.

## License

MIT
