# Python Challenge Editor

![image](https://github.com/user-attachments/assets/561968ce-c68b-4e30-a132-c296e9828186)

[Link](https://kooroshoo.github.io/Python-Editor/)

**Summary of Technologies in Use:**

- Monaco Editor: Provides the frontend code editor interface.
- Pyodide: Enables Python execution in the browser via WebAssembly.
- JavaScript: Manages the editor's interactions and executes code in the browser.
- HTML/CSS: Provides structure and styling for the app.


**limitations:**

- Native Python Threads: No support for multithreading or multiprocessing.
- System-level Libraries: No access to os, sys, or hardware-related libraries.
- C Extensions: Limited support for C-extension-based libraries.
- Large-Scale Computations: Not ideal for heavy computations due to browser resource limits.
- Network Access: No raw socket connections or full network access.
- GUI Libraries: No support for Tkinter, PyQt, etc.
- Low-level Libraries: No access to ctypes, socket, futures, etc.
- Interactive REPL: No real-time Python REPL or terminal-like environment.
- Graphics/Visualization: Limited support for advanced graphical libraries (matplotlib, pygame).
- Real-time APIs: Limited or no support for WebSockets, MQTT, etc.
- asyncio Event Loop: Issues with Python’s asyncio in a JavaScript async environment.
