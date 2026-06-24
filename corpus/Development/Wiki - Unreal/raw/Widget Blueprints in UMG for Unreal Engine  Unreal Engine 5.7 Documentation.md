---
title: "Widget Blueprints in UMG for Unreal Engine | Unreal Engine 5.7 Documentation"
source: "https://dev.epicgames.com/documentation/unreal-engine/widget-blueprints-in-umg-for-unreal-engine?application_version=5.7"
author:
published:
created: 2026-04-10
description: "How to create a Widget Blueprint and Overview of the Widget Blueprint Interface in Unreal Engine."
tags:
  - "clippings"
---
At first, you should create a **Widget Blueprint**, as shown below. With the help of this, you will be able to start working with **Unreal Motion Graphics (UMG)**.

1. Create **Widget Blueprint**. Click the **Add** in the **Content Browser**, then select **User Interface > Widget Blueprint**.
	![Create Widget Blueprint](https://d1iv7db44yhgxn.cloudfront.net/documentation/images/b2b1bad6-8f75-4735-8c5b-05da7fe2618f/ue5_1-01-create-widget-blueprint.png "Create Widget Blueprint")
	You can also **Right-click** in the **Content Browser** instead of clicking the **Add** button.
2. You can rename or use the default name for the Widget Blueprint you created in the Content Browser.
	![Name created Widget Blueprint](https://d1iv7db44yhgxn.cloudfront.net/documentation/images/abf2b32e-c8e8-4069-9200-e16ee7e445d7/ue5_1-02-rename-widget-blueprint.png "Name created Widget Blueprint")
3. **Double-click** the created **Widget Blueprint** to open it in the **Widget Blueprint Editor**.
	![Open created Widget Blueprint in the Widget Blueprint Editor](https://d1iv7db44yhgxn.cloudfront.net/documentation/images/cf96f168-e59f-41e5-8113-07cfcaf794d5/ue5_1-03-widget-editor.png)
	*Click image for full view.*

## Widget Blueprint Editor

The **Designer** tab is tab by default in the opened **Widget Blueprint Editor**. With the help of available editor tools, you can customize the appearance of the UI. Also, you can get the visual preview of the in-game screen, due to layout you adjust.

![ser Interface of the Widget Blueprint Editor](https://d1iv7db44yhgxn.cloudfront.net/documentation/images/f7427192-b5af-405c-a6cd-2a9cf574a4a5/ue5_1-04-widget-editor-scheme.png)

*Click for full view.*

| Number | Window | Description |
| --- | --- | --- |
| **1** | **Menu Bar** | It contains the common menu options. |
| **2** | **Tool Bar** | It contains a number of commonly used functions for the Blueprint Editor, such as **Compile**, **Save**, **Browse**, **Play**, and so on. |
| **3** | **Editor Mode** | It switches the Blueprint Editor between **Designer** and **Graph** modes. |
| **4** | **Palette** | It contains the list of widgets, that you can drag into the **Visual Designer** window. Displays any class inheriting from UWidget. |
| **5** | **Hierarchy** | It displays the structure of the User Widget. You can also drag widgets from **Palette** panel into this panel. |
| **6** | **Visual Designer** | It is the visual representation of the UI layout. Also, you can manipulate widgets you dragged into the Visual Designer. |
| **7** | **Details** | It displays the properties of the selected widget. You can adjust them via this panel. |
| **8** | **Animations** | This is the animation track for UMG which allows you to keyframe animations for your widgets. |

The **Visual Designer** window by default is 1:1 scale. You can change the scale by holding **Ctrl** and using **Mouse-Wheel**.

The **Graph** tab of the **Widget Blueprint Editor** looks as following.

![Graph tab demonstration of the Widget Blueprint Editor](https://d1iv7db44yhgxn.cloudfront.net/documentation/images/770ded0a-74e3-44e7-a434-2827f3a6d378/ue5_1-05-widget-editor-graph.png)

*Click for full view.*

The Graph tab has similar functions to the Designer tab of the Blueprint Editor. For more information on the basic functionality of the Graph tab see [Blueprint Editor Graph Editor](https://dev.epicgames.com/documentation/unreal-engine/graph-editor-for-the-blueprints-visual-scripting-editor-in-unreal-engine).

