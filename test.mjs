// Runs the SessionStart hook command the way Claude Code does and checks its output.
// Usage: node test.mjs
import assert from 'node:assert';
import { execSync } from 'node:child_process';
import { readFileSync } from 'node:fs';

const hooks = JSON.parse(readFileSync(new URL('./hooks/hooks.json', import.meta.url)));
const command = hooks.hooks.SessionStart[0].hooks[0].command;
const root = new URL('.', import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1');

const out = execSync(command, { env: { ...process.env, CLAUDE_PLUGIN_ROOT: root }, encoding: 'utf8' });
assert(out.startsWith('ESL MODE ACTIVE'), 'banner missing');
assert(out.includes('## Rules'), 'rules missing');
assert(out.includes('stop esl mode'), 'off switch missing');
assert(!out.includes('description:'), 'frontmatter leaked into the session');

const silent = execSync(command, { env: { ...process.env, CLAUDE_PLUGIN_ROOT: '' }, encoding: 'utf8' });
assert.equal(silent, '', 'hook must print nothing outside a plugin');

console.log('ok: hook prints the rules, no frontmatter, silent without CLAUDE_PLUGIN_ROOT');
