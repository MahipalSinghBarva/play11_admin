import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSingleContest } from "../../store/slice/contestSlice";
import { Card, Badge, Button } from "flowbite-react";
import { Link } from "react-router-dom";

const ViewContest = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { contest } = useSelector((state) => state.contest);

  useEffect(() => {
    dispatch(getSingleContest(id));
  }, [dispatch, id]);

  return (
    <div className="max-w-4xl mx-auto mt-6">
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold mb-4 text-white">Contest Details</h2>
        <Link to="/contest">
          <Button>Back</Button>
        </Link>
      </div>
      <Card className="bg-gray-800 text-white">
        <div className="grid grid-cols-2 gap-4">
          <p>
            <strong>User ID:</strong> {contest.user}
          </p>
          <p>
            <strong>Match Title:</strong> {contest.matchTitle}
          </p>
          <p>
            <strong>Match ID:</strong> {contest.matchId}
          </p>
          <p>
            <strong>Entry Fee:</strong> ₹{contest.entryFee}
          </p>
          <p>
            <strong>Prize Pool:</strong> ₹{contest.prizePool}
          </p>
          <p>
            <strong>Fantasy Points:</strong> {contest.fantasyPoints}
          </p>
          <p>
            <strong>Winner:</strong>{" "}
            <span className={contest.isWin ? "text-green-400" : "text-red-400"}>
              {contest.isWin ? "Yes" : "No"}
            </span>
          </p>
        </div>

        <div className="mt-4">
          <h3 className="text-lg font-semibold">Selected Players:</h3>
          {Array.isArray(contest.selectedPlayers) &&
          contest.selectedPlayers.length > 0 ? (
            <div className="flex flex-wrap gap-2 mt-2">
              {contest.selectedPlayers.map((player, index) => (
                <Badge key={index} color="info">
                  {player}
                </Badge>
              ))}
            </div>
          ) : (
            <p className="text-gray-400 mt-1">No players selected.</p>
          )}
        </div>
      </Card>
    </div>
  );
};

export default ViewContest;
