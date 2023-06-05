import { BreakLength } from "./BreakLength";
import { SessionLength } from "./SessionLength";

export const TimeLength = () => {
  return (
    <div className="TimeLength_container">
      <BreakLength />
      <SessionLength />
    </div>
  );
};
