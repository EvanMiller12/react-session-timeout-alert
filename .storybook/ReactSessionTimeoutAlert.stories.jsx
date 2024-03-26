import React from "react";
import { ReactSessionTimeoutAlert } from "../src/index.jsx";

export default {
  component: ReactSessionTimeoutAlert,
  title: "Session Timeout Alert"
};

export const Placeholder = () => <ReactSessionTimeoutAlert idleTime={0.1} />;
