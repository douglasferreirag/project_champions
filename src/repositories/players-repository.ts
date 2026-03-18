import { PlayerModel } from "../models/player-model";
import { StatisticsModel } from "../models/statistics-model";



const database: PlayerModel[] = [
  {
    "id": 1,
    "name": "Vinicius Junior",
    "club": "Real Madrid",
    "nationality": "Brazil",
    "position": "Forward",
    "statistics": {
      "Overall": 92,
      "Pace": 95,
      "Shooting": 89,
      "Passing": 84,
      "Dribbling": 94,
      "Defending": 35,
      "Physicality": 80
    }
  },
  {
    "id": 2,
    "name": "Erling Haaland",
    "club": "Manchester City",
    "nationality": "Norway",
    "position": "Striker",
    "statistics": {
      "Overall": 93,
      "Pace": 89,
      "Shooting": 96,
      "Passing": 78,
      "Dribbling": 86,
      "Defending": 45,
      "Physicality": 93
    }
  },
  {
    "id": 3,
    "name": "Jamal Musiala",
    "club": "Bayern Munich",
    "nationality": "Germany",
    "position": "Midfielder",
    "statistics": {
      "Overall": 89,
      "Pace": 88,
      "Shooting": 85,
      "Passing": 88,
      "Dribbling": 92,
      "Defending": 60,
      "Physicality": 72
    }
  },
  {
    "id": 4,
    "name": "Kylian Mbappe",
    "club": "Paris Saint-Germain",
    "nationality": "France",
    "position": "Forward",
    "statistics": {
      "Overall": 94,
      "Pace": 97,
      "Shooting": 92,
      "Passing": 83,
      "Dribbling": 93,
      "Defending": 36,
      "Physicality": 78
    }
  },
  {
    "id": 5,
    "name": "Pedri",
    "club": "Barcelona",
    "nationality": "Spain",
    "position": "Midfielder",
    "statistics": {
      "Overall": 88,
      "Pace": 80,
      "Shooting": 79,
      "Passing": 92,
      "Dribbling": 90,
      "Defending": 70,
      "Physicality": 72
    }
  },
  {
    "id": 6,
    "name": "Lautaro Martinez",
    "club": "Inter Milan",
    "nationality": "Argentina",
    "position": "Forward",
    "statistics": {
      "Overall": 90,
      "Pace": 85,
      "Shooting": 91,
      "Passing": 82,
      "Dribbling": 87,
      "Defending": 42,
      "Physicality": 84
    }
  }
]

export const findAllPlayers = async () : Promise<PlayerModel[]> => {

    return database;   
    
}

export const findPlayerById = async (id: number) : Promise<PlayerModel | undefined > => {

    return database.find(player => player.id === id);

   

}

export const insertPlayer = async (player: PlayerModel) : Promise<void> => {

     database.push(player);
  
}

export const deleteOnePlayer = async (id: number) : Promise<void> => {

    const index = database.findIndex(p => p.id === id);

    if (index !== -1) {
        database.splice(index, 1);
    }

    

}

export const findAndModifyPlayer = async (id: number, statistics: StatisticsModel) : Promise<PlayerModel> => {

    // Find player

    const playerIndex = database.findIndex(player => player.id === id);


    if(playerIndex !== -1) {

        database[playerIndex].statistics = statistics;

    }

    return database[playerIndex];

}