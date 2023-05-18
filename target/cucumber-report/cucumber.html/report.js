$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("ComputerMenu.feature");
formatter.feature({
  "line": 1,
  "name": "Computer menu Test",
  "description": "",
  "id": "computer-menu-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 10000081300,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "User should see products are arrange in Alphabatical order",
  "description": "",
  "id": "computer-menu-test;user-should-see-products-are-arrange-in-alphabatical-order",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@sanity"
    },
    {
      "line": 3,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on Computer Tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click on Desktop menu",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I select Sort By position Name: Z to A",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I should verify the Products are arrange in Descending order.",
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 231186500,
  "status": "passed"
});
formatter.match({
  "location": "ComputerMenuSteps.iClickOnComputerTab()"
});
formatter.result({
  "duration": 1250191899,
  "status": "passed"
});
formatter.match({
  "location": "ComputerMenuSteps.iClickOnDesktopMenu()"
});
formatter.result({
  "duration": 579135100,
  "status": "passed"
});
formatter.match({
  "location": "ComputerMenuSteps.iSelectSortByPositionNameZToA()"
});
formatter.result({
  "duration": 301182400,
  "status": "passed"
});
formatter.match({
  "location": "ComputerMenuSteps.iShouldVerifyTheProductsAreArrangeInDescendingOrder()"
});
formatter.result({
  "duration": 299667500,
  "status": "passed"
});
formatter.after({
  "duration": 1384831100,
  "status": "passed"
});
formatter.before({
  "duration": 6270194000,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "User should add product to shopping cart successfully",
  "description": "",
  "id": "computer-menu-test;user-should-add-product-to-shopping-cart-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@smoke"
    },
    {
      "line": 11,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I click on Computer Tab",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I click on Desktop menu",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I select Sort By position Name: A to Z",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on Add to Cart of Product Build your own computer",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I should see Build your own computer",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "I select processor 2.2 GHz Intel Pentium Dual-Core E2200",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I select ram 8GB [+$60.00]",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I select HDD 400 GB [+$100.00]",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I select OS Vista Premium [+$60.00]",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I click on Microsoft Office [+$50.00]\" and \"Total Commander [+$5.00] checkbox",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I should see Price $1,475.00",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I click on ADD TO CART Button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I should see The product has been added to your shopping cart",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "I click on cross button",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I mouse hover on shopping cart",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I click on GO TO CART",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I should see Shopping cart",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "I change Qty of product and update shopping cart",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I should see total price is $2,950.00",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "I click on check box of terms and condition",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I click on checkout button",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I should see Welcome, Please Sign In!",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "I click on CHECKOUT AS GUEST",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I fill all the mandatory details",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I click to Continue",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I select radio button of Next Day Air($0.00)",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I click on Continue Button",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I click on radio button Credit Card",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I click on Continues",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "I Select Master card From Select credit card dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I fill all the card details",
  "keyword": "Then "
});
formatter.step({
  "line": 45,
  "name": "I click on Continues",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "I should see Payment method is Credit card",
  "keyword": "Then "
});
formatter.step({
  "line": 47,
  "name": "I should seeShipping method is Next Day Air",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "I should see total price $2,950.00",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "I click on Confirm",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "I should see text Thank You",
  "keyword": "Then "
});
formatter.step({
  "line": 51,
  "name": "I should see Your order has been successfully processed!",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "I click on Continues button",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "I should see Welcome to our store",
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 45500,
  "status": "passed"
});
formatter.match({
  "location": "ComputerMenuSteps.iClickOnComputerTab()"
});
formatter.result({
  "duration": 773214500,
  "status": "passed"
});
formatter.match({
  "location": "ComputerMenuSteps.iClickOnDesktopMenu()"
});
formatter.result({
  "duration": 558688300,
  "status": "passed"
});
formatter.match({
  "location": "ComputerMenuSteps.iSelectSortByPositionNameAToZ()"
});
formatter.result({
  "duration": 201242800,
  "status": "passed"
});
formatter.match({
  "location": "ComputerMenuSteps.iClickOnAddToCartOfProductBuildYourOwnComputer()"
});
formatter.result({
  "duration": 2103407901,
  "status": "passed"
});
formatter.match({
  "location": "ComputerMenuSteps.iShouldSeeBuildYourOwnComputer()"
});
formatter.result({
  "duration": 1238194500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 19
    },
    {
      "val": "2",
      "offset": 21
    },
    {
      "val": "2200",
      "offset": 52
    }
  ],
  "location": "ComputerMenuSteps.iSelectProcessorGHzIntelPentiumDualCoreE(int,int,int)"
});
formatter.result({
  "duration": 181456400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8",
      "offset": 13
    },
    {
      "val": "60",
      "offset": 20
    },
    {
      "val": "00",
      "offset": 23
    }
  ],
  "location": "ComputerMenuSteps.iSelectRamGB$(int,int,int)"
});
formatter.result({
  "duration": 155826401,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 13
    },
    {
      "val": "100",
      "offset": 23
    },
    {
      "val": "00",
      "offset": 27
    }
  ],
  "location": "ComputerMenuSteps.iSelectHDDGB$(int,int,int)"
});
formatter.result({
  "duration": 120912201,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "60",
      "offset": 29
    },
    {
      "val": "00",
      "offset": 32
    }
  ],
  "location": "ComputerMenuSteps.iSelectOSVistaPremium$(int,int)"
});
formatter.result({
  "duration": 130684099,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 31
    },
    {
      "val": "00",
      "offset": 34
    },
    {
      "val": " and ",
      "offset": 38
    },
    {
      "val": "5",
      "offset": 63
    },
    {
      "val": "00",
      "offset": 65
    }
  ],
  "location": "ComputerMenuSteps.iClickOnMicrosoftOffice$TotalCommander$Checkbox(int,int,String,int,int)"
});
formatter.result({
  "duration": 122298101,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 20
    },
    {
      "val": "475",
      "offset": 22
    },
    {
      "val": "00",
      "offset": 26
    }
  ],
  "location": "ComputerMenuSteps.iShouldSeePrice$(int,int,int)"
});
formatter.result({
  "duration": 2077295199,
  "error_message": "java.lang.AssertionError: Not displayed expected [$1,470.00] but found [$1,475.00]\r\n\tat org.testng.Assert.fail(Assert.java:96)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:137)\r\n\tat org.testng.Assert.assertEquals(Assert.java:118)\r\n\tat org.testng.Assert.assertEquals(Assert.java:453)\r\n\tat com.nopcommerce.demo.steps.ComputerMenuSteps.iShouldSeePrice$(ComputerMenuSteps.java:88)\r\n\tat ✽.And I should see Price $1,475.00(ComputerMenu.feature:24)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "ComputerMenuSteps.iClickOnADDTOCARTButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ComputerMenuSteps.iShouldSeeTheProductHasBeenAddedToYourShoppingCart()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ComputerMenuSteps.iClickOnCrossButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ComputerMenuSteps.iMouseHoverOnShoppingCart()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ComputerMenuSteps.iClickOnGOTOCART()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ComputerMenuSteps.iShouldSeeShoppingCart()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ComputerMenuSteps.iChangeQtyOfProductAndUpdateShoppingCart()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 29
    },
    {
      "val": "950",
      "offset": 31
    },
    {
      "val": "00",
      "offset": 35
    }
  ],
  "location": "ComputerMenuSteps.iShouldSeeTotalPriceIs$(int,int,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ComputerMenuSteps.iClickOnCheckBoxOfTermsAndCondition()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ComputerMenuSteps.iClickOnCheckoutButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ComputerMenuSteps.iShouldSeeWelcomePleaseSignIn()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ComputerMenuSteps.iClickOnCHECKOUTASGUEST()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ComputerMenuSteps.iFillAllTheMandatoryDetails()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ComputerMenuSteps.iClickToContinue()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 39
    },
    {
      "val": "00",
      "offset": 41
    }
  ],
  "location": "ComputerMenuSteps.iSelectRadioButtonOfNextDayAir$(int,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ComputerMenuSteps.iClickOnContinueButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ComputerMenuSteps.iClickOnRadioButtonCreditCard()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ComputerMenuSteps.iClickOnContinues()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ComputerMenuSteps.iSelectMasterCardFromSelectCreditCardDropdown()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ComputerMenuSteps.iFillAllTheCardDetails()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ComputerMenuSteps.iClickOnContinues()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ComputerMenuSteps.iShouldSeePaymentMethodIsCreditCard()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ComputerMenuSteps.iShouldSeeShippingMethodIsNextDayAir()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 26
    },
    {
      "val": "950",
      "offset": 28
    },
    {
      "val": "00",
      "offset": 32
    }
  ],
  "location": "ComputerMenuSteps.iShouldSeeTotalPrice$(int,int,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ComputerMenuSteps.iClickOnConfirm()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ComputerMenuSteps.iShouldSeeTextThankYou()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ComputerMenuSteps.iShouldSeeYourOrderHasBeenSuccessfullyProcessed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ComputerMenuSteps.iClickOnContinuesButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ComputerMenuSteps.iShouldSeeWelcomeToOurStore()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1572240300,
  "status": "passed"
});
formatter.uri("Electronic.feature");
formatter.feature({
  "line": 1,
  "name": "Computer menu Test",
  "description": "",
  "id": "computer-menu-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 8281179800,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "User should navigate to Cell Phone page successfully",
  "description": "",
  "id": "computer-menu-test;user-should-navigate-to-cell-phone-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@sanity"
    },
    {
      "line": 3,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I mouse hover to Electronics Tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I mouse hover and click on Cell Phones tab",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I should navigate to Cell Phone page",
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 50900,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicMenuSteps.iMouseHoverToElectronicsTab()"
});
formatter.result({
  "duration": 677241700,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicMenuSteps.iMouseHoverAndClickOnCellPhonesTab()"
});
formatter.result({
  "duration": 1210177000,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicMenuSteps.iShouldNavigateToCellPhonePage()"
});
formatter.result({
  "duration": 73493500,
  "status": "passed"
});
formatter.after({
  "duration": 1404640400,
  "status": "passed"
});
formatter.before({
  "duration": 7154184900,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "User should add product to Cart and Place the Order Successfully",
  "description": "",
  "id": "computer-menu-test;user-should-add-product-to-cart-and-place-the-order-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@smoke"
    },
    {
      "line": 10,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I mouse hover to Electronics Tab",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I mouse hover and click on Cell Phones tab",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should navigate to Cell Phone page",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "I click on List view tab",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on Nokia Lumia 1020",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I should see Nokia Lumia 1020",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "I should see price $349.00",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I change the Qty to 2",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I click on Add to Cart",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I should see The product is added to your shopping cart",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "I click cross",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I mouse hover on Shopping cart and click on Go to Cart",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I should see text Shopping cart",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "I should see Qty is 2",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I should see price is $698.00",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I click on check box of terms and service",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I click on Checkout",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I should see Welcome Please Sign In!",
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 82799,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicMenuSteps.iMouseHoverToElectronicsTab()"
});
formatter.result({
  "duration": 263084500,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicMenuSteps.iMouseHoverAndClickOnCellPhonesTab()"
});
formatter.result({
  "duration": 1780533100,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicMenuSteps.iShouldNavigateToCellPhonePage()"
});
formatter.result({
  "duration": 81881300,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicMenuSteps.iClickOnListViewTab()"
});
formatter.result({
  "duration": 204187101,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1020",
      "offset": 23
    }
  ],
  "location": "ElectronicMenuSteps.iClickOnNokiaLumia(int)"
});
formatter.result({
  "duration": 25350395799,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1020",
      "offset": 25
    }
  ],
  "location": "ElectronicMenuSteps.iShouldSeeNokiaLumia(int)"
});
formatter.result({
  "duration": 20094265400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "349",
      "offset": 20
    },
    {
      "val": "00",
      "offset": 24
    }
  ],
  "location": "ElectronicMenuSteps.iShouldSeePrice$(int,int)"
});
formatter.result({
  "duration": 41628500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 20
    }
  ],
  "location": "ElectronicMenuSteps.iChangeTheQtyTo(int)"
});
formatter.result({
  "duration": 415239900,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicMenuSteps.iClickOnAddToCart()"
});
formatter.result({
  "duration": 116696700,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicMenuSteps.iShouldSeeTheProductIsAddedToYourShoppingCart()"
});
formatter.result({
  "duration": 320425599,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicMenuSteps.iClickCross()"
});
formatter.result({
  "duration": 281253199,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicMenuSteps.iMouseHoverOnShoppingCartAndClickOnGoToCart()"
});
formatter.result({
  "duration": 1501616300,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicMenuSteps.iShouldSeeTextShoppingCart()"
});
formatter.result({
  "duration": 41125000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 20
    }
  ],
  "location": "ElectronicMenuSteps.iShouldSeeQtyIs(int)"
});
formatter.result({
  "duration": 137158399,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "698",
      "offset": 23
    },
    {
      "val": "00",
      "offset": 27
    }
  ],
  "location": "ElectronicMenuSteps.iShouldSeePriceIs$(int,int)"
});
formatter.result({
  "duration": 48286100,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicMenuSteps.iClickOnCheckBoxOfTermsAndService()"
});
formatter.result({
  "duration": 219173300,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicMenuSteps.iClickOnCheckout()"
});
formatter.result({
  "duration": 976518100,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicMenuSteps.iShouldSeeWelcomePleaseSignIn()"
});
formatter.result({
  "duration": 62467100,
  "status": "passed"
});
formatter.after({
  "duration": 1449211901,
  "status": "passed"
});
formatter.uri("TopMenu.feature");
formatter.feature({
  "line": 1,
  "name": "Top Menu Test",
  "description": "As user I should navigate to selected menu page",
  "id": "top-menu-test",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "User should navigate to selected menu page",
  "description": "",
  "id": "top-menu-test;user-should-navigate-to-selected-menu-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@sanity"
    },
    {
      "line": 4,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on any menu from \"\u003cTopmenu tab\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I navigate to selected menu page \"\u003cNavigate Page\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "top-menu-test;user-should-navigate-to-selected-menu-page;",
  "rows": [
    {
      "cells": [
        "Topmenu tab",
        "Navigate Page"
      ],
      "line": 10,
      "id": "top-menu-test;user-should-navigate-to-selected-menu-page;;1"
    },
    {
      "cells": [
        "Computers",
        "Computers"
      ],
      "line": 11,
      "id": "top-menu-test;user-should-navigate-to-selected-menu-page;;2"
    },
    {
      "cells": [
        "Electronics",
        "Electronics"
      ],
      "line": 12,
      "id": "top-menu-test;user-should-navigate-to-selected-menu-page;;3"
    },
    {
      "cells": [
        "Apparel",
        "Apparel"
      ],
      "line": 13,
      "id": "top-menu-test;user-should-navigate-to-selected-menu-page;;4"
    },
    {
      "cells": [
        "Digital downloads",
        "Digital downloads"
      ],
      "line": 14,
      "id": "top-menu-test;user-should-navigate-to-selected-menu-page;;5"
    },
    {
      "cells": [
        "Books",
        "Books"
      ],
      "line": 15,
      "id": "top-menu-test;user-should-navigate-to-selected-menu-page;;6"
    },
    {
      "cells": [
        "Jewelry",
        "Jewelry"
      ],
      "line": 16,
      "id": "top-menu-test;user-should-navigate-to-selected-menu-page;;7"
    },
    {
      "cells": [
        "Gift Cards",
        "Gift Cards"
      ],
      "line": 17,
      "id": "top-menu-test;user-should-navigate-to-selected-menu-page;;8"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5941687000,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "User should navigate to selected menu page",
  "description": "",
  "id": "top-menu-test;user-should-navigate-to-selected-menu-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@regression"
    },
    {
      "line": 4,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on any menu from \"Computers\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I navigate to selected menu page \"Computers\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 31801,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Computers",
      "offset": 26
    }
  ],
  "location": "TopMenuSteps.iClickOnAnyMenuFrom(String)"
});
formatter.result({
  "duration": 717068300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Computers",
      "offset": 34
    }
  ],
  "location": "TopMenuSteps.iNavigateToSelectedMenuPage(String)"
});
formatter.result({
  "duration": 44909000,
  "status": "passed"
});
formatter.after({
  "duration": 981773599,
  "status": "passed"
});
formatter.before({
  "duration": 5471650300,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "User should navigate to selected menu page",
  "description": "",
  "id": "top-menu-test;user-should-navigate-to-selected-menu-page;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@regression"
    },
    {
      "line": 4,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on any menu from \"Electronics\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I navigate to selected menu page \"Electronics\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 46000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Electronics",
      "offset": 26
    }
  ],
  "location": "TopMenuSteps.iClickOnAnyMenuFrom(String)"
});
formatter.result({
  "duration": 1746297301,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Electronics",
      "offset": 34
    }
  ],
  "location": "TopMenuSteps.iNavigateToSelectedMenuPage(String)"
});
formatter.result({
  "duration": 40540999,
  "status": "passed"
});
formatter.after({
  "duration": 1125638401,
  "status": "passed"
});
formatter.before({
  "duration": 5978269300,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "User should navigate to selected menu page",
  "description": "",
  "id": "top-menu-test;user-should-navigate-to-selected-menu-page;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@regression"
    },
    {
      "line": 4,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on any menu from \"Apparel\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I navigate to selected menu page \"Apparel\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 39800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Apparel",
      "offset": 26
    }
  ],
  "location": "TopMenuSteps.iClickOnAnyMenuFrom(String)"
});
formatter.result({
  "duration": 1268899401,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Apparel",
      "offset": 34
    }
  ],
  "location": "TopMenuSteps.iNavigateToSelectedMenuPage(String)"
});
formatter.result({
  "duration": 38663901,
  "status": "passed"
});
formatter.after({
  "duration": 999450600,
  "status": "passed"
});
formatter.before({
  "duration": 6660677100,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "User should navigate to selected menu page",
  "description": "",
  "id": "top-menu-test;user-should-navigate-to-selected-menu-page;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@regression"
    },
    {
      "line": 4,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on any menu from \"Digital downloads\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I navigate to selected menu page \"Digital downloads\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 44600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Digital downloads",
      "offset": 26
    }
  ],
  "location": "TopMenuSteps.iClickOnAnyMenuFrom(String)"
});
formatter.result({
  "duration": 816836501,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Digital downloads",
      "offset": 34
    }
  ],
  "location": "TopMenuSteps.iNavigateToSelectedMenuPage(String)"
});
formatter.result({
  "duration": 44470001,
  "status": "passed"
});
formatter.after({
  "duration": 1239182401,
  "status": "passed"
});
formatter.before({
  "duration": 4902470501,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "User should navigate to selected menu page",
  "description": "",
  "id": "top-menu-test;user-should-navigate-to-selected-menu-page;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@regression"
    },
    {
      "line": 4,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on any menu from \"Books\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I navigate to selected menu page \"Books\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 42900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Books",
      "offset": 26
    }
  ],
  "location": "TopMenuSteps.iClickOnAnyMenuFrom(String)"
});
formatter.result({
  "duration": 862438801,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Books",
      "offset": 34
    }
  ],
  "location": "TopMenuSteps.iNavigateToSelectedMenuPage(String)"
});
formatter.result({
  "duration": 44702600,
  "status": "passed"
});
formatter.after({
  "duration": 869807400,
  "status": "passed"
});
formatter.before({
  "duration": 5229217901,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "User should navigate to selected menu page",
  "description": "",
  "id": "top-menu-test;user-should-navigate-to-selected-menu-page;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@regression"
    },
    {
      "line": 4,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on any menu from \"Jewelry\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I navigate to selected menu page \"Jewelry\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 46400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jewelry",
      "offset": 26
    }
  ],
  "location": "TopMenuSteps.iClickOnAnyMenuFrom(String)"
});
formatter.result({
  "duration": 950324100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jewelry",
      "offset": 34
    }
  ],
  "location": "TopMenuSteps.iNavigateToSelectedMenuPage(String)"
});
formatter.result({
  "duration": 41771600,
  "status": "passed"
});
formatter.after({
  "duration": 794716301,
  "status": "passed"
});
formatter.before({
  "duration": 6356405300,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "User should navigate to selected menu page",
  "description": "",
  "id": "top-menu-test;user-should-navigate-to-selected-menu-page;;8",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@regression"
    },
    {
      "line": 4,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on any menu from \"Gift Cards\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I navigate to selected menu page \"Gift Cards\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 35800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Gift Cards",
      "offset": 26
    }
  ],
  "location": "TopMenuSteps.iClickOnAnyMenuFrom(String)"
});
formatter.result({
  "duration": 1002409701,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Gift Cards",
      "offset": 34
    }
  ],
  "location": "TopMenuSteps.iNavigateToSelectedMenuPage(String)"
});
formatter.result({
  "duration": 41527599,
  "status": "passed"
});
formatter.after({
  "duration": 870490200,
  "status": "passed"
});
});