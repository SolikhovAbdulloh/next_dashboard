"use client";
import React from "react";

const ErrorPage = ({ error }) => {
  return <div>{error.message}</div>;
};

export default ErrorPage;
