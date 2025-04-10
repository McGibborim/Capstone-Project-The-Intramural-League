import React from 'react'
import Header from '../components/Header'
import SectionCard from '../components/SectionCard'
import GameList from '../components/GameList'
import TeamList from '../components/TeamList'
import LeagueList from '../components/LeagueList'
import NewsFeed from '../components/NewsFeed'

export default function UserHomePage() {
  // dummy data; swap in real API calls or context
  const upcomingGames = []
  const myTeams = []
  const upcomingLeagues = []
  const newsUpdates = []

  return (
    <div className="min-h-screen bg-maroon">
      <Header />
      <main className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left sidebar */}
        <aside className="space-y-6">
          <SectionCard title="Upcoming Games">
            <GameList games={upcomingGames} />
          </SectionCard>
          <SectionCard title="My Teams">
            <TeamList teams={myTeams} />
          </SectionCard>
          <SectionCard title="Upcoming Leagues">
            <LeagueList leagues={upcomingLeagues} />
          </SectionCard>
        </aside>

        {/* Right: News wrapped in SectionCard */}
        <div className="md:col-span-2 space-y-6">
          <SectionCard title="League Updates">
            <NewsFeed updates={newsUpdates} />
        </SectionCard>
        </div>
      </main>
    </div>
  )
}
