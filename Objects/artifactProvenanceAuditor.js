// 1. The Collection: A dictionary-style object holding nested artifact data
const collection = {
  101: {
    title: "Golden Mask",
    category: "Ceremonial",
    curator: {
      id: 201,
      name: "Earl Sinclair", // Nested object property
    },
    locations: [
      { gallery: "Hall A", year: 2020 },
      { gallery: "Hall C", year: 2024 },
    ],
    tags: ["gold", "egypt"],
    onDisplay: true,
  },
  102: {
    title: "Bronze Tablet",
    category: "Inscription",
    curator: {
      id: 202,
      name: "Robert Sinclair",
    },
    locations: [{ gallery: "Archive Wing", year: 2019 }],
    tags: ["bronze", "writing"],
    onDisplay: false,
  },
};

// Reading basic and nested properties
console.log("--- Initial Reads ---");
console.log(collection[101].title);
console.log(collection[101].curator.name);

// 2. Safely retrieve data with fallback logic
function getArtifactTitle(id) {
  const artifact = collection[id];
  // Ternary operator: returns title if artifact exists, else error message
  return artifact ? artifact.title : "Artifact not found";
}
console.log(getArtifactTitle(102));

// 3. Array Manipulation: Add a tag only if it doesn't already exist
function addTag(id, tag) {
  const artifact = collection[id];
  if (artifact && !artifact.tags.includes(tag)) {
    artifact.tags.push(tag);
  }
}
addTag(101, "royal");
console.log("\n--- Updated Tags ---");
console.log(collection[101].tags);

// 4. Nested Arrays: Push a new location object into the locations array
function moveArtifact(id, gallery, year) {
  const artifact = collection[id];
  if (artifact) {
    artifact.locations.push({ gallery, year });
  }
}
moveArtifact(102, "Hall B", 2026);
console.log("\n--- Updated Locations ---");
console.log(collection[102].locations);

// 5. Boolean Toggling: Flip a true/false value
function toggleDisplayStatus(id) {
  const artifact = collection[id];
  if (artifact) {
    // Sets the boolean to the opposite of its current state
    artifact.onDisplay = !artifact.onDisplay;
  }
}
console.log("\n--- Display Status Toggle ---");
console.log(`Before toggle: ${collection[102].onDisplay}`);
toggleDisplayStatus(102);
console.log(`After toggle: ${collection[102].onDisplay}`);

// 6. Nested Object Update: Change a property inside a child object
function updateCurator(id, name) {
  const artifact = collection[id];
  if (artifact) {
    artifact.curator.name = name;
  }
}
updateCurator(101, "Fran Sinclair");
console.log("\n--- Updated Curator ---");
console.log(collection[101].curator.name);

// 7. Template Literals: Build a formatted summary string
function buildSummary(id) {
  const artifact = collection[id];
  if (!artifact) {
    return "Artifact not found";
  }
  
  // Grab the last item in the locations array
  const currentLocation = artifact.locations[artifact.locations.length - 1];
  
  return `\n--- Artifact Summary ---
Title: ${artifact.title}
Category: ${artifact.category}
Curator: ${artifact.curator.name}
Current Gallery: ${currentLocation.gallery}
On Display: ${artifact.onDisplay}`;
}
console.log(buildSummary(101));
