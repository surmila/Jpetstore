package com.stepdefination;

import com.pages.searchby_productid;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class searchproductId_steps {
	searchby_productid jpp=new searchby_productid();
	@Given("^:Open the JPET Website$")
	public void open_the_JPET_Website()  {
		//* calling the method using object *//
	    jpp.url("chrome");
	}

	@When("^:click on product$")
	public void click_on_product()  {
		//* calling the method using object *//
		jpp.JpetSearch();
	   
	}

	@Then("^:click on Searchbar$")
	public void click_on_Searchbar()  {
		//* calling the method using object *//
		jpp.click();
	    
	}

	@Then("^:Close The jpetWebsite$")
	public void close_The_jpetWebsite()  {
		//* calling the method using object *//
		System.out.println("we cant get the item directly with productid");
		jpp.close();
	   
	}




}
