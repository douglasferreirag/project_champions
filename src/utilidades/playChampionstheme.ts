import { exec } from "child_process";
import path from "path";

export const playChampionsTheme = async (): Promise<void> => {
  return new Promise((resolve, reject) => {
    try {
      const audioPath = path.resolve(process.cwd(), "./src/data/UEFA Champions League Legacy Anthem.mp3");

      exec(`start "" "${audioPath}"`, (err) => {
        if (err) {
          console.error("❌ Erro ao tocar o áudio:", err);
          return reject(err);
        }

        console.log("🎶 Tema da Champions tocando...");
        resolve();
      });
    } catch (error) {
      console.error("❌ Falha inesperada:", error);
      reject(error);
    }
  });
};