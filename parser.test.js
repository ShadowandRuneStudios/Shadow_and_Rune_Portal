const { parseCommand, COMMANDS } = require('./parser');

describe('parseCommand', () => {
    test('returns clear action for "clear"', () => {
        const result = parseCommand('clear');
        expect(result).toEqual({ action: 'clear' });
    });

    test('returns clear action for "CLEAR" (case insensitive)', () => {
        const result = parseCommand('CLEAR');
        expect(result).toEqual({ action: 'clear' });
    });

    test('returns print action with help text for "help"', () => {
        const result = parseCommand('help');
        expect(result).toEqual({ action: 'print', output: COMMANDS['help'] });
    });

    test('returns print action with about text for "about"', () => {
        const result = parseCommand('about');
        expect(result).toEqual({ action: 'print', output: COMMANDS['about'] });
    });

    test('returns print action with archives text for "archives"', () => {
        const result = parseCommand('archives');
        expect(result).toEqual({ action: 'print', output: COMMANDS['archives'] });
    });

    test('returns print action with status text for "status"', () => {
        const result = parseCommand('status');
        expect(result).toEqual({ action: 'print', output: COMMANDS['status'] });
    });

    test('returns print action with ping text for "ping"', () => {
        const result = parseCommand('ping');
        expect(result).toEqual({ action: 'print', output: COMMANDS['ping'] });
    });

    test('returns not found message for unknown command', () => {
        const result = parseCommand('unknown_command');
        expect(result).toEqual({
            action: 'print',
            output: "Command not found: 'unknown_command'. Type 'help' for options.",
            className: 'accent-silver'
        });
    });

    test('returns none action for empty string', () => {
        const result = parseCommand('');
        expect(result).toEqual({ action: 'none' });
    });
});
