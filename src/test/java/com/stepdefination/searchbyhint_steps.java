package com.stepdefination;

import com.pages.Searchby_hintpage;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class searchbyhint_steps {
	//* object creation for page*//
	Searchby_hintpage jph= new Searchby_hintpage();

	
	//* steps generated by testcase.feature *//
	@Given("^:Open the Jpet website$")
	public void open_the_Jpet_website()  {
		//* calling method using object*//
		jph.url("chrome");
	}
	
	@When("^:Enter the Item name with hint$")
	public void enter_the_Item_name_with_hint()  {
		//* calling the method using object *//
		jph.JpetSearch();
	}
	    
	@Then("^:click on Search bar$")
	public void click_on_Search_bar()  {
		//* calling the method using object *//
		jph.click();
	}
	@Then("^:Close the Website$")
	public void close_the_Website()  {
		//* calling the method using object *//
		jph.close();
	}
}





