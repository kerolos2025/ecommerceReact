import React from "react";
import { useLocation } from "react-router-dom";

export default function Cart() {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const name = query.get("name");
  return (
    <div>
      Item<b> {name}</b>
    </div>
  );
}
