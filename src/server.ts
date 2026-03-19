import createApp from "./app";
import { playChampionsTheme } from "./utilidades/playChampionstheme";



const app = createApp();

const port = process.env.PORT;

app.listen(port, () => {
    console.log(`🔥Server is running on port http://localhost: ${port}`);

    playChampionsTheme().catch(() => {

        console.log("⚠️ Não foi possível tocar o áudio");
        
    });

    
});


