# How to assign Event Types in TS

* **(1) Mouse Event :-**
  * `e: React.MouseEvent<HTMLDivElement>`
  * `e: React.MouseEvent<HTMLButtonElement>`
* **(2) Keyboard Event :-**
  * `e: React.KeyboardEvent<HTMLInputElement>`
* **(3) Change Event :-**
  * `e: React.ChangeEvent<HTMLInputElement>`
  * `e: React.ChangeEvent<HTMLTextAreaElement>`
  * `e: React.ChangeEvent<HTMLSelectElement>`
* **(4) Form Event :-**
  * `e: React.FormEvent<HTMLFormElement>`

* `=>` `e: React.ChangeEvent<HTMLInputElement>`
  * `↳` means `e` is an event object of type changeEvent coming from an `HTMLInputElement`.

* **MouseEvent:** `div`, `button`, etc.
* **ChangeEvent:** input, select, textarea, etc.

* **event.preventDefault()** $ightarrow$ stops browser's default behavior.
  * *eg: click $ightarrow$ goes to another page.*
  * *eg: submit $ightarrow$ reloads the page.*
* **event.stopPropagation()** $ightarrow$ stops the event from bubbling up to parent element.

* **event.currentTarget vs event.target:**
  * *eg: You click a button inside a div, but you don't want the div's onClick to also fire:*
    * `event.currentTarget` = The element you actually clicked on.
    * `event.target` = Clicked on.

* **For Keyboard :-**
  * `event.key` $ightarrow$ which key was pressed.
  * `event.code` $ightarrow$ physical key.

* **For Mouse :-**
  * `event.clientX/Y` $ightarrow$ cursor position.
  * `event.button` $ightarrow$ which mouse button was clicked (right/left).
