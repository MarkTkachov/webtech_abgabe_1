const map = L.map("map", {
    zoomSnap: 0.2,
    zoomDelta: 0.2,
    wheelPxPerZoomLevel: 140,
    maxBounds: [
        [52.359012, 9.715079],
        [52.348455, 9.733232],
    ],
}).setView([52.353573, 9.724193], 17);
const tileLayer = L.tileLayer(
    "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
    {
        maxZoom: 19,
        minZoom: 14,
        attribution: "© OpenStreetMap",
    }
).addTo(map);

class CenterControl extends L.Control {
    constructor(options) {
        super(options);
        this.options = options;
    }

    onAdd(map) {
        const container = document.createElement("div");
        container.className = "leaflet-bar leaflet-control leaflet-control-custom";
        const button = document.createElement("button");
        container.appendChild(button);
        // const container = L.DomUtil.create("div", "leaflet-bar");
        // const button = L.DomUtil.create("button", "", container);
        button.innerHTML = "Center";
        button.onclick = () => {
            map.setView([52.353573, 9.724193], 17);
        };
        return container;
    }
}

new CenterControl({
    position: "topright",
}).addTo(map);



const APolygon = L.polygon([
    [52.354514, 9.723147],
    [52.354497, 9.723332],
    [52.35445, 9.723324],
    [52.354412, 9.723694],
    [52.354071, 9.723608],
    [52.354101, 9.723289],
    [52.354024, 9.723271],
    [52.354109, 9.722369],
    [52.354278, 9.72241],
    [52.354212, 9.723115],
    [52.354279, 9.723139],
    [52.354284, 9.723083],
]).addTo(map);
APolygon.bindPopup(
    renderPopupContent({
        title: "1A: Hauptgebäude",
        description: "Das Hauptgebäude am Campus Linden",
        photoSrc:
            "https://cloudfront-eu-central-1.images.arcpublishing.com/madsack/KEHBM5U7OJFEDAZ764TATPU3NE.jpg",
    })
);

const BPolygon = L.polygon([
    [52.354737, 9.723861],
    [52.35472, 9.724024],
    [52.354392, 9.723941],
    [52.35435, 9.724386],
    [52.354682, 9.724472],
    [52.354666, 9.724638],
    [52.354335, 9.724555],
    [52.354291, 9.725009],
    [52.354623, 9.725097],
    [52.354607, 9.725261],
    [52.354229, 9.725167],
    [52.354237, 9.725057],
    [52.35406, 9.725014],
    [52.354078, 9.724848],
    [52.354194, 9.724877],
    [52.354219, 9.724617],
    [52.354104, 9.72459],
    [52.354117, 9.724427],
    [52.354234, 9.724461],
    [52.354258, 9.724209],
    [52.35414, 9.72418],
    [52.354155, 9.724011],
    [52.354273, 9.72404],
    [52.354296, 9.723788],
    [52.354139, 9.723751],
    [52.35415, 9.723633],
    [52.354414, 9.723702],
    [52.354407, 9.723777],
]).addTo(map);
BPolygon.bindPopup(
    renderPopupContent({
        title: "1B: Das große Ding 2",
        description: "Hochschule Hannover am Campus Linden",
        photoSrc:
            "https://lh3.googleusercontent.com/p/AF1QipPbV4s8w0l5psWHi-omcYW0Bczh8ZRv-i2DVTEu=w408-h306-k-no",
    })
);

const CPolygon = L.polygon([
    [52.35443, 9.725507],
    [52.354419, 9.725631],
    [52.353985, 9.725524],
    [52.354008, 9.725247],
    [52.354361, 9.725341],
    [52.35435, 9.725486],
]).addTo(map);
CPolygon.bindPopup(
    renderPopupContent({
        title: "1C: ITServiceDesk",
        description: "ITServiceDesk am Campus Linden",
        photoSrc:
            "https://lh3.googleusercontent.com/p/AF1QipPbV4s8w0l5psWHi-omcYW0Bczh8ZRv-i2DVTEu=w408-h306-k-no",
    })
);

const DPolygon = L.polygon([
    [52.354006, 9.72565],
    [52.353983, 9.725891],
    [52.353865, 9.725864],
    [52.35389, 9.725626],
]).addTo(map);
DPolygon.bindPopup(
    renderPopupContent({
        title: "1D: Institut für Energie und Klimaschutz der Hochschule Hannover",
        description: "Institut für Energie und Klimaschutz der Hochschule Hannover am Campus Linden",
        photoSrc:
            "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=_uMa8qoncmIceP2mal6lJg&cb_client=search.gws-prod.gps&w=408&h=240&yaw=290.74298&pitch=0&thumbfov=100",
    })
);

const EPolygon = L.polygon([
    [52.354153, 9.724014],
    [52.354139, 9.724177],
    [52.354101, 9.724172],
    [52.354081, 9.724421],
    [52.354114, 9.724427],
    [52.354098, 9.72459],
    [52.354066, 9.724585],
    [52.35404, 9.724837],
    [52.354073, 9.724848],
    [52.354058, 9.725009],
    [52.354029, 9.725006],
    [52.353971, 9.725639],
    [52.353718, 9.72555],
    [52.353734, 9.725392],
    [52.353886, 9.725432],
    [52.35389, 9.725368],
    [52.35377, 9.725341],
    [52.353906, 9.723855],
    [52.353957, 9.723871],
    [52.353971, 9.72371],
    [52.353598, 9.723619],
    [52.353588, 9.72371],
    [52.353505, 9.723686],
    [52.353513, 9.723563],
    [52.353413, 9.723536],
    [52.353431, 9.723346],
    [52.353804, 9.723442],
    [52.353796, 9.723547],
    [52.35415, 9.723633],
    [52.354117, 9.724],
]).addTo(map);
EPolygon.bindPopup(
    renderPopupContent({
        title: "1E: Das große Ding",
        description: "Das große Ding am Campus Linden",
        photoSrc:
            "https://www.ladplus.de/fileadmin/images/projekte/02_Kultur_und_Bildung_Hochschule_Hannover_Campus_Linden/01-HSH-Campus-Linden-IMG_9919.jpg",
    })
);

const FPolygon = L.polygon([
    [52.353457, 9.725569],
    [52.353249, 9.725513],
    [52.353218, 9.725859],
    [52.353426, 9.725907],
]).addTo(map);
FPolygon.bindPopup(
    renderPopupContent({
        title: "1F: Tschernobyl",
        description: "Das Atomkraftwerk am Campus Linden",
        photoSrc:
            "https://lh3.googleusercontent.com/p/AF1QipNQKItGL1u0UebEHwGGq2Z8YKGwgQ1WJYZDlCdd=w426-h240-k-no",
    })
);

const GPolygon = L.polygon([
    [52.353319, 9.725054],
    [52.353247, 9.725035],
    [52.353249, 9.724987],
    [52.353157, 9.724968],
    [52.353152, 9.725014],
    [52.352949, 9.724963],
    [52.352931, 9.72514],
    [52.353303, 9.725231],
]).addTo(map);
GPolygon.bindPopup(
    renderPopupContent({
        title: "1G: Keine Ahnung",
        description: "Hier ist etwas",
        photoSrc:
            "bilder/1g.png",
    })
);

const HPolygon = L.polygon([
    [52.353418, 9.724097],
    [52.352951, 9.723976],
    [52.352939, 9.724064],
    [52.352897, 9.724059],
    [52.352844, 9.724638],
    [52.35289, 9.724649],
    [52.35288, 9.724743],
    [52.353349, 9.724858],
    [52.353382, 9.724523],
    [52.353406, 9.724518],
    [52.353413, 9.724443],
    [52.35339, 9.724424],
]).addTo(map);
HPolygon.bindPopup(
    renderPopupContent({
        title: "1H: Die IT-Höhle",
        description: "Die IT-Höhle am Campus Linden",
        photoSrc:
            "https://f4.hs-hannover.de/fileadmin/HsH/Fakultaet_IV/Aktuelles/1H-Haupteingang-Mensaeingang.jpg",
    })
);

const IPolygon = L.polygon([
    [52.35337, 9.723423],
    [52.352862, 9.723313],
    [52.352816, 9.723799],
    [52.352905, 9.723818],
    [52.352915, 9.723756],
    [52.353075, 9.723796],
    [52.353085, 9.723732],
    [52.353329, 9.723802],
]).addTo(map);
IPolygon.bindPopup(
    renderPopupContent({
        title: "1I: Mensa",
        description: "Die Mensa am Campus Linden",
        photoSrc:
            "https://at.gruender.de/wp-content/uploads/2023/04/Pizza-Hut-Gruender-scaled.jpeg",
    })
);

const JPolygon = L.polygon([
    [52.353385, 9.722525],
    [52.352972, 9.72242],
    [52.352908, 9.72312],
    [52.353319, 9.723225],
]).addTo(map);
JPolygon.bindPopup(
    renderPopupContent({
        title: "1J: Studierendenzentrum",
        description: "Das Studierendenzentrum am Campus Linden",
        photoSrc:
            "https://nexster.de/wp-content/uploads/bild-von-ios-4-400x299.jpg",
    })
);

const KPolygon = L.polygon([
    [52.353552, 9.72242],
    [52.35389, 9.722517],
    [52.353839, 9.723049],
    [52.3535, 9.722965],
]).addTo(map);
KPolygon.bindPopup(
    renderPopupContent({
        title: "1K: Bibliothek",
        description: "Die Bibliothek am Campus Linden",
        photoSrc:
            "https://upload.wikimedia.org/wikipedia/commons/e/e7/Great_Pyramid_of_Giza_-_Pyramid_of_Khufu.jpg",
    })
);

function renderPopupContent({ title, description, photoSrc }) {
    return `
        <div class="popup-content">
            <h2>${title}</h2>
            <div>
                <p>${description}</p>
                <img style="width: 100px; height: 100px" src="${photoSrc}" alt="${title}">
            </div>
        </div>
    `;
}
