# How to run ollama models on colab

(1) `sudo apt-get install zstd`
(2) `! curl -fsSL https://ollama.com/install.sh | sh`

## Installing ngrok :-
(3) Go to the ngrok documentation & select the linux & copy the code.
    eg: `curl -sSL https://ngrok-agent.s3.amazonaws.com/ngrok.asc ...`

(4) `ngrok --version`

## Running ollama server
=> Run the server so it keeps running in the bg. & don't block the terminal.

(5) `nohup ollama serve > ollama.log 2>&1 &`
    * `nohup` -> ensures bg running
    * `ollama serve` -> starting ollama
    * `> ollama.log` -> Redirects all the logs in the ollama.log file.
    * `2>&1 &` -> ensures error are also in that same file.

-> Now you can see ollama running `ps aux`.

## Pulling ollama model :-
(6) `ollama pull qwen2.5-coder:3b`
    
    `ollama list`
    
    `ollama run <model-name>` (the terminal will be blocked & you need to chat from terminal only.)
    or
    `ollama run <model> "question"`

*(Crossed out section)*
~~(7) diff between ollama serve vs ollama run <model>~~
~~ollama serve => persistent API server~~
~~=> allows you to interact with multiple models through HTTP~~
~~ollama run model => single model for one time inference.~~
~~=> doesn't require a server to be running.~~

(7) Download Ngrok
    => Get all commands from docs of ngrok
