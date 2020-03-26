@JPET_feature
Feature: jpet website
@tc01_search
Scenario: To check the Application is seraching for product
Given :open the jpet website
When :enter the item name
Then :Click on search bar
And :close the website

@tc02_invalidsearch
Scenario: To check the application is  Seraching for product
Given :Open the jpet website
When :Enter the item name
Then :click on search bar
And :Close the website

@tc03_searchbyhint
Scenario: To Check that application is Seraching for product
Given :Open the Jpet website
When :Enter the Item name with hint
Then :click on Search bar
And :Close the Website

@tc04_searchbyproductid
Scenario: to check the application is Seraching for the Product
Given :Open the JPET Website
When :click on product
Then :click on Searchbar
And :Close The jpetWebsite

@tc05_printtable
Scenario: to check if the application is Prints the details in a table
 Given the details of an animal in the homepage
 When the details are matched
 Then the selected animals details are printed
 And details are printed in a table








