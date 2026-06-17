Game Development Principles
Week 3 - Thursday

CTIN 389

![[slide_1_img_98.png]]
<br><br><br><br><br><br><br><br><br><br>
![[slide_2_img_103.png]]

Today’s Agenda
<br><br><br><br><br><br><br><br><br><br>
Perforce (Again)

Slightly more sophisticated workspaces
<br><br><br><br><br><br><br><br><br><br>
Basic Workspace Setup
You’ve practiced setting up basic workspaces several times, and you may even remember the steps:
Change the workspace name (username_computername_course).
Change the workspace root.
Show the workspace mappings as text.
Delete all the lines except for the one for the relevant course.
Go into the Advanced tab and delete the Host text.
This maps the entire class depot to the workspace root directory on your computer.

Workspaces
<br><br><br><br><br><br><br><br><br><br>
Basic Workspace Setup
If you prefer a video presentation of the basic setup of a workspace and checking in a Unity project, see Peter’s video:
https://vimeo.com/605302677

Workspaces
<br><br><br><br><br><br><br><br><br><br>
Advanced Workspace Setup
We can expend a little extra effort to set up our workspace so that it maps just a specific part of the class depot to the folder on your computer. There are two advantages of this:
If you’re working in a workspace that only maps to your project folder, you can’t accidentally delete your classmates’ files (which tends to happen a lot when people are still learning Perforce).
Sometimes Unity generates very long file names in its Library. When you map an entire class depot to your hard drive, it tends to result in really long directory paths. Because of these two things, it’s not unusual for Unity projects to stop working because some of the file paths are too long for the operating system to process. This can fix that problem.

Workspaces
<br><br><br><br><br><br><br><br><br><br>
Start out creating a new workspace the same way as before. Change the workspace name and the workspace root, but keep a couple things in mind.
When you set your workspace name, you might want to specify the project you’re working on rather than the course. Something like bouchard_laptop_389-racing.
When you specify the workspace root, try to keep the file path as short as possible. Don’t create a long folder hierarchy in your Documents folder and stick it in there. On my Windows machines, I put it in “C:\389”, and on my Mac I put it in “/Users/bouchard/P4”.

Workspaces
<br><br><br><br><br><br><br><br><br><br>
Click on this button to change to folder view. You might see more than one folder, but expand the one named “CTIN_389”. Inside, expand the folders for the semester number and your class section number. You should see your class’s teams - I set them up ahead of time. (You’ll do this part next yourself time).

Workspaces

![[slide_8_img_200.png]]
<br><br><br><br><br><br><br><br><br><br>
Select all the top-level depots, including the one for this class. Click the red X button; this will remove them from your workspace mapping.
DON’T CLICK OK YET.

Workspaces

![[slide_9_img_214.png]]
<br><br><br><br><br><br><br><br><br><br>
Highlight your team’s name and click on the green checkmark button. This will add just that specific folder to your workspace mapping.
DON’T CLICK OK YET.

Workspaces

![[slide_10_img_230.png]]
<br><br><br><br><br><br><br><br><br><br>
Now click on this button to change to text view. You should only have one line of text in your workspace mappings.
DON’T CLICK OK YET.

Workspaces

![[slide_11_img_245.png]]
<br><br><br><br><br><br><br><br><br><br>
The right-hand part includes some extra directories beyond the workspace name. Edit it to remove those extra directories. Keep the beginning and the end bits.
It should just be “//”, your workspace name, and then “/…”.
DON’T CLICK OK YET.

Workspaces

![[slide_12_img_259.png]]
<br><br><br><br><br><br><br><br><br><br>
On the Advanced tab, delete anything that appears next to "Host". Leave everything else.
Now you can click OK.



Workspaces

![[slide_13_img_272.png]]
<br><br><br><br><br><br><br><br><br><br>
Log into your workspace.



Workspaces

![[slide_14_img_287.png]]
<br><br><br><br><br><br><br><br><br><br>
Splines
<br><br><br><br><br><br><br><br><br><br>
Splines and Vector Graphics
A spline is a mathematically defined curve. Behind the scenes it is using a series of control points and tangents to calculate the shape of the curve.

What is a Spline?
<br><br><br><br><br><br><br><br><br><br>
Splines and Vector Graphics
Splines are a type of vector graphic, which are graphics defined by math. They are the alternative to raster graphics which are made of pixels. (For reference, Adobe Illustrator is a vector-graphics program; Photoshop is raster-based.)
Unity generally uses raster graphics to render your game, although UI elements contain some vector elements. However, you can use vector graphics if you like, using a package like Freya Holmér’s Shapes.

What is a Spline?
<br><br><br><br><br><br><br><br><br><br>
More Math for Shapes
Related to vector-defined shapes, 3D modeling software (including ProBuilder) offer parametric models, which are shapes like arches and stairs where you can input numbers and modify the shape.
For example, you can ask ProBuilder to create curved stairs, and then tell it to change the diameter of the curve or how many stairs to include.

What is a Spline?
<br><br><br><br><br><br><br><br><br><br>
More Math for Shapes
However, the result of the math is not a purely mathematical shape like a line or sphere, but a set of points defining a mesh. This is (sort of) the 3D equivalent of rendered pixels or rasterization.

What is a Spline?
<br><br><br><br><br><br><br><br><br><br>
Splines and Vector Graphics
There are simpler and more complicated ways to create these curves: Catmull-Rom, B-splines, and hermite splines. The most basic kind of spline is a bézier curve, which is a type of hermite spline.
You can learn more about the kinds of math involved here, if you are interested.
But luckily you don’t have to!

What is a Spline?
<br><br><br><br><br><br><br><br><br><br>
Unity has a package for authoring and working with splines.
The video linked on the left is a one-minute introduction to installing the package, setting up a spline and adding a GO that animates along the spline.

Link


![[slide_21_img_374.png]]

Splines Package

Unity Splines
<br><br><br><br><br><br><br><br><br><br>
The Unity package has other features as well, such as generating a surface or spawning instances of a prefab along the spline.
This video has more details. Link
The Splines package documentation is here: Link

Splines Package

![[slide_22_img_387.png]]
<br><br><br><br><br><br><br><br><br><br>
Unity didn’t have a first-party splines package for many years.
Various Asset Store developers sprang in to fill the gap. These packages offer features that the Unity package doesn’t.
The Curvy package, for example, is one of the oldest and most built-out. One example is that is supports different types of spline, whereas Unity offers only bézier curves, which are the simplest but the least flexible.

Asset Store Options

Other Splines Packages
<br><br><br><br><br><br><br><br><br><br>
Assignment

Reading

Analyzing Architecture by Simon UnwinChapter 2: Basic Elements of ArchitectureRead by Monday. We will discuss in class.
This chapter takes a very introductory and foundational approach to the discipline of architecture, positioning it in a way that seems to have clear applications to the design of virtual spaces in games. Much of the chapter lists and describes the component elements of architectural forms.


![[slide_24_img_412.png]]
<br><br><br><br><br><br><br><br><br><br>
![[slide_25_img_419.png]]

See You Next Time!

Be prepared to discuss the reading on Monday.
Set up your Racing Project on Perforce. We will playtest on the following Monday, September 22. 