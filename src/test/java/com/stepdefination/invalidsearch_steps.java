package com.stepdefination;


import com.pages.invalidsearch_page;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

	
public class invalidsearch_steps {
	//* object creation for page*//
	invalidsearch_page jpin=new invalidsearch_page();

//* steps generated by testcase.feature *//
	@Given("^:Open the jpet website$")
	public void open_the_jpet_website() {
		//* calling url method using object*//
		jpin.url("chrome");
		
	    
	}

	@When("^:Enter the item name$")
	public void enter_the_item_name()  {
		//* calling the search method using object*//
		jpin.JpetSearch();
	    
	}

	@Then("^:click on search bar$")
	public void click_on_search_bar() {
		//* calling the method using object *//
		jpin.click();
	}

	@Then("^:Close the website$")
	public void close_the_website() {
		//*callimg the method using object *//
		System.out.println("There is no such item");
		jpin.close();
		
	   
	}

}


