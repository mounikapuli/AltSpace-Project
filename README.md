# AltSpace-Project

The entire interface has been developed in angularjs and used bootstrap for styling.

The Views page consist of the code related to Dashboard, Edit and Create Pages.
The behavior to the $scope object is added by controllers.
The Styles consists of the boostrap.min.js used for this project.
The Data.js file provided in the lib/data/ folder implements a Promise-based data store which stores and retrieves simple JavaScript objects representing Users and Spaces.

This interface helps in creating spaces.
It has 3 pages. The dashboard Page, Edit Page and Create Page.
The The Dashboard page lists the existing spaces, displaying their details.
Each space can be edited by clicking on 'edit' button on any of the spaces in the list.
The Edit form allows the user to edit all of the fields associated with a space.
The editor fields have following input types. 
-Title and Description Text Boxes
-Boolean values for checkboxes 
-existing users in the data store can be selected in the list of members in a space.
User can create and delete spaces by clicking on 'Create' and 'Edit' buttons on the dashboard page.
The Create form allows the user to create a space.
The create page have following input types. 
-Title and Description Text Boxes
-Boolean values for checkboxes 
-existing users in the data store can be selected in the list of members in a space.
The changes made to spaces are saved to the data store through the provided API.
