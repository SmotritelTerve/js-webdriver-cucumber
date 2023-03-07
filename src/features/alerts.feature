Feature: Alerts page
@wip
Scenario: Verify Alerts page
  Given the UI Playground blog open
  When I click Elements link in main menu
      And I click Alerts link on Elements page
    Then I see 4 boxes in the page
