
## 1. Create a New Project
---
Choose New Project.  
If you working in an existing project, find New Project under File...

![[unrealTutorial_01_103.png]] 

Choose the third person template.

![[unrealTutorial_01_104.png]]

And add the Platforming "Variant".

![[unrealTutorial_01_107.png]]

Name your project and click Create.

Once your project is open, click play to ensure you have your third person project working.

Take a moment to get oriented.  Make use of [[UE Editor Navigation]].

-----
## 2. Create a Block

Open the Place Actors panel.

![[unrealTutorial_00_104.png]]


Drag a Cube into your scene.  

![[unrealTutorial_00_105.png]]

In the Outliner, rename your Cube to `Block1`.

![[unrealTutorial_00_105b.png]]


-----

## 3. Material 

Right-click in the content browser, choose New Folder.  Name it `Materials`.  This will make a folder in Windows/OSX.  Make a mental note of where it is.  

After entering the `Materials` folder, right-click in the content browser.  Choose Material.

![[unrealTutorial_00_103.png]]


Name it `M_Block1`. 

---
Open the `Material`, `M_Block1` by double-clicking it.
You are now in the `Material`'s `Material Graph`, as seen in the image below, which is the outcome of the following instructions:

You see a tall "node".  

Right-click on the words `Base Color` and choose Promote to Parameter.  

A new node - `Base Color` - appears.  Double click that new node's the square in order to choose a color. 
![[unrealTutorial_00_106.png]]

Click Apply, return to the level, drag `M_Block1` from the Content Browser onto `Block1`, the cube you placed in the level in Step 2.

![[unrealTutorial_00_109.png]]

-----

## 4. Material Instance

In the `Material Graph` of the `Material` `M_Block1`, select the `Base Color` node you created in Step 3.  

On the left, find the `Parameters` panel.

![[unrealTutorial_00_115.png]]

Click `Save Child` and name the new actor `M_Block1_Inst_Pink`.


----

**Important!**  Return to the `M_Block1`'s `Material Graph` -- the first `Material` you made.   Return its color to black.

*We are taking advantage "object oriented" logic*.  `M_Block1` is the parent `Material` with general properties it can pass to its instances.  Those children - `Material Instance` - inherit from `M_Block1`. 
In our case, `M_Block1` provides `Base Color` to all its instances.  Each of those instances is likely to choose a distinct value for Base Color.  "I have a pink one, a green one, a blue one..."

----

Open `M_Block1_Inst_Pink`.  Under Details, find `Base Color`.  Again, this property is *inherited* from its parent, `M_Block1`.
Change the color to pink and *drag it onto your block*.  

----
*This object oriented logic*:  the truth is, we went through unnecessary steps for this specific task - to create a simple pink box.  But we are following good practice for later, for when your projects are much more complicated.

Save All

----

## 5. Material with a Texture

Download "WavyAbstractsmall.jpg".
https://drive.google.com/drive/u/0/folders/1E4s5-Yq735545YkGUT8N_OoM7K-V-0fH

In Windows/OSX, move the .jpg to your `Materials` folder.  

Unreal will ask to import.  Do so.  

From the Content Browser, drag that texture onto your cube.  Notice a new Material appears in the Content Browser.  This is not a Material Instance, but a parent Material.  This does not follow the object oriented practice encouraged in Step 4, but it is worth appreciating what it takes to incorporate a texture in a material.

## What you can now build

- Objects with custom solid colors, with each color defined as an editable parameter
- Multiple color variants of the same object using Material Instances (pink, green, blue — all from one parent material)
- Objects with texture maps applied — photos, patterns, painted surfaces
- A material system that scales cleanly: change the parent, update all instances at once

## Example deviations you are ready for

- A parent material with multiple exposed parameters — add Roughness or Emissive alongside Base Color, so instances can vary glow or shininess independently
- A family of props that share one parent material but each instance has a distinct color — walls, floors, crates all coordinated from one file
- A texture-based material with a tint parameter — import a photo or pattern, expose a color multiplier so instances can shift the hue without replacing the texture
- Apply the same instance workflow to a large mesh or landscape section — same technique, different target





