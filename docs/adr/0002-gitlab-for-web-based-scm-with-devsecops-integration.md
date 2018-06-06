# 2. GitLab for Web-based SCM with DevSecOps Integration

![calendar][octicon-calendar] 2018-05-11

## Status

| ADR Status                                      | TechRadar: Ring                                                                                                |
| :---------------------------------------------: | :------------------------------------------------------------------------------------------------------------: |
| ![ADR Status: Proposed][label-adr-proposed-img] | [![TechRadar: Tools][label-tools-img]][tw-tech-radar-tools-url] <hr>![Adopt][label-tech-radar-tools-trial-img] |

## Context

GitLab offers more features, but those features often come with graduated license plans. Ultimately, however, **GitLab's CI/CD feature is so compelling it eclipses GitHub in both cost and potential value to market.**

<table>
<thead>
<tr>
<th rowspan="3">FEATURES</th>
<th>
  <a href="https://github.com/business"><img align="bottom" alt="mark-github" height="20" width="30" src="https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/mark-github.svg">GitHub</a>
</th>
<th colspan="5">
  <a href="https://about.gitlab.com/pricing/"><img align="bottom" alt="gitlab-logo" height="20" width="20" src="../img/logo-gitlab-48.png"> GitLab</a>
</th>
</tr>
<tr>
<th>Enterprise&nbsp;Edition</th>
<th>Free</th>
<th>Bronze</th>
<th>Silver</th>
<th>Gold</th>
</tr>
<tr>
<th><samp>$250</samp><br><sub>user/month</sub></th>
<th><samp>$0</samp><br><sub>user/month</sub></th>
<th><samp>$4</samp><br><sub>user/month</sub></th>
<th><samp>$19</samp><br><sub>user/month</sub></th>
<th><samp><s>$99</s></samp><br><sub>user/month</sub></th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p><strong> Built-in CI/CD </strong></p>
<p><img align="bottom" alt="gitlab-logo" height="20" width="20" src="../img/logo-gitlab-48.png"> <a href="/features/gitlab-ci-cd/">Feature details</a></p>
<p><a href="https://help.github.com"><img align="bottom" alt="mark-github" height="20" width="30" src="https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/mark-github.svg"> Documentation</a></p>
</td>
<td align="center">❌ </td>
<td align="center">☑️  </td>
<td align="center">☑️ </td>
<td align="center">☑️  </td>
<td align="center">☑️  </td>
</tr>
<tr>
<td>
<p><strong> Cycle Analytics </strong></p>
<p><img align="bottom" alt="gitlab-logo" height="20" width="20" src="../img/logo-gitlab-48.png"> <a href="/features/cycle-analytics/">Feature details</a></p>
<p><a href="https://help.github.com"><img align="bottom" alt="mark-github" height="20" width="30" src="https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/mark-github.svg"> Documentation</a></p>
</td>
<td align="center">❌ </td>
<td align="center">☑️ </td>
<td align="center">☑️ </td>
<td align="center">☑️ </td>
<td align="center">☑️ </td>
</tr>
<tr>
<td>
<p><strong> Issue Boards </strong></p>
<p><img align="bottom" alt="gitlab-logo" height="20" width="20" src="../img/logo-gitlab-48.png"> <a href="/features/issueboard/">Feature details</a></p>
<p><a href="https://help.github.com"><img align="bottom" alt="mark-github" height="20" width="30" src="https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/mark-github.svg"> Documentation</a></p>
</td>
<td align="center">☑️ </td>
<td align="center">☑️ </td>
<td align="center">☑️ </td>
<td align="center">☑️ </td>
<td align="center">☑️ </td>
</tr>
<tr>
<td>
<p><strong> Time tracking </strong></p>
<p><img align="bottom" alt="gitlab-logo" height="20" width="20" src="../img/logo-gitlab-48.png"> <a href="/features/time-tracking/">Feature details</a></p>
<p><a href="https://help.github.com"><img align="bottom" alt="mark-github" height="20" width="30" src="https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/mark-github.svg"> Documentation</a></p>
</td>
<td align="center">❌ </td>
<td align="center">☑️ </td>
<td align="center">☑️ </td>
<td align="center">☑️ </td>
<td align="center">☑️ </td>
</tr>
<tr>
<td>
<p><strong> Preview your changes with Review Apps </strong></p>
<p><img align="bottom" alt="gitlab-logo" height="20" width="20" src="../img/logo-gitlab-48.png"> <a href="/features/review-apps/">Feature details</a></p>
<p><a href="https://help.github.com"><img align="bottom" alt="mark-github" height="20" width="30" src="https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/mark-github.svg"> Documentation</a></p>
</td>
<td align="center">❌ </td>
<td align="center">☑️ </td>
<td align="center">☑️ </td>
<td align="center">☑️ </td>
<td align="center">☑️ </td>
</tr>
<tr>
<td>
<p><strong> Publish static websites for free with GitLab Pages </strong></p>
<p><img align="bottom" alt="gitlab-logo" height="20" width="20" src="../img/logo-gitlab-48.png"> <a href="/features/pages/">Feature details</a></p>
<p><a href="https://help.github.com"><img align="bottom" alt="mark-github" height="20" width="30" src="https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/mark-github.svg"> Documentation</a></p>
</td>
<td align="center">☑️ </td>
<td align="center">☑️ </td>
<td align="center">☑️ </td>
<td align="center">☑️ </td>
<td align="center">☑️ </td>
</tr>
<tr>
<td>
<p><strong> Git LFS 2.0 support </strong></p>
<p><img align="bottom" alt="gitlab-logo" height="20" width="20" src="../img/logo-gitlab-48.png"> <a href="https://docs.gitlab.com/ee/workflow/lfs/manage_large_binaries_with_git_lfs.html">Documentation</a></p>
<p><a href="https://help.github.com"><img align="bottom" alt="mark-github" height="20" width="30" src="https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/mark-github.svg"> Documentation</a></p>
</td>
<td align="center">☑️ </td>
<td align="center">☑️ </td>
<td align="center">☑️ </td>
<td align="center">☑️ </td>
<td align="center">☑️ </td>
</tr>
<tr>
<td>
<p><strong> Configurable Issue Boards </strong></p>
<p><img align="bottom" alt="gitlab-logo" height="20" width="20" src="../img/logo-gitlab-48.png"> <a href="https://docs.gitlab.com/ee/user/project/issue_board.html#board-with-configuration">Documentation</a></p>
<p><a href="https://help.github.com"><img align="bottom" alt="mark-github" height="20" width="30" src="https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/mark-github.svg"> Documentation</a></p>
</td>
<td align="center">☑️ </td>
<td align="center">❌ </td>
<td align="center">☑️ </td>
<td align="center">☑️ </td>
<td align="center">☑️ </td>
</tr>
<tr>
<td>
<p><strong> Issue Board Focus Mode </strong></p>
<p><img align="bottom" alt="gitlab-logo" height="20" width="20" src="../img/logo-gitlab-48.png"> <a href="https://docs.gitlab.com/ee/user/project/issue_board.html#focus-mode">Documentation</a></p>
<p><a href="https://help.github.com"><img align="bottom" alt="mark-github" height="20" width="30" src="https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/mark-github.svg"> Documentation</a></p>
</td>
<td align="center">☑️ </td>
<td align="center">❌ </td>
<td align="center">☑️ </td>
<td align="center">☑️ </td>
<td align="center">☑️ </td>
</tr>
<tr>
<td>
<p><strong> Multiple Issue Boards </strong></p>
<p><img align="bottom" alt="gitlab-logo" height="20" width="20" src="../img/logo-gitlab-48.png"> <a href="https://docs.gitlab.com/ee/user/project/issue_board.html#multiple-issue-boards">Documentation</a></p>
<p><a href="https://help.github.com"><img align="bottom" alt="mark-github" height="20" width="30" src="https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/mark-github.svg"> Documentation</a></p>
</td>
<td align="center">☑️ </td>
<td align="center">❌ </td>
<td align="center">☑️ </td>
<td align="center">☑️ </td>
<td align="center">☑️ </td>
</tr>
<tr>
<td>
<p><strong> Next business day support </strong></p>
<p><img align="bottom" alt="gitlab-logo" height="20" width="20" src="../img/logo-gitlab-48.png"> <a href="/support/">Feature details</a></p>
<p><a href="https://help.github.com"><img align="bottom" alt="mark-github" height="20" width="30" src="https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/mark-github.svg"> Documentation</a></p>
</td>
<td align="center">☑️ </td>
<td align="center">❌ </td>
<td align="center">☑️ </td>
<td align="center">☑️ </td>
<td align="center">☑️ </td>
</tr>
<tr>
<td>
<p><strong> Multiple approvals in code review </strong></p>
<p><img align="bottom" alt="gitlab-logo" height="20" width="20" src="../img/logo-gitlab-48.png"> <a href="https://docs.gitlab.com/ee/user/project/merge_requests/merge_request_approvals.html">Documentation</a></p>
<p><a href="https://help.github.com"><img align="bottom" alt="mark-github" height="20" width="30" src="https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/mark-github.svg"> Documentation</a></p>
</td>
<td align="center">☑️ </td>
<td align="center">❌ </td>
<td align="center">☑️ </td>
<td align="center">☑️ </td>
<td align="center">☑️ </td>
</tr>
<tr>
<td>
<p><strong> Related issues </strong></p>
<p><img align="bottom" alt="gitlab-logo" height="20" width="20" src="../img/logo-gitlab-48.png"> <a href="https://docs.gitlab.com/ee/user/project/issues/related_issues.html#related-issues">Documentation</a></p>
<p><a href="https://help.github.com"><img align="bottom" alt="mark-github" height="20" width="30" src="https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/mark-github.svg"> Documentation</a></p>
</td>
<td align="center"><img align="middle" alt="markdown" height="30" width="30" src="https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/markdown.svg"> </td>
<td align="center">❌ </td>
<td align="center">☑️ </td>
<td align="center">☑️ </td>
<td align="center">☑️ </td>
</tr>
<tr>
<td>
<p><strong> Issue Weights </strong></p>
<p><img align="bottom" alt="gitlab-logo" height="20" width="20" src="../img/logo-gitlab-48.png"> <a href="https://docs.gitlab.com/ee/workflow/issue_weight.html">Documentation</a></p>
<p><a href="https://help.github.com"><img align="bottom" alt="mark-github" height="20" width="30" src="https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/mark-github.svg"> Documentation</a></p>
</td>
<td align="center"> <img align="middle" alt="tag" height="30" width="30" src="https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/tag.svg"></td>
<td align="center">❌ </td>
<td align="center">☑️ </td>
<td align="center">☑️ </td>
<td align="center">☑️ </td>
</tr>
<tr>
<td>
<p><strong> Burndown Charts </strong></p>
<p><img align="bottom" alt="gitlab-logo" height="20" width="20" src="../img/logo-gitlab-48.png"> <a href="https://docs.gitlab.com/ee/user/project/milestones/burndown_charts.html">Documentation</a></p>
<p><a href="https://help.github.com"><img align="bottom" alt="mark-github" height="20" width="30" src="https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/mark-github.svg"> Documentation</a></p>
</td>
<td align="center">❌ </td>
<td align="center">❌ </td>
<td align="center">☑️ </td>
<td align="center">☑️ </td>
<td align="center">☑️ </td>
</tr>
<tr>
<td>
<p><strong> Multiple assignees for issues </strong></p>
<p><img align="bottom" alt="gitlab-logo" height="20" width="20" src="../img/logo-gitlab-48.png"> <a href="https://docs.gitlab.com/ee/user/project/issues/multiple_assignees_for_issues.html">Documentation</a></p>
<p><a href="https://help.github.com"><img align="bottom" alt="mark-github" height="20" width="30" src="https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/mark-github.svg"> Documentation</a></p>
</td>
<td align="center">☑️ </td>
<td align="center">❌ </td>
<td align="center">☑️ </td>
<td align="center">☑️ </td>
<td align="center">☑️ </td>
</tr>
<tr>
<td>
<p><strong> Group webhooks </strong></p>
<p><img align="bottom" alt="gitlab-logo" height="20" width="20" src="../img/logo-gitlab-48.png"> <a href="https://docs.gitlab.com/ee/user/project/integrations/webhooks.html">Documentation</a></p>
<p><a href="https://help.github.com"><img align="bottom" alt="mark-github" height="20" width="30" src="https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/mark-github.svg"> Documentation</a></p>
</td>
<td align="center">☑️ </td>
<td align="center">❌ </td>
<td align="center">☑️ </td>
<td align="center">☑️ </td>
<td align="center">☑️ </td>
</tr>
<tr>
<td>
<p><strong> Push rules </strong></p>
<p><img align="bottom" alt="gitlab-logo" height="20" width="20" src="../img/logo-gitlab-48.png"> <a href="https://docs.gitlab.com/ee/push_rules/push_rules.html">Documentation</a></p>
<p><a href="https://help.github.com"><img align="bottom" alt="mark-github" height="20" width="30" src="https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/mark-github.svg"> Documentation</a></p>
</td>
<td align="center">❌ </td>
<td align="center">❌ </td>
<td align="center">☑️ </td>
<td align="center">☑️ </td>
<td align="center">☑️ </td>
</tr>
<tr>
<td>
<p><strong> Block secret file push </strong></p>
<p><img align="bottom" alt="gitlab-logo" height="20" width="20" src="../img/logo-gitlab-48.png"> <a href="https://docs.gitlab.com/ee/push_rules/push_rules.html#prevent-pushing-secrets-to-the-repository">Documentation</a></p>
<p><a href="https://help.github.com"><img align="bottom" alt="mark-github" height="20" width="30" src="https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/mark-github.svg"> Documentation</a></p>
</td>
<td align="center">❌ </td>
<td align="center">❌ </td>
<td align="center">❌ </td>
<td align="center">❌ </td>
<td align="center">❌ </td>
</tr>
<tr>
<td>
<p><strong> Squash and merge </strong></p>
<p><img align="bottom" alt="gitlab-logo" height="20" width="20" src="../img/logo-gitlab-48.png"> <a href="https://docs.gitlab.com/ee/user/project/merge_requests/squash_and_merge.html">Documentation</a></p>
<p><a href="https://help.github.com"><img align="bottom" alt="mark-github" height="20" width="30" src="https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/mark-github.svg"> Documentation</a></p>
</td>
<td align="center">❌ </td>
<td align="center">❌ </td>
<td align="center">❌ </td>
<td align="center">❌ </td>
<td align="center">❌ </td>
</tr>
<tr>
<td>
<p><strong> Remote repository mirroring </strong></p>
<p><img align="bottom" alt="gitlab-logo" height="20" width="20" src="../img/logo-gitlab-48.png"> <a href="https://docs.gitlab.com/ee/workflow/repository_mirroring.html">Documentation</a></p>
<p><a href="https://help.github.com"><img align="bottom" alt="mark-github" height="20" width="30" src="https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/mark-github.svg"> Documentation</a></p>
</td>
<td align="center">❌ </td>
<td align="center">❌ </td>
<td align="center">❌ </td>
<td align="center">❌ </td>
<td align="center">❌ </td>
</tr>
<tr>
<td>
<p><strong> Display merge request status for builds on Jenkins CI </strong></p>
<p><img align="bottom" alt="gitlab-logo" height="20" width="20" src="../img/logo-gitlab-48.png"> <a href="https://docs.gitlab.com/ee/integration/jenkins.html">Documentation</a></p>
<p><a href="https://help.github.com"><img align="bottom" alt="mark-github" height="20" width="30" src="https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/mark-github.svg"> Documentation</a></p>
</td>
<td align="center">❌ </td>
<td align="center">❌ </td>
<td align="center">❌ </td>
<td align="center">❌ </td>
<td align="center">❌ </td>
</tr>
<tr>
<td>
<p><strong> Lock project membership to group </strong></p>
<p><img align="bottom" alt="gitlab-logo" height="20" width="20" src="../img/logo-gitlab-48.png"> <a href="https://docs.gitlab.com/ee/workflow/groups.html#lock-project-membership-to-members-of-this-group">Documentation</a></p>
<p><a href="https://help.github.com"><img align="bottom" alt="mark-github" height="20" width="30" src="https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/mark-github.svg"> Documentation</a></p>
</td>
<td align="center">❌ </td>
<td align="center">❌ </td>
<td align="center">❌ </td>
<td align="center">❌ </td>
<td align="center">❌ </td>
</tr>
<tr>
<td>
<p><strong> Export issues as CSV </strong></p>
<p><img align="bottom" alt="gitlab-logo" height="20" width="20" src="../img/logo-gitlab-48.png"> <a href="https://docs.gitlab.com/ee/user/project/issues/csv_export.html">Documentation</a></p>
<p><a href="https://help.github.com"><img align="bottom" alt="mark-github" height="20" width="30" src="https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/mark-github.svg"> Documentation</a></p>
</td>
<td align="center">❌ </td>
<td align="center">❌ </td>
<td align="center">❌ </td>
<td align="center">❌ </td>
<td align="center">❌ </td>
</tr>
<tr>
<td>
<p><strong> Merge request approvals </strong></p>
<p><img align="bottom" alt="gitlab-logo" height="20" width="20" src="../img/logo-gitlab-48.png"> <a href="https://docs.gitlab.com/ee/user/project/merge_requests/merge_request_approvals.html">Documentation</a></p>
<p><a href="https://help.github.com"><img align="bottom" alt="mark-github" height="20" width="30" src="https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/mark-github.svg"> Documentation</a></p>
</td>
<td align="center">❌ </td>
<td align="center">❌ </td>
<td align="center">❌ </td>
<td align="center">❌ </td>
<td align="center">❌ </td>
</tr>
<tr>
<td>
<p><strong> Code Quality </strong></p>
<p><img align="bottom" alt="gitlab-logo" height="20" width="20" src="../img/logo-gitlab-48.png"> <a href="https://docs.gitlab.com/ee/user/project/merge_requests/code_quality_diff.html">Documentation</a></p>
<p><a href="https://help.github.com"><img align="bottom" alt="mark-github" height="20" width="30" src="https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/mark-github.svg"> Documentation</a></p>
</td>
<td align="center">❌ </td>
<td align="center">❌ </td>
<td align="center">❌ </td>
<td align="center">❌ </td>
<td align="center">❌ </td>
</tr>
<tr>
<td>
<p><strong> Restrict push and merge access to certain users </strong></p>
<p><img align="bottom" alt="gitlab-logo" height="20" width="20" src="../img/logo-gitlab-48.png"> <a href="https://docs.gitlab.com/ee/user/project/protected_branches.html#restricting-push-and-merge-access-to-certain-users">Documentation</a></p>
<p><a href="https://help.github.com"><img align="bottom" alt="mark-github" height="20" width="30" src="https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/mark-github.svg"> Documentation</a></p>
</td>
<td align="center">❌ </td>
<td align="center">❌ </td>
<td align="center">❌ </td>
<td align="center">❌ </td>
<td align="center">❌ </td>
</tr>
<tr>
<td>
<p><strong> Include external files in CI/CD pipeline definition </strong></p>
<p><img align="bottom" alt="gitlab-logo" height="20" width="20" src="../img/logo-gitlab-48.png"> <a href="https://docs.gitlab.com/ee/ci/yaml/#include">Documentation</a></p>
<p><a href="https://help.github.com"><img align="bottom" alt="mark-github" height="20" width="30" src="https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/mark-github.svg"> Documentation</a></p>
</td>
<td align="center">❌ </td>
<td align="center">❌ </td>
<td align="center">❌ </td>
<td align="center">❌ </td>
<td align="center">❌ </td>
</tr>
<tr>
<td>
<p><strong> Contribution Analytics </strong></p>
<p><img align="bottom" alt="gitlab-logo" height="20" width="20" src="../img/logo-gitlab-48.png"> <a href="https://docs.gitlab.com/ee/user/group/contribution_analytics/index.html">Documentation</a></p>
<p><a href="https://help.github.com"><img align="bottom" alt="mark-github" height="20" width="30" src="https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/mark-github.svg"> Documentation</a></p>
</td>
<td align="center">❌ </td>
<td align="center">❌ </td>
<td align="center">❌ </td>
<td align="center">❌ </td>
<td align="center">❌ </td>
</tr>
<tr>
<td>
<p><strong> Custom Additional Text in Emails </strong></p>
<p><img align="bottom" alt="gitlab-logo" height="20" width="20" src="../img/logo-gitlab-48.png"> <a href="https://docs.gitlab.com/ee/user/admin_area/settings/email.html#custom-additional-text">Documentation</a></p>
<p><a href="https://help.github.com"><img align="bottom" alt="mark-github" height="20" width="30" src="https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/mark-github.svg"> Documentation</a></p>
</td>
<td align="center">❌ </td>
<td align="center">❌ </td>
<td align="center">❌ </td>
<td align="center">❌ </td>
<td align="center">❌ </td>
</tr>
<tr>
<td>
<p><strong> Reject unsigned commits </strong></p>
<p><img align="bottom" alt="gitlab-logo" height="20" width="20" src="../img/logo-gitlab-48.png"> <a href="https://docs.gitlab.com/ee/push_rules/push_rules.html#enabling-push-rules">Documentation</a></p>
<p><a href="https://help.github.com"><img align="bottom" alt="mark-github" height="20" width="30" src="https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/mark-github.svg"> Documentation</a></p>
</td>
<td align="center">❌ </td>
<td align="center">❌ </td>
<td align="center">❌ </td>
<td align="center">❌ </td>
<td align="center">❌ </td>
</tr>
<tr>
<td>
<p><strong> Verified Committer </strong></p>
<p><img align="bottom" alt="gitlab-logo" height="20" width="20" src="../img/logo-gitlab-48.png"> <a href="https://docs.gitlab.com/ee/push_rules/push_rules.html#enabling-push-rules">Documentation</a></p>
<p><a href="https://help.github.com"><img align="bottom" alt="mark-github" height="20" width="30" src="https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/mark-github.svg"> Documentation</a></p>
</td>
<td align="center">❌ </td>
<td align="center">❌ </td>
<td align="center">❌ </td>
<td align="center">❌ </td>
<td align="center">❌ </td>
</tr>
<tr>
<td>
<p><strong> Multi-project pipeline graphs </strong></p>
<p><img align="bottom" alt="gitlab-logo" height="20" width="20" src="../img/logo-gitlab-48.png"> <a href="https://docs.gitlab.com/ee/ci/multi_project_pipeline_graphs.html">Documentation</a></p>
<p><a href="https://help.github.com"><img align="bottom" alt="mark-github" height="20" width="30" src="https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/mark-github.svg"> Documentation</a></p>
</td>
<td align="center">❌ </td>
<td align="center">❌ </td>
<td align="center">❌ </td>
<td align="center">❌ </td>
<td align="center">❌ </td>
</tr>
<tr>
<td>
<p><strong> Environment-specific secret variables </strong></p>
<p><img align="bottom" alt="gitlab-logo" height="20" width="20" src="../img/logo-gitlab-48.png"> <a href="https://docs.gitlab.com/ee/ci/variables/#limiting-environment-scopes-of-secret-variables">Documentation</a></p>
<p><a href="https://help.github.com"><img align="bottom" alt="mark-github" height="20" width="30" src="https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/mark-github.svg"> Documentation</a></p>
</td>
<td align="center">❌ </td>
<td align="center">❌ </td>
<td align="center">❌ </td>
<td align="center">❌ </td>
<td align="center">❌ </td>
</tr>
<tr>
<td>
<p><strong> Support for multiple Kubernetes clusters </strong></p>
<p><img align="bottom" alt="gitlab-logo" height="20" width="20" src="../img/logo-gitlab-48.png"> <a href="https://docs.gitlab.com/ee/user/project/clusters/#multiple-kubernetes-clusters">Documentation</a></p>
<p><a href="https://help.github.com"><img align="bottom" alt="mark-github" height="20" width="30" src="https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/mark-github.svg"> Documentation</a></p>
</td>
<td align="center">❌ </td>
<td align="center">❌ </td>
<td align="center">❌ </td>
<td align="center">❌ </td>
<td align="center">❌ </td>
</tr>
<tr>
<td>
<p><strong> Service Desk </strong></p>
<p><img align="bottom" alt="gitlab-logo" height="20" width="20" src="../img/logo-gitlab-48.png"> <a href="/features/service-desk/">Feature details</a></p>
<p><a href="https://help.github.com"><img align="bottom" alt="mark-github" height="20" width="30" src="https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/mark-github.svg"> Documentation</a></p>
</td>
<td align="center">❌ </td>
<td align="center">❌ </td>
<td align="center">❌ </td>
<td align="center">❌ </td>
<td align="center">❌ </td>
</tr>
<tr>
<td>
<p><strong> File Locking </strong></p>
<p><img align="bottom" alt="gitlab-logo" height="20" width="20" src="../img/logo-gitlab-48.png"> <a href="/features/file-locking/">Feature details</a></p>
<p><a href="https://help.github.com"><img align="bottom" alt="mark-github" height="20" width="30" src="https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/mark-github.svg"> Documentation</a></p>
</td>
<td align="center">❌ </td>
<td align="center">❌ </td>
<td align="center">❌ </td>
<td align="center">❌ </td>
<td align="center">❌ </td>
</tr>
<tr>
<td>
<p><strong> Deploy Boards </strong></p>
<p><img align="bottom" alt="gitlab-logo" height="20" width="20" src="../img/logo-gitlab-48.png"> <a href="https://docs.gitlab.com/ee/user/project/deploy_boards.html">Documentation</a></p>
<p><a href="https://help.github.com"><img align="bottom" alt="mark-github" height="20" width="30" src="https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/mark-github.svg"> Documentation</a></p>
</td>
<td align="center">❌ </td>
<td align="center">❌ </td>
<td align="center">❌ </td>
<td align="center">❌ </td>
<td align="center">❌ </td>
</tr>
<tr>
<td>
<p><strong> Canary Deployments </strong></p>
<p><img align="bottom" alt="gitlab-logo" height="20" width="20" src="../img/logo-gitlab-48.png"> <a href="https://docs.gitlab.com/ee/user/project/deploy_boards.html#canary-deployments">Documentation</a></p>
<p><a href="https://help.github.com"><img align="bottom" alt="mark-github" height="20" width="30" src="https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/mark-github.svg"> Documentation</a></p>
</td>
<td align="center">❌ </td>
<td align="center">❌ </td>
<td align="center">❌ </td>
<td align="center">❌ </td>
<td align="center">❌ </td>
</tr>
<tr>
<td>
<p><strong> JIRA development panel </strong></p>
<p><img align="bottom" alt="gitlab-logo" height="20" width="20" src="../img/logo-gitlab-48.png"> <a href="https://docs.gitlab.com/ee/integration/jira_development_panel.html">Documentation</a></p>
<p><a href="https://help.github.com"><img align="bottom" alt="mark-github" height="20" width="30" src="https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/mark-github.svg"> Documentation</a></p>
</td>
<td align="center">❌ </td>
<td align="center">❌ </td>
<td align="center">❌ </td>
<td align="center">❌ </td>
<td align="center">❌ </td>
</tr>
<tr>
<td>
<p><strong> Browser Performance Testing </strong></p>
<p><img align="bottom" alt="gitlab-logo" height="20" width="20" src="../img/logo-gitlab-48.png"> <a href="https://docs.gitlab.com/ee/user/project/merge_requests/browser_performance_testing.html">Documentation</a></p>
<p><a href="https://help.github.com"><img align="bottom" alt="mark-github" height="20" width="30" src="https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/mark-github.svg"> Documentation</a></p>
</td>
<td align="center">❌ </td>
<td align="center">❌ </td>
<td align="center">❌ </td>
<td align="center">❌ </td>
<td align="center">❌ </td>
</tr>
<tr>
<td>
<p><strong> CI/CD for external repo </strong></p>
<p><img align="bottom" alt="gitlab-logo" height="20" width="20" src="../img/logo-gitlab-48.png"> <a href="https://docs.gitlab.com/ee/ci/ci_cd_for_external_repos">Documentation</a></p>
<p><a href="https://help.github.com"><img align="bottom" alt="mark-github" height="20" width="30" src="https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/mark-github.svg"> Documentation</a></p>
</td>
<td align="center">❌ </td>
<td align="center">❌ </td>
<td align="center">❌ </td>
<td align="center">❌ </td>
<td align="center">❌ </td>
</tr>
<tr>
<td>
<p><strong> CI/CD for GitHub </strong></p>
<p><img align="bottom" alt="gitlab-logo" height="20" width="20" src="../img/logo-gitlab-48.png"> <a href="/features/github/">Feature details</a></p>
<p><a href="https://help.github.com"><img align="bottom" alt="mark-github" height="20" width="30" src="https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/mark-github.svg"> Documentation</a></p>
</td>
<td align="center">❌ </td>
<td align="center">❌ </td>
<td align="center">❌ </td>
<td align="center">❌ </td>
<td align="center">❌ </td>
</tr>
<tr>
<td>
<p><strong> Epics </strong></p>
<p><img align="bottom" alt="gitlab-logo" height="20" width="20" src="../img/logo-gitlab-48.png"> <a href="https://docs.gitlab.com/ee/user/group/epics/">Documentation</a></p>
<p><a href="https://help.github.com"><img align="bottom" alt="mark-github" height="20" width="30" src="https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/mark-github.svg"> Documentation</a></p>
</td>
<td align="center">❌ </td>
<td align="center">❌ </td>
<td align="center">❌ </td>
<td align="center">❌ </td>
<td align="center">❌ </td>
</tr>
<tr>
<td>
<p><strong> Roadmaps </strong></p>
<p><img align="bottom" alt="gitlab-logo" height="20" width="20" src="../img/logo-gitlab-48.png"> <a href="https://docs.gitlab.com/ee/user/group/roadmap/">Documentation</a></p>
<p><a href="https://help.github.com"><img align="bottom" alt="mark-github" height="20" width="30" src="https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/mark-github.svg"> Documentation</a></p>
</td>
<td align="center">❌ </td>
<td align="center">❌ </td>
<td align="center">❌ </td>
<td align="center">❌ </td>
<td align="center">❌ </td>
</tr>
<tr>
<td>
<p><strong> Static Application Security Testing </strong></p>
<p><img align="bottom" alt="gitlab-logo" height="20" width="20" src="../img/logo-gitlab-48.png"> <a href="https://docs.gitlab.com/ee/user/project/merge_requests/sast.html">Documentation</a></p>
<p><a href="https://help.github.com"><img align="bottom" alt="mark-github" height="20" width="30" src="https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/mark-github.svg"> Documentation</a></p>
</td>
<td align="center">❌ </td>
<td align="center">❌ </td>
<td align="center">❌ </td>
<td align="center">❌ </td>
<td align="center">❌ </td>
</tr>
<tr>
<td>
<p><strong> Dependency Scanning </strong></p>
<p><img align="bottom" alt="gitlab-logo" height="20" width="20" src="../img/logo-gitlab-48.png"> <a href="https://docs.gitlab.com/ee/user/project/merge_requests/dependency_scanning.html">Documentation</a></p>
<p><a href="https://help.github.com"><img align="bottom" alt="mark-github" height="20" width="30" src="https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/mark-github.svg"> Documentation</a></p>
</td>
<td align="center">❌ </td>
<td align="center">❌ </td>
<td align="center">❌ </td>
<td align="center">❌ </td>
<td align="center">❌ </td>
</tr>
<tr>
<td>
<p><strong> Container Scanning </strong></p>
<p><img align="bottom" alt="gitlab-logo" height="20" width="20" src="../img/logo-gitlab-48.png"> <a href="https://docs.gitlab.com/ee/user/project/merge_requests/container_scanning.html">Documentation</a></p>
<p><a href="https://help.github.com"><img align="bottom" alt="mark-github" height="20" width="30" src="https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/mark-github.svg"> Documentation</a></p>
</td>
<td align="center">❌ </td>
<td align="center">❌ </td>
<td align="center">❌ </td>
<td align="center">❌ </td>
<td align="center">❌ </td>
</tr>
<tr>
<td>
<p><strong> Dynamic Application Security Testing </strong></p>
<p><img align="bottom" alt="gitlab-logo" height="20" width="20" src="../img/logo-gitlab-48.png"> <a href="https://docs.gitlab.com/ee/user/project/merge_requests/dast.html">Documentation</a></p>
<p><a href="https://help.github.com"><img align="bottom" alt="mark-github" height="20" width="30" src="https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/mark-github.svg"> Documentation</a></p>
</td>
<td align="center">❌ </td>
<td align="center">❌ </td>
<td align="center">❌ </td>
<td align="center">❌ </td>
<td align="center">❌ </td>
</tr>
<tr>
<td>
<p><strong> Kubernetes Cluster Monitoring </strong></p>
<p><img align="bottom" alt="gitlab-logo" height="20" width="20" src="../img/logo-gitlab-48.png"> <a href="https://docs.gitlab.com/ee/user/project/clusters/#monitoring-your-kubernetes-cluster">Documentation</a></p>
<p><a href="https://help.github.com"><img align="bottom" alt="mark-github" height="20" width="30" src="https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/mark-github.svg"> Documentation</a></p>
</td>
<td align="center">❌ </td>
<td align="center">❌ </td>
<td align="center">❌ </td>
<td align="center">❌ </td>
<td align="center">❌ </td>
</tr>
<tr>
<td>
<p><strong> ChatOps </strong></p>
<p><img align="bottom" alt="gitlab-logo" height="20" width="20" src="../img/logo-gitlab-48.png"> <a href="https://docs.gitlab.com/ee/ci/chatops/">Documentation</a></p>
<p><a href="https://help.github.com"><img align="bottom" alt="mark-github" height="20" width="30" src="https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/mark-github.svg"> Documentation</a></p>
</td>
<td align="center">❌ </td>
<td align="center">❌ </td>
<td align="center">❌ </td>
<td align="center">❌ </td>
<td align="center">❌ </td>
</tr>
<tr>
<td>
<p><strong> <strong>Coming soon</strong>: Portfolio Management </strong></p>
<p><img align="bottom" alt="gitlab-logo" height="20" width="20" src="../img/logo-gitlab-48.png"> <a href="https://about.gitlab.com/direction/#portfolio-management-and-issue-management">Feature details</a></p>
<p><a href="https://help.github.com"><img align="bottom" alt="mark-github" height="20" width="30" src="https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/mark-github.svg"> Documentation</a></p>
</td>
<td align="center">❌ </td>
<td align="center">❌ </td>
<td align="center">❌ </td>
<td align="center">❌ </td>
<td align="center">❌ </td>
</tr>
<tr>
<td>
<p><strong> <strong>Coming soon</strong>: License management </strong></p>
<p><img align="bottom" alt="gitlab-logo" height="20" width="20" src="../img/logo-gitlab-48.png"> <a href="https://gitlab.com/gitlab-org/gitlab-ee/issues/2592">Feature details</a></p>
<p><a href="https://help.github.com"><img align="bottom" alt="mark-github" height="20" width="30" src="https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/mark-github.svg"> Documentation</a></p>
</td>
<td align="center">❌ </td>
<td align="center">❌ </td>
<td align="center">❌ </td>
<td align="center">❌ </td>
<td align="center">❌ </td>
</tr>
</tbody>
</table>

## Decision

Decision here...

## Consequences

Consequences here...

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