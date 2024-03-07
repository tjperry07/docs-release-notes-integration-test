---
title: Projects
sidebar_position: 1
---

## Projects Overview

Graphic goes here.

In Coalesce, your work is organized into Projects. It is similar to a folder on your computer that helps organize your work. Each **Project** in Coalesce is tied to a single git repository, which allows for easy version control and collaboration. Within a project, you can create one or multiple **Development Workspaces**, each with its own set of code and configurations. Additionally, each project has its own set of deployable **Environments**, which can be used to test and deploy code changes to production

-   A Project is a parent object that groups your builds, deploys, and refreshes into independent areas.
-   You can think of Projects like the Folders on your computer that help organize your work.
-   Projects are typically organized by work purpose, team goal, and/or business area.
-   Each project is backed by its own Git repository which independently version controls the work within that Project.
-   As a good practice, there should be a one-to-one relationship between a Project and a Git repository, and you should not share the same Git repository across Projects. This good practice can be used as a guiding factor when you are determining how to organize your Projects in Coalesce.

## Create a New Project

1.  Make sure you are on the Projects page. If you are on the \[Build page\](# link here), select the **back arrow**.
2.  Click the **plus sign** (+) next to Projects.
3.  Fill out the Project Details.
4.  Enter your Git repo URL.
    1.  Coalesce supports \[many providers\](# link).
5.  Then select a Git account to use. It should be able to view and make requests to the Git repo in the previous step.
6.  If you don't a Git repo configured, then select **Add New Account**.
    1.  Enter an account nickname. This will displayed in the interface.
    2.  Enter the Git username and [token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens).
    3.  Enter the **Author Name**, which identifies the committer.
    4.  Enter the **Author Email**, which identifies the committer email.
    5.  Click **Add**.
    6.  Select the Git account you just created in the drop down, then click **Test Account**.
7.  Once successful, click **Finish**.
8.  Now that you've added a Project, you need to add a \[**Workspace**.\](add link here)

For a quick overview and setup instructions for your first **Project**, see the following video.

<iframe width="560" height="315" src="https://www.youtube.com/embed/D9nZ1v03Ykk?si=QBoH3rr7aW9lOFnl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Copying Objects

As part of **Projects**, there is copy functionality than can make copying **Nodes**, **Macros**, **Jobs**, **Subgraphs**, and **Storage Locations** (excluding mappings) from one **Workspace** to another. **Jobs** and **Subgraphs** have their definition copied over, but the **Nodes** themselves will not be copied over. You can access it by clicking on the ellipsis next to an individual Workspace and follow the interface prompts from there.

![Copying Objects](https://files.readme.io/3835355-copy_tool.png)

## Deleting a Project

To delete an existing **Project**, click the ellipsis next to the relevant one and select **Delete Project**. A confirmation window will appear, and once confirmed, the **Project** will be deleted.

![](https://files.readme.io/814a4a7-delete_project.png)

## Upgrading to Projects

[](https://docs.coalesce.io/v0.00/docs/projects#upgrading-to-projects)

New Coalesce accounts created after the release of 6.0 will have **Projects** enabled by default. Existing Coalesce accounts will not automatically be upgraded to have this feature. If you'd like to have access, please reach out to our support team at [support@coalesce.io](mailto:support@coalesce.io) and they can enable the upgrade for you. The upgrade will take all existing **Development Workspaces** and migrate them to one default **Project**.