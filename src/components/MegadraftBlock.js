/*
 * Copyright (c) 2019, Globo.com (https://github.com/globocom)
 *
 * License: MIT
 */

import React from "react";

const Block = ({ wrapper, children, data }) => {
  return (
    <div className="megadraft-block has-options">
      <div className="main">
        {wrapper ? React.cloneElement(wrapper, [], children) : children}
      </div>
      <div className="option">
        {data.extraSidebarActionFn ? data.extraSidebarActionFn(data) : null}
      </div>
    </div>
  );
};

export default Block;
