import React from "react";
import EntriesList from "../reusable/EntriesList";

export default function OverLimitEntries({ navigation }) {
  return <EntriesList navigation={navigation} filterCondition="overlimit" />;
}
