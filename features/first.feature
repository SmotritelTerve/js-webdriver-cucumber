Feature: Automation Playground blog
As a test automation enthusiast
I want to write test for Automation Playground blog
So that I can practice Cucumber

Scenario: Verify the blog's title
  Given the Automation Playground blog open
    Then the Automation Playground blog title should be equal <title>
     Examples:
            |title                   |
            |"Automation Playground" |