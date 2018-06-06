<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# Managing Issues

> <img align="bottom" alt="issue-opened" height="30" width="30" src="https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/issue-opened.svg"> Responding quickly and gratefully to issues directly affects the success of the project. Being part of the project team means helping to triage and address issues as they come in so the project can continue to run smoothly.

## Table of contents

<!-- ⛔️ AUTO-GENERATED-CONTENT:START (TOC:excludeText=Table of contents) -->
- [1. Issues capture engaged community dialog](#1-issues-capture-engaged-community-dialog)
  * [1.1. People value documentation](#11-people-value-documentation)
  * [1.2. Be nice](#12-be-nice)
  * [1.3. Ask until you understand](#13-ask-until-you-understand)
  * [1.4. Consider requests carefully](#14-consider-requests-carefully)
  * [1.5. Close when appropriate](#15-close-when-appropriate)
- [2. Label Issues by type](#2-label-issues-by-type)
  * [2.1. Defect](#21-defect)
  * [2.2. Feature](#22-feature)
  * [2.3. Question](#23-question)
- [3. How to address a new open Issue](#3-how-to-address-a-new-open-issue)
  * [3.1. Prioritize the Issue](#31-prioritize-the-issue)
  * [3.2. Label by required _types of change_](#32-label-by-required-_types-of-change_)
- [4. Accepting Issues](#4-accepting-issues)
- [5. Championing Issues](#5-championing-issues)
- [6. Consensus](#6-consensus)
- [7. Requesting Technical Steering Committee (TSC) help](#7-requesting-technical-steering-committee-tsc-help)
- [8. Evaluating core features (TSC members only)](#8-evaluating-core-features-tsc-members-only)
- [9. When to close an Issue](#9-when-to-close-an-issue)
- [10. References](#10-references)
<!-- ⛔️ AUTO-GENERATED-CONTENT:END -->

## 1. Issues capture engaged community dialog

Even negative issues are _contributions_, so always keep the following points in mind.

### 1.1. People value documentation

> ![quote][octicon-quote] **Documentation helps create inclusive communities.** Documentation that clearly explains a project's processes, such as contributing guides and codes of conduct, is valued more by groups that are underrepresented in open source, like women. <sup>[[1]](#ref-open-source-survey "View reference.")</sup>

### 1.2. Be nice

Even if the people involved with an issure are rude or aggressive, as a project team member you must be the mature one in the conversation. Do your best to work with everyone no matter their style. Remember, poor wording choice can also be a sign of someone who doesn't know English very well, so be sure to consider that when trying to determine the tone of someone's message. **Being rude, even when someone is being rude to you, reflects poorly on the team and the project as a whole.**

---

<h4>Poor coduct and its consequences</h4>

[The Open Source Survey ![link-external][octicon-link-external]](http://opensourcesurvey.org/2017/) is an open data project by GitHub and collaborators from academia, industry, and the broader open source community. Figures 1 and 2 below reflect problems with open source—and, by extension, InnerSource—projects.

| Fig1. - Problems encountered in open source<br><sub>Source: <http://opensourcesurvey.org/2017/></sub> |
| :---------------------------------------------------------------------------------: |
|  ![GitHub Survey 2017: Problems encountered in open source][fig-survey-problems]   |

<p>&nbsp;</p>

> ![quote][octicon-quote] **Negative experiences have real consequences for project health.** 21% of people who experienced or witnessed a negative behavior said they stopped contributing to a project because of it, and 8% started working in private channels more often. <sup>[[2]](#ref-open-source-survey "View reference.")</sup>

<p>&nbsp;</p>

| Fig2. - Negative behavior in open source<br><sub>Source: <http://opensourcesurvey.org/2017/></sub> |
| :---------------------------------------------------------------------------------: |
|  ![GitHub Survey 2017: Negative behavior in open source][fig-survey-neg-behavior]   |

---

### 1.3. Ask until you understand

Ask questions about the issue whenever something isn't clear. Don't assume you understand what's being reported if there are details missing. Whenever you are unsure, it's best to ask for more information.

### 1.4. Consider requests carefully

It's unlikely we'll be able to accommodate every request, so don't be afraid to say that something doesn't fit into the scope of the project or isn't practical. It's better to give such feedback if that's the case.

### 1.5. Close when appropriate

Don't be afraid to close issues that you don't think will be done, or when it's become clear from the conversation that there's no further work to do. Issues can always be reopened if they are closed incorrectly, so feel free to close issues when appropriate. Just be sure to leave a comment explaining why the issue is being closed (if not closed by a commit).

## 2. Label Issues by type

The first goal when evaluating an issue is to determine which category the issue falls into.

There are three primary issue categories for issues: _defects_, _features_, and _questions_.

### 2.1. Defect

![type: defect][type-defect]

A software defect is a shortcoming, error, flaw, failure, or fault that either

1. Produces an incorrect or unexpected result, or
2. Causes unintended behavior.

**![tasklist][octicon-tasklist] Don't change the status of a defect report to <kbd>status: available</kbd> until:**

1. The community agrees the issue is _valid_;
1. The defect has been confirmed by someone other than the person who reported the issue; and
1. The issue includes step-by-step instructions for reproducing the flaw.

### 2.2. Feature

![type: feat][type-feat]

A feature refers to public-facing functionality your consumers either use directly or supports the completion of tasks that end with _user-facing_ results.

1. Adding _user-facing_ functionality that doesn't already exist; or

1. A _user-facing_ enhancement to something that already exists.

### 2.3. Question

![type: question][type-question]

An inquiry about how something works that won't result in a code change. We'd prefer if people use the mailing list or Stack Overflow for questions, but sometimes they'll open an issue.

## 3. How to address a new open Issue

When an issue is opened, the bot will automatically apply the label:

![status: triage pending][status-triage-pending]

Issues labeled with <kbd>status: triage</kbd> are the ones that need to be looked at by team members to determine what to do next.

---

<details>
  <summary><img align="middle" alt="question" height="30" width="30" src="https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/question.svg"> Toggle view of the Issue workflow flowchart.</summary>

![Issue flowchart][issue-workflow-img]

</details>

---

### 3.1. Prioritize the Issue

The steps for prioritizing an issue are:

1.  **Reply with a thankful comment.**

    _Why:_

    > ![comment][octicon-comment] Someone _contributed their time_ to submit an issue, which means you've converted a _user_ into a _contributor!_ Either request more information (if necessary) or state your opinion about the issue.
    >
    > If it's a verified defect, ask if the user would like to submit a pull request.

1.  **Verify your understanding of the Issue.** Is the Issue clear and understandable?

    _No:_

    > ![status: revision needed][status-revision-needed]
    >
    > Add the <kbd>status: revision needed</kbd> label to the issue. The bot will add a comment asking for more information. You don't need to comment any further until the person who opened the issue responds with the information requested from the bot.

    _Yes:_

    > Remove the <kbd>status: triage pending</kbd> label.

### 3.2. Label by required _types of change_

Add any other applicable labels.

* ![type: build][type-build] changes affect the build system.
* ![type: chore][type-chore] changes don't modify src or test files.
* ![type: ci][type-ci] changes the CI/CD configuration files and scripts,

  > ```text
  > # Examples with scopes
  > ci(travis): descriptive subject
  > ci(circle): descriptive subject
  > ci(browser-stack): descriptive subject
  > ci(sauce-labs): descriptive subject
  > ```

* ![type: defect][type-defect] Changes to third-party production or development support libraries.

  > **SemVer ⇧**
  >
  > Apply the label <kbd>type: fix</kbd> to ensure that the `PATCH` version also increments.

* ![type: dependency][type-dependency] Notification that a production or development library has an available update or verified vulnerability.
* ![type: docs][type-docs] documentation changes
* ![type: feat][type-feat] valuable new functionality.

  > **SemVer ⇧**
  >
  > Features increment the `MINOR` version.

* ![type: fix][type-fix] Defect repairs.

  > **SemVer ⇧**
  >
  > Fixes increment the `PATCH` version.

* ![type: performance][type-performance] change that improves performance
* ![type: refactor][type-refactor] code changes that improve design, but neither fixes a bug nor adds a feature.
* ![type: revert][type-revert] reverts to a previous commit `SHA` or `tag`.
* ![type: style][type-style] changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
* ![type: test][type-test] add missing tests or correct existing tests

    > **![info][octicon-info] Labels that affect the product version**
    >
    > We follow [Semantic Versioning 2.0.0 ![link-external][octicon-link-external]][semver-url].
    >
    > |   Version   |          ![versions][octicon-versions] MAJOR          |                    ![versions][octicon-versions] MINOR                     |             ![versions][octicon-versions] PATCH             |
    > | :---------: | :---------------------------------------------------: | :------------------------------------------------------------------------: | :---------------------------------------------------------: |
    > | Definition  | MAJOR version when you make incompatible API changes. | MINOR version when you add functionality in a backwards-compatible manner. | PATCH version when you make backwards-compatible bug fixes. |
    > | Issue label |    ![type: breaking change][type-breaking-change]     |                          ![type: feat][type-feat]                          | ![type: dependency][type-dependency] ![type: fix][type-fix] |

## 4. Accepting Issues

![status: accepted][status-accepted]

Issues may be labeled as <kbd>status: accepted</kbd> when the issue is:

* A defect that you've been able to reproduce and verify (i.e. you're sure it's a defect)
* A new feature or change that you're championing and [consensus](#consensus) has been reached for its inclusion in the project

The <kbd>status: accepted</kbd> label will be added to other issues by a TSC member if it's appropriate for the roadmap.

---

![good first issues][good-first-issue]

![community][octicon-person] <kbd>good first issues</kbd> are intended to help new contributors feel welcome and empowered to make a contribution. To ensure that new contributors are given a chance to work on these issues, issues labeled <kbd>good first issue</kbd> must be open for 30 days _from the day the issue was labeled_ before a core team member is permitted to work on them.

---

## 5. Championing Issues

![status: accepted][status-accepted] ![help wanted][help-wanted]

New rules and rule changes require a champion. As champion, it's your job to:

1.  Gain [consensus](#consensus) from the `getting-started-inner-source` team on inclusion
1.  Guide the rule creation process until it's complete (so only champion a rule that you have time to implement or help another contributor implement)

Once consensus has been reached on inclusion, add the "accepted" and, optionally, "help wanted" and "good first issue" labels, as necessary.

## 6. Consensus

Consensus is reached on issues when there are at least three team members who believe the change is a good idea and no one who believes the change is a bad idea. In order to indicate your support for an issue, leave a +1 reaction (thumbs up) on the original issue description in addition to any comments you might have.

## 7. Requesting Technical Steering Committee (TSC) help

If consensus cannot be reached on an issue, or an issue's progress has been stalled and it's not clear if the issue should be closed, then you can refer the issue to the TSC for resolution. To do so, add the "tsc agenda" label to the issue and add a comment including the following information:

1.  A one-paragraph summary of the discussion to this point.
2.  The question you would like the TSC to answer.

The issue will be discussed at the next TSC meeting and the resolution will be posted back to the issue.

## 8. Evaluating core features (TSC members only)

In addition to the above, changes to the core (including CLI changes) that would result in a minor or major version release must be approved by the TSC by standard TSC motion. Add the label "tsc agenda" to the issue and it will be discussed at the next TSC meeting. In general, requests should meet the following criteria to be considered:

1.  The feature or feature is in scope for the project and should be added to the roadmap
1.  Someone is committed to including the change within the next year
1.  There is reasonable certainty about who will do the work

When a suggestion is too ambitious or would take too much time to complete, it's better not to accept the proposal. Stick to small, incremental changes and lay out a roadmap of where you'd like the project to go eventually. Don't let the project get bogged down in big features that will take a long time to complete.

---

![type: breaking change][type-breaking-change]

**Be on the lookout for changes that would break the public API. Issues that represent breaking changes should have the label <kbd>type: breaking change</kbd>.**

---

## 9. When to close an Issue

> ![issue-closed][octicon-issue-closed] All team members are allowed to close issues depending on how the issue has been resolved.

Team members may close an issue **immediately** if:

1.  The issue is a duplicate of an existing issue.
1.  The issue is just a question and has been answered.

Team members may close an issue where the consensus is to not accept the issue after a waiting period (to ensure that other team members have a chance to review the issue before it is closed):

* Wait **2 days** if the issue was opened Monday through Friday.
* Wait **3 days** if the issue was opened on Saturday or Sunday.

In an effort to keep the issues backlog manageable, team members may also close an issue if the following conditions are met:

* ![status: rejected][status-rejected]

    > Close after it has been open for 21 days, as these issues do not have enough support to move forward.

* ![status-abandoned][status-abandoned]

    > Close after 90 days if no one from the team or the community is willing to step forward and own the work to complete to it.

* ![help-wanted][help-wanted]

    > Close after 90 days if it has not been completed.

## 10. References

<a name="ref-1-open-source-survey"></a>

**[ 1 ]** Github And Collaborators. (2018) _Open Source Survey_. Retrieved May 05, 2018, from <http://opensourcesurvey.org/2017/>

<a name="ref-2-open-source-survey"></a>

**[ 2 ]** Github And Collaborators. (2018) _Open Source Survey_. Retrieved May 05, 2018, from <http://opensourcesurvey.org/2017/>

<!-- ⛔️ Do not remove this comment or anything under it ⛔️ -->

<!-- 🔗  label link references 🔗   -->

[good-first-issue]: ../img/labels/good-first-issue.svg
[help-wanted]: ../img/labels/help-wanted.svg
[priority-critical]: ../img/labels/priority-critical.svg
[priority-high]: ../img/labels/priority-high.svg
[priority-low]: ../img/labels/priority-low.svg
[priority-medium]: ../img/labels/priority-medium.svg
[status-abandoned]: ../img/labels/status-abandoned.svg
[status-accepted]: ../img/labels/status-accepted.svg
[status-rejected]: ../img/labels/status-rejected.svg
[status-revision-needed]: ../img/labels/status-revision-needed.svg
[status-triage-pending]: ../img/labels/status-triage-pending.svg
[type-breaking-change]: ../img/labels/type-breaking-change.svg
[type-build]: ../img/labels/type-build.svg
[type-chore]: ../img/labels/type-chore.svg
[type-ci]: ../img/labels/type-ci.svg
[type-defect]: ../img/labels/type-defect.svg
[type-dependency]: ../img/labels/type-dependency.svg
[type-docs]: ../img/labels/type-docs.svg
[type-feat]: ../img/labels/type-feat.svg
[type-feedback]: ../img/labels/type-feedback.svg
[type-fix]: ../img/labels/type-fix.svg
[type-performance]: ../img/labels/type-performance.svg
[type-question]: ../img/labels/type-question.svg
[type-refactor]: ../img/labels/type-refactor.svg
[type-revert]: ../img/labels/type-revert.svg
[type-style]: ../img/labels/type-style.svg
[type-test]: ../img/labels/type-test.svg

<!-- 🔗  Body link references 🔗   -->

[issue-workflow-img]: ../img/icons8/contribution-lifecycle-create-issue.png
[label-status-triage-img]: https://fakeimg.pl/200x24/d4c5f9/000/?text=status:+triage&font_size=20&font=museo
[pr-workflow-img]: ../img/icons8/contribution-lifecycle-pr.png
[semver-url]: https://semver.org/
[fig-survey-neg-behavior]: ./img/gh-survey-2017-negative-behavior-open-source.svg
[fig-survey-problems]: ./img/gh-survey-2017-problems-encountered-open-source.svg

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
