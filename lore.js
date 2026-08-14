const ARCHIVE_LORE = {
    "raven": "The Nine: Spooky-cute, soft-gothic lore. A coalition of plush entities guarding the threshold between waking life and the sleep realm.",
    "synapse": "Synapse Sector 08: Futuristic industrial-pop & cyberpunk. Neon-lit alleyways where rogue data-runners interface with forgotten terminal nodes.",
    "veil": "The Lunar Veil: Deep, complex gothic-metal fantasy. Ancient pacts forged under moonless skies, echoing with the clash of silver and shadow.",
    "ghost": "Rail-Runner's Ghost: Spectral engineers maintaining the ethereal tracks that connect fragmented dimensions of The Negative.",
    "sentinel": "The Sentinel: An autonomous watch-program stationed at the core terminal, monitoring MARROW_HEAT and ensuring INTERFACE_PARITY remains absolute.",
    "architect": "The Architect: The primary creator and conduit for translating visions from 'The Negative' into physical realities."
};

function searchLore(keyword) {
    if (!keyword) return null;
    const lowerKeyword = keyword.toLowerCase();

    // Check for direct matches first
    if (ARCHIVE_LORE[lowerKeyword]) {
        return ARCHIVE_LORE[lowerKeyword];
    }

    // Check for partial matches in the keys
    for (const key in ARCHIVE_LORE) {
        if (key.includes(lowerKeyword) || lowerKeyword.includes(key)) {
            return ARCHIVE_LORE[key];
        }
    }

    // Check for text inside the values
    for (const key in ARCHIVE_LORE) {
        if (ARCHIVE_LORE[key].toLowerCase().includes(lowerKeyword)) {
            return ARCHIVE_LORE[key];
        }
    }

    return null;
}

// Export for node (Jest) and browser
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { ARCHIVE_LORE, searchLore };
}
