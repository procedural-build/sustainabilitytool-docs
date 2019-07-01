# Sustainability Tool Docs
Documentation for Sustainability Tool

# How Does the Docs Work?
We use [Cuttlebelle](https://cuttlebelle.com) to generate the docs page
It is a static site generator, which reads Markdown files and turns them into HTML pages

# What is Markdown?
[Primer on Markdown](https://cuttlebelle.com/documentation/content/#primer-on-markdown)
There is a [template page](https://github.com/procedural-build/sustainabilitytool-docs/blob/master/content/blankPageTemplate/template.md), where you can see how markdown works.

# Where Do I Find The Existing Documentation?

Go to content -> index. There you will find all the existing pages. All the text for the pages ends with ".md" (for markdown)
Everything else should not be touched unless you know what you are doing.

# How Do I Add a New Documentation Page?

Go to *content*

Adding a new page to the documentation is not completely streight forward, but needs:
* New folder
* index.yml
* body.md

See what is needed (and why) at https://cuttlebelle.com/documentation/#create-a-new-page

### To add a new file on Github:

In the top there is a button called "Create new file" click that and you will be taken to a blank page. In the top there is
a field you need to fill in with the file name. **Remember to end the file name with ".md" or ".yml" if you are making the "index.yml" file**
![alt](/assets/images/newFile.png)

When you are done editing and wants to save; scroll down, add a comment about what you changed and click "Commit Changes".
![alt](/assets/images/commitChanges.png) 



# How Do I Contribute To an Existing Page?

Click on the page you want to edit. You will be taken to a page displaying the content of that page. 
Click on the pencil in the top right corner.

When you are done editing and wants to save; scroll down, add a comment about what you changed and click "Commit Changes".
![alt](/assets/images/commitChanges.png) 

# What Happens When I'm Done Editing?

When you have made an edit on Github, Jenkins (our website builder) is notified. He takes care of everything and 
publishes the new edits to https://docs.sustainabilitytool.com 