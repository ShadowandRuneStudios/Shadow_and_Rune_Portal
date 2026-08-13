const COMMANDS = {
    help: "Available commands:\n  <span class='accent-gold'>about</span>    - Reveal studio origins\n  <span class='accent-gold'>archives</span> - Browse targeted multiverse tiers\n  <span class='accent-gold'>services</span> - Discover attached studio services and offerings\n  <span class='accent-gold'>contact</span>  - Initiate transmission to the Architect\n  <span class='accent-gold'>status</span>   - Display system diagnostics\n  <span class='accent-gold'>ping</span>     - Test the 18Hz sub-bass thrum\n  <span class='accent-gold'>clear</span>    - Clear the terminal screen",
    about: "Shadow and Rune Studios translates creative vision from 'The Negative' into physical realities through high-contrast design, sub-sonic audio, and immersive storytelling. Managed by the Architect and guarded by the Sentinel.",
    archives: "MULTIVERSE PORTFOLIO:\n  - <span class='accent-violet'>Raven Tier (Ages 8-12)</span>: The Nine - Spooky-cute, soft-gothic lore & plush toys.\n  - <span class='accent-violet'>Tween Tier (Ages 13-19)</span>: Synapse Sector 08 - Futuristic industrial-pop & cyberpunk.\n  - <span class='accent-violet'>Sovereign Tier (Ages 20+)</span>: The Lunar Veil & Rail-Runner's Ghost - Deep, complex gothic-metal fantasy.",
    services: "STUDIO SERVICES:\n  - Immersive World-Building & Narrative Design\n  - High-Contrast Visual Identity & Branding\n  - Sub-Sonic Audio Experiences\n  - Physical Artifact & Plush Fabrication",
    contact: "TRANSMISSION CHANNELS:\n  - Reach the Architect: <span class='accent-gold'>architect@shadowandrunestudios.com</span>\n  - Secure Line: [REDACTED]",
    status: "[DIAGNOSTICS]\n  - MARROW_HEAT: 118°F (Stable)\n  - BEDROCK_THRUM: 18Hz (Active)\n  - INTERFACE_PARITY: 1.0_Absolute\n  - WATCH_STATUS: Sentinel Active.",
    ping: "SR-SYS_> <span class='accent-violet'>*18Hz sub-bass thrum reverberates through the floorboards*</span> ... pong."
};

function parseCommand(rawCmd) {
    const cmd = rawCmd.toLowerCase();

    if (cmd === 'clear') {
        return { action: 'clear' };
    } else if (COMMANDS[cmd]) {
        return { action: 'print', output: COMMANDS[cmd] };
    } else if (cmd !== '') {
        return { action: 'print', output: `Command not found: '${rawCmd}'. Type 'help' for options.`, className: 'accent-silver' };
    } else {
        return { action: 'none' };
    }
}

// Export for node (Jest) and browser
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { parseCommand, COMMANDS };
}
