import React from "react";
import { ReactSessionTimeoutAlert } from "../dist/index.esm.js";

export default {
  component: ReactSessionTimeoutAlert,
  title: "Session Timeout Alert"
};

export const Placeholder = () => <ReactSessionTimeoutAlert idleTime={0.1} />;
