# React Session Timeout Alert

A Session Timeout Alert component to display after a set idle time for a user.
The primary purpose for the alert is to logout a authenticated user after a set amount of no interaction with the UI.

## Install

`npm install react-session-timeout-alert`

## Available Props

| Name                 | Type     | Default                                                   | Description                                                                                       |
| -------------------- | -------- | --------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| idleTime             | Number   | 5                                                         | Number of minutes before displaying alert modal                                                   |  |
| modalTimeout         | Number   | 20                                                        | Number of seconds for countdown before hiding alert modal and calling handleSessionTimeout method |
| alertActionsClass    | String   | rst-alert-actions                                         | Class for Alert Modal actions                                                                     |
| alertContainerClass  | String   | rst-alert                                                 | Class for Alert Modal container                                                                   |
| alertContentClass    | String   | rst-alert-content                                         | Class for Alert Modal content                                                                     |
| alertTimerClass      | String   | rst-alert-timer                                           | Class for Alert Modal timer                                                                       |
| alertTitle           | String   | null                                                      | Title for Alert Modal                                                                             |
| alertDescription     | String   | null                                                      | Description for Alert Modal                                                                       |
| confirmBtn           | Object   | {text: "Logout", class: "rst-btn rst-btn-primary"}        | Title and Text for Alert submit button                                                            |
| cancelBtn            | Object   | {text: "Stay Logged In", class: "rst-btn rst-btn-danger"} | Title and Text for Alert cancel button                                                            |
| handleSessionTimeout | Function | () => alert("logging out")                                | Function to call on Alert submit button click or alert timer end                                  |

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

### License

MIT license, Copyright (c) 2024 Evan Miller. For more information see `LICENSE`.
