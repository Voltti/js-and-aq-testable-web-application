*** Settings ***
Documentation     This is a simple example test for login to test application with SeleniumLibrary
Library           SeleniumLibrary    run_on_failure=Capture Page Screenshot
Test Setup        Login Setup
Test Teardown     Close Browser

*** Variables ***
${BROWSER}       firefox
${APP_ADRESS}    http://localhost:3000/
${USERNAME}      Username
${PASSWORD}      password
${MOVIENAME}      Sinister
${MOVIEDESCRIPTION}      A controversial true crime writer finds a box of super 8 home movies in his new home, revealing that the murder case he is currently researching could be the work of an unknown serial killer whose legacy dates back to the 1960s.

*** Test Cases ***
Login to My Movies Application
    Input Text      //input[@id='username']     ${USERNAME}
    Input Text      //input[@id='password']     ${PASSWORD}
    Click Element   //button[@type='submit']

    Wait Until Element Is Visible    //button[contains(text(),'Log Out')]    2s
    ...    Logout Button was not found on page
    Page Should Contain Element       //h3[contains(text(),'My Movies')]    Title My Movies was not found on page
Dialog box opens
    Click Element   //button[@id='addMovie']
    Wait Until Element Is Visible    //div[contains(text(),'Add movie')]    2s
    ...    Add movie dialog box was not found on page
Movie is submitted through form
    Input Text      //input[@id='movieName']     ${MOVIENAME}
    Input Text      //input[@id='movieDescription']     ${MOVIEDESCRIPTION}
    Click Element   //button[@type='submit']
    Wait Until Element Is Visible    //div[contains(text(),${MOVIENAME})]    2s
    ...    Movie name was not found on page
    Wait Until Element Is Visible    //div[contains(text(),${MOVIEDESCRIPTION})]    2s
    ...    Movie description was not found on page

*** Keywords ***
Login Setup
    Open Browser     ${APP_ADRESS}       ${BROWSER}
    Set Selenium Speed          1
    Maximize Browser Window
    Capture Page Screenshot
    Page Should Contain Element  //h4[contains(text(),'Login Page')]     Login Page text was not visible on page
