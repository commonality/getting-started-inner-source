<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Managing Issues

New issues are filed frequently, and how we respond to those issues directly affects the success of the project. Being part of the project team means helping to triage and address issues as they come in so the project can continue to run smoothly.

## Table of contents

<!-- ⛔️ AUTO-GENERATED-CONTENT:START (TOC:excludeText=Table of contents) -->
- [1. Things to Keep in Mind](#1-things-to-keep-in-mind)
  * [1.1. Be nice](#11-be-nice)
  * [1.2. Be inquisitive](#12-be-inquisitive)
  * [1.3. Not all requests are equal](#13-not-all-requests-are-equal)
  * [1.4. Close when appropriate](#14-close-when-appropriate)
- [2. Types of Issues](#2-types-of-issues)
  * [2.1. Defect](#21-defect)
  * [2.2. Enhancement](#22-enhancement)
  * [2.3. Feature](#23-feature)
  * [2.4. Question](#24-question)
- [3. When an Issue is opened](#3-when-an-issue-is-opened)
  * [3.1. Triaging an Issue](#31-triaging-an-issue)
- [4. Accepting Issues](#4-accepting-issues)
- [5. Championing Issues](#5-championing-issues)
- [6. Consensus](#6-consensus)
- [7. When to Send to TSC](#7-when-to-send-to-tsc)
- [8. Evaluating Core Features and Enhancements (TSC members only)](#8-evaluating-core-features-and-enhancements-tsc-members-only)
- [9. When to Close an Issue](#9-when-to-close-an-issue)
<!-- ⛔️ AUTO-GENERATED-CONTENT:END -->

## 1. Things to Keep in Mind

### 1.1. Be nice

Even if the people are being rude or aggressive on an issue, as a project team member you must be the mature one in the conversation. Do your best to work with everyone no matter their style. Remember, poor wording choice can also be a sign of someone who doesn't know English very well, so be sure to consider that when trying to determine the tone of someone's message. Being rude, even when someone is being rude to you, reflects poorly on the team and the project as a whole.

### 1.2. Be inquisitive

Ask questions on the issue whenever something isn't clear. Don't assume you understand what's being reported if there are details missing. Whenever you are unsure, it's best to ask for more information.

### 1.3. Not all requests are equal

It's unlikely we'll be able to accommodate every request, so don't be afraid to say that something doesn't fit into the scope of the project or isn't practical. It's better to give such feedback if that's the case.

### 1.4. Close when appropriate

Don't be afraid to close issues that you don't think will be done, or when it's become clear from the conversation that there's no further work to do. Issues can always be reopened if they are closed incorrectly, so feel free to close issues when appropriate. Just be sure to leave a comment explaining why the issue is being closed (if not closed by a commit).

## 2. Types of Issues

There are four primary issue categories:

### 2.1. Defect

Something isn't working the way it's expected to work.

### 2.2. Enhancement

A change to something that already exists. For instance, adding a new option to an existing rule or a defect in a rule where fixing it will result in the rule reporting more problems (in this case, use both "Defect" and "Enhancement").

### 2.3. Feature

Adding something that doesn't already exist. For example, adding a new rule, new formatter, or new command line flag.

### 2.4. Question

An inquiry about how something works that won't result in a code change. We'd prefer if people use the mailing list or chatroom for questions, but sometimes they'll open an issue.

The first goal when evaluating an issue is to determine which category the issue falls into.

## 3. When an Issue is opened

When an issue is opened, the bot will automatically apply the label:

![status: triage][label-status-triage-img]

Issues labeled with <kbd>status: triage</kbd> are the ones that need to be looked at by team members to determine what to do next.

  ---

  <details>
  <summary><img align="middle" alt="question" height="30" width="30" src="https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/question.svg"> Toggle view of the Issue workflow flowchart.</summary>

  ![Issue flowchart][issue-workflow-img]

  </details>

  ---

### 3.1. Triaging an Issue

The steps for triaging an issue are:

1. **Is it clear what is being requested?**

    **_No:_**

    > Add the "needs info" label to the issue. The bot will add a comment asking for more information. You don't need to comment any further until the person who opened the issue responds with the information requested from the bot.

    **_Yes:_**

    > 1. Remove the "triage" label
    > 1. Label questions with the "question" label
    > 1. Label defect reports with the "defect" label (also use the "accepted" label if you can reproduce and verify the defect, otherwise add the "evaluating" label to indicate someone needs to verify)
    > 1. Label requests for changes to existing features (new rule options, new configuration options, etc.) with the "feature" and "evaluating" labels
    > 1. Label requests for completely new features (new rules, supporting a new file format, etc.) with the "feature" and "evaluating" labels
    > 1. Use an appropriate label for the part of the project the issue refers to:
    >    1.  "build" - related to commands run during a build (testing, linting, release scripts, etc.)
    >    1. "cli" - related to command line input or output, or to `CLIEngine`
    >    1. "core" - related to internal APIs
    >    1. "documentation" - related to content on eslint.org
    >    1. "infrastructure" - related to resources needed for builds or deployment (VMs, CI tools, bots, etc.)
1. **Once it's clear what type of issue it is, make sure all of the relevant information is provided:**
    * **Defects**: See [defect reporting guidelines](/docs/developer-guide/contributing/reporting-defects)
    * **New Rules:** See [rule proposal guidelines](/docs/developer-guide/contributing/new-rules)
    * **Rule Changes:** See [rule change proposal guidelines](/docs/developer-guide/contributing/rule-changes)
    * **Other Changes:** See [change proposal guidelines](/docs/developer-guide/contributing/changes)
1. **Next steps:**
    * **Questions:** answer the question and close the issue when the conversation is over.
    * **Defects:** if you can verify the defect, add the "accepted" label and ask if they would like to submit a pull request.
    * **New Rules:** if you are willing to champion the rule (meaning you believe it should be included in {product-name} core and you will take ownership of the process for including it), add a comment saying you will champion the issue, assign the issue to yourself, and follow the [guidelines](#championing-issues) below.
    * **Rule Changes:** if you are willing to champion the change and it would not be a breaking change (requiring a major version increment), add a comment saying that you will champion the issue, assign the issue to yourself, and follow the [guidelines](#championing-issues) below.
    * **Breaking Changes:** if you suspect or can verify that a change would be breaking, label it as "Breaking".
    * **Duplicates:** if you can verify the issue is a duplicate, add a comment mentioning the duplicate issue (such as, "Duplicate of #1234") and close the issue.
1. Regardless of the above, always leave a comment. Don't just add labels, engage with the person who opened the issue by asking a question (request more information if necessary) or stating your opinion of the issue. If it's a verified defect, ask if the user would like to submit a pull request.

**Note:** "Good first issue" issues are intended to help new contributors feel welcome and empowered to make a contribution to {product-name}. To ensure that new contributors are given a chance to work on these issues, issues labeled "good first issue" must be open for 30 days *from the day the issue was labeled* before a team member is permitted to work on them.

## 4. Accepting Issues

Issues may be labeled as "accepted" when the issue is:

* A defect that you've been able to reproduce and verify (i.e. you're sure it's a defect)
* A new rule or rule change that you're championing and [consensus](#consensus) has been reached for its inclusion in the project

The "accepted" label will be added to other issues by a TSC member if it's appropriate for the roadmap.

## 5. Championing Issues

New rules and rule changes require a champion. As champion, it's your job to:

* Gain [consensus](#consensus) from the {product-name} team on inclusion
* Guide the rule creation process until it's complete (so only champion a rule that you have time to implement or help another contributor implement)

Once consensus has been reached on inclusion, add the "accepted" and, optionally, "help wanted" and "good first issue" labels, as necessary.

## 6. Consensus

Consensus is reached on issues when there are at least three team members who believe the change is a good idea and no one who believes the change is a bad idea. In order to indicate your support for an issue, leave a +1 reaction (thumbs up) on the original issue description in addition to any comments you might have.

## 7. When to Send to TSC

If consensus cannot be reached on an issue, or an issue's progress has been stalled and it's not clear if the issue should be closed, then you can refer the issue to the TSC for resolution. To do so, add the "tsc agenda" label to the issue and add a comment including the following information:

1. A one-paragraph summary of the discussion to this point.
2. The question you would like the TSC to answer.

The issue will be discussed at the next TSC meeting and the resolution will be posted back to the issue.

## 8. Evaluating Core Features and Enhancements (TSC members only)

In addition to the above, changes to the core (including CLI changes) that would result in a minor or major version release must be approved by the TSC by standard TSC motion. Add the label "tsc agenda" to the issue and it will be discussed at the next TSC meeting. In general, requests should meet the following criteria to be considered:

1. The feature or feature is in scope for the project and should be added to the roadmap
1. Someone is committed to including the change within the next year
1. There is reasonable certainty about who will do the work

When a suggestion is too ambitious or would take too much time to complete, it's better not to accept the proposal. Stick to small, incremental changes and lay out a roadmap of where you'd like the project to go eventually. Don't let the project get bogged down in big features that will take a long time to complete.

**Breaking Changes:** Be on the lookout for changes that would be breaking. Issues that represent breaking changes should be labeled as "breaking".

## 9. When to Close an Issue

All team members are allowed to close issues depending on how the issue has been resolved.

Team members may close an issue **immediately** if:

1. The issue is a duplicate of an existing issue.
1. The issue is just a question and has been answered.

Team members may close an issue where the consensus is to not accept the issue after a waiting period (to ensure that other team members have a chance to review the issue before it is closed):

* Wait **2 days** if the issue was opened Monday through Friday.
* Wait **3 days** if the issue was opened on Saturday or Sunday.

In an effort to keep the issues backlog manageable, team members may also close an issue if the following conditions are met:

* **Unaccepted**: Close after it has been open for 21 days, as these issues do not have enough support to move forward.
* **Accepted**: Close after 90 days if no one from the team or the community is willing to step forward and own the work to complete to it.
* **Help wanted:** Close after 90 days if it has not been completed.

<!-- ⛔️ Do not remove this comment or anything under it ⛔️ -->

<!-- 🔗  Body link references 🔗   -->

[issue-workflow-img]: ../img/icons8/contribution-lifecycle-create-issue.png
[label-status-triage-img]: https://fakeimg.pl/200x24/d4c5f9/FFF/?text=status:+triage&font_size=20&font=museo
[pr-workflow-img]: ../img/icons8/contribution-lifecycle-pr.png

<!-- 🔗  Octicon img references 🔗   -->

[octicon-alert]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/alert.svg
[octicon-arrow-down]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/arrow-down.svg
[octicon-arrow-left]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/arrow-left.svg
[octicon-arrow-right]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/arrow-right.svg
[octicon-arrow-small-down]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/arrow-small-down.svg
[octicon-arrow-small-left]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/arrow-small-left.svg
[octicon-arrow-small-right]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/arrow-small-right.svg
[octicon-arrow-small-up]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/arrow-small-up.svg
[octicon-arrow-up]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/arrow-up.svg
[octicon-beaker]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/beaker.svg
[octicon-bell]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/bell.svg
[octicon-bold]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/bold.svg
[octicon-book]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/book.svg
[octicon-bookmark]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/bookmark.svg
[octicon-briefcase]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/briefcase.svg
[octicon-broadcast]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/broadcast.svg
[octicon-browser]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/browser.svg
[octicon-bug]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/bug.svg
[octicon-calendar]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/calendar.svg
[octicon-check]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/check.svg
[octicon-checklist]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/checklist.svg
[octicon-chevron-down]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/chevron-down.svg
[octicon-chevron-left]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/chevron-left.svg
[octicon-chevron-right]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/chevron-right.svg
[octicon-chevron-up]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/chevron-up.svg
[octicon-circle-slash]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/circle-slash.svg
[octicon-circuit-board]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/circuit-board.svg
[octicon-clippy]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/clippy.svg
[octicon-clock]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/clock.svg
[octicon-cloud-download]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/cloud-download.svg
[octicon-cloud-upload]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/cloud-upload.svg
[octicon-code]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/code.svg
[octicon-comment-discussion]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/comment-discussion.svg
[octicon-comment]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/comment.svg
[octicon-credit-card]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/credit-card.svg
[octicon-dash]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/dash.svg
[octicon-dashboard]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/dashboard.svg
[octicon-database]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/database.svg
[octicon-desktop-download]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/desktop-download.svg
[octicon-device-camera-video]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/device-camera-video.svg
[octicon-device-camera]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/device-camera.svg
[octicon-device-desktop]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/device-desktop.svg
[octicon-device-mobile]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/device-mobile.svg
[octicon-diff-added]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/diff-added.svg
[octicon-diff-ignored]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/diff-ignored.svg
[octicon-diff-modified]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/diff-modified.svg
[octicon-diff-removed]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/diff-removed.svg
[octicon-diff-renamed]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/diff-renamed.svg
[octicon-diff]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/diff.svg
[octicon-ellipses]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/ellipses.svg
[octicon-ellipsis]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/ellipsis.svg
[octicon-eye]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/eye.svg
[octicon-file-binary]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/file-binary.svg
[octicon-file-code]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/file-code.svg
[octicon-file-directory]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/file-directory.svg
[octicon-file-media]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/file-media.svg
[octicon-file-pdf]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/file-pdf.svg
[octicon-file-submodule]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/file-submodule.svg
[octicon-file-symlink-directory]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/file-symlink-directory.svg
[octicon-file-symlink-file]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/file-symlink-file.svg
[octicon-file-text]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/file-text.svg
[octicon-file-zip]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/file-zip.svg
[octicon-file]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/file.svg
[octicon-flame]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/flame.svg
[octicon-fold]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/fold.svg
[octicon-gear]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/gear.svg
[octicon-gift]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/gift.svg
[octicon-gist-secret]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/gist-secret.svg
[octicon-gist]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/gist.svg
[octicon-git-branch]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/git-branch.svg
[octicon-git-commit]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/git-commit.svg
[octicon-git-compare]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/git-compare.svg
[octicon-git-merge]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/git-merge.svg
[octicon-git-pull-request]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/git-pull-request.svg
[octicon-globe]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/globe.svg
[octicon-grabber]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/grabber.svg
[octicon-graph]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/graph.svg
[octicon-heart]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/heart.svg
[octicon-history]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/history.svg
[octicon-home]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/home.svg
[octicon-horizontal-rule]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/horizontal-rule.svg
[octicon-hubot]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/hubot.svg
[octicon-inbox]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/inbox.svg
[octicon-info]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/info.svg
[octicon-issue-closed]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/issue-closed.svg
[octicon-issue-opened]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/issue-opened.svg
[octicon-issue-reopened]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/issue-reopened.svg
[octicon-italic]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/italic.svg
[octicon-jersey]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/jersey.svg
[octicon-key]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/key.svg
[octicon-keyboard]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/keyboard.svg
[octicon-law]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/law.svg
[octicon-light-bulb]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/light-bulb.svg
[octicon-link-external]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/link-external.svg
[octicon-link]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/link.svg
[octicon-list-ordered]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/list-ordered.svg
[octicon-list-unordered]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/list-unordered.svg
[octicon-location]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/location.svg
[octicon-lock]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/lock.svg
[octicon-logo-gist]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/logo-gist.svg
[octicon-logo-github]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/logo-github.svg
[octicon-mail-read]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/mail-read.svg
[octicon-mail-reply]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/mail-reply.svg
[octicon-mail]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/mail.svg
[octicon-mark-github]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/mark-github.svg
[octicon-markdown]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/markdown.svg
[octicon-megaphone]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/megaphone.svg
[octicon-mention]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/mention.svg
[octicon-milestone]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/milestone.svg
[octicon-mirror]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/mirror.svg
[octicon-mortar-board]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/mortar-board.svg
[octicon-mute]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/mute.svg
[octicon-no-newline]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/no-newline.svg
[octicon-octoface]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/octoface.svg
[octicon-organization]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/organization.svg
[octicon-package]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/package.svg
[octicon-paintcan]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/paintcan.svg
[octicon-pencil]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/pencil.svg
[octicon-person]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/person.svg
[octicon-pin]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/pin.svg
[octicon-plug]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/plug.svg
[octicon-plus-small]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/plus-small.svg
[octicon-plus]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/plus.svg
[octicon-primitive-dot]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/primitive-dot.svg
[octicon-primitive-square]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/primitive-square.svg
[octicon-pulse]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/pulse.svg
[octicon-question]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/question.svg
[octicon-quote]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/quote.svg
[octicon-radio-tower]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/radio-tower.svg
[octicon-reply]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/reply.svg
[octicon-repo-clone]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/repo-clone.svg
[octicon-repo-force-push]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/repo-force-push.svg
[octicon-repo-forked]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/repo-forked.svg
[octicon-repo-pull]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/repo-pull.svg
[octicon-repo-push]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/repo-push.svg
[octicon-repo]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/repo.svg
[octicon-rocket]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/rocket.svg
[octicon-rss]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/rss.svg
[octicon-ruby]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/ruby.svg
[octicon-search]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/search.svg
[octicon-server]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/server.svg
[octicon-settings]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/settings.svg
[octicon-shield]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/shield.svg
[octicon-sign-in]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/sign-in.svg
[octicon-sign-out]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/sign-out.svg
[octicon-smiley]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/smiley.svg
[octicon-squirrel]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/squirrel.svg
[octicon-star]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/star.svg
[octicon-stop]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/stop.svg
[octicon-sync]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/sync.svg
[octicon-tag]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/tag.svg
[octicon-tasklist]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/tasklist.svg
[octicon-telescope]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/telescope.svg
[octicon-terminal]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/terminal.svg
[octicon-text-size]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/text-size.svg
[octicon-three-bars]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/three-bars.svg
[octicon-thumbsdown]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/thumbsdown.svg
[octicon-thumbsup]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/thumbsup.svg
[octicon-tools]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/tools.svg
[octicon-trashcan]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/trashcan.svg
[octicon-triangle-down]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/triangle-down.svg
[octicon-triangle-left]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/triangle-left.svg
[octicon-triangle-right]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/triangle-right.svg
[octicon-triangle-up]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/triangle-up.svg
[octicon-unfold]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/unfold.svg
[octicon-unmute]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/unmute.svg
[octicon-unverified]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/unverified.svg
[octicon-verified]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/verified.svg
[octicon-versions]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/versions.svg
[octicon-watch]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/watch.svg
[octicon-x]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/x.svg
