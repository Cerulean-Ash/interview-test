import React from "react";

const LeagueTable = ({ winGameHistory, playerName }) => {
  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Game</th>
            <th>Winner</th>
            <th>Symbol</th>
          </tr>
        </thead>
        <tbody>
          {winGameHistory.map((winner, i) => {
            return (
              <tr key={i + 1}>
                <td data-label="Game">{i + 1}</td>
                <td data-label="Winner">
                  {winner === "X" ? playerName.player1 : playerName.player2}
                </td>
                <td data-label="Symbol">{winner}</td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <td>Total</td>
            <td>{winGameHistory.filter((e) => e == "X").length}</td>
            <td>{winGameHistory.filter((e) => e == "O").length}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default LeagueTable;
