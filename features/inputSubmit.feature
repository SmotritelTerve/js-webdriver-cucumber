Feature: Input field and Submit button

Scenario: Verify Input and Submit page
  Given the UI Playground blog open
  When I click Elements link in main menu
      And I click Input field and Button link on Elements page
      And I enter <name> in name input field
      And I click submit button
    Then the text in the text area should be equal <text>
    Examples:
      | name   | text                |
      | "Alex" | "Your name is Alex" |