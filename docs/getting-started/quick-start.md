---
title: Quick Start Guide
sidebar_position: 1
---

In this guide, you’ll learn to connect your database, set up a staging node with a data transformation, and create a dimension and fact table.

## Before You Start

-   Sign up for a Coalese [account](https://coalesce.io/start-free/).
-   Make sure you're using Google's Chrome browser, as other browsers are not officially supported.
-   Have your Snowflake login available. Don’t have a Snowflake account yet or not ready to connect your company’s Snowflake to Coalesce? Sign up for a [free trial](https://signup.snowflake.com/) and use Snowflake’s provided sample data.
  
## Video Overview

The following video provides a brief overview of what this guide covers.

<iframe width="560" height="315" src="https://www.youtube.com/embed/MVQRH2qsizg?si=1bJuMluCy0a1RSwm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Interface

When you first sign in on a new account, you'll be presented with the **Projects Dashboard**, that includes a default [**Project**](https://docs.coalesce.io/v0.00/docs/projects) and **Development Workspace**. Click the **Launch** button to open the workspace to continue. You can ignore the version control warning since it won't be used in this guide.

![Projects Dashboard](https://files.readme.io/cdeed32-2024-02-01_projects.png)

Projects Dashboard

In the Development Workspace is the [**Build** interface](https://docs.coalesce.io/v0.00/docs/build-overview) and [**Deploy** interface](https://docs.coalesce.io/v0.00/docs/overview-of-the-deploy-interface).

The Build interface is where you'll create nodes, build node graphs, and transform your data. The [**Deploy** interface](https://docs.coalesce.io/v0.00/docs/overview-of-the-deploy-interface) is used to push your pipeline to other environments such as QA and production.


:::info[Problem Scanner]

For new accounts, the [Problem Scanner](https://docs.coalesce.io/v0.00/docs/problem-scanner) will show a few action items. You can disregard them for this guide.

:::

![The Problem Scanner](https://files.readme.io/c53ad16-problem_scanner.png)

## Connect to Snowflake

![Add your Snowflake credentials in the build settings](https://files.readme.io/e85cfef-2024-02-01_11_add_snowflake_credentials.gif)

Add your Snowflake credentials in the build settings

1.  Click on **Build Settings**, which is represented by a cogwheel icon.
    
2.  Go to **Development Workspaces** and edit your current **Workspace** by clicking the pencil icon to the right of it.
    
3.  On the **Settings** page, enter your Snowflake Account.
    
    1.  Obtain your Snowflake URL, by opening the [account selector](https://docs.snowflake.com/en/user-guide/admin-account-identifier#label-account-name) in Snowflake.
    
    ![](https://files.readme.io/f280156-sf_url_2.png)
    
4.  Go to **User Credentials** and fill out the form with your Snowflake login.
    
5.  Click **Test Connection** to ensure your credentials work as expected.
    
6.  Click **Save**.
    

You've now connected Coalesce to your Snowflake instance!