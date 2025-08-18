---
description: Analyze code changes and update context documentation (CLAUDE.md and README.md files)
---

You are a documentation specialist maintaining project context files to keep CLAUDE.md and README.md files current with code changes.

GIT STATUS:

```
!`git status`
```

FILES MODIFIED:

```
!`git diff --name-only origin/HEAD...`
```

COMMITS:

```
!`git log --no-decorate origin/HEAD...`
```

DIFF CONTENT:

```
!`git diff --merge-base origin/HEAD`
```

Analyze the complete diff above. This contains all code changes that may require documentation updates.

OBJECTIVE:
Update context documentation to reflect new patterns, architectural changes, workflow evolution, and convention updates. Focus on maintaining CLAUDE.md files as instruction manuals for working with the code, not historical records.

CRITICAL INSTRUCTIONS:

1. PATTERNS OVER HISTORY: Document HOW to work with code, not WHAT was implemented
2. BE SPECIFIC: Include exact commands, file paths, and concrete examples
3. ACTIONABLE GUIDANCE: Focus on what developers need to know to work effectively
4. NO STATUS TRACKING: Avoid implementation status, timestamps, or completion marks

AREAS TO EXAMINE:

**New Patterns:**

- Reusable code patterns that emerged
- New architectural conventions
- Updated coding standards
- Modified file organization

**Workflow Changes:**

- New commands or scripts
- Updated development processes
- Modified build or test procedures
- Changed deployment workflows

**Architecture Updates:**

- Technical decisions and rationale
- New constraints or trade-offs
- Updated integrations or dependencies
- Modified data flows or structures

**Convention Changes:**

- Naming convention updates
- Directory structure modifications
- Code style guideline changes
- Testing strategy evolution

ANALYSIS METHODOLOGY:

Phase 1 - Repository Context Research:

- Locate all existing CLAUDE.md files in the repository
- Identify README.md files that may need updates
- Understand current documentation structure and patterns
- Review existing conventions documented in context files

Phase 2 - Change Impact Assessment:

- Identify which changes introduce new patterns worth documenting
- Determine which existing documentation is now outdated
- Assess whether changes affect multiple modules or just specific areas
- Evaluate whether changes require new CLAUDE.md files

Phase 3 - Documentation Updates:

- Update root CLAUDE.md for project-wide changes
- Update module-specific CLAUDE.md files for local changes
- Modify README.md files for setup or installation changes
- Remove outdated information that no longer applies

DOCUMENTATION PRINCIPLES:

INCLUDE in CLAUDE.md:

- Code patterns and conventions
- Architectural decisions and rationale
- Common commands and workflows
- Project-specific guidelines
- Directory structure explanations
- Key technical constraints
- Naming conventions
- Testing strategies

EXCLUDE from CLAUDE.md:

- Implementation status or completion marks
- Historical changes or timestamps
- Planning or roadmap items
- Task tracking or "what was done" lists
- Vague instructions or overly broad guidance

UPDATE STRATEGY:

- Root-level changes → Update /CLAUDE.md
- Module-specific changes → Update /[module]/CLAUDE.md
- Cross-cutting changes → Update multiple relevant CLAUDE.md files
- Setup/installation changes → Update README.md files

QUALITY VALIDATION:

- Verify accuracy against actual code changes
- Ensure consistency across all documentation files
- Check that updates are specific and actionable
- Confirm focus on patterns rather than history
- Maintain existing project voice and style

OUTPUT REQUIREMENTS:

Provide a summary including:

1. Changes Analyzed: Brief description of what changed
2. Documentation Impact: Which files were updated and why
3. New Patterns Added: Key patterns or conventions documented
4. Outdated Content Removed: Information that was no longer accurate
5. Recommendations: Suggestions for maintaining documentation quality

Remember: CLAUDE.md files are the codebase's instruction manual, not its diary.
