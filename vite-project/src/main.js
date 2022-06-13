

initDrawUtils();
initComponentRegistry();
initItemRegistry();
initMetaBuildingRegistry();
initGameModeRegistry();
initGameSpeedRegistry();

let app = null;

function bootApp() {
    logger.log("Page Loaded");
    app = new Application();
    app.boot();
}

window.addEventListener("load", bootApp);