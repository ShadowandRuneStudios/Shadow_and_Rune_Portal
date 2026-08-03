document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('cmd-input');
    const output = document.getElementById('output');

    // Focus input on click
    document.body.addEventListener('click', () => input.focus());

    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            const rawCmd = input.value.trim();
            input.value = '';

            // Log command to history
            printLine(`<span class="accent-gold">SR-SYS_></span> ${rawCmd}`);

            const result = parseCommand(rawCmd);

            if (result.action === 'clear') {
                output.innerHTML = '';
            } else if (result.action === 'print') {
                printLine(result.output, result.className);
            }
        }
    });

    function printLine(text, className = '') {
        const line = document.createElement('div');
        line.className = className ? `history-line ${className}` : 'history-line';
        line.innerHTML = text;
        output.appendChild(line);
        window.scrollTo(0, document.body.scrollHeight);
    }
});
