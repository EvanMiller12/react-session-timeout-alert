# React Session Timeout Alert

[![NPM version](https://img.shields.io/npm/v/react-session-timeout-alert.svg?style=flat)](https://npmjs.com/package/react-session-timeout-alert)
![npm downloads](https://img.shields.io/npm/dt/react-session-timeout-alert?style=flat-square)
![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)

A Session Timeout Alert component to display after a set idle time for a user.
The primary purpose for the alert is to logout a authenticated user after a set time of no interaction with the UI.

## Install

`npm install react-session-timeout-alert`

## Available Props

| Name                 | Type     | Default                                                                   | Description                                                                                       |
| -------------------- | -------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| idleTime             | Number   | 5                                                                         | Number of minutes before displaying alert modal                                                   |  |
| modalTimeout         | Number   | 20                                                                        | Number of seconds for countdown before hiding alert modal and calling handleSessionTimeout method |
| alertActionsClass    | String   | rst-alert-actions                                                         | Class for Alert Modal actions                                                                     |
| alertContainerClass  | String   | rst-alert                                                                 | Class for Alert Modal container                                                                   |
| alertContentClass    | String   | rst-alert-content                                                         | Class for Alert Modal content                                                                     |
| alertTimerClass      | String   | rst-alert-timer                                                           | Class for Alert Modal timer                                                                       |
| alertTitle           | String   | null                                                                      | Title for Alert Modal                                                                             |
| alertDescription     | String   | null                                                                      | Description for Alert Modal                                                                       |
| confirmBtn           | Object   | {class: "rst-btn rst-btn-primary", text: "Logout", type: "submit"}        | Title and Text for Alert submit button                                                            |
| cancelBtn            | Object   | {class: "rst-btn rst-btn-danger", text: "Stay Logged In", type: "button"} | Title and Text for Alert cancel button                                                            |
| handleSessionTimeout | Function | () => alert("logging out")                                                | Function to call on Alert submit button click and alert timer end                                 |

## Basic Usage

```react
import { ReactSessionTimeoutAlert } from 'react-session-timeout-alert';

<ReactSessionTimeoutAlert
  idleTime={5}
  modalTimeout={20}
  alertTitle={"Idle Timeout Warning"}
  alertDescription={"You are about to be logged out due to inactivity"}
  cancelBtn={{
    text: "Cancel",
    class: "rst-btn rst-btn-danger"
  }}
  handleSessionTimeout = {() => alert("logging out")}
/>
```

## Story Book
`git clone git@github.com:EvanMiller12/react-session-timeout-alert.git`

`cd react-session-timeout-alert`

make sure to use Node v20

`npm install`

`npm run storybook`


## Simple Example

`git clone git@github.com:EvanMiller12/react-session-timeout-alert.git`

`cd react-session-timeout-alert/example`

make sure to use Node >= 14

`npm install`

`npm run start`

### License

MIT license, Copyright (c) 2024 Evan Miller. For more information see `LICENSE`.
