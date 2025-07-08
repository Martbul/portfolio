
import React, { useEffect, useState } from "react";

interface CommitMap {
  [date: string]: number;
}

// Helpers for colors based on commit count
const getColor = (count: number) => {
  if (count === 0) return "bg-zinc-200 dark:bg-zinc-800";
  if (count < 3) return "bg-green-200";
  if (count < 6) return "bg-green-400";
  if (count < 9) return "bg-green-600";
  return "bg-green-800";
};

const generateDays = () => {
  const days: { date: string; count: number }[] = [];
  const today = new Date();
  for (let i = 0; i < 365; i++) {
    const day = new Date();
    day.setDate(today.getDate() - i);
    const key = day.toISOString().slice(0, 10);
    days.unshift({ date: key, count: 0 }); // default 0 commits
  }
  return days;
};

export const GitHubActivity: React.FC = () => {
  const [data, setData] = useState<{ date: string; count: number }[]>([]);

  useEffect(() => {
    async function fetchCommits() {
      try {
        const response = await fetch(
          `https://api.github.com/search/commits?q=author:martbul&per_page=100`,
          {
            headers: {
              Accept: "application/vnd.github.cloak-preview",
            },
          }
        );

        const result = await response.json();
        const commits = result.items;

        const map: CommitMap = {};

        for (const commit of commits) {
          const date = commit.commit.author.date.slice(0, 10);
          map[date] = (map[date] || 0) + 1;
        }

        const fullYear = generateDays().map((day) => ({
          date: day.date,
          count: map[day.date] || 0,
        }));

        setData(fullYear);
      } catch (e) {
        console.error("Failed to fetch commits", e);
      }
    }

    fetchCommits();
  }, []);

  // Group data by week
  const weeks: { date: string; count: number }[][] = [];
  for (let i = 0; i < data.length; i += 7) {
    weeks.push(data.slice(i, i + 7));
  }

  return (
    
    <div className="p-6 space-y-6">
      {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <div>
                        {githubStats.loading ? "---" : githubStats.totalCommits}
                      </div>
                      <div className="text-zinc-500">Total Commits</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold">
                        {githubStats.loading ? "---" : githubStats.activeDays}
                      </div>
                      <div className="text-zinc-500">Active Days</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold">
                        {githubStats.loading ? "---" : githubStats.bestDay}
                      </div>
                      <div className="text-zinc-500">Best Day</div>
                    </div>
                  </div> */}
      <h3 className="text-xl font-mono text-zinc-700 dark:text-zinc-300">
        GitHub Contributions (Past Year)
      </h3>

      {/* Stats */}
      <div className="flex flex-wrap gap-6 text-center">
        <div>
          <div className="text-2xl font-bold text-green-600 dark:text-green-400">
            {data.reduce((sum, d) => sum + d.count, 0)}
          </div>
          <div className="text-3xl font-bold">

            Total Commits
          </div>
        </div>
        <div>
          <div className="text-2xl font-bold text-green-600 dark:text-green-400">
            {
              new Set(
                data.filter((d) => d.count > 0).map((d) => d.date.slice(0, 10))
              ).size
            }
          </div>
          <div className="text-sm uppercase text-zinc-500 dark:text-zinc-400 font-mono">
            Active Days
          </div>
        </div>
        <div>
          <div className="text-2xl font-bold text-green-600 dark:text-green-400">
            {
              [
                ...new Set(
                  data.filter((d) => d.count > 0).map((d) => d.date.slice(0, 4))
                ),
              ].length
            }
          </div>
          <div className="text-sm uppercase text-zinc-500 dark:text-zinc-400 font-mono">
            Years of Coding
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <div className="flex gap-1">
          {weeks.map((week, i) => (
            <div key={i} className="flex flex-col gap-1">
              {week.map((day) => (
                <div
                  key={day.date}
                  title={`${day.date}: ${day.count} commit(s)`}
                  className={`w-3 h-3 rounded-sm ${getColor(day.count)}`}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
