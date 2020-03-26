$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/resources/feature/testcase.feature");
formatter.feature({
  "line": 2,
  "name": "jpet website",
  "description": "",
  "id": "jpet-website",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@JPET_feature"
    }
  ]
});
formatter.scenario({
  "line": 4,
  "name": "To check the Application is seraching for product",
  "description": "",
  "id": "jpet-website;to-check-the-application-is-seraching-for-product",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@tc01_search"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": ":open the jpet website",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": ":enter the item name",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": ":Click on search bar",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": ":close the website",
  "keyword": "And "
});
formatter.match({
  "location": "validsearch_steps.open_the_jpet_website()"
});
formatter.result({
  "duration": 8545669400,
  "status": "passed"
});
formatter.match({
  "location": "validsearch_steps.enter_the_item_name()"
});
formatter.result({
  "duration": 190934100,
  "status": "passed"
});
formatter.match({
  "location": "validsearch_steps.click_on_search_bar()"
});
formatter.result({
  "duration": 5192080000,
  "status": "passed"
});
formatter.match({
  "location": "validsearch_steps.close_the_website()"
});
formatter.result({
  "duration": 745401600,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "To check the application is  Seraching for product",
  "description": "",
  "id": "jpet-website;to-check-the-application-is--seraching-for-product",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@tc02_invalidsearch"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": ":Open the jpet website",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": ":Enter the item name",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": ":click on search bar",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": ":Close the website",
  "keyword": "And "
});
formatter.match({
  "location": "invalidsearch_steps.open_the_jpet_website()"
});
formatter.result({
  "duration": 5297621100,
  "status": "passed"
});
formatter.match({
  "location": "invalidsearch_steps.enter_the_item_name()"
});
formatter.result({
  "duration": 172265500,
  "status": "passed"
});
formatter.match({
  "location": "invalidsearch_steps.click_on_search_bar()"
});
formatter.result({
  "duration": 1051912200,
  "status": "passed"
});
formatter.match({
  "location": "invalidsearch_steps.close_the_website()"
});
formatter.result({
  "duration": 1120127400,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "To Check that application is Seraching for product",
  "description": "",
  "id": "jpet-website;to-check-that-application-is-seraching-for-product",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 17,
      "name": "@tc03_searchbyhint"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": ":Open the Jpet website",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": ":Enter the Item name with hint",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": ":click on Search bar",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": ":Close the Website",
  "keyword": "And "
});
formatter.match({
  "location": "searchbyhint_steps.open_the_Jpet_website()"
});
formatter.result({
  "duration": 6606588500,
  "status": "passed"
});
formatter.match({
  "location": "searchbyhint_steps.enter_the_Item_name_with_hint()"
});
formatter.result({
  "duration": 186576400,
  "status": "passed"
});
formatter.match({
  "location": "searchbyhint_steps.click_on_Search_bar()"
});
formatter.result({
  "duration": 895740900,
  "status": "passed"
});
formatter.match({
  "location": "searchbyhint_steps.close_the_Website()"
});
formatter.result({
  "duration": 726157100,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "to check the application is Seraching for the Product",
  "description": "",
  "id": "jpet-website;to-check-the-application-is-seraching-for-the-product",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 24,
      "name": "@tc04_searchbyproductid"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": ":Open the JPET Website",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": ":click on product",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": ":click on Searchbar",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": ":Close The jpetWebsite",
  "keyword": "And "
});
formatter.match({
  "location": "searchproductId_steps.open_the_JPET_Website()"
});
formatter.result({
  "duration": 5911352800,
  "status": "passed"
});
formatter.match({
  "location": "searchproductId_steps.click_on_product()"
});
formatter.result({
  "duration": 201679600,
  "status": "passed"
});
formatter.match({
  "location": "searchproductId_steps.click_on_Searchbar()"
});
formatter.result({
  "duration": 982556200,
  "status": "passed"
});
formatter.match({
  "location": "searchproductId_steps.close_The_jpetWebsite()"
});
formatter.result({
  "duration": 727830000,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "to check if the application is Prints the details in a table",
  "description": "",
  "id": "jpet-website;to-check-if-the-application-is-prints-the-details-in-a-table",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 31,
      "name": "@tc05_printtable"
    }
  ]
});
formatter.step({
  "line": 33,
  "name": "the details of an animal in the homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 34,
  "name": "the details are matched",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "the selected animals details are printed",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "details are printed in a table",
  "keyword": "And "
});
formatter.match({
  "location": "Webtable_steps.the_details_of_an_animal_in_the_homepage()"
});
formatter.result({
  "duration": 8521590800,
  "status": "passed"
});
formatter.match({
  "location": "Webtable_steps.the_details_are_matched()"
});
formatter.result({
  "duration": 1116335000,
  "status": "passed"
});
formatter.match({
  "location": "Webtable_steps.the_selected_animals_details_are_printed()"
});
formatter.result({
  "duration": 82400,
  "status": "passed"
});
formatter.match({
  "location": "Webtable_steps.details_are_printed_in_a_table()"
});
formatter.result({
  "duration": 147529100,
  "status": "passed"
});
});