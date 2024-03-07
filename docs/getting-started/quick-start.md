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

## Configure Storage Locations and Workspace

A storage location is a logical name you provide to represent a database and schema (in Snowflake) and you will need them to make use of the **Workspace** you configured in [Connect to Snowflake](https://docs.coalesce.io/v0.00/docs/quick-start#connect-to-snowflake). Depending on your setup you may need to create a storage location in Snowflake.

1.  Go to **Build Settings** >**Storage Mappings**. You'll have a **SAMPLE** and **WORK** locations. The Snowflake Sample Data will be mapped to SAMPLE and the WORK is where you'll write new tables.
2.  Set the **SAMPLE** database to use the Snowflake sample data, and use the schema **TPCH\_SF1**.
3.  Set the **WORK** to a second storage location and schema in that storage location.

![Example Configuration of Storage Mappings](https://files.readme.io/c741906-storage_mappings.png)

:::info[Snowflake Storage Locations]
If you don't have two storage locations, you'll need to create them. You can do this from Snowsight > Databases or using [SnowQL](https://docs.snowflake.com/en/sql-reference/sql/create-database). You can also get the sample data from [Snowflake](https://docs.snowflake.com/en/user-guide/sample-data-using).

:::

## Build a Transformation Pipeline

Now it's time to add **Sources** to the graph. The [DAG editor](https://docs.coalesce.io/v0.00/docs/build-overview#dag-editor-span-stylecolorb3b5d6%E2%96%88span) is where you'll configure **Nodes** that will transform your data. Below is an example of a graph with several nodes. Each box is considered a Node.

![Example Graph](https://files.readme.io/8004001-example_graph.png)

### Add Graph Sources

[](https://docs.coalesce.io/v0.00/docs/quick-start#add-graph-sources)

![Add source to SQL Pipeline](https://files.readme.io/689decc-2024-02-01_add_sources.gif)

1.  Expand **Nodes** from the sidebar.
2.  Click on the **+** next to Search > **Add Sources**.
3.  Choose your source tables and click **Add Sources**.
4.  You'll now see your graph populated with some **Source Nodes**.

### Make a Stage Node to Transform Your Data

Now that you have **Source Nodes** on your graph, it's time to add a **Stage Node**. [Stage Nodes](https://docs.coalesce.io/v0.00/docs/node-types) are intermediate nodes in the graph where you can preview your changes.

![](https://files.readme.io/2523375-2024-02-01_stage_node_transform.gif)

1.  Add one or more **Stage Nodes** by right clicking your `Nation` **Source Node**\>**Add Node**\>**Stage Node**. You can select multiple **Source Nodes** by Shift+clicking them and then add multiple **Stage Nodes** simultaneously.
2.  Double click on the **Stage Node** or right-click and select **Edit** to open up the [**Node Editor**](https://docs.coalesce.io/v0.00/docs/editing-a-node) for the Nation Stage Node you created.
3.  Open **Node Properties** on the right and ensure the **Storage Location** is set to the WORK you configured [earlier](https://docs.coalesce.io/v0.00/docs/quick-start#configure-storage-locations--environments). You'll be writing to this location in Snowflake.
4.  Click **Create** to create a table in Snowflake. You'll see the status in the lower window.
5.  Click **Run** to populate the table. You'll see the status in the lower window. You haven't transformed the data yet.
6.  Edit the **Transform** field in the **Mapping** grid by double clicking in the transform field of the `N_NAME` column. Try a simple transform like `LOWER()` and the name of your column, or you can use the syntax `LOWER("NATION"."N_NAME")` to edit the Snowflake sample data.
7.  Click **Run** again to transform the data. You'll see that the nation names are in lowercase.

:::info[On Transforms]

Any [Snowflake SQL transform](https://docs.snowflake.com/en/sql-reference-functions.html) can be used to transform your data.

:::

![Example of Transformed Data.  The entries in N_NAME are now lowercase.](https://files.readme.io/612853d-transformed_data.png)

Congratulations! You've connected your database and applied a basic transformation to your data. Feel free to continue experimenting with some of the other node types below.

### Create a Dimension Table

In this guide we will be making a Type 2 Dimension to track historical data of a column. A [slowly changing dimension(Type 2)](https://www.ibm.com/docs/en/iiw/8.10.1?topic=techniques-slowly-changing-facts) is a industry standard for tracking historical data by creating multiple records for a given natural key.

By default, Coalesce creates a Type 1 Dimension, you'll add a Type 2 Dimension.

1.  Right click on the `CUSTOMER` node and create a new **Stage Node**.
2.  In the Node editor for `STG_CUSTOMER`, click **Create** and then **Run**.
3.  Return to the main graph and create a Dimension node from the `STG_CUSTOMER` node.

![A customer Stage node, then a Dimension node](https://files.readme.io/0ed629d-2024-02-02_dimension_customer.gif)

1.  Go into the new `DIM_CUSTOMER` Node editor.
2.  Open up **Options** and select `C_CUSTKEY` as a business key by selecting it and clicking the right arrow.
3.  In the same **Options** area, go to **Change Tracking** and select `C_ADDRESS` and `C_PHONE`, then click the right arrow to add them.
4.  Now **Create** and **Run** the `DIM_CUSTOMER` node. Congratulations! You've created a Type 2 Dimension table.

![1437](https://files.readme.io/b8154bc-2024-02-02_created_dim_table.gif "business key.png")

Choosing `C_CUSTKEY` as the **Business Key**

:::info[Type 1 vs Type 2]

In the **Dimension Node**, if no **Change Tracking** columns are selected, the node will act as a Type 1 Dimension. If **Change Tracking** columns are selected, it will act as a Type 2.

:::

## Create a Fact Table

Now, let's create a [fact table](https://docs.coalesce.io/v0.00/docs/out-of-the-box-nodes#fact-nodes). You're joining the Orders (`STG_ORDERS`) with the Dimension table on the `DIM_CUSTOMER_KEY` and `ORDERS` Customer key. Then you'll create a Fact table of the customers and orders. Because you're specifying the `O_ORDERKEY`, it will merge instead of inserting the data

1.  Create a new **Stage Node** from the `ORDERS` **Source Node**.
2.  Open the new `STG_ORDERS` node and delete all the columns except for `O_ORDERKEY`, `O_CUSTKEY`, and `O_TOTALPRICE`. You can drag and drop rows to group the items for deletion.
3.  Select the `DIM_CUSTOMER` node on the left side, then select `DIM_CUSTOMER_KEY` and drag it into your `STG_ORDERS` mapping grid.

    ![`DIM_CUSTOMER_KEY` added to the Mapping grid](https://files.readme.io/eaa59af-2024-02-02_fact_table_cust_key_get_started.gif)

4. Go to Join, next to Mapping in the `STG_ORDERS` Node Editor. 
5. Delete any existing text.
6.  Click **Generate Join** and then **Copy to Editor**.
7.  Replace the `/_COLUMN_/` text with `O_CUSTKEY`. It should look similar to the following:
    1.  `FROM {{ ref('SAMPLE', 'ORDERS') }} "ORDERS" LEFT JOIN {{ ref('WORK', 'DIM_CUSTOMER') }} "DIM_CUSTOMER" ON "ORDERS"."O_CUSTKEY" = "DIM_CUSTOMER"."C_CUSTKEY"`
8.  **Create** and **Run** the `STG_ORDERS` node.
9.  Create a **Fact Node** from `STG_ORDERS`.
10.  Open the new `FCT_ORDERS` Node Editor.
11.  Open **Options** > Business Key > add the `O_ORDERKEY`
12.  **Create** and **Run** the `FCT_ORDERS` node.

![](https://files.readme.io/4f00a66-2024-02-02_join__fact_get_started.gif)

Congratulations! You have now made a fact table! You can also run this query in Snowflake. Make sure to adjust your schema(`MY_SCHEMA`) and database(`MY_DB`) to your enviroment.

```sql
select DIM.C_NAME CUSTOMER_NAME,
sum(FCT.O_TOTALPRICE) TOTAL_PRICE
from "MY_DB"."MY_SCHEMA"."FCT_ORDERS" FCT
inner join "MY_DB"."MY_SCHEMA"."DIM_CUSTOMER" DIM
on FCT.DIM_CUSTOMER_KEY = DIM.DIM_CUSTOMER_KEY
group by DIM.C_NAME;
```