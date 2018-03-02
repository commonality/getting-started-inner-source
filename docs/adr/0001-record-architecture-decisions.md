# 1. Record architecture decisions

Date: 2018-03-02

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

We will document every architecture-level decision for Arachne and its core modules with an [Architecture Decision Record][nygard-article-url]. These are a well structured, relatively lightweight way to capture architectural proposals. They can serve as an artifact for discussion, and remain as an enduring record of the context and motivation of past decisions.

The workflow will be:

1. A community member creates an ADR document outlining an approach for a particular question or problem. The ADR has an initial status of "proposed."

1. The developers and steering group discuss the ADR. During this period, the ADR should be updated to reflect additional context, concerns raised, and proposed changes.

1. Once consensus is reached, ADR can be transitioned to either an "accepted" or "rejected" state.

1. Only after an ADR is accepted should implementing code be committed to the master branch of the relevant project/module.

1. If a decision is revisited and a different conclusion is reached, a new ADR should be created documenting the context and rationale for the change. The new ADR should reference the old one, and once the new one is accepted, the old one should (in its "status" section) be updated to point to the new one. The old ADR should not be removed or otherwise modified except for the annotation pointing to the new ADR.

## Consequences

1. Developers must write an ADR and submit it for review before selecting an approach to any architectural decision -- that is, any decision that affects the way Arachne or an Arachne application is put together at a high level.

1. We will have a concrete artifact around which to focus discussion, before finalizing decisions.

1. If we follow the process, decisions will be made deliberately, as a group.

1. The master branch of our repositories will reflect the high-level consensus of the steering group.

1. We will have a useful persistent record of why the system is the way it is.

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
