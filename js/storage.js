// ==============================
// STORAGE MODULE
// ==============================

const STORAGE_KEY = "giorders_pro_v2";

function loadData() {
    const raw = localStorage.getItem(STORAGE_KEY);

    if (!raw) {
        return {
            settings: {
                pin: "1926",
                dark: false
            },
            events: []
        };
    }

    return JSON.parse(raw);
}

function saveData(data) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}
