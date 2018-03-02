[![Generator Community Repo][product-repo-logo-image]][product-repo-url]

# Contributing<br>to `getting-started-inner-source`
> [![PRs Welcome][makeapullrequest-image]][makeapullrequest-url]
>
> Welcome to `getting-started-inner-source`. You're among people eager to promote recommended community standards that encourage open source consumption and contributions with comprehensive `README`, `CODE_OF_CONDUCT`, `CONTRIBUTING`, and `LICENSE` documents. If you are curious, you're already a member!

<dfn>__Contributions__ start with __community conversations__ that lead to __positive change.__</dfn> Open source provides a flexible collaboration model that facilitates change, even among perfect strangers. Contributions therefore:

  1. Begin with __Issues__,
  2. Occur in __Pull Requests__, and
  3. End with __Merges__.

## Table of contents

<!-- ⛔️ AUTO-GENERATED-CONTENT:START (TOC:excludeText=Table of contents) -->
- [1. Issues](#1-issues)
  * [1.1. Create Issues for feature requests and defects.](#11-create-issues-for-feature-requests-and-defects)
  * [1.2. Format titles with **`type(scope): subject`**.](#12-format-titles-with-typescope-subject)
  * [1.3. Fill out the issue template.](#13-fill-out-the-issue-template)
  * [1.4. Label the issue (optional).](#14-label-the-issue-optional)
  * [1.5. Monitor your issue for questions.](#15-monitor-your-issue-for-questions)
  * [1.6. Your issue will be either accepted for work, or declined.](#16-your-issue-will-be-either-accepted-for-work-or-declined)
- [2. __Git__](#2-__git__)
  * [2.1. __Rules__](#21-__rules__)
    + [2.1.1. Makes changes in a topic branch.](#211-makes-changes-in-a-topic-branch)
    + [2.1.2. Favor the topic branch naming recommendation `type/issue-change-name`.](#212-favor-the-topic-branch-naming-recommendation-typeissue-change-name)
    + [2.1.3. Branch out from `master`.](#213-branch-out-from-master)
    + [2.1.4. __*Never*__ push into the `master` branch. __*Always*__ submit a Pull Request.](#214-__never__-push-into-the-master-branch-__always__-submit-a-pull-request)
    + [2.1.5. Submit a Pull Request as soon as possible.](#215-submit-a-pull-request-as-soon-as-possible)
    + [2.1.6. Rebase your local `master` branch before you ask for PR approvals.](#216-rebase-your-local-master-branch-before-you-ask-for-pr-approvals)
    + [2.1.7. Resolve rebase conflicts before Pull Request reviews.](#217-resolve-rebase-conflicts-before-pull-request-reviews)
    + [2.1.8. Add reviewers and the label `Status: Needs Review` when the topic branch is ready.](#218-add-reviewers-and-the-label-status-needs-review-when-the-topic-branch-is-ready)
    + [2.1.9. Delete local and remote topic branches after merging.](#219-delete-local-and-remote-topic-branches-after-merging)
    + [2.1.10. Protect your `master` branch.](#2110-protect-your-master-branch)
  * [2.2. __Feature-branch-workflow__](#22-__feature-branch-workflow__)
    + [2.2.1. Initialize a Git repository in the product directory (_for new repositories only_).](#221-initialize-a-git-repository-in-the-product-directory-_for-new-repositories-only_)
    + [2.2.2. Checkout a new `feat`ure or `fix` branch.](#222-checkout-a-new-feature-or-fix-branch)
    + [2.2.3. Make Changes.](#223-make-changes)
    + [2.2.4. Follow the Conventional Commits Specification for commit messages.](#224-follow-the-conventional-commits-specification-for-commit-messages)
    + [2.2.5. Sync with remote to get changes you’ve missed.](#225-sync-with-remote-to-get-changes-youve-missed)
    + [2.2.6. Update your topic branch with the latest changes from `master` by interactive rebase.](#226-update-your-topic-branch-with-the-latest-changes-from-master-by-interactive-rebase)
    + [2.2.7. Resolve conflicts (if any occur), and continue rebase.](#227-resolve-conflicts-if-any-occur-and-continue-rebase)
    + [2.2.8. Push your branch with the `-f` flag (if necessary).](#228-push-your-branch-with-the--f-flag-if-necessary)
    + [2.2.9. Submit a Pull Request.](#229-submit-a-pull-request)
    + [2.2.10. Once accepted, the Pull request will be merged, closed, and deleted by an administrator.](#2210-once-accepted-the-pull-request-will-be-merged-closed-and-deleted-by-an-administrator)
    + [2.2.11. Remove your local topic branch if you're done.](#2211-remove-your-local-topic-branch-if-youre-done)
  * [2.3. __Tell your boss how Git enables collaborative process models.__](#23-__tell-your-boss-how-git-enables-collaborative-process-models__)
    + [2.3.1. Explain that inner and open source are _process models_.](#231-explain-that-inner-and-open-source-are-_process-models_)
    + [2.3.2. Describe a typical Git workflow in collaborative terms.](#232-describe-a-typical-git-workflow-in-collaborative-terms)
- [3. __Code standards__](#3-__code-standards__)
  * [3.1. Use the Standard JS Style.](#31-use-the-standard-js-style)
  * [3.2. Use ESLint to analyze source code.](#32-use-eslint-to-analyze-source-code)
- [4. __Unit testing__](#4-__unit-testing__)
  * [4.1. Write Jest tests.](#41-write-jest-tests)
  * [4.2. Reach 100% code coverage.](#42-reach-100%25-code-coverage)
- [5. __Directory structure__](#5-__directory-structure__)
- [6. __Logging__](#6-__logging__)
- [7. __Dependencies__](#7-__dependencies__)
- [8. __APIs__](#8-__apis__)
  * [8.1 __API design__](#81-__api-design__)
  * [8.2 __API security__](#82-__api-security__)
  * [8.3 __API documentation__](#83-__api-documentation__)
- [9. __Licensing__](#9-__licensing__)
<!-- ⛔️ AUTO-GENERATED-CONTENT:END -->



## 1. Issues

![Issues][icon-issue-image]

* __Collaboration starts with *Issues*. Changes happen through *Pull Requests*.__

    View `getting-started-inner-source's` collaboration and contribution flowcharts:

  ---

  <details>
  <summary><img src="../docs/img/icons8/icon-help-48.png" alt="Help" align="middle" height="48" width="48"> Toggle view of the Issue workflow flowchart.</summary>

  ![Issue flowchart][contribution-lifecycle-issues-image]

  </details>

  ---

  <details>
  <summary><img src="../docs/img/icons8/icon-help-48.png" alt="Help" align="middle" height="48" width="48"> Toggle view of the Pull Request workflow flowchart.</summary>

  ![Pull Request flowchart][contribution-lifecycle-pr-image]

  </details>

  ---

* ### 1.1. Create Issues for feature requests and defects.

    _Why:_
    > ⌦ `getting-started-inner-source` follows an issue-driven product delivery model.
    > Before any work is done, create an Issue, first. This starts a
    > conversation about features, defects ("bugs"), refactoring, product
    > delivery improvements, etc.

    Go ahead! Get started now:

    * [Report a defect ("bug")][issues-new-defect-url]
    * [Request a feature][issues-new-feat-url]
    * [Review all open issues][issues-url]

* ### 1.2. Format titles with **`type(scope): subject`**.

   _Why:_
    > ⌦`type` categorizes product changes. Valid types are:
    >
    > * `build`: Changes that affect the build system or external dependencies.
    > * `ci`: Changes related to continuous integration, delivery, and deployment tasks.
    > * `docs`: Documentation changes.
    > * `feat`: A new feature.
    > * `fix`: Defect (bug) repair.
    > * `perf`: Performance enhancements.
    > * `refactor`: Source code design improvements that don't affect product behavior.
    > * `style`: Changes involving graphics, typography, etc., as well as source code beautification.
    > * `test`: Tests added to increase code coverage, or corrected due to errors.

* ### 1.3. Fill out the issue template.

    _Why:_
    > ⌦It keeps communication consistent and unambiguous.

* ### 1.4. Label the issue (optional).

    _Why:_
    > ⌦ We use [`git-labelmaker`][gh-git-labelmaker-url] to categorize Issues (and Pull Requests) consistently. There are four label categories:
    >
    > * `Type`: the "kind" of product change.
    > * `Status`: the state of a change.
    > * `Priority`: the importance and value of a change.
    > * `Points`: the size/complexity of a change.

    ---

    <details>
    <summary><img src="../docs/img/icons8/icon-help-48.png" alt="Help" align="middle" height="48" width="48"> Toggle view of the Label definitions table.</summary>
      <table class="table table-striped table-bordered">
      <thead>
      <tr>
      <th>Label 🏷</th>
      <th>Definition</th>
      </tr>
      </thead>
      <tbody>
      <tr>
      <td><code>Type: Feature</code></td>
      <td><dfn>A distinguished or expected characteristic of a product that either differentiates the product from competitors, or whose absence would be diminish the product’s value.</dfn><br><br><strong>Note</strong> that <code>Type: Feature</code> and <code>Type: Defect</code> are mutually exclusive: an Issue cannot be both a feature and a defect.</td>
      </tr>
      <tr>
      <td><code>Type: Defect</code></td>
      <td><dfn>A flaw, fault, or abnormality that deviates from or prevents the product’s expected behavior.</dfn><br><br><strong>Note</strong> that <code>Type: Feature</code> and <code>Type: Defect</code> are mutually exclusive: an Issue cannot be both a feature and a defect.</td>
      </tr>
      <tr>
      <td><code>CLA: Signed</code></td>
      <td><dfn>The person who submitted a product change has signed your Contributor License Agreement.</dfn><br><br>Remove this label if your product owner does not require a CLA.</td>
      </tr>
      <tr>
      <td><code>CLA: Unsigned</code></td>
      <td><dfn>The person who submitted a product change has __<em>not</em>__signed your Contributor License Agreement.</dfn><br><br>Remove this label if your product owner does not require a CLA.</td>
      </tr>
      <tr>
      <td><code>Priority: Critical</code></td>
      <td><code>Type: Feature</code>: <dfn>The proposed enhancement is essential to the success of your product.</dfn><br><br><code>Type: Defect</code>: <dfn>Your product no longer functions due to internal, <code>FATAL</code> errors, and must be addressed immediately in order to maintain consumer loyalty.</dfn></td>
      </tr>
      <tr>
      <td><code>Priority: High</code></td>
      <td><code>Type: Feature</code>: <dfn>The proposed enhancement is central to product’s value proposition, and should be implemented as soon as possible.</dfn><br><br><code>Type: Defect</code>: <dfn>The product functions overall, but with an issue that risks consumer abandonment.</dfn></td>
      </tr>
      <tr>
      <td><code>Priority: Medium</code></td>
      <td><code>Type: Feature</code> or <code>Type: Defect</code>:  <dfn>The proposed change should be implemented as long as no <code>Priority: Critical</code> or <code>Priority: High</code> issues exists.</dfn></td>
      </tr>
      <tr>
      <td><code>Priority: Low</code></td>
      <td><code>Type: Feature</code>: <dfn>A proposal that minimally affects the product’s value.</dfn><br><br><code>Type: Defect</code>: <dfn>Represents “cosmetic” problems like misspelled words or misaligned text that do not affect branding and marketing strategy.</dfn></td>
      </tr>
      <tr>
      <td><code>Status: Abandoned</code></td>
      <td><code>Type: Feature</code> or <code>Type: Defect</code>: <dfn>The team and community have neglected, forgotten, discarded, or ignored resolving a Issue.</dfn></td>
      </tr>
      <tr>
      <td><code>Status: Accepted</code></td>
      <td><code>Type: Feature</code> or <code>Type: Defect</code>: <dfn>The product owner or maintainers agreed to a product change proposal.</dfn></td>
      </tr>
      <tr>
      <td><code>Status: Available</code></td>
      <td><code>Type: Feature</code> and <code>Type: Defect</code>: <dfn>The change proposal is ready for team and community members to work on.</dfn></td>
      </tr>
      <tr>
      <td><code>Status: Blocked</code></td>
      <td><code>Type: Feature</code> and <code>Type: Defect</code>: <dfn>The proposed change cannot be addressed until another issue has been resolved.</dfn><br><br><strong>Note</strong> that the Issue blocking the proposed change SHOULD be referenced in the <code>Blocked</code> Issue’s description field.</td>
      </tr>
      <tr>
      <td><code>Status: Completed</code></td>
      <td><code>Type: Feature</code> and <code>Type: Defect</code>: <dfn>The issue has been resolved and all acceptance criteria validated.</dfn></td>
      </tr>
      <tr>
      <td><code>Status: In Progress</code></td>
      <td><code>Type: Feature</code> and <code>Type: Defect</code>: <dfn>The team or community is actively working on the Issue’s resolution.</dfn></td>
      </tr>
      <tr>
      <td><code>Status: On Hold</code></td>
      <td><code>Type: Feature</code> and <code>Type: Defect</code>: <dfn>The Product Owner has (temporarily) postponed Issue resolution.</dfn><br><br><strong>Note</strong> that the <em>reason</em> for postponement should be stated in the Issue’s description field.</td>
      </tr>
      <tr>
      <td><code>Status: Pending</code></td>
      <td><code>Type: Feature</code> and <code>Type: Defect</code>: <dfn>product change or resolution is either awaiting the Product Owner’s decision.</dfn> Ideally, the Product Owner should declare why they’re undecided somewhere in the Issue thread.</td>
      </tr>
      <tr>
      <td><code>Status: Rejected</code></td>
      <td><code>Type: Feature</code> and <code>Type: Defect</code>: <dfn>The Product Owner has declined a change proposal.</dfn><br><br><strong>Note</strong> that the Product Owner should politely explain why they dismissed the change request.</td>
      </tr>
      <tr>
      <td><code>Status: Review Needed</code></td>
      <td><code>Type: Feature</code> and <code>Type: Defect</code>: <dfn>The person working on an Issue has requested help or discussion.</dfn> When applied to a Pull Request, <code>Status: Review Needed</code> <dfn>signifies that the PR is ready for evaluation (and potentially, approval).</dfn></td>
      </tr>
      <tr>
      <td><code>Status: Revision Needed</code></td>
      <td><code>Type: Feature</code> and <code>Type: Defect</code>: <dfn>The Issue is not ready for evaluation because of incomplete or insufficient information.</dfn></td>
      </tr>
      <tr>
      <td><code>Type: Breaking Change</code></td>
      <td><dfn>The change introduces backward incompatibility with previous product versions.</dfn><br><br><strong><code>Type: Breaking Change</code> MUST be recorded with a</strong> <ol><br><li>Git commit message,<br><li>An increment (+1) in the product’s Semantic Version’s MAJOR version,<br><li><code>CHANGELOG</code> entry, and<br><li>Updated API documentation.</ol></td>
      </tr>
      <tr>
      <td><code>Type: Build</code></td>
      <td><dfn>Changes to the process that convert source code into a stand-alone form that can be run on a computer or to the form itself.</dfn></td>
      </tr>
      <tr>
      <td><code>Type: Chore</code></td>
      <td><dfn>Miscellaneous non-functional changes such as typographical fixes or source code repository initialization</dfn>, e.g., <code>chore(scm): scaffold product directory structure</code></td>
      </tr>
      <tr>
      <td><code>Type: CI</code></td>
      <td><dfn>Continuous Integration (CI) changes, i.e., automated build, test, an quality assurance tasks.</dfn></td>
      </tr>
      <tr>
      <td><code>Type: Docs</code></td>
      <td><dfn>The introduction of or revisions to natural language documents or source code comments.</dfn></td>
      </tr>
      <tr>
      <td><code>Type: Duplicate</code></td>
      <td><dfn>An Issue that shares the same characteristics as a previously reported issue.</dfn> <br><br><strong>Note</strong> that  product maintainers should reference the original Issue and close the <code>Type: Duplicate</code> Issue.</td>
      </tr>
      <tr>
      <td><code>Type: Feedback</code></td>
      <td><dfn>A response to a <code>Type: Question</code> or voluntary information used as a basis for improvement.</td>
      </tr>
      <tr>
      <td><code>Type: Fix</code></td>
      <td><dfn>A change intended to repair a <code>Type: Defect</code> Issue.</td>
      </tr>
      <tr>
      <td><code>Type: Performance</code></td>
      <td><dfn>A change intended to reduce product latency.</td>
      </tr>
      <tr>
      <td><code>Type: Question</code></td>
      <td><dfn>A request for information.</td>
      </tr>
      <tr>
      <td><code>Type: Refactor</code></td>
      <td><dfn>Source code design improvements that do not affect product behavior.</td>
      </tr>
      <tr>
      <td><code>Type: Revert</code></td>
      <td><dfn>Changes that return the product’s source code to previous Git commit hash.</td>
      </tr>
      <tr>
      <td><code>Type: Spike</code></td>
      <td><dfn>A technical or design <em>experiment</em> that investigates a possible solution.</dfn> <br><br><strong>Note</strong> that spike solutions are, by definition, <em>throwaway</em> solutions that should <strong>NEVER</strong> be added to a product release.</td>
      </tr>
      <tr>
      <td><code>Type: Style</code></td>
      <td><dfn>Issues that address code standard <em>or</em> brand compliance.</td>
      </tr>
      <tr>
      <td><code>Type: Test</code></td>
      <td><dfn>Issues that prove intended behavior or substantiate “definitions of done.”</dfn> <br><br><code>Type: Test</code> can also refer to changes that result in broader code coverage.</td>
      </tr>
      </tbody>
      </table>
    </details>

    ---

* ### 1.5. Monitor your issue for questions.

    _Why:_
    > ⌦ The team might need more clarification.

* ### 1.6. Your issue will be either accepted for work, or declined.

    _Why:_
    > ⌦ It's up to the Product Owner to agree to proposed changes. If they believe your issue add value, the issue will be approved, and we'll ask someone to volunteer to do the work.
    >
    > Otherwise, your issue will be politely declined.


## 2. __Git__

![Git Logo][icon-git-logo-image]

* ### 2.1. __Rules__

  `getting-started-inner-source` manages contributions with the  [feature-branch-workflow](https://www.atlassian.com/git/tutorials/comparing-workflows#feature-branch-workflow).

* #### 2.1.1. Makes changes in a topic branch.

  _Why:_
  > ⌦ Use an isolated topic branch for parallel product development. Topic branches allow you to submit multiple pull requests without confusion. You can iterate without polluting the master branch with potentially unstable, unfinished code. The `getting-started-inner-source` team uses:
  >
  > * [Feature-branch-workflow](https://www.atlassian.com/git/tutorials/comparing-workflows#feature-branch-workflow) for small-ish codebases, or
  > * [Gitflow Workflow](https://www.atlassian.com/git/tutorials/comparing-workflows#gitflow-workflow) for large applications and monoliths

* #### 2.1.2. Favor the topic branch naming recommendation `type/issue-change-name`.

  _Why:_
  > ⌦ Although not required, our team prefixes branches with the type of change being introduced, followed by a forward slash and the issue id.
  >
  > Pattern: `type/issueId-subject`<br>
  > Icon legend: ![Bitbucket branch prefix][icon-bitbucket-20-image] Bitbucket
  > ![GitHub branch prefix][icon-github-20-image] GitHub
  >
  > <dt>
  > <dt><code>bugfix/</code></dt>
  > <dd><img src="../docs/img/icons8/icon-bitbucket-20.png" alt="Applies to Bitbucket branches"> Defect (bug) repair issues.</dd>
  > <dt><code>build/</code></dt>
  > <dd><img src="../docs/img/icons8/icon-github-filled-20.png" alt="Applies to GitHub branches"> Issues related to product builds.</dd>
  > <dt><code>ci/</code></dt>
  > <dd><img src="../docs/img/icons8/icon-github-filled-20.png" alt="Applies to GitHub branches"> Issues related to continuous integration, delivery, and deployment tasks.</dd>
  > <dt><code>docs/</code></dt>
  > <dd><img src="../docs/img/icons8/icon-github-filled-20.png" alt="Applies to GitHub branches"> Issues related to documentation.</dd>
  > <dt><code>feat/</code></dt>
  > <dd><img src="../docs/img/icons8/icon-github-filled-20.png" alt="Applies to GitHub branches"> New feature or enhancement requests.</dd>
  > <dt><code>feature/</code></dt>
  > <dd><img src="../docs/img/icons8/icon-bitbucket-20.png" alt="Applies to Bitbucket branches"> New feature or enhancement requests.</dd>
  > <dt><code>fix/</code></dt>
  > <dd><img src="../docs/img/icons8/icon-github-filled-20.png" alt="Applies to GitHub branches"> Defect (bug) repair issues.</dd>
  > <dt></dt>
  > <dd><img src="../docs/img/icons8/icon-bitbucket-20.png" alt="Applies to Bitbucket branches"> `hotfix/`</dd>
  > <dt><code>perf/</code></dt>
  > <dd><img src="../docs/img/icons8/icon-github-filled-20.png" alt="Applies to GitHub branches"> Performance improvement issues.</dd>
  > <dt><code>refactor/</code></dt>
  > <dd><img src="../docs/img/icons8/icon-github-filled-20.png" alt="Applies to GitHub branches"> Source code design **improvements that do not affect product behavior**.</dd>
  > <dt><code>revert/</code></dt>
  > <dd><img src="../docs/img/icons8/icon-github-filled-20.png" alt="Applies to GitHub branches"> Tasks that revert to a previous commit hash.</dd>
  > <dt><code>spike/</code></dt>
  > <dd><img src="../docs/img/icons8/icon-github-filled-20.png" alt="Applies to GitHub branches"> Issues related in solution investigation.</dd>
  > <dt><code>style/</code></dt>
  > <dd><img src="../docs/img/icons8/icon-github-filled-20.png" alt="Applies to GitHub branches"> Issues related to style guideline compliance, especially `ESLint` errors and warnings.</dd>
  > <dt><code>test/</code></dt>
  > <dd><img src="../docs/img/icons8/icon-github-filled-20.png" alt="Applies to GitHub branches"> Test coverage tasks.</dd>
  > </dl>

* #### 2.1.3. Branch out from `master`.

    _Why:_
    > ⌦ `getting-started-inner-source` follows the feature-branch-workflow.

* #### 2.1.4. __*Never*__ push into the `master` branch. __*Always*__ submit a Pull Request.

    _Why:_
    > ⌦ It notifies team members whenever changes occur and allows the community to review your changes at any time..
    >
    > It also enables easy peer-review of the code and dedicates forum for discussing the proposed feature.

* #### 2.1.5. Submit a Pull Request as soon as possible.

    _Why:_
    > ⌦ Pull Requests declare work in progress. Frequent pushes to a Pull Request notify your team members about change, and gives them the opportunity to provide feedback more often.
    >
    > Pull Request pushes also trigger automated CI-services, which help you fail fast and assess quality.

* #### 2.1.6. Rebase your local `master` branch before you ask for PR approvals.

    _Why:_
    > ⌦ Rebasing will merge in the requested branch (`master` or `develop`) and apply the commits that you have made locally to the top of the history without creating a merge commit (assuming there were no conflicts). This results in a nice and clean history.

* #### 2.1.7. Resolve rebase conflicts before Pull Request reviews.

    _Why:_
    > ⌦ Rebasing will merge in the `master` branch and apply the commits that you have made locally to the top of it.

* #### 2.1.8. Add reviewers and the label `Status: Needs Review` when the topic branch is ready.

    _Why:_
    > ⌦ When you add a Reviewer, GitHub (or Bitbucket) notifies teammates that your topic branch meets all Acceptance Criteria and is ready to be merged into `master`.
    >
    > Add the label "Status: Review Needed" formally declares the status of your topic branch, and helps teams filter through issues.

* #### 2.1.9. Delete local and remote topic branches after merging.

    _Why:_
    > ⌦ Topic branches should only exist while work is in-progress. Merged topic branches clutter up your list of branches with dead branches. Topic branch deletion also insures that you only ever merge back into `master`.

* #### 2.1.10. Protect your `master` branch.

    _Why:_
    > ⌦ Branch protection prevents production-ready branches from incorporating unexpected and irreversible changes. Learn more about
    >
    > * [GitHub protected branches](https://help.github.com/articles/about-protected-branches/) and
    > * [Bitbucket protected branches](https://confluence.atlassian.com/bitbucketserver/using-branch-permissions-776639807.html).

* ### 2.2. __Feature-branch-workflow__

  We use the  [feature-branch-workflow](https://www.atlassian.com/git/tutorials/comparing-workflows#feature-branch-workflow). We _recommend_ [interactive rebasing](https://www.atlassian.com/git/tutorials/merging-vs-rebasing#the-golden-rule-of-rebasing), too, but that's not required.



* #### 2.2.1. Initialize a Git repository in the product directory (_for new repositories only_).

  For subsequent features and changes, this step should be ignored.

  ```sh
  cd <product-repo-directory>
  git init
  ```

* #### 2.2.2. Checkout a new `feat`ure or `fix` branch.

  ```sh
  # For a new feature branch:
  git checkout -b feat/<issueId>-scope-of-change

  # For branches that address defects:
  git checkout -b fix/<issueId>-scope-of-change
  ```

* #### 2.2.3. Make Changes.

  ```sh
  git add
  git commit -a
  ```

  _Why:_
  > ⌦ `git commit -a` will start an editor which lets you separate the subject from the body. Read more about it in *section 1.3*.

* #### 2.2.4. Follow the Conventional Commits Specification for commit messages.

  This project enforces [AngularJS Git Commit Guidelines][git-commit-guidelines-url] (which is now an extension of the [Conventional Commits Specfication][conventional-commits-url]) with [`commitplease`][commitplease-url] pre-commit hooks.

  _Why:_
  > Consistent, legible Git logs not only facilitate communication, but also enable automated `CHANGELOG` generation and semantic versioning with [`standard-version`][standard-version-url].

  * __`build` commit messages__

    Issues related to product builds.

    ```
    build(<scope>): <subject>
    <BLANK LINE>
    <[body]>
    <BLANK LINE>
    <footer>
    ```

  * __`chore` commit messages__

    Issues related to miscellaneous non-functional changes (usually "maintenance" changes).

    ```
    chore(<scope>): <subject>
    <BLANK LINE>
    <[body]>
    <BLANK LINE>
    <footer>
    ```

  * __`ci` commit messages__

    Issues related to continuous integration, delivery, and deployment tasks.

    ```
    ci(<scope>): <subject>
    <BLANK LINE>
    <[body]>
    <BLANK LINE>
    <footer>
    ```

  * __`docs` commit messages__

    Issues related to documentation.

    ```
    docs(<scope>): <subject>
    <BLANK LINE>
    <[body]>
    <BLANK LINE>
    <footer>
    ```

  * __`feat` (feature) commit messages__

    New feature or enhancement requests.

    ```
    feat(<scope>): <subject>
    <BLANK LINE>
    <[body]>
    <BLANK LINE>
    <footer>
    ```

  * __`fix` commit messages__

    Defect (bug) repair issues.

    ```
    fix(<scope>): <subject>
    <BLANK LINE>
    <[body]>
    <BLANK LINE>
    <footer>
    ```

  * __`perf` (performance) commit messages__

    Performance improvement issues.

    ```
    perf(<scope>): <subject>
    <BLANK LINE>
    <[body]>
    <BLANK LINE>
    <footer>
    ```

  * __`refactor` commit messages__

    Source code design **improvements that do not affect product behavior**.

    ```
    refactor(<scope>): <subject>
    <BLANK LINE>
    <[body]>
    <BLANK LINE>
    <footer>
    ```

  * __`revert` commit messages__

    Tasks that revert to a previous commit hash. Your message should begin with `revert:`, followed by the header of the reverted commit.

    In the body it should say: `This reverts commit <hash>.`, where the hash is the SHA of the commit being reverted.

    ```
    revert: <hash>
    <BLANK LINE>
    This reverts commit <hash>.
    <BLANK LINE>
    <footer>
    ```

  * __`style` commit messages__

    Issues related to style guideline compliance, especially `ESLint` errors and warnings.

    ```
    style(<scope>): <subject>
    <BLANK LINE>
    <[body]>
    <BLANK LINE>
    <footer>
    ```

  * __`test` commit messages__

    Test coverage tasks.

    ```
    test(<scope>): <subject>
    <BLANK LINE>
    <[body]>
    <BLANK LINE>
    <footer>
    ```

* #### 2.2.5. Sync with remote to get changes you’ve missed.

  ```sh
  git checkout master
  git pull
  ```

  _Why:_
  > ⌦ This will give you a chance to deal with conflicts on your machine while rebasing(later) rather than creating a Pull Request that contains conflicts.

* #### 2.2.6. Update your topic branch with the latest changes from `master` by interactive rebase.

  ```sh
  git checkout <branchname>
  git rebase -i --autosquash master
  ```

  _Why:_
  > ⌦ You can use `--autosquash` to squash all your commits to a single commit. Nobody wants many commits for a single feature in develop branch.
  >
  > [Learn more about autosquashing Git commits][autosquashing-git-commits-url].

* #### 2.2.7. Resolve conflicts (if any occur), and continue rebase.

  ```sh
  git add <file1> <file2> ...
  git rebase --continue
  ```

  [Learn more about resolving conflicts][git-resolve-conflicts-url].

* #### 2.2.8. Push your branch with the `-f` flag (if necessary).

  Rebase changes history, so you might need to force changes into the `remote` branch with the `-f` flag. If someone else is working on your branch, use the less destructive `--force-with-lease`.

  ```sh
  git push -f
  ```

  _Why:_
  > ⌦ When you do a rebase, you are changing the history on your topic branch. As a result, Git will reject normal `git push`. Instead, you'll need to use the -f or --force flag.
  >
  > [Learn more about `--force-with-lease`][force-with-lease-url].

* #### 2.2.9. Submit a Pull Request.

* #### 2.2.10. Once accepted, the Pull request will be merged, closed, and deleted by an administrator.

* #### 2.2.11. Remove your local topic branch if you're done.

  ```sh
  git branch -d <branchname>
  ```

  to remove all branches which are no longer on remote

  ```sh
  git fetch -p && \
    for branch in `git branch -vv | grep ': gone]' | awk '{print $1}'`; \
      do git branch -D $branch; \
    done
  ```

### 2.3. __Tell your boss how Git enables collaborative process models.__

![Leadership](../docs/img/icons8/icon-leadership-filled.png)

* __Git enables collaboration with structured (business) process models.__ Git is a collaboration tool that grants people the opportunity to contribute to software products using simple and consistent process models called workflows.

  ---

  <details>
  <summary><img src="../docs/img/icons8/icon-help-48.png" alt="Help" align="middle" height="48" width="48"> Toggle view of a workflow example.</summary><br>
  <p>⌦ Git is a collaboration tool that grants people the opportunity to contribute to software products using simple and consistent process models called _workflows_.
  <ol>
  <li>Git __repositories__ store software products, as well as the historical changes to these products.<br><br>
  <li>Git workflows begin with either __cloning__ or __forking__ a repository, which __pulls__ a duplicate of the entire codebase onto a local computer.<br><br>
  <li>Contributors then create a local __topic branch__ in which they introduce changes—-features, fixes, documentation, tests, and design improvements—-which allows others to develop in parallel.<br><br>
  <li>Contributors __push__ their topic branch to others (usually another `remote` repository called `origin`) and submit __pull requests (PRs)__ to their announce their changes. __Pull requests are central to almost all Git workflows, since PRs allow Product Owners and their community to review suggested modifications. Product owners can approve or reject PRs at any time.__<br><br>
  <li>Other contributors answer the request to __pull__ the changes so they can review and test them.<br><br>
  <li>The changes in the PR are approved.<br><br>
  <li>The topic branch is either __merged__ or __rebased__ into the the software product.<br><br>
  <li>The topic branch gets deleted, and (ultimately) its changes are delivered to the world.
  </ol>
  </details>

  ---

  _Why:_
  > ⌦ Git can be intimidating, and The Boss (even if that's you!) needs to know why Git is valuable in *business terms.*

* #### 2.3.1. Explain that inner and open source are _process models_.

  _Why:_
  > ⌦ Git is a __collaboration__ tool that grants people the opportunity to contribute to software products using simple and consistent process models called __workflows.__

* #### 2.3.2. Describe a typical Git workflow in collaborative terms.

  _Why:_
  > ⌦ Many engineers can discuss Git's _technicalities_, but cannot articulate Git's as an applied _technology_ for collaboration.

## 3. __Code standards__

[![JavaScript Style Guide][standard-js-badge-image]][standard-js-url] [![ESLint logo][eslint-logo-image]][eslint-url]

* ### 3.1. Use the Standard JS Style.

  `getting-started-inner-source` follows the [Standard JS Style][standard-js-url].

* ### 3.2. Use ESLint to analyze source code.

  _Why:_
  > ⌦ [ESLint][eslint-url] evaluates JavaScript code (and `--fix`es what it can) whenever `npm test` runs. You can run ESLint directly with:
  >
  ```shell
  npm run lint:js
  ```
  >

  View [`getting-started-inner-source's` ESLint rules][eslint-rules-table-url] and their enforcement.

## 4. __Unit testing__

[![Jest JavaScript Testing][jest-logo-image]][jest-url]

* ### 4.1. Write Jest tests.

  _Why:_
  > ⌦ Behavior-driven development specifications are executable documentation.

  * **Put test files in the \__test\__ directory.**

  * __Use the `.spec.js` suffix for all tests.__

* ### 4.2. Reach 100% code coverage.

  _Why:_
  > ⌦ Full coverage makes automated dependency drift updates safer.

  * View a test coverage summary in the Terminal:

    ```shell
    npm test

    > jest --config=jest.config.json

      PASS  __tests__/app.js
       getting-started-inner-source:app
        ✓ creates files (1ms)

    Test Suites: 1 passed, 1 total
    Tests:       1 passed, 1 total
    Snapshots:   0 total
    Time:        2.595s
    Ran all test suites.
    ----------|----------|----------|----------|----------|----------------|
    File      |  % Stmts | % Branch |  % Funcs |  % Lines |Uncovered Lines |
    ----------|----------|----------|----------|----------|----------------|
    All files |      100 |      100 |      100 |      100 |                |
     index.js |      100 |      100 |      100 |      100 |                |
    ----------|----------|----------|----------|----------|----------------|
    ```

  * Open `/coverage/lcov-report/index.html` in a Web browser to view detailed coverage reports.

## 5. __Directory structure__


## 6. __Logging__

## 7. __Dependencies__

![Package tech stack][tech-stack-image]

[![StackShare][stackshare-badge-image]][stackshare-url]

`getting-started-inner-source` requires the following tech stack to either run, build, test, or deploy:

<!-- AUTO-GENERATED-CONTENT:START (DEPENDENCYTABLE:dev=true) -->
| **Dependency** | **Description** | **Version** | **Type** |
| -------------- | --------------- | ----------- | -------- |
 | [generator-license@5.1.0](https://github.com/jozefizso/generator-license) | License generator for Yeoman based projects. | 5.1.0 | production |
 | [generator-node@2.2.0](https://github.com/yeoman/generator-node) | Create a Node.js module | 2.2.0 | production |
 | [git-remote-origin-url@2.0.0](https://github.com/sindresorhus/git-remote-origin-url#readme) | Get the remote origin url of a git repository | 2.0.0 | production |
 | [git-url-parse@7.0.1](https://github.com/IonicaBizau/git-url-parse) | A high level git url parser for common git providers. | 7.0.1 | production |
 | [github-username@4.1.0](https://github.com/sindresorhus/github-username#readme) | Get a GitHub username from an email address | 4.1.0 | production |
 | [inquirer-npm-name@2.0.0](https://github.com/SBoudrias/inquirer-npm-name#readme) | Helper function using inquirer to validate a value provided in a prompt does not exist as an npm package. | 2.0.0 | production |
 | [lodash@^4.17.4](https://lodash.com/) | Lodash modular utilities. | 4.17.4 | production |
 | [markdown-magic@0.1.18](https://npmjs.org/package/markdown-magic) | Automatically update markdown files with content from external sources | 0.1.18 | production |
 | [markdown-magic-install-command@1.3.1](https://github.com/camacho/markdown-magic-install-command#readme) | Print install command for markdown file | 1.3.1 | production |
 | [markdown-magic-package-scripts@1.2.0](https://github.com/camacho/markdown-magic-package-scripts#readme) | Print list of scripts in package.json with descriptions | 1.2.0 | production |
 | [parse-author@2.0.0](https://github.com/jonschlinkert/parse-author) | Parse an author, contributor, maintainer or other 'person' string into an object with name, email and url properties following npm conventions. | 2.0.0 | production |
 | [update-notifier@2.2.0](https://github.com/yeoman/update-notifier#readme) | Update notifications for your CLI app | 2.2.0 | production |
 | [yeoman-generator@2.0.0](http://yeoman.io) | Rails-inspired generator system that provides scaffolding for your apps | 2.0.0 | production |
 | [babel-jest@21.0.2](https://github.com/facebook/jest#readme) | Jest plugin to use babel for transformation. | 21.0.2 | dev |
 | [babel-preset-env@1.6.0](https://babeljs.io/) | A Babel preset for each environment. | 1.6.0 | dev |
 | [babelify@7.3.0](https://github.com/babel/babelify) | Babel browserify transform | 7.3.0 | dev |
 | [check-node-version@2.1.0](https://github.com/parshap/check-node-version#readme) | Check installed versions of node and npm | 2.1.0 | dev |
 | [commitplease@2.7.10](https://github.com/jzaefferer/commitplease#readme) | Validates strings as commit messages | 2.7.10 | dev |
 | [coveralls@^2.13.1](https://github.com/nickmerwin/node-coveralls#readme) | takes json-cov output into stdin and POSTs to coveralls.io | 2.13.1 | dev |
 | [eslint@4.7.2](http://eslint.org) | An AST-based pattern checker for JavaScript. | 4.7.2 | dev |
 | [eslint-config-xo-space@0.16.0](https://github.com/sindresorhus/eslint-config-xo-space#readme) | ESLint shareable config for XO with 2-space indent | 0.16.0 | dev |
 | [eslint-plugin-import@2.7.0](https://github.com/benmosher/eslint-plugin-import) | Import with sanity. | 2.7.0 | dev |
 | [eslint-plugin-jest@21.1.0](https://github.com/facebook/jest#readme) | Eslint rules for Jest | 21.1.0 | dev |
 | [eslint-plugin-jsdoc@3.1.3](https://github.com/gajus/eslint-plugin-jsdoc#readme) | JSDoc linting rules for ESLint. | 3.1.3 | dev |
 | [eslint-plugin-no-unsafe-innerhtml@1.0.16](https://github.com/mozfreddyb/eslint-plugin-no-unsafe-innerhtml/) | custom ESLint rule to disallows unsafe innerHTML, outerHTML and insertAdjacentHTML | 1.0.16 | dev |
 | [eslint-plugin-no-unsanitized@2.0.1](https://github.com/mozilla/eslint-plugin-no-unsanitized/) | ESLint rule to disallow unsanitized code | 2.0.1 | dev |
 | [eslint-plugin-node@5.1.1](https://github.com/mysticatea/eslint-plugin-node#readme) | Additional ESLint's rules for Node.js | 5.1.1 | dev |
 | [eslint-plugin-promise@3.5.0](https://github.com/xjamundx/eslint-plugin-promise#readme) | Enforce best practices for JavaScript promises | 3.5.0 | dev |
 | [eslint-plugin-scanjs-rules@0.2.1](https://github.com/mozfreddyb/eslint-plugin-scanjs-rules/) | ESLint plugin that contains ScanJS rules | 0.2.1 | dev |
 | [eslint-plugin-security@1.4.0](https://github.com/nodesecurity/eslint-plugin-security#readme) | Security rules for eslint | 1.4.0 | dev |
 | [eslint-plugin-standard@3.0.1](https://github.com/xjamundx/eslint-plugin-standard#readme) | ESlint Plugin for the Standard Linter | 3.0.1 | dev |
 | [eslint-plugin-xss@0.1.8](https://npmjs.org/package/eslint-plugin-xss) | Validates XSS related issues of mixing HTML and non-HTML content in variables. | 0.1.8 | dev |
 | [fixpack@2.3.1](https://github.com/henrikjoreteg/fixpack) | cli tool that cleans up package.json files. | 2.3.1 | dev |
 | [jest@21.1.0](http://facebook.github.io/jest/) | Delightful JavaScript Testing. | 21.1.0 | dev |
 | [jest-cli@21.1.0](http://facebook.github.io/jest/) | Delightful JavaScript Testing. | 21.1.0 | dev |
 | [markdown-toc@1.2.0](https://github.com/jonschlinkert/markdown-toc) | Generate a markdown TOC (table of contents) with Remarkable. | 1.2.0 | dev |
 | [nsp@2.8.0](https://github.com/nodesecurity/nsp#readme) | The Node Security (nodesecurity.io) command line interface | 2.8.0 | dev |
 | [standard-version@4.2.0](https://github.com/conventional-changelog/standard-version#readme) | replacement for `npm version` with automatic CHANGELOG generation | 4.2.0 | dev |
 | [yeoman-assert@3.1.0](http://yeoman.io) | Assert utility from yeoman | 3.1.0 | dev |
 | [yeoman-test@1.7.0](http://yeoman.io/authoring/testing.html) | Test utilities for Yeoman generators | 1.7.0 | dev |
<!-- AUTO-GENERATED-CONTENT:START (DEPENDENCYTABLE:dev=true) -->
<!-- AUTO-GENERATED-CONTENT:END -->

## 8. __APIs__

![APIs][icon-rest-api-image]

* ### 8.1 __API design__

  _Why:_
  > ⌦ Because we try to enforce development of sanely constructed RESTful interfaces, which team members and clients can consume simply and consistently.

  _Why:_
  > ⌦ Lack of consistency and simplicity can massively increase integration and maintenance costs. Which is why `API design` is included in this document.


  * We mostly follow resource-oriented design. It has three main factors: resources, collection, and URLs.
      * A resource has data, gets nested, and there are methods that operate against it.
      * A group of resources is called a collection.
      * URL identifies the online location of resource or collection.

      _Why:_
      > ⌦ This is a very well-known design to developers (your main API consumers). Apart from readability and ease of use, it allows us to write generic libraries and connectors without even knowing what the API is about.

  * Use kebab-case for URLs.
  * Use camelCase for parameters in the query string or resource fields.
  * Use plural kebab-case for resource names in URLs.

  * Always use a plural nouns for naming a url pointing to a collection: `/users`.

      _Why:_
      > ⌦ Basically, it reads better and keeps URLs consistent. [read more...](https://apigee.com/about/blog/technology/restful-api-design-plural-nouns-and-concrete-names)

  * In the source code convert plurals to variables and properties with a List suffix.

      _Why_:
      > ⌦ Plural is nice in the URL but in the source code, it’s just too subtle and error-prone.

  * Always use a singular concept that starts with a collection and ends to an identifier:

      ```
      /students/245743
      /airports/kjfk
      ```
  * Avoid URLs like this:
      ```
      GET /blogs/:blogId/posts/:postId/summary
      ```

      _Why:_
      > ⌦ This is not pointing to a resource but to a property instead. You can pass the property as a parameter to trim your response.

  * Keep verbs out of your resource URLs.

      _Why:_
      > ⌦ Because if you use a verb for each resource operation you soon will have a huge list of URLs and no consistent pattern which makes it difficult for developers to learn. Plus we use verbs for something else.

  * Use verbs for non-resources. In this case, your API doesn't return any resources. Instead, you execute an operation and return the result. These **are not** CRUD (create, retrieve, update, and delete) operations:

      ```
      /translate?text=Hallo
      ```

      _Why:_
      > ⌦ Because for CRUD we use HTTP methods on `resource` or `collection` URLs. The verbs we were talking about are actually `Controllers`. You usually don't develop many of these. [read more...](https://byrondover.github.io/post/restful-api-guidelines/#controller)

  * The request body or response type is JSON then please follow `camelCase` for `JSON` property names to maintain the consistency.

      _Why:_
      > ⌦ This is a JavaScript project guideline, Where Programming language for generating JSON as well as Programming language for parsing JSON are assumed to be JavaScript.

  * Even though a resource is a singular concept that is similar to an object instance or database record, you should not use your `table_name` for a resource name and `column_name` resource property.

      _Why:_
      > ⌦ Because your intention is to expose Resources, not your database schema details.

  * Again, only use nouns in your URL when naming your resources and don’t try to explain their functionality.

      _Why:_
      > ⌦ Only use nouns in your resource URLs, avoid endpoints like `/addNewUser` or `/updateUser` .  Also avoid sending resource operations as a parameter.

  * Explain the CRUD functionalities using HTTP methods:

      _How:_
      > `GET`: Retrieve a representation of a resource.

      > `POST`: Create new resources and sub-resources.

      > `PUT`: Replace existing resources.

      > `PATCH`: Update existing resources. It only updates the fields that were supplied, leaving the others alone.

      > `DELETE`:	Delete existing resources.


  * For nested resources, use the relation between them in the URL. For instance, using `id` to relate an employee to a company.

      _Why:_
      > ⌦ This is a natural way to make resources explorable.

      _How:_

      > `GET      /schools/2/students	` , should get the list of all students from school 2.

      > `GET      /schools/2/students/31`	, should get the details of student 31, which belongs to school 2.

      > `DELETE   /schools/2/students/31`	, should delete student 31, which belongs to school 2.

      > `PUT      /schools/2/students/31`	, should update info of student 31, Use PUT on resource-URL only, not collection.

      > `POST     /schools` , should create a new school and return the details of the new school created. Use POST on collection-URLs.

  * Use a simple ordinal number for a version with a `v` prefix (v1, v2). Move it all the way to the left in the URL so that it has the highest scope:
      ```
      http://api.domain.com/v1/schools/3/students
      ```

      _Why:_
      > ⌦ When your APIs are public for other third parties, upgrading the APIs with some breaking change would also lead to breaking the existing products or services using your APIs. Using versions in your URL can prevent that from happening. [read more...](https://apigee.com/about/blog/technology/restful-api-design-tips-versioning)

  * Response messages must be self-descriptive. A good error message response might look something like this:
      ```json
      {
        "code"     : 404,
        "level"    : "ERROR",
        "logger"   : "[http-logger]",
        "message"  : "No resource found at URL /archetypes/v1/locales/iso-country-codes/BS",
        "timestamp": 1504878062000
      }
      ```
      or for validation errors:
      ```json
      {
        "code"     : 400,
        "logger"   : "[registration-form-logger]",
        "level"    : "ERROR",
        "timestamp": 1504878062000,
        "message"  :  "Validation Failed",
        "stack"    :[
          {
            "code"   : 1233,
            "field"  : "email",
            "message": "Invalid email"
          },
          {
            "code"   : 1234,
            "field"  : "password",
            "message": "No password provided"
          }
        ]
      }
      ```

      _Why:_
      > ⌦ Developers depend on well-designed errors at the critical times when they are troubleshooting and resolving issues after the applications they've built using your APIs are in the hands of their users.

      _Note: Keep security exception messages as generic as possible. For instance, Instead of saying ‘incorrect password’, you can reply back saying ‘invalid username or password’ so that we don’t unknowingly inform user that username was indeed correct and only the password was incorrect._

  * Use only these 8 status codes to send with you response to describe whether **everything worked**,
  The **client app did something wrong** or The **API did something wrong**.

      _Which ones:_
      > `200 OK` response represents success for `GET`, `PUT` or `POST` requests.

      > `201 Created` for when new instance is created. Creating a new instance, using `POST` method returns `201` status code.

      > `304 Not Modified` response is to minimize information transfer when the recipient already has cached representations.

      > `400 Bad Request` for when the request was not processed, as the server could not understand what the client is asking for.

      > `401 Unauthorized` for when the request lacks valid credentials and it should re-request with the required credentials.

      > `403 Forbidden` means the server understood the request but refuses to authorize it.

      > `404 Not Found` indicates that the requested resource was not found.

      > `500 Internal Server Error` indicates that the request is valid, but the server could not fulfill it due to some unexpected condition.

      _Why:_
      > ⌦ Most API providers use a small subset HTTP status codes. For example, the Google GData API uses only 10 status codes, Netflix uses 9, and Digg, only 8. Of course, these responses contain a body with additional information.There are over 70 HTTP status codes. However, most developers don't have all 70 memorized. So if you choose status codes that are not very common you will force application developers away from building their apps and over to wikipedia to figure out what you're trying to tell them. [read more...](https://apigee.com/about/blog/technology/restful-api-design-what-about-errors)


  * Provide total numbers of resources in your response.
  * Accept `limit` and `offset` parameters.

  * The amount of data the resource exposes should also be taken into account. The API consumer doesn't always need the full representation of a resource.Use a fields query parameter that takes a comma separated list of fields to include:
      ```
      GET /student?fields=id,name,age,class
      ```
  * Pagination, filtering, and sorting don’t need to be supported from start for all resources. Document those resources that offer filtering and sorting.

* ### 8.2 __API security__

  These are some basic security best practices:

  * Don't use basic authentication unless over a secure connection (HTTPS). Authentication tokens must not be transmitted in the URL: `GET /users/123?token=asdf....`

      _Why:_
      > ⌦ Because Token, or user ID and password are passed over the network as clear text (it is base64 encoded, but base64 is a reversible encoding), the basic authentication scheme is not secure. [read more...](https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication)

  * Tokens must be transmitted using the Authorization header on every request: `Authorization: Bearer xxxxxx, Extra yyyyy`.

  * Authorization Code should be short-lived.

  * Reject any non-TLS requests by not responding to any HTTP request to avoid any insecure data exchange. Respond to HTTP requests by `403 Forbidden`.

  * Consider using Rate Limiting.

      _Why:_
      > ⌦ To protect your APIs from bot threats that call your API thousands of times per hour. You should consider implementing rate limit early on.

  * Setting HTTP headers appropriately can help to lock down and secure your web application. [read more...](https://github.com/helmetjs/helmet)

  * Your API should convert the received data to their canonical form or reject them. Return 400 Bad Request with details about any errors from bad or missing data.

  * All the data exchanged with the ReST API must be validated by the API.

  * Serialize your JSON.

      _Why:_
      > ⌦ A key concern with JSON encoders is preventing arbitrary JavaScript remote code execution within the browser... or, if you're using node.js, on the server. It's vital that you use a proper JSON serializer to encode user-supplied data properly to prevent the execution of user-supplied input on the browser.

  * Validate the content-type and mostly use `application/*json` (Content-Type header).

      _Why:_
      > ⌦ For instance, accepting the `application/x-www-form-urlencoded` mime type allows the attacker to create a form and trigger a simple POST request. The server should never assume the Content-Type. A lack of Content-Type header or an unexpected Content-Type header should result in the server rejecting the content with a `4XX` response.

* ### 8.3 __API documentation__

  * Fill the `API Reference` section in [README.md template](./README.sample.md) for API.
  * Describe API authentication methods with a code sample.
  * Explaining The URL Structure (path only, no root URL) including The request type (Method).

  For each endpoint explain:
  * URL Params If URL Params exist, specify them in accordance with name mentioned in URL section:

      ```
      Required: id=[integer]
      Optional: photo_id=[alphanumeric]
      ```

  * If the request type is POST, provide working examples. URL Params rules apply here too. Separate the section into Optional and Required.

  * __Success Responses.__ What should be the status code and is there any return data? This is useful when people need to know what their callbacks should expect:

      ```
      Code: 200
      Content: { id : 12 }
      ```

  * __Error Responses.__ Most endpoints have many ways to fail. From unauthorized access to wrongful parameters etc. All of those should be listed here. It might seem repetitive, but it helps prevent assumptions from being made. For example:

    * __HTTP status code__
      ```
      404 Not Found
      ```

    * __Response body__
      ```json
      {
        "code"     : 404,
        "level"    : "ERROR",
        "logger"   : "[http-logger]",
        "message"  : "No resource found at URL /archetypes/v1/locales/iso-country-codes/BS",
        "timestamp": 1504878062000
      }
      ```

    * __Response headers__
      ```
      accept-ranges: bytes
      access-control-allow-headers: Authorization
      access-control-allow-methods: GET, HEAD, OPTIONS
      access-control-allow-origin: *
      cache-control: public, no-transform, must-revalidate
      connection: keep-alive
      content-encoding: gzip
      content-language: en-US
      content-length: 149
      content-type: application/json
      date: Fri, 08 Sep 2017 06:41:02 GMT
      last-modified: Tue, 1 Oct 2014 10:10:10 GMT
      server: nginx/1.12.1
      vary: Accept-Encoding
      ```

  * Use API design tools, There are lots of open source tools for good documentation such as [API Blueprint](https://apiblueprint.org/) and [Swagger](https://swagger.io/).

## 9. __Licensing__

![Licensing][osi-logo-image]

  Make sure you use resources that you have the rights to use. If you use libraries, remember to look for MIT, Apache or BSD but if you modify them, then take a look into license details. Copyrighted images and videos may cause legal problems.



<!-- ⛔️  Do not remove anything below this comment. ⛔️  -->

[all-contributors-cli-url]: https://github.com/kentcdodds/all-contributors
[autosquashing-git-commits-url]: https://robots.thoughtbot.com/autosquashing-git-commits
[changelog-url]: ./CHANGELOG.md
[cite-interview-torvalds-url]: https://techcrunch.com/2012/04/19/an-interview-with-millenium-technology-prize-finalist-linus-torvalds/
[cla-url]: https://www.clahub.com/agreements/commonality/getting-started-inner-source
[code-of-conduct-url]: ./CODE_OF_CONDUCT.md
[commitplease-url]: https://www.npmjs.com/package/commitplease
[commonality-palette-image]: ./docs/img/palette.svg
[contributing-url]: ./CONTRIBUTING.md
[contribution-lifecycle-issues-image]: ../docs/img/icons8/contribution-lifecycle-create-issue.png
[contribution-lifecycle-pr-image]: ../docs/img/icons8/contribution-lifecycle-pr.png
[conventional-commits-url]: https://conventionalcommits.org
[coolors-palette-url]: https://coolors.co/cfdbd5-e8eddf-f5cb5c-242423-333533
[eslint-logo-image]: ../docs/img/logo-eslint.png
[eslint-rules-table-url]: ./ESLINT_RULES.md
[eslint-url]: https://eslint.org
[force-with-lease-url]: https://developer.atlassian.com/blog/2015/04/force-with-lease/
[fossa-image-large]: https://app.fossa.io/api/projects/git%2Bhttps%3A%2F%2Fgithub.com%2Forganization%2Frepo-name.svg?type=large
[gh-create-account-url]: https://github.com/signup/free
[gh-git-labelmaker-url]: https://github.com/himynameisdave/git-labelmaker
[gh-try-github-url]: https://try.github.io/levels/1/challenges/1
[git-commit-guidelines-url]: https://github.com/angular/angular.js/blob/master/CONTRIBUTING.md#commit
[git-resolve-conflicts-url]: https://help.github.com/articles/resolving-a-merge-conflict-using-the-command-line/
[icon-bitbucket-20-image]: ../docs/img/icons8/icon-bitbucket-20.png
[icon-git-logo-image]: ../docs/img/icons8/git-logo.png
[icon-github-20-image]: ../docs/img/icons8/icon-github-filled-20.png
[icon-info-image]: ../docs/img/icons8/icon-info-50.png
[icon-issue-image]: ../docs/img/icons8/icon-issues.png
[icon-pr-image]: ../docs/img/icons8/icon-pr.png
[icon-rest-api-image]: ../docs/img/icons8/icon-rest-api.png
[issues-new-defect-url]: https://github.com/commonality/getting-started-inner-source/issues/new?title=fix%28affected-scope%29%3A+subject-line-with-very-few-words&labels=Priority%3A+Medium%2CStatus%3A+Review+Needed%2CType%3A+Defect&body=%2A%2A%F0%9F%92%A1+TIP%3A%2A%2A+Select+the+%E2%86%96%EF%B8%8E%E2%8E%BE+Preview+%E2%8F%8B+Tab+above+help+read+these+instructions.%0D%0A%0D%0A%23%23+1.+Issue+type%0D%0A%3E%E2%8C%A6+Type+the+letter+%22x%22+in+the+%22checkbox%22+the+best+describe+this+issue.%0D%0A%0D%0A-+%5Bx%5D+__Feature%3A__+I%27m+requesting+a+product+enhancement.%0D%0A%0D%0A%23%23+2.+User+story+summary%0D%0A%3E%E2%8C%A6+Describe+what+you+want+to+accomplish%2C+in+what+role%2Fcapacity%2C+and+why+it%27s+important+to+you.%0D%0A%0D%0A%3E+__EXAMPLE%3A__%0D%0A%3E+As+a+Applicant%2C%0D%0A%3E+I+want+to+submit+my+resume%0D%0A%3E+In+order+to+be+considered+for+a+job+opening.%0D%0A%0D%0AAs+a+%7Brole%7D%2C%0D%0AI+must%2Fneed%2Fwant%2Fshould+%7Bdo+something%7D%0D%0AIn+order+to+%7Bachieve+value%7D.%0D%0A%0D%0A%23%23+3.+Acceptance+criteria%0D%0A%3E%E2%8C%A6+Replace+the+examples+below+with+your+own+imperative%2C+%22true%2Ffalse%22+statements+for+the+__behavior+you+expect__+to+see%2C+or+the+behavior+that+__would__+be+true+if+there+were+no+errors+%28for+defects%29.%0D%0A%0D%0A-+%5B+%5D+1.+Job+Applicants+receive+a+confirmation+email+after+they+submit+their+resumes.%0D%0A-+%5B+%5D+2.+An+Applicant%27s+resume+information+isn%27t+lost+when+errors+occur.%0D%0A-+%5B+%5D+3.+%7Bcriterion-three%7D%0D%0A-+%5B+%5D+4.+%7Bcriterion-four%7D%0D%0A%0D%0A%3C%21--+%E2%9B%94%EF%B8%8F++Do+not+remove+anything+below+this+comment.+%E2%9B%94%EF%B8%8F++--%3E%0D%0A%5Bicon-info-image%5D%3A+..%2Fdocs%2Fimg%2Ficons8%2Ficon-info-50.png%0D%0A
[issues-new-feat-url]: https://github.com/commonality/getting-started-inner-source/issues/new?title=feat%28affected-scope%29%3A+subject-line-with-very-few-words&labels=Priority%3A+Medium%2CStatus%3A+Review+Needed%2CType%3A+Feature&body=%2A%2A%F0%9F%92%A1+TIP%3A%2A%2A+Select+the+%E2%86%96%EF%B8%8E%E2%8E%BE+Preview+%E2%8F%8B+Tab+above+help+read+these+instructions.%0D%0A%0D%0A%23%23+1.+Issue+type%0D%0A%3E%E2%8C%A6+Type+the+letter+%22x%22+in+the+%22checkbox%22+the+best+describe+this+issue.%0D%0A%0D%0A-+%5Bx%5D+__Feature%3A__+I%27m+requesting+a+product+enhancement.%0D%0A%0D%0A%23%23+2.+User+story+summary%0D%0A%3E%E2%8C%A6+Describe+what+you+want+to+accomplish%2C+in+what+role%2Fcapacity%2C+and+why+it%27s+important+to+you.%0D%0A%0D%0A%3E+__EXAMPLE%3A__%0D%0A%3E+As+a+Applicant%2C%0D%0A%3E+I+want+to+submit+my+resume%0D%0A%3E+In+order+to+be+considered+for+a+job+opening.%0D%0A%0D%0AAs+a+%7Brole%7D%2C%0D%0AI+must%2Fneed%2Fwant%2Fshould+%7Bdo+something%7D%0D%0AIn+order+to+%7Bachieve+value%7D.%0D%0A%0D%0A%23%23+3.+Acceptance+criteria%0D%0A%3E%E2%8C%A6+Replace+the+examples+below+with+your+own+imperative%2C+%22true%2Ffalse%22+statements+for+the+__behavior+you+expect__+to+see%2C+or+the+behavior+that+__would__+be+true+if+there+were+no+errors+%28for+defects%29.%0D%0A%0D%0A-+%5B+%5D+1.+Job+Applicants+receive+a+confirmation+email+after+they+submit+their+resumes.%0D%0A-+%5B+%5D+2.+An+Applicant%27s+resume+information+isn%27t+lost+when+errors+occur.%0D%0A-+%5B+%5D+3.+%7Bcriterion-three%7D%0D%0A-+%5B+%5D+4.+%7Bcriterion-four%7D%0D%0A%0D%0A%3C%21--+%E2%9B%94%EF%B8%8F++Do+not+remove+anything+below+this+comment.+%E2%9B%94%EF%B8%8F++--%3E%0D%0A%5Bicon-info-image%5D%3A+..%2Fdocs%2Fimg%2Ficons8%2Ficon-info-50.png%0D%0A
[issues-url]: https://github.com/commonality/getting-started-inner-source/issues
[jest-logo-image]: ../docs/img/logo-jest.png
[jest-url]: https://facebook.github.io/jest/
[license-url]: ./LICENSE
[makeapullrequest-image]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square
[makeapullrequest-url]: http://makeapullrequest.com
[markdown-toc-url]: https://github.com/jonschlinkert/markdown-toc
[osi-logo-image]: ../docs/img/logo-osi.png
[product-development-guidelines-url]: ../docs/product-development-guidelines/js/PRODUCT_DEVELOPEMENT_GUIDELINES.md
[product-repo-logo-image]: ../docs/img/logo-commonalaxy.png
[product-repo-url]: .
[stackshare-badge-image]: https://img.shields.io/badge/tech-stack-0690fa.svg?style=flat-square
[stackshare-url]: https://stackshare.io/commonality/getting-started-inner-source
[standard-js-badge-image]: https://cdn.rawgit.com/standard/standard/master/badge.svg
[standard-js-url]: https://github.com/standard/standard
[standard-version-url]: https://github.com/conventional-changelog/standard-version
[tech-stack-image]: ../docs/img/icons8/icon-package-filled.png
