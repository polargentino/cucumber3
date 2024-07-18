Feature: Add two numbers

Scenario: Add two numbers
  Given I have numbers 5 and 3
  When I add the numbers
  Then the result should be 8
