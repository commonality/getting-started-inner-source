# 1. Record architecture decisions

![calendar][octicon-calendar] 2018-03-02

## Status

| ADR Status    | Capability - Category  | TechRadar: Ring  |
|:-------------:|:----------------------:|:----------------:|
| ![ADR Status: Accepted][label-adr-accepted-img] | [Evolutionary Architecture ![External link][icon-octicon-link-external]][tw-tech-radar-evolutionary-architecture]<hr>[Architecture Decision Records ![External link][icon-octicon-link-external]][tw-tech-radar-adrs] | [![TechRadar: Techniques][label-techniques-img]][tw-tech-radar-techniques-url]<hr>![Adopt][label-tech-radar-techniques-adopt-img] |

## Context

We need to record the architectural decisions made on this project, since:

- We want to think deeply about all our architectural decisions, exploring all alternatives and making a careful, considered, well-researched choice.

- We want to be as transparent as possible in our decision-making process.

- We don't want decisions to be made unilaterally in a vacuum. Specifically, we want to give our steering group the opportunity to review every major decision.

- Despite being a geographically and temporally distributed team, we want our contributors to have a strong shared understanding of the technical rationale behind decisions.

- We want to be able to revisit prior decisions to determine fairly if they still make sense, and if the motivating circumstances or conditions have changed.

## Decision

We will document every architecture-level decision for `getting-started-inner-source` and its core modules with an [Architecture Decision Record][nygard-article-url]. These are a well structured, relatively lightweight way to capture architectural proposals. They can serve as an artifact for discussion, and remain as an enduring record of the context and motivation of past decisions.

The workflow will be:

1. A community member creates an ADR document outlining an approach for a particular question or problem. The ADR has an initial status of "proposed."

1. The developers and steering group discuss the ADR. During this period, the ADR should be updated to reflect additional context, concerns raised, and proposed changes.

1. Once consensus is reached, ADR can be transitioned to either an "accepted" or "rejected" state.

1. Only after an ADR is accepted should implementing code be committed to the master branch of the relevant project/module.

1. If a decision is revisited and a different conclusion is reached, a new ADR should be created documenting the context and rationale for the change. The new ADR should reference the old one, and once the new one is accepted, the old one should (in its "status" section) be updated to point to the new one. The old ADR should not be removed or otherwise modified except for the annotation pointing to the new ADR.

## Consequences

1. Developers must write an ADR and submit it for review before selecting an approach to any architectural decision -- that is, any decision that affects the way `commonality` or an `commonality` application is put together at a high level.

1. We will have a concrete artifact around which to focus discussion, before finalizing decisions.

1. If we follow the process, decisions will be made deliberately, as a group.

1. The master branch of our repositories will reflect the high-level consensus of the steering group.

1. We will have a useful persistent record of why the system is the way it is.

---

<a href="./#readme"><img align="bottom" alt="home" height="30" width="30" src="https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/home.svg"> Index of ADRs</a>

<!-- ADR Status Images -->

[label-adr-proposed-img]: https://fakeimg.pl/160x40/0052cc/FFF/?text=Proposed&font_size=26
[label-adr-accepted-img]: https://fakeimg.pl/160x40/0e8a16/FFF/?text=Accepted&font_size=26
[label-adr-rejected-img]: https://fakeimg.pl/160x40/666/FFF/?text=Rejected&font_size=26
[label-adr-deprecated-img]: https://fakeimg.pl/160x40/b60205/FFF/?text=Deprecated&font_size=26
[label-adr-superseded-img]: https://fakeimg.pl/160x40/e99695/000/?text=Superseded&font_size=26

<!-- Icons -->

[fake-images-pl-github-url]: https://github.com/Rydgel/Fake-images-please "View the source code on GitHub."
[icon-checklist]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/checklist.svg
[icon-clippy]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/clippy.svg
[icon-octicon-link-external]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/link-external.svg
[icon-mark-github]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/mark-github.svg
[icon-md]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/markdown.svg
[icon-media]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/file-media.svg

<!-- TechRadar Quadrants -->

<!-- QUADRANT: Languages and Frameworks -->
[label-langs-frameworks-img]: https://fakeimg.pl/200x40/b32059/FFF/?text=Languages+%26+Frameworks&font_size=24
[label-tech-radar-langs-frameworks-img]: https://fakeimg.pl/200x80/b32059/FFF/?text=TechRadar:%0ALanguages+%26+Frameworks&font_size=24
<!-- RINGS: Languages and Frameworks -->
[label-tech-radar-langs-frameworks-adopt-img]: https://fakeimg.pl/80x40/b32059/FFF/?text=Adopt&font_size=18
[label-tech-radar-langs-frameworks-trial-img]: https://fakeimg.pl/80x40/b32059/FFF/?text=Trial&font_size=18
[label-tech-radar-langs-frameworks-assess-img]: https://fakeimg.pl/80x40/b32059/FFF/?text=Assess&font_size=18
[label-tech-radar-langs-frameworks-hold-img]: https://fakeimg.pl/80x40/b32059/FFF/?text=Hold&font_size=18
<!-- QUADRANT: Platforms -->
[label-platforms-img]: https://fakeimg.pl/200x40/f38a3e/FFF/?text=Platforms&font_size=24
[label-tech-radar-platforms-img]: https://fakeimg.pl/200x80/f38a3e/FFF/?text=TechRadar:+Platforms&font_size=24
<!-- RINGS: Platforms -->
[label-tech-radar-platforms-adopt-img]: https://fakeimg.pl/80x40/f38a3e/FFF/?text=Adopt&font_size=18
[label-tech-radar-platforms-trial-img]: https://fakeimg.pl/80x40/f38a3e/FFF/?text=Trial&font_size=18
[label-tech-radar-platforms-assess-img]: https://fakeimg.pl/80x40/f38a3e/FFF/?text=Assess&font_size=18
[label-tech-radar-platforms-hold-img]: https://fakeimg.pl/80x40/f38a3e/FFF/?text=Hold&font_size=18
<!-- QUADRANT: Techniques -->
[label-techniques-img]: https://fakeimg.pl/200x40/1ebccd/FFF/?text=Techniques&font_size=24
[label-tech-radar-techniques-img]: https://fakeimg.pl/200x80/1ebccd/FFF/?text=TechRadar:+Techniques&font_size=24
<!-- RINGS: Techniques -->
[label-tech-radar-techniques-adopt-img]: https://fakeimg.pl/80x40/1ebccd/FFF/?text=Adopt&font_size=18
[label-tech-radar-techniques-trial-img]: https://fakeimg.pl/80x40/1ebccd/FFF/?text=Trial&font_size=18
[label-tech-radar-techniques-assess-img]: https://fakeimg.pl/80x40/1ebccd/FFF/?text=Assess&font_size=18
[label-tech-radar-techniques-hold-img]: https://fakeimg.pl/80x40/1ebccd/FFF/?text=Hold&font_size=18
<!-- QUADRANT: Tools -->
[label-tools-img]: https://fakeimg.pl/200x40/86b782/FFF/?text=Tools&font_size=24
[label-tech-radar-tools-img]: https://fakeimg.pl/200x80/86b782/FFF/?text=TechRadar:+Tools&font_size=24
<!-- RINGS: Tools -->
[label-tech-radar-tools-adopt-img]: https://fakeimg.pl/80x40/86b782/FFF/?text=Adopt&font_size=18
[label-tech-radar-tools-trial-img]: https://fakeimg.pl/80x40/86b782/FFF/?text=Trial&font_size=18
[label-tech-radar-tools-assess-img]: https://fakeimg.pl/80x40/86b782/FFF/?text=Assess&font_size=18
[label-tech-radar-tools-hold-img]: https://fakeimg.pl/80x40/86b782/FFF/?text=Hold&font_size=18

<!-- Web pages: external -->

[tw-tech-radar-evolutionary-architecture]: https://www.thoughtworks.com/radar/techniques/evolutionary-architecture
[tw-tech-radar-adrs]: https://www.thoughtworks.com/radar/techniques/lightweight-architecture-decision-records
[tw-tech-radar-faq-url]: https://www.thoughtworks.com/radar/a-z
[tw-tech-radar-techniques-url]: https://www.thoughtworks.com/radar/techniques
[tw-tech-radar-tools-url]: https://www.thoughtworks.com/radar/tools
[nygard-article-url]: http://thinkrelevance.com/blog/2011/11/15/documenting-architecture-decisions

<!-- ⛔️ Octicon img references ⛔️  -->

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