import css from "./VoteStats.module.css";
import type { Votes } from "../../types/votes";

interface VoteStatsProps {
  votes: Votes;
  totalVotes: number;
  positiveRate: number;
}

export default function VoteStats({
  votes,
  totalVotes,
  positiveRate,
}: VoteStatsProps) {
  return (
    <ul className={css.stats}>
      <li>Good: {votes.good}</li>
      <li>Neutral: {votes.neutral}</li>
      <li>Bad: {votes.bad}</li>
      <li>Total: {totalVotes}</li>
      <li>Positive: {positiveRate}%</li>
    </ul>
  );
}
