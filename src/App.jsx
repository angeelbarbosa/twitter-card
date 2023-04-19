import React from "react";
import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard.jsx";

export function App() {
  return (
    <>
      <section className="App">
        <TwitterFollowCard
          userName="realmadrid"
          initialIsFollowing={true}
          name="Real Madrid C.F"
        />
        <TwitterFollowCard userName="Benzema" name="Karim Benzema" />
        <TwitterFollowCard userName="lukamodric10" name="Luka Modrić" />
        <TwitterFollowCard userName="vinijr" name="Vini Jr." />
      </section>
    </>
  );
}
