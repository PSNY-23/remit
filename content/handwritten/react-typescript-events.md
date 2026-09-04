# How to assign Event Types in TypeScript (React)

* **(1) Mouse Events :-**
  * `React.MouseEvent<HTMLDivElement>`
  * `React.MouseEvent<HTMLButtonElement>`
* **(2) Keyboard Events :-**
  * `React.KeyboardEvent<HTMLInputElement>`
* **(3) Change Events :-**
  * `React.ChangeEvent<HTMLInputElement>`
  * `React.ChangeEvent<HTMLTextAreaElement>`
  * `React.ChangeEvent<HTMLSelectElement>`
* **(4) Form Events :-**
  * `React.FormEvent<HTMLFormElement>`

* `e: React.ChangeEvent<HTMLInputElement>` $ightarrow$ `e` is an event object of type changeEvent coming from an `HTMLInputElement`.

* **MouseEvent:** `div`, `button`, etc.
* **ChangeEvent:** input, select, textarea, etc.

* **event.preventDefault()** $ightarrow$ stops browser's default behavior.
  * *eg: click $ightarrow$ goes to another page.*
  * *eg: submit $ightarrow$ reloads the page.*
* **event.stopPropagation()** $ightarrow$ stops the event from bubbling up to parent element.

* **Example Use cases:**
  * *e.g., You click a button inside a div, but you don't want the div's onClick to also fire:*
    `event.currentTarget` vs `event.target`
    * `currentTarget` = The element you actually clicked on / attached to.
  * **For Keyboard:**
    * `event.key` $ightarrow$ which key was pressed.
    * `event.code` $ightarrow$ physical key.
  * **For Mouse:**
    * `event.clientX/Y` $ightarrow$ cursor position.
    * `event.button` $ightarrow$ which mouse button was clicked (right/left).
