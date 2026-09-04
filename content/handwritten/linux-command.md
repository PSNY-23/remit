# Linux Commands :-

`pstree` (for tree-like output)

(1) `ps aux` (info about running Process)

(2) `top` (realtime - Process, CPU, memory)
    `htop` (Based on top of `top` for more feature)

(3) `lsof` => list open files & Process that are using them
    `lsof -i` => Shows all Network connection.
    -> But you can filter this.
       `lsof -i :80`
       `tcp`
       `udp`
       `tcp:8080`
       `udp:53`
       `@192.168.1.1~`

(4) `uptime` => Running time.

(5) `free -h` => shows amount of free / used RAM

(6) Kill a Process
    -> `ps aux` (Get PID) OR `ps aux | grep Python`
       *(-> Python वाले Process को ढूढने)*
    -> `kill <PID>`
    `kill -9 <PID>` (forcefully)

~~(scribbled)~~ See if ollama is intalled

(7) 
| | |
| :--- | :--- |
| `ollama list` | `ollama pull <model-name>` |
| `ollama help` | `ollama run <model-name> --Prompt "Your question"` |
| ~~ollama models~~ | ~~ollama status~~ |
| `ollama serve (--port 11434)` | `ollama stop` |
| `ollama run <model-name> --stream` | `ollama update` |
| `ollama ps` => list of running model | `ollama logs` |
| | `ollama rm <model-name>` *(delete crossed out, rm written above)* |
| | `ollama version` |
