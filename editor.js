// Load Monaco Editor and Pyodide
require.config({ paths: { 'vs': 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.40.0/min/vs' } });
require(['vs/editor/editor.main'], async function () {
    // Initialize Monaco Editor
    const editor = monaco.editor.create(document.getElementById('editor'), {
        value: `# Your code here`,
        language: 'python',
        theme: 'vs-dark',
        automaticLayout: true
    });

    // Load Pyodide
    const pyodide = await loadPyodide();
    console.log('Pyodide loaded!');

    // Expose the appendToConsole function globally for Pyodide to access
    globalThis.appendToConsole = function (message, isError = false) {
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

    // Load Question Logic with Category and Difficulty
    document.getElementById('load-question').addEventListener('click', () => {
        const selectedCategory = document.getElementById('category').value; // Get the selected category
        const selectedDifficulty = document.getElementById('difficulty').value; // Get the selected difficulty

        // Filter questions by category and difficulty
        const filteredQuestions = questions.filter(q => 
            q.category === selectedCategory && q.difficulty === selectedDifficulty
        );

        if (filteredQuestions.length > 0) {
            const question = filteredQuestions[Math.floor(Math.random() * filteredQuestions.length)];
            
            // Modify the editor value to include the hint
            editor.setValue(`# ${question.title}\n# ${question.description}\n# Example:\n${question.example}\n\n${question.boilerplate}\n\n# Hint: ${question.hint}`);
        } else {
            alert('No questions available for the selected category and difficulty.');
        }
    });

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
