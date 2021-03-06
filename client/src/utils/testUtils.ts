import React from "react";

export function findByTestAttribute(wrapper: any, dataTestAttribute: string) {
  return wrapper.find(`[data-test='${dataTestAttribute}']`);
}
