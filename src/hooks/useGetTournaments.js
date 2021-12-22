import { useEffect, useState } from "react";
import { tournamentService } from "../services/tournaments";

function useGetTournaments() {

  const [tournaments, setTournamnets] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setIsLoading(true);

    const result = await tournamentService.getAll();

    setTournamnets(result);
    setIsLoading(false);
  }

  return { tournaments, isLoading };
}

export default useGetTournaments;
