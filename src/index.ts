import joplin from "api";
import * as dis from "discord-rpc";

const clientId = "993387238928953404";
dis.register(clientId);
const rpc = new dis.Client({ transport: "ipc" });
var startTimestamp: Date;

async function setActivity() {
    var currentNote = await joplin.workspace.selectedNote();
    var currentNotebook = await joplin.workspace.selectedFolder();
    rpc.setActivity({
        details: `Writing notes in ${currentNotebook.title}`,
        state: `Editing ${currentNote.title}`,
        startTimestamp,
        largeImageKey: "joplin_icon",
        largeImageText: "Joplin",
        instance: false,
    });
}

rpc.on("ready", () => {
    setActivity();
    setInterval(() => {
        setActivity();
    }, 15e3);
});

joplin.plugins.register({
    onStart: async function () {
        startTimestamp = new Date();
        rpc.login({ clientId }).catch(console.error);
        await joplin.workspace.onNoteSelectionChange(setActivity);
    },
});
