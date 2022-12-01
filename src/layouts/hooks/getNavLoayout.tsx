import React from "react";
import NavLayout from "../NavLayout";

export default function getNavLayout(page: React.ReactElement): React.ReactNode {
  return (
    <NavLayout>
      {page}
    </NavLayout>
  )
}
