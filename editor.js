// Load Monaco Editor and Pyodide
require.config({ paths: { 'vs': 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.40.0/min/vs' } });
require(['vs/editor/editor.main'], async function () {
    // Initialize Monaco Editor
    const editor = monaco.editor.create(document.getElementById('editor'), {
        value: `# Example Python Code\nfor i in range(1, 6):\n    print(i)`,  // Default example
        language: 'python',
        theme: 'vs-dark',
        automaticLayout: true
    });

    // Load Pyodide
    const pyodide = await loadPyodide();
    console.log('Pyodide loaded!');

    // Expose the appendToConsole function globally for Pyodide to access
    globalThis.appendToConsole = function(message, isError = false) {
        const consoleDiv = document.getElementById('console');
        const messageElement = document.createElement('div');
        messageElement.textContent = message;
        messageElement.style.color = isError ? 'red' : 'lime';
        consoleDiv.appendChild(messageElement);
        consoleDiv.scrollTop = consoleDiv.scrollHeight; // Auto-scroll to the bottom
    };

    // Redirect Python print() to the browser console
    pyodide.runPython(`
        import sys
        class ConsoleOutput:
            def __init__(self):
                self.buffer = ''
            def write(self, message):
                from js import appendToConsole
                if message.strip():
                    appendToConsole(message, False)
            def flush(self):
                pass
        sys.stdout = ConsoleOutput()
        sys.stderr = ConsoleOutput()
    `);

    // Run Code Button
    document.getElementById('run-code').addEventListener('click', async () => {
        const code = editor.getValue();

        // Clear the console
        const consoleDiv = document.getElementById('console');
        consoleDiv.innerHTML = '';

        // Measure execution time
        const startTime = performance.now();
        try {
            // Execute the Python code
            await pyodide.runPythonAsync(code);
        } catch (error) {
            globalThis.appendToConsole(`Error: ${error}`, true);
        }
        const endTime = performance.now();
        const executionTime = (endTime - startTime).toFixed(4); // Time in milliseconds

        // Display the execution time in the console
        globalThis.appendToConsole(`===================================`, false);
        globalThis.appendToConsole(`Execution Time: ${executionTime} ms`, false);
    });
});
