import type { Metadata } from "next";
import { MovesDemoConsole } from "./moves-demo-console";

export const metadata: Metadata = {
  title: "Moves Interactive Demo",
  description:
    "Standalone interactive demo hub for Moves, including tutorial, user view, and feedback links.",
};

export default function MovesInteractivePage() {
  return <MovesDemoConsole />;
}
