Feature: Verify the blog's title - smoke test
As a test automation enthusiast
I want to write test for UI Playground blog
So that I can practice Cucumber

@smoke
Scenario: Verify the blog's title
  Given the UI Playground blog open
    Then the UI Playground blog title should be equal <title>
     Examples:
            |title                   |
            |"Automation Playground" |