# Single Page Application (SPA) Resumé

## Description

Resumé is a single page web app that displays a user's curriculum vitae as a website.  

## Walkthrough

#### Tools you will need


##### Download and install Visual Studio from the link below 
[Visual Studio](https://www.visualstudio.com)

##### Download and install the Azure SDK from the link below
[Azure SDK](https://azure.microsoft.com/blog/2015/07/20/announcing-the-azure-sdk-2-7-for-net) 

##### When you have all the above resources ready, you can proceed to the step-by-step guide below

### Cloning Repository Using Visual Studio

#### Step 1

To get the clone URL click on the Copy to clipboard button.
![](Documentation/images/img-w19.png?raw=true) 

#### Step 2

On your computer click on start, search for Visual Studio and press enter to open it.
![](Documentation/images/img-w28.png?raw=true)

#### Step 3

To clone the repository to your computer you need to open Visual Studio, click on Team Explorer then Manage Connections. 
![](Documentation/images/img-w17.png?raw=true)

#### Step 4

Click on clone.
![](Documentation/images/img-w18.png?raw=true)

#### Step 5 

Paste the clone URL you got from github into the textbox and click Clone.
![](Documentation/images/img-w20.png?raw=true)


### Deploying Web Site To Azure


#### Step 1

Open your browser and type in http://portal.azure.com

![](Documentation/images/img1.png?raw=true)

#### Step 2

On the sign in page you're going to have to enter your Microsoft Account details.

![](Documentation/images/img2.png?raw=true)

#### Step 3

When you're signed in, you'll be sent to the Azure portal dashboard.

![](Documentation/images/img3.png?raw=true)

#### Step 4

To create a new web app click on New → Web+Mobile → Web App. On the web app blade there's a field where you have to supply a name for your web app, the name has to be globally unique because it will be used to make up part of your `azurewebsites.net` URL. You also need to choose a subscription, resource group and a location before you can create the web app.


![](Documentation/images/img4.png?raw=true)

#### Step 5

After creating the web app, you should be able to view your web app on the resource groups tab.

![](Documentation/images/img5.png?raw=true)

#### Step 6

After creating your web app, it should be displayed as a tile on your dashboard, if it's not then you can click on Resource Groups to find it.

![](Documentation/images/img6.png?raw=true)

#### Step 7

Open your project solution in Visual Studio, on the Team Explorer tab double-click on project's local repository, click on the resume.sln file to open it and then open the Solution Explorer tab right-click on the project and click publish.

![](Documentation/images/img-w34.png)
![](Documentation/images/img-w21.png)
![](Documentation/images/img7.png)


#### Step 8 

On the window that pops up click on Microsoft Azure Web Apps
![](Documentation/images/img8.png)


#### Step 9

You may have to reenter your credentials to connect Visual Studio to your Azure subscription.
![](Documentation/images/img9.png)

#### Step 10

After Visual Studio connects to your Azure subscription, you should select the one you want and click OK.
![](Documentation/images/img12.png)

#### Step 11 

A window containing the details of the Azure Web App will pop-up, confirm if the information displayed there is correct then click Publish to deploy the app. 
![](Documentation/images/img13.png)


#### Step 12

The output window will display a success message when the deploy is done.
![](Documentation/images/img14.png)


### Changing the information on the resumé

#### Step 1

Open the resume sollution on Visual Studio, on the Solution Explorer tab double-click on the scripts folder and open the resume.ts file.
![](Documentation/images/img-w1.png)

#### Step 2

Once you have the file open you can now replace the profile information with your own. To change the name, find the name property in the resume class and set its value to your name. 
![](Documentation/images/img-w2.png)


#### Step 3

To change current title find the currentTitle property in the resume class and change its value to your current job title.
![](Documentation/images/img-w3.png)


#### Step 4

To change contacts find the contacts property in the resume class, you will notice that it contains three instances of a contact which are represented inside two curly-braces change the value of each property to your own.
![](Documentation/images/img-w4.png)


#### Step 5

To change studies find the studies property in the resume class, like the contacts property the studies property is a collection so you can either add more items to it or edit the exisiting items.
![](Documentation/images/img-w7.png)


#### Step 6

To change work history find the work history property in the resume class. Change the values to own information.
![](Documentation/images/img-w10.png)

#### Step 7

To change skills you have to find the skills property in the resume class. You can either add, remove or replace the information with your own. 
![](Documentation/images/img-w11.png)

#### Step 8

To change references you have to find the references property in the resume class. You can either add, remove or replace the information with your own.
![](Documentation/images/img-w13.png)

#### Step 9

To publish your changes to the Azure, go the Solution Explorer tab, right-click on the project and click publish on the context menu that pop-up.  
![](Documentation/images/img-w14.png)

#### Step 10

On the Publish Web window that pops up, click on the Publish button.
![](Documentation/images/img-w15.png)

#### Step 11

A success message with your website URL will show up on the output window when the publish is done.
![](Documentation/images/img-w16.png)

### Changing the colours

#### Step 1

Open the styles folder and click the site.less file to open it.
![](Documentation/images/img-w33.png)

#### Step 2

In Less you can save colours as variables by using `@variableName: value;` syntax. So to add you own colours to the project create your own Less veriables with hexadecimal colour values.
![](Documentation/images/img-w30.png)

#### Step 3

Assign the colour you created above to an element, choose the element you want to assign the colour to e.g background-color of the body. 
![](Documentation/images/img-w29.png)

#### Installing Web Compiler

##### Step 1

Click on Tools →  Extensions and Updates
![](Documentation/images/img-w22.png)


##### Step 2

On the Extensions and Updates window click on Online
![](Documentation/images/img-w23.png) 

##### Step 3

Search for Web Compiler and click on the Download button when it appears
![](Documentation/images/img-w24.png)

##### Step 4

Wait for the download to finish, click the Install button to install.  
![](Documentation/images/img-w25.png)
![](Documentation/images/img-w26.png)

##### Step 5

Restart Visual Studio by clicking the Restart Now button.
![](Documentation/images/img-w27.png)

##### Step 6 

Open the styles folder, right-click on the site.less file. Hover over Web Compiler and click on Re-compile file.
![](Documentation/images/img-w32.png)

##### Step 7

To publish your changes to the Azure, go the Solution Explorer tab, right-click on the project and click publish on the context menu that pops up.  
![](Documentation/images/img-w14.png)

##### Step 8

On the Publish Web window that pop-up, click on the Publish button.
![](Documentation/images/img-w15.png)

##### Step 9

A success message with your website URL will show up on the output window when the publish is done.
![](Documentation/images/img-w16.png)

### Troubleshooting

After your first publish you notice that angularjs and bootstrap breaks, to fix this problem replace the bootstrap and angularjs reference with their CDN links. 
![](Documentation/images/img-w35.png)
![](Documentation/images/img-w36.png)

# Links

## Components &amp; Tools
- [Angular](https://angularjs.org)
- [Bootstrap](http://getbootstrap.com)
- [LESS](http://lesscss.org)
- [TypeScript](http://www.typescriptlang.org)
- [Visual Studio](https://www.visualstudio.com)
- [Azure](https://azure.microsoft.com)
- [Web Compiler](https://github.com/madskristensen/WebCompiler)