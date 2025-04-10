import React from 'react'
import Header from '../components/Header'
import SectionCard from '../components/SectionCard'
import GameList from '../components/GameList'
import TeamList from '../components/TeamList'
import LeagueList from '../components/LeagueList'
import NewsFeed from '../components/NewsFeed'

export default function UserHomePage() {
  // dummy data; swap in real API calls or context
  const upcomingGames = [
    { id:1, logo:'/logos/wolves.png', team:'Timber Wolves', date:'March 24, 8:00 P.M.' },
    { id:2, logo:'/logos/wolves.png', team:'Timber Wolves', date:'March 26, 7:00 P.M.' },
  ]
  const myTeams = [
    { id:1, logo:'/logos/wolves.png', name:'Timber Wolves', league:'Co‑Rec Softball' },
    { id:2, logo:'/logos/bears.png', name:'Iron Bears', league:"Men's Basketball" },
  ]
  const upcomingLeagues = [
    { id:1, logo:'/logos/volleyball.png', name:'Co‑Rec Volleyball', link:'#', registration:'March 28 – April 2' },
    { id:2, logo:'/logos/flag.png', name:"Men's Flag Football", link:'#', registration:'October 20 – October 28' },
    { id:3, logo:'/logos/flag.png', name:"Women's Flag Football", link:'#', registration:'October 20 – October 28' },
  ]
  const newsUpdates = [
    {
      id:1,
      icon:'/icons/league.png',
      title:'League Update: New Season, New Challenges!',
      content:`Hello League Members,\n\nWe're excited to announce some major updates as we kick off the new season of College League!`,
      bullets:[
        'Revamped Scheduling: Our upgraded match calendar now syncs with your devices, ensuring you never miss a game. Expect streamlined notifications and personalized match reminders.',
        'Enhanced Rankings: We’ve introduced a new algorithm that better reflects team performance and individual contributions. Keep an eye on the leaderboard for real‑time updates.',
        'Community Engagement: We’re rolling out interactive forums and live Q&A sessions with league officials. Your feedback is key in shaping a competitive and inclusive environment.',
      ],
      author:'League Administration',
    },
    {
      id:2,
      icon:'/icons/league.png',
      title:'League Update: Season Wrap‑Up',
      content:`Greetings League Members,\n\nWe're proud to share a quick recap of our last season. Your incredible teamwork and competitive spirit made it an unforgettable run! Key highlights included:`,
      bullets:[
        'Thrilling Matches: Intense contests and nail‑biting finishes that kept us all on the edge of our seats.',
        'Community Growth: A surge in new members and fan engagement across all teams.',
        'Fair Play: A season marked by sportsmanship and memorable plays.',
      ],
      author:'League Administration',
    },
  ]

  return (
    <div className="min-h-screen bg-maroon">
      <Header />
      <main className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
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
        <section className="md:col-span-2">
          <NewsFeed updates={newsUpdates} />
        </section>
      </main>
    </div>
  )
}
