---
title: "Possessing Pawns in Unreal Engine | Unreal Engine 5.5 Documentation"
source: "https://dev.epicgames.com/documentation/unreal-engine/possessing-pawns-in-unreal-engine?application_version=5.5"
author:
published:
created: 2026-04-11
description: "A tutorial for possessing different pawns in Unreal Engine."
tags:
  - "clippings"
---
If you want to switch between multiple Playable Characters in your game or you have a situation where you want a Character to enter and control a Vehicle (car, plane, tank, etc.) or other Pawn that has unique controls (like a mounted machine gun a player can control), you will want to take Possession of the Character or Pawn in order to pass input information to it.

The **PlayerController** is what is responsible for directing a Pawn and Possession of a Pawn requires a PlayerController to be specified. Pawns themselves do not need to be a humanoid character and can be anything that you want to apply basic movement to and allow a player to control. Characters on the other hand are a form of Pawn that includes Collision and a CharacterMovementComponent by default which allows it to do basic human-like movement.

## Implementation Guide

Learn how to use the **Possess** and **UnPossess** [Blueprint](https://dev.epicgames.com/documentation/unreal-engine/blueprints-visual-scripting-in-unreal-engine?application_version=5.5) nodes to take control of and provide input to a [Pawn](https://dev.epicgames.com/documentation/unreal-engine/pawn-in-unreal-engine?application_version=5.5) or [Character](https://dev.epicgames.com/documentation/unreal-engine/characters-in-unreal-engine?application_version=5.5) in your project.

For the purposes of this guide we are using the **Blueprint Side Scroller** template, however you can use your own project if you would like. If you do not know how to create projects or use templates, refer to the [Project Browser](https://dev.epicgames.com/documentation/unreal-engine/creating-a-new-project-in-unreal-engine?application_version=5.5) page for more information.

### Steps

1. From the **Content Browser**, drag-and-drop into your level the additional characters you would like to control.
	![](https://d1iv7db44yhgxn.cloudfront.net/documentation/images/30eb3012-d807-439b-bc4d-e32c775fffaf/pawns1b.png)
	Here we added two additional **SideScrollerCharacter** Blueprints from the **Content > SideScrollerBP > Blueprints** folder to the level giving us a total of three characters in our level. With this particular template project, a character is already placed inside the level by default.
2. In the **World Outliner**, select each of the characters you want to control.
	![](https://d1iv7db44yhgxn.cloudfront.net/documentation/images/ef984dba-e957-4359-afdf-50a2b7146724/pawns2b.png)
3. From the Main Toolbar, click the **Blueprints** button and **Open Level Blueprint**.
	![](https://d1iv7db44yhgxn.cloudfront.net/documentation/images/65be3a23-7859-4000-9e21-20ae9e98ed02/pawns3b.png)
4. **Right-click** in the graph area, then select **Create References to selected Actors** option from the context menu.
	![](https://d1iv7db44yhgxn.cloudfront.net/documentation/images/b47201cf-c6b9-4460-8d32-3fa315b9d8a5/pawns4b.png)
	This will allow us to reference each of the characters that we've selected in the level.
5. **Right-click** in the graph area, then search for the **1** Keyboard Event and select it.
	![](https://d1iv7db44yhgxn.cloudfront.net/documentation/images/0db2a2c1-62cb-4ddc-8dee-5a1941378b1d/pawns5b.png)
	This will allow us to fire off an event whenever the 1 key is pressed or released.
6. Add the **2** and **3** Keyboard Events to the graph.
7. **Right-click** in the graph and search for and add the **Get Player Controller** node.
	![](https://d1iv7db44yhgxn.cloudfront.net/documentation/images/869b12be-32a0-45f3-be94-975303377982/pawns6b.png)
	The [Player Controller](https://dev.epicgames.com/documentation/unreal-engine/player-controllers-in-unreal-engine?application_version=5.5) is used to take the input from a human player and translate that into actions for a Pawn.
8. **Left-click** and drag off the **Return Value** of the Get Player Controller node and search for and add the **Possess** node.
	![](https://d1iv7db44yhgxn.cloudfront.net/documentation/images/30279ce1-2ab3-4592-a5f2-366796aaf817/pawns7b.png)
	This will tell the Player Controller which target Pawn to possess and take control of. When the **Possess** function is called, it will automatically check if a Pawn is currently controlled and **UnPossess** it first before attempting to Possess a new Pawn.
	You can use the UnPossess function if you want to have the player release control of their Pawn and enter, say for example, a spectator type of state where they are not directly controlling a playable character.
9. Create two more **Possess** nodes and connect the **1**, **2** and **3** Keyboard Events as shown below.
	![](https://d1iv7db44yhgxn.cloudfront.net/documentation/images/a324515c-f133-463f-a65a-b01601521d47/pawns8.png)
	We are now set up to possess a Pawn when 1, 2 or 3 is pressed. Next we need to define which Pawn to possess from our references.
10. Connect each of the **SideScrollerCharacter** references to each of the **In Pawn** pins as shown below.
	![](https://d1iv7db44yhgxn.cloudfront.net/documentation/images/234da643-8f3b-4d3f-8518-6449b6a781fa/pawns9.png)
	Our scripted functionality is complete and we are ready to test it.
11. Click **Compile** from the toolbar to update your script.
	![](https://d1iv7db44yhgxn.cloudfront.net/documentation/images/c9439006-ca8c-4f31-af2e-e17c21e585df/pawns10b.png)
12. Click **Play** from the toolbar to play the game in the editor.
	![](https://d1iv7db44yhgxn.cloudfront.net/documentation/images/85ef1091-4fb9-4981-9d78-de6069ae7d6f/pawns11b.png)

### End Result

When you press 1, 2 or 3 on your keyboard you will switch between each of the characters in your level.

<iframe src="https://dev.epicgames.com/community/api/cms/videos/0_2ztiga4z/embed.html"></iframe>

